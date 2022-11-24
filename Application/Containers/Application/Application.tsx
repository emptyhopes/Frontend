import styled from "styled-components";

import "@/Application/Containers/Application/Styles/Application.scss";

import { Link } from "react-router-dom";

import { Routes } from "@/Application/Ship/Routes/Routes";
import { Button } from "@/Application/Containers/UI/Button/Button";

const StyledApplication = styled.div``;

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
