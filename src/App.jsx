import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App md:m-24 bg-white text-black">
      <Header />
      <Body />
    </div>
  );
}

export default App;
