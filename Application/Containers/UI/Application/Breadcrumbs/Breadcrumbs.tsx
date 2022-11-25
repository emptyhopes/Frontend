import styled from "styled-components";

// import { useLocation, useNavigate } from "react-router-dom";

// const StyledContent = styled.div``;
const StyledLi = styled.li``;
const StyledButton = styled.button``;

const Breadcrumbs: React.FunctionComponent = () => {
  // const location = useLocation();
  // const history = useNavigate();

  return (
    <>
      <StyledLi>
        <StyledButton></StyledButton>
      </StyledLi>
    </>
  );
};

export { Breadcrumbs };
