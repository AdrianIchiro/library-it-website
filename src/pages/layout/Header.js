import Link from "next/link"
export default function Header() {
    return (
        <header>
            <img src="https://www.transparentpng.com/thumb/books/blue-book-png-icon--an1pZY.png" alt="book-logo" width={70} />
            <div className="link">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/book'}>Book</Link></li>
                <li><Link href={'/about'}>About</Link></li>
            </div>
        </header>
    )
}