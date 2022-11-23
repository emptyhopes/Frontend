import styled from "styled-components";

import { Link } from "react-router-dom";

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
    background-color: #ffffff;
    color: #000000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: red;
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
  return (
    <StyledApplication data-testid="StyledApplication">
      <Routes />
      <Button onClick={() => alert("ya tyt")}>12313</Button>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/error">Error</Link>
      </li>
      <li>
        <Link to="/users">Users error</Link>
      </li>
      <li>
        <Link to="/users/1">Users id error</Link>
      </li>
    </StyledApplication>
  );
};

export { Application };
