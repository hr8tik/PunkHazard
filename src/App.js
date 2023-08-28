import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
