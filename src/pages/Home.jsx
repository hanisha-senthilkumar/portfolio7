
import ThemeToggle from "../Components/ThemeToggle";
import BackgroundAnimations from "../Components/Background";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import About from "../Components/About";
import Skills from "../Components/Skills";
const Home=()=>{
    return(
        <div className="min-h-screen bg-background text-foreground ">

            {/* Theme Toggle */}
            <ThemeToggle/>

             {/* Background Effect */}
             <BackgroundAnimations/>

              {/* Navbar*/}
              <Navbar/>

               {/* Main Content */}
              <Title/>
              <About/>
              <Skills/>
                {/* Footer*/}

        </div>
    )
}
export default Home;
