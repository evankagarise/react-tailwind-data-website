import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
