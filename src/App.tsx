import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/favourite" element={<FavouritePage/>} /> 
          <Route path="/:index" element={<DetailPage/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
