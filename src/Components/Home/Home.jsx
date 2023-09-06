import Hero from "./Hero/Hero"
import NavBar from "./Navbar/Navbar"
import   './Home.css'
import Features from "./Features/Features"
import Services from "./Services/Services"
import Link from "./Link/Link"
import Contact from "./ContactForm/Contact"
function Home() {
  return (
    <div id="home">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Contact />
        {/* <Link /> */}
      </main>
    </div>
  )
}

export default Home
