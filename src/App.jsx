import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Bem vindo a tascom academy</h1>
      <Outlet></Outlet>
      <p>Volte sempre</p>
    </div>
  );
}
