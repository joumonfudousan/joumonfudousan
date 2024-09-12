import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Location from "./page/Location";
import Loading from "./page/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/proj_hakubuku/" element={<Loading />} />
        <Route path="/proj_hakubuku/home" element={<Home />} />
        <Route path="/proj_hakubuku/ruins/*" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
