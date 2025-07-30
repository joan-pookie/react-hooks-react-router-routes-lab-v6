import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import routes from "../appRoutes.jsx";

export default function Navbar () {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/actors">Actors</a></li>
        <li><a href="/directors">Directors</a></li>
      </ul>
    </nav>
  );
}
let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  const a = screen.queryByText(/Home/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Actors <NavLink>", async () => {
  const a = screen.queryByText(/Actors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink>", async () => {
  const a = screen.queryByText(/Directors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});
