import Link from "next/link"
export default function About() {
    return (
        <>
            <h1>|About</h1>
            <div className="profil">
                <div className="profil-card">
                    <img className="profil-image" src="img/profile.jpg" alt="profile developer" />
                    <h2>Nama : Adrian Fahren Setiawan</h2>
                    <h2>Umur : 19</h2>
                    <h2>Pendidikan : Mahasiswa</h2>
                    <div className="social-media">
                        <Link href={'https://www.instagram.com/fahrencta/'} target="_blank"><img src="https://seeklogo.com/images/I/instagram-logo-1494D6FE63-seeklogo.com.png" alt="instagram" /></Link>
                        <Link href={'#'}><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="twitter" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}