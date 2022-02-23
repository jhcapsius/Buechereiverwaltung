import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Library from "./pages/Library/Library";
import Register from "./pages/Register/Register"
import Administration from "./pages/Adminstration/Administration";
import Login from "./pages/Login/Login";
import Database from "./pages/Database/Database";

function App() {
  
  let loggedInUser = sessionStorage.getItem("accessToken") && sessionStorage.getItem("userID") ? true : false;
  let loggedInEmployee = sessionStorage.getItem("accessToken") && sessionStorage.getItem("id") ? true : false;

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/library" element={loggedInUser ? <Library/> : <Navigate to="/" />}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/database" element={<Database/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/administration" element={loggedInEmployee ? <Administration/> : <Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
