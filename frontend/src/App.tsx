import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileData from "./pages/Profile-Data";
import RecipesSaves from "./pages/Profile-Recipes-Saves";
import DietPlan from "./pages/Profile-Diet-Plan";

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/profile" element={<ProfileData />} />
          <Route path="/profile/recipes-save" element={<RecipesSaves />} />
          <Route path="/profile/diet-plan" element={<DietPlan />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
