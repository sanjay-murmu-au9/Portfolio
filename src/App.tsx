import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/Home";
import ReactGa from "react-ga4"

function App() {

  useEffect(() => {
    ReactGa.initialize('G-1QER6TNSDM');
  }, [])

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
