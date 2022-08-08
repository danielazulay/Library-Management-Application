import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import books from '../../Books/books'
import List from '../list/List'

function Home() {

    let [book, setBook] = useState({
        authorName: '',
        bookName: '',
        coverPhoto: '',
        catalogNumber: ''
    })

    let [library, setLibrary] = useState([...books])

    let [photo, setPhoto] = useState({ status: false, photo: '' })

    function handleChange(event) {

        setBook({ ...book, [event.currentTarget.name]: event.currentTarget.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        let find = false
        let index

        library.map((a, i) => {
            if (a.catalogNumber === book.catalogNumber) {
                index = i
                find = true
            }
        })
        if (find) {
            let arr = [...library]
            arr.splice(index, 1, book)
            setLibrary([...arr])
        }

    }


    function handleAdd(event) {
        event.preventDefault()
        setLibrary([...library, book])
    }

    function handelDel(id) {
        let find = false
        let index
        library.map((a, i) => {
            if (a.catalogNumber === id) {
                index = i
                find = true
            }
        })
        if (find) {
            let arr = [...library]
            arr.splice(index, 1)
            setLibrary([...arr])
            console.log(book)
        }
    }

    function handleEdit(a) {
        setPhoto({ status: true, photo: a.coverPhoto })
        setBook({ ...a })
    }



    return (
        <>

            <form className="d-flex justify-content-start m-3" onSubmit={handleAdd} >
                <button type="submit" className="btn btn-light mb">Add</button>
                <input type="string" className="form-control" id="add" placeholder="Title" name='bookName' onChange={handleChange} value={book.bookName} />
            </form>

            <div Name="container">
                <div class="row">
                    <div class="col-sm-4 ">
                        <List className='d-flex align-items-start' handleEdit={handleEdit} library={library} setBook={setBook} handelDel={handelDel} />
                    </div>

                    {photo ? <div class="col-sm-2 ml-0"><img src={photo.photo} class="rounded mx-auto d-block" alt="..."></img></div> : <></>}


                    <div className="col-sm-4">
                        <form onSubmit={handleSubmit}>
                            <input type="text" class="form-control sm" id="formGroupExampleInput" placeholder="Author Name" name='authorName' onChange={handleChange} value={book.authorName} />
                            <input type="text" class="form-control sm" id="formGroupExampleInput" placeholder="Book Name" name='bookName' onChange={handleChange} value={book.bookName} />
                            <input type="text" class="form-control sm" id="formGroupExampleInput" placeholder="Cover Photo" name='coverPhoto' onChange={handleChange} value={book.coverPhoto} />
                            <input type="text" class="form-control sm" id="formGroupExampleInput" placeholder="catalog Number" name='catalogNumber' onChange={handleChange} value={book.catalogNumber} />
                            <button type="submit" className="btn btn-light mb">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </ >
    )


}

export default Home