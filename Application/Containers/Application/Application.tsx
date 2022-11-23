import styled from "styled-components";

import "@/Application/Containers/Application/Styles/Application.scss";

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
  return (
    <StyledApplication data-testid="StyledApplication">
      <Button onClick={() => alert("ya tyt")}>12313</Button>
    </StyledApplication>
  );
};

export { Application };
