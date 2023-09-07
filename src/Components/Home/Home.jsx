import Hero from "./Hero/Hero"
import NavBar from "./Navbar/Navbar"
import   './Home.css'
import Features from "./Features/Features"
import Services from "./Services/Services"
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
      </main>
    </div>
  )
}

export default Home
