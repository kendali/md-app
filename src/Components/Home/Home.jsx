import Hero from "./Hero/Hero"
import NavBar from "./Navbar/Navbar"
import   './Home.css'
import Features from "./Features/Features"
import Services from "./Services/Services"
import Link from "./Link/Link"
function Home() {
  return (
    <div id="home">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Link />
      </main>
    </div>
  )
}

export default Home
