import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";

function App() {
  const nameBank = <h1>International Bank</h1>;

  return (
    <div className="display flex">
      <h1>Welcome to {nameBank}</h1>
      <img
        src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png"
        alt="bank-logo"
      />
    </div>
  );
}

export default App;
