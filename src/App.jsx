import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container mx-auto md:px-8 lg:px-10 xl:px-16 2xl:px-24">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
