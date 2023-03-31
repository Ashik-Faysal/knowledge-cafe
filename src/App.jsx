import "./App.css";
import Blog from "./components/Blog/Blog";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App p-8 bg-white text-black">
      <Header />
      <Body />
      <Blog />
    </div>
  );
}

export default App;
