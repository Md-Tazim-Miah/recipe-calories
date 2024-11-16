import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import OurRecipes from "./components/our-recipes/OurRecipes";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <div className="container mx-auto md:px-8 lg:px-10 xl:px-16 2xl:px-24">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
