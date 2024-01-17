import Link from "next/link"
export default function index({ data: { books } }) {
  return (
    <>
      <h1>|Home</h1>
      <div className="wrapper-book">
        <div className="book-list">
          {books.map((value, index) => (
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

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/new`)
  const data = await response.json()

  return {
    props: { data }
  }
}