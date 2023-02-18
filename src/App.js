import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./components/layout/HomePage";

//import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <>
    {/* <Provider> */}
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </div>
      {/* </Provider> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
