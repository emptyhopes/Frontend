import styled from "styled-components";

import { Link } from "react-router-dom";

import "@/Application/Containers/Application/Styles/Application.scss";

import { Routes } from "@/Application/Ship/Routes/Routes";
import { Button } from "@/Application/Containers/UI/Button/Button";

const StyledApplication = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #000000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

const Application = () => {
  // eslint-disable-next-line no-console
  console.log(Routes());
  return (
    <StyledApplication data-testid="StyledApplication">
      <Button onClick={() => alert("ya tyt")}>12313</Button>
      <Link to="/">Main</Link>
      <Link to="/error">Error</Link>
      <Link to="/users">Users error</Link>
      <Link to="/users/1">Users id error</Link>
    </StyledApplication>
  );
};

export { Application };
