import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/profile/view" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <footer>
        <Footer/>
      </footer> */}
    </>
  );
}

export default App;
