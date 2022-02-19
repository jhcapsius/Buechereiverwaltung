import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "./pages/Library/Library";
import Navbar from "./components/navbar/Navbar";
import Frontpage from "./pages/Startpage/Frontpage"
import Administration from "./pages/Adminstration/Administration";

function App() {
  

  return (
    <>
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/library" element={<Library/>}/>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/adminstration" element={<Library/>}/>
        <Route path="/administration" element={<Administration/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
