import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
