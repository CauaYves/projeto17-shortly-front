import Navbar from "./components/Navbar";
import Routes from "./routes/index.routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes />

      </BrowserRouter>
  )
}

export default App
