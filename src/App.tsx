import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Beer } from "./types/beer";
import "./App.scss";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchBeers, setSearchBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getBeers = async (
    url: string = "https://api.punkapi.com/v2/beers/"
  ) => {
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);

    // ignore -> extension to get all the beers
    // const rawData: Beer[] = [];
    // let page = 1;
    // do {
    //   const response = await fetch(`${url}?page=${page}&per_page=80`);
    //   const data = await response.json();

    //   rawData.push(data);
    //   page++;
    // } while (page < 6);

    // const allBeers = rawData.flat();
    // setBeers({ query: "", beers: allBeers });
  };

  // handles
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const searchedBeers = () => {
    const searchedBeers = beers.filter((beer) =>
      searchTerm == "" ? beer : beer.name.toLowerCase().includes(searchTerm)
    );

    setSearchBeers(searchedBeers);
  };

  const filterBeers = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  useEffect(() => {
    searchTerm ? searchedBeers() : getBeers();
  }, [searchTerm]);

  return (
    <>
      <Nav applyFilters={filterBeers} handleSearchInput={handleSearchInput} />
      <Main beer={searchTerm ? searchBeers : beers} />
    </>
  );
}

export default App;
