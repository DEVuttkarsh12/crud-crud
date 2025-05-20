import { useState } from "react";
import Navbar from "./Cpmponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./Cpmponents/AddEmp";
import ViewEmp from "./Cpmponents/ViewEmp";
import ListEmp from "./Cpmponents/ListEmp";

import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListEmp />}></Route>
          <Route path="/add" element={<AddEmp />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
