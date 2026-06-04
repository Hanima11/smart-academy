import { Routes, Route } from "react-router-dom";

import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";
import Courses from "./pages/Coursepage";
import About from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Coursedetails from "./pages/Coursedetails";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/courses/:id" element={<Coursedetails />} />
      </Route> 
    </Routes>
  );
}

export default App;