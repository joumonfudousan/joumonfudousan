import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-sky-400">Welcome to the App</h1>
      <nav>
        <Link to="/home">Go to Home page</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
