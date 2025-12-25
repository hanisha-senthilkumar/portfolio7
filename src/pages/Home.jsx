
// Background is provided at the app root (do not re-import here)
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Home=()=>{
    return(
        <div className="min-h-screen bg-transparent text-foreground ">

            {/* Theme Toggle removed - using app-level background and default theme */}

             {/* Background is mounted at the app root; do not duplicate here */}

              {/* Navbar*/}
              <Navbar/>

               {/* Main Content */}
              <Title/>
              <About/>
              <Skills/>
              
              <Projects/>
              <Contact/>
                {/* Footer*/}
                <Footer/>

        </div>
    )
}
export default Home;
