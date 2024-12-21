import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "./components/Select";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Select />} />
      </Routes>
    </>
  );
}

export default App;
