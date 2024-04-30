import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { useEffect } from "react";
import "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RegisterPage } from "./pages/register/RegisterPage";
import { AddPost } from "./pages/addPost/AddPost";

function App() {
  const navigate = useNavigate();

  const authInstance = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      !user ? navigate("/register") : navigate("/home");
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home/add" element={<AddPost />} />
      </Routes>
  );
}


export default App;
