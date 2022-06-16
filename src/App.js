import './App.css';
import Header from "./Components/Layout/Header";
import Main from "./Components/Layout/Main";
import Footer from "./Components/Layout/Footer";
import Nav from "./Components/Layout/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
