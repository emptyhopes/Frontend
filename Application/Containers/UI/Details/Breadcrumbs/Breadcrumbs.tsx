import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

const StyledContent = styled.div`
  display: flex;
  margin: 20px 0;

  & li + li {
    margin: 0 0 0 10px;
  }
`;

const StyledLi = styled.li`
  display: flex;

  & a {
    color: blue;
  }

  & div {
    margin: 0 0 0 10px;
  }
`;

const Breadcrumbs: React.FunctionComponent = (): React.ReactElement => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((value) => value);

  const Uppercase = (value: string) => {
    value = value.toUpperCase().slice(0, 1) + value.slice(1, value.length);

    return value;
  };

  return (
    <>
      <StyledContent>
        {pathnames.length > 0 ? (
          <StyledLi>
            <Link to={"/"}>Home</Link>
            <div>/</div>
          </StyledLi>
        ) : (
          <></>
        )}

        {pathnames.map((name, index) => {
          const route = pathnames.slice(0, index + 1).join("/");
          const last = index === pathnames.length - 1;

          return last ? (
            <StyledLi key={name}>{Uppercase(name)}</StyledLi>
          ) : (
            <StyledLi key={name}>
              <Link to={route}>{Uppercase(name)}</Link>
              <div>/</div>
            </StyledLi>
          );
        })}
      </StyledContent>
    </>
  );
};

export { Breadcrumbs };
