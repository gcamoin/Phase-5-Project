import React, {useState, useEffect} from "react"
import GenreCard from "/home/gcamoin/phase-5-project/client/src/components/GenreCard.js"
import Header from "/home/gcamoin/phase-5-project/client/src/components/Header.js"
import Grid from '@mui/material/Grid';
import AddGenreForm from "/home/gcamoin/phase-5-project/client/src/components/AddGenreForm.js"

function GenreContainer(){
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then(setGenres);
    
    
      }, []);

     

    const genreList = genres?.map((genre) => (
        
        <GenreCard 
            key={genre.id}
            genre={genre}
        
        />
        
    ))

    function handleAddGenre(newGenre) {
        setGenres([...genres, newGenre])
    }



      return (
        <div className="genre-container" align="center">
            <Header/>
            <AddGenreForm handleAddGenre={handleAddGenre}/>
            <br></br>
            <Grid container xs={8}>
            {genreList}
            </Grid>
        </div>

      )
    

}

export default GenreContainer;