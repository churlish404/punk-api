# Punk API Beer Finder

## Overview

The project is a beer catalogue allowing you to search your favourite beers from the Punk API https://punkapi.com/documentation/v2.
I used React/Typescript/Vite to build the app and deployed it using GH Pages on https://churlish404.github.io/punk-api. Please follow the instructions below to run the program locally.

## Run

- `git clone "https://github.com/churlish404/punk-api.git"`
- `npm install` installs dependencies
- `npm run dev` will open the development server

## Component Tree

![punk-api-component-tree](https://github.com/churlish404/punk-api/assets/101139824/d45554dd-f4d0-490c-b117-fad94cc70c70)

## Features

- Search function to search 300+ beers pulled from API
- Filters are in the nav menu to filter by Sour, high ABV and classic beers (made pre-2010)
- Select filter checkbox and click apply filters, will need to close the menu to view the results
- Each beer's most important information is displayed on a card
- Enter Brewer's corner by clicking blue button on card
- Feature coming soon (Click the food button to get detailed food pairings)

## Code snippets

My design aimed to make the components as reusable as possible at this stage in my react journey with the majority of the logic housed within app.jsx and passed to components as props

App.jsx

```
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
```

Filter.jsx

```
type FilterProps = {
  label: string;
  key: string;
  isChecked: boolean;
  handleChecked: ChangeEventHandler<HTMLInputElement>;
};

const Filter = ({ label, handleChecked, isChecked }: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label">{label}</label>
      <input
        className="filter__input"
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
    </div>
  );
};
```

## React Hooks

I used useEffect() and useState() variables to control the rendering of the beers. The dependency arrary contains various state variables that when changed would cause a re-render of the page.

```
  useEffect(() => {
    searchTerm ? searchedBeers() : getBeers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, highABV, classic]);
```

## Screenshots

mobile design:

![Alt text](https://file%252B.vscode-resource.vscode-cdn.net/Users/lucagilardenghi/Desktop/Screenshot%25202023-08-24%2520at%252023.05.21.png?version%253D1692957503936)

desktop design:

![Alt text](https://file%252B.vscode-resource.vscode-cdn.net/Users/lucagilardenghi/Desktop/Screenshot%25202023-08-25%2520at%252010.58.56.png?version%253D1692957554957)
