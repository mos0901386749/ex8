import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import AuthService from "./services/auth.service";

function App() {
  const currentUser = AuthService.getCurrentUser();
  const logOut = () =>{
    AuthService.logout();
  }
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} logOut={logOut}/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="Update/:restaurantId" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
