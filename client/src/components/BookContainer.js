// import React, {useState, useEffect} from "react"
// import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"

// function BookContainer(genreID){
//     const [books, setBooks] = useState([])

//     useEffect(() => {
//         fetch(`/genres/${genreID}`)
//         .then((r) => r.json())
//         .then(setBooks)
//       }, []);

//       console.log(books)

//       const bookList = genre.books?.map((book) => (
//         <BookCard
//             key={book.id}
//             book={book}
//         />
//       ))

//       return(
//         <div>
//            {bookList} 
//         </div>

//       )
    

// }

// export default BookContainer