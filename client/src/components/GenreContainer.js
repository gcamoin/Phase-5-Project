import React, {useState, useEffect} from "react"
import GenreCard from "/home/gcamoin/phase-5-project/client/src/components/GenreCard.js"
import Header from "/home/gcamoin/phase-5-project/client/src/components/Header.js"

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



      return (
        <div className="genre-container">
            <Header/>
            {genreList}
        </div>

      )
    

}

export default GenreContainer;