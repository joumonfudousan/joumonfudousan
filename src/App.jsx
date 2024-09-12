import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Location from "./page/Location";
import Loading from "./page/Loading";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ruins/*" element={<Location />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
