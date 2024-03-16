import { BrowserRouter } from "react-router-dom";
import NavBar1 from "./components/NavBar1/NavBar1";
import AppRouter from "./components/AppRouter/AppRouter";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar1 />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
