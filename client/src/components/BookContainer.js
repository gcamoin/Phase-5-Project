import {React, useState, useEffect} from "react"

function BookContainer() {
const [books, setBooks] = useState([])

useEffect(() => {
    fetch("/books")
    .then((r) => r.json())
    .then(setBooks)
  }, []);

  const bookList = books?.map((book) => (
    <RestaurantCard 
        key={book.id}
        book={book}
        
    
    />
  ));

  return (
    <div className="Book-List">
        {bookList}

    </div>
  )
  
}

export default BookContainer;