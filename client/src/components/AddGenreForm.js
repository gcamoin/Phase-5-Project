import {React, useState} from "react"

function AddGenreForm({handleAddGenre}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])
    

    function onChangeName(e) {
        setName(e.target.value)
    }

    function onChangeImage(e) {
        setImage(e.target.value)
    }

    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image
                
            }),
        })
        .then((r) => { 
            if(r.ok) {
              r.json().then((genreToAdd) => handleAddGenre(genreToAdd));
            } else {
              r.json().then((err)=>setErrors(err.errors))
            }
  
          })

          setName("")
          setImage("")
        
    }




    return (
        <div className="add-genre-form">
            <h2>Add Genre</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="name of genre"
                    value={name}
                    onChange={onChangeName}
                />
                
                <input 
                    type="text"
                    placeholder="genre image url"
                    value={image}
                    onChange={onChangeImage}
                />
                <button>Add Genre!</button>
               
                {errors.map((error) => <p style={{color: "red"}}>{error}</p>)}
            </form>
        </div>
    )


}


export default AddGenreForm;