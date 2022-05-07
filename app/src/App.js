import "./App.css";
import SearchInput from "./components/searchInput/searchInput";
import NewsStories from "./components/newsStories/newsStories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <NewsStories />
      </header>
    </div>
  );
}

export default App;
