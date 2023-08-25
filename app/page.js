import Image from 'next/image'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center">
     <h2 style={{marginBottom: "20px", fontSize: "30px", color: "#333"}}>Welcome to our New Dashboard</h2>
     <h1 className='m-0 p-0'>Hello Andrew</h1>
    </main>
    </>
  )
}
