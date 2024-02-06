import {React, useState, useEffect} from "react"
import GenreCard from "/home/gcamoin/phase-5-project/client/src/components/GenreCard.js"

function GenreContainer() {
const [genres, setGenres] = useState([])

useEffect(() => {
    fetch("/genres")
    .then((r) => r.json())
    .then(setGenres)
  }, []);

  const genreList = genres?.map((genre) => (
    <GenreCard 
        key={genre.id}
        genre={genre}
        
    
    />
  ));

  return (
    <div className="Book-List">
        {genreList}

    </div>
  )
  
}

export default GenreContainer;