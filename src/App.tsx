import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { useState, useEffect, ChangeEvent } from "react";
import { Beer } from "./types/beer";
import "./App.scss";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const getBeers = async () => {
    try {
      const response = await fetch(
        "https://api.punkapi.com/v2/beers?page=2&per_page=80"
      );
      const data = await response.json();
      // if (response.status.toString().includes("4")) {
      //   setBeers("Loading");
      // }
      setBeers(data);
    } catch (error) {
      throw new Error("Problem with fetch");
    }
  };

  // use effect hook calling API when component mounts but empty
  // dependency [] means getBeers() not called infinitely
  useEffect(() => {
    getBeers();
  }, []);

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget);
  };

  return (
    <>
      <Nav handleChecked={handleChecked} />
      <Main beer={beers} />
    </>
  );
}

export default App;
