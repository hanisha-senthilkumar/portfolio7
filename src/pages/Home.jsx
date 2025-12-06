
import ThemeToggle from "../Components/ThemeToggle";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
const Home=()=>{
    return(
        <div className="min-h-screen bg-transparent text-foreground ">

            {/* Theme Toggle */}
            <ThemeToggle/>

             {/* Background Effect */}
             <Background/>

              {/* Navbar*/}
              <Navbar/>

               {/* Main Content */}
              <Title/>
              <About/>
              <Skills/>
              
              <Projects/>
              <Contact/>
                {/* Footer*/}

        </div>
    )
}
export default Home;
