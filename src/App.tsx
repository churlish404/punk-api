import Main_Content from "./components/Main_Content/Main_Content";
import Nav from "./components/Nav/Nav";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Beer } from "./types/beer";
import "./App.scss";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchBeers, setSearchBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // filter checkbox states
  const [isAbvChecked, setIsAbvChecked] = useState<boolean>(false);
  const [isClassicChecked, setIsClassicChecked] = useState<boolean>(false);
  const [isSourChecked, setIsSourChecked] = useState<boolean>(false);

  // api string parameters
  const [highABV, setHighABV] = useState<string>("");
  const [classic, setClassic] = useState<string>("");

  // function to pass correct boolean state "checked/unchecked" to each filter component
  // previousSibling refers to corresponding checkbox label
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const checkedFilter = event.target;
    checkedFilter.previousSibling!.textContent?.includes("ABV")
      ? setIsAbvChecked(!isAbvChecked)
      : checkedFilter.previousSibling!.textContent?.includes("Classic")
      ? setIsClassicChecked(!isClassicChecked)
      : checkedFilter.previousSibling!.textContent?.includes("Sour")
      ? setIsSourChecked(!isSourChecked)
      : null;
  };

  const getBeers = async (
    url: string = `https://api.punkapi.com/v2/beers${highABV}${classic}`
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

  // handles user searching
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
  };

  // sets search beers to those matching the search term
  const searchedBeers = () => {
    const searchedBeers = beers.filter((beer) =>
      searchTerm == "" ? beer : beer.name.toLowerCase().includes(searchTerm)
    );

    setSearchBeers(searchedBeers);
  };

  //API param syntax

  // "https://api.punkapi.com/v2/beers?abv_gt=6" for higher than 6% beers
  // "https://api.punkapi.com/v2/beers?brewed_before=01-2010" beers pre 2010

  const filterBeers = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isAbvChecked ? setHighABV("?abv_gt=6") : setHighABV("");
    isClassicChecked ? setClassic("?brewed_before=01-2008") : setClassic("");

    const sourBeers = beers.filter((beer) => beer.ph < 4);
    isSourChecked ? setBeers(sourBeers) : setBeers(beers);
  };

  useEffect(() => {
    searchTerm ? searchedBeers() : getBeers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, highABV, classic]);

  return (
    <>
      <Nav
        isAbvChecked={isAbvChecked}
        isClassicChecked={isClassicChecked}
        isSourChecked={isSourChecked}
        applyFilter={filterBeers}
        handleSearchInput={handleSearchInput}
        handleChecked={handleChecked}
      />
      <Main_Content beer={searchTerm ? searchBeers : beers} />
    </>
  );
}

export default App;
