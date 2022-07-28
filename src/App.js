import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Search from "./components/Header/Search/Search";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Search />
      <Card />
    </div>
  );
};

export default App;
