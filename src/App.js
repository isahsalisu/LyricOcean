import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import HomePage from "./components/layout/HomePage";
import Contact from './components/layout/Contact';

//import { Provider } from "./context";

import "./App.css";
import SearchPage from "./components/layout/SearchPage";

function App() {
  return (
    <>
    {/* <Provider> */}
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/search" element={<SearchPage/>}/>
         <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      {/* </Provider> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
