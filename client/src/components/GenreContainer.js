import React, {useState, useEffect} from "react"

function GenreContainer(){
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then(setGenres);
    
    
      }, []);



      return (
        
      )
    

}