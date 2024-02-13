import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import Navigation from "./Components/Navigation/Navigation";
import classes from "./App.module.scss";
function App() {
  return (
    <div className={classes.appWrapper}>
      <Navigation />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/test" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
