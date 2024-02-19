import React from "react"

function Profile({user}) {
    
      return (
        <div className="my-books" align="center">
            <h2 style={{font: "fantasy"}}>My Books</h2>
            {user.books?.map((myBooks) => (
                <li>{myBooks.title}</li>
            ))}
        </div>
      )

}

export default Profile;