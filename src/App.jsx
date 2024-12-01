
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./components/About";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      <About/>
    </AuthProvider>
  );
}

export default App;
