import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Location from "./page/Location";
import Loading from "./page/Loading";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/proj_hakubuku/" element={<Loading />} />
        <Route path="/proj_hakubuku/home" element={<Home />} />
        <Route path="/proj_hakubuku/ruins/*" element={<Location />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
