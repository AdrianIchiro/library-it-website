import { useEffect, useState } from "react"
import Link from "next/link"

export default function Book() {
    const [book, setBook] = useState([])
    const [load, setLoad] = useState(false)
    const fetchDataBook = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/mongodb`)
        const { books } = await response.json()
        setLoad(true)
        setBook(books)
    }

    useEffect(() => {
        fetchDataBook()
    },)

    if (!load) {
        return 'loading....'
    }
    return (
        <>
            <h1>|Book</h1>
            <div className="wrapper-book">
                <div className="book-list">
                    {book.map((value, index) => (
                        <div className="item" key={index}>
                            <Link href={value.url} target="_blank"><img src={value.image} alt="book" /></Link>
                            <p>{value.title}</p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}