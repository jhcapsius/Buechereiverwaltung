import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Library from "./pages/Library/Library";
import Register from "./pages/Register/Register"
import Administration from "./pages/Adminstration/Administration";
import Login from "./pages/Login/Login";

function App() {
  
  let loggedInUser = sessionStorage.getItem("accessToken") && sessionStorage.getItem("email") ? true : false;
  let loggedInEmployee = sessionStorage.getItem("accessToken") && sessionStorage.getItem("id") ? true : false;

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/library" element={loggedInUser ? <Library/> : <Navigate to="/" />}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/administration" element={loggedInEmployee ? <Administration/> : <Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
