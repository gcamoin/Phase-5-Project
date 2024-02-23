import React, {useState, useEffect, useContext} from "react"
import GenreCard from "/home/gcamoin/phase-5-project/client/src/components/GenreCard.js"
import Header from "/home/gcamoin/phase-5-project/client/src/components/Header.js"
import Grid from '@mui/material/Grid';
import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"


function GenreContainer(){
  const {genres, setGenres} = useContext(GenreContext) 
  
    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then(setGenres);
        // // if(genres){
        // //   setGenres(genres)
        // // }
    
      }, []);

  
    const genreList = genres?.map((genre) => (
        
        <GenreCard 
            key={genre.id}
            genre={genre}
        
        />
        
    ))

   
      
      
      return (
        <div className="genre-container" align="center">
            <Header/>
            
          
           
            <br></br>
           
            <Grid container xs={8}>
            {genreList}
            </Grid>
           
        </div>

      )
    

}

export default GenreContainer;