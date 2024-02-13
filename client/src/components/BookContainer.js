import React, {useState, useEffect, useContext} from "react"
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
// import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"

function BookContainer({genre, genreID}){
    const [books, setBooks] = useState([])
    // const {genre} = useContext(GenreContext)

    useEffect(() => {
        fetch(`/genres/${genreID}`)
        .then((r) => r.json())
        .then(setBooks)
      }, []);

      console.log(books)

      const bookList = genre.books?.map((book) => (
        <BookCard
            key={book.id}
            book={book}
        />
      ))

      return(
        <div>
           {bookList} 
        </div>

      )
    

}

export default BookContainer