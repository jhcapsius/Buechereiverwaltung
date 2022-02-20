import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "./pages/Library/Library";
import Register from "./pages/Register/Register"
import Administration from "./pages/Adminstration/Administration";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/library" element={<Library/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/administration" element={<Administration/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
