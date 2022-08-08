import { useState } from "react";
import './list.css'

function List(props) {

    let [search, setSearch] = useState({ search: '' })

    function handleSearch(event) {
        event.preventDefault()
        setSearch({ [event.currentTarget.name]: event.currentTarget.value })
    }

    return (
        <>

            <div class="form-row">
                <div class="col-md-3 mb-3 m-3">
                    <form>
                        <input type="string" placeholder="Search by name" name='search' value={search.search} onChange={handleSearch} />
                    </form>
                </div>
            </div>

            <ul className="list-group m-2">
                {search.search === '' ?
                    props.library.map((book) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center"><span onClick={() => { props.handleEdit(book) }} > {book.bookName} {book.authorName}</span>
                                <button className='btn btn-light sm' onClick={() => { props.handelDel(book.catalogNumber) }} >x</button>
                            </li>
                        )
                    }) : props.library.filter((a) => a.bookName.toLowerCase().includes(search.search)).map((book) => {
                        return (
                            <li onClick={() => { props.setBook({ ...book }) }} className="list-group-item d-flex justify-content-between align-items-center">
                                {book.bookName} {book.authorName}
                                <button className='btn btn-light sm' onClick={() => { props.handelDel(book.catalogNumber) }}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List