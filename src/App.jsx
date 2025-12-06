import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Background from "./Components/Background";

function App() {
  

  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={NotFound} />
        </Routes>
      </BrowserRouter>
    </Background>
  )
}

export default App
