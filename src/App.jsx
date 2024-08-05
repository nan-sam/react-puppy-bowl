import {useEffect, useState} from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddPuppy from "./pages/AddPuppy";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    // try to get the token from localstorage
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/addPlayer" element={<AddPuppy />} />
        </Route>

        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route path="*" element={<Home token={token} setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;