import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Foydalanuvchi ro'yxatdan o'tgan
        setUser(user);
      } else {
        // Foydalanuvchi ro'yxatdan o'tmagan
        setUser(null);
        navigate("/register");
      }
    });

    return () => unsubscribe();
  }, []);

  return user ? children : null;
};

export default PrivateRoute;

