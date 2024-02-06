import React from "react"
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"

function GenreCard({genre}) {

    const {genre_id, name, books} = genre

    const bookList = books?.map((book) => (
        <BookCard 
            key={book.id}
            book={book}
        
        />
    ))




return (
    <div className="genres">
        <h1>{name}</h1>

        {bookList}
    </div>
)

}

export default BookCard;