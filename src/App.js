import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import HomePage from "./components/layout/HomePage";

//import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <>
    {/* <Provider> */}
      <div className="App">
        <Header />
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
