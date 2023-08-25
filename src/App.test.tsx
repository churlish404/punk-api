import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render card components", () => {
  // arranging
  render(<App />);
  //acting
  const card = screen.findByText("ABV");
  //asserting
  expect(card).toBeInTheDocument();
});

it("should render Brewer Corner component when clicking correct button", async () => {
  //arranging
  render(<App />);
  // acting
  const brewerCornerButton = screen.getByAltText("brewers-corner link");
  await userEvent.click(brewerCornerButton);

  const cancelCrossFromBrewComponent = screen.getByAltText("exit cross");
  // asserting
  expect(cancelCrossFromBrewComponent).toBeInTheDocument();
  expect(cancelCrossFromBrewComponent).toBeTruthy();
});
