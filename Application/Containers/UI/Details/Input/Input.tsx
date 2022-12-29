import * as React from "react";

import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Details/Input/Types/PropsInterface";

const StyledInput = styled.input`
  width: 500px;
  padding: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #000000;
  outline: none;

  &:focus {
    border: 1px solid #00bfff;
  }
`;

// const DefaultInput: React.FunctionComponent<PropsInterface> = (
//   props: PropsInterface,
//   ref: React.RefObject<HTMLInputElement>,
// ): React.ReactElement => {
//   return (
//     <>
//       <StyledInput {...props} ref={ref} />
//     </>
//   );
// };

// eslint-disable-next-line react/display-name
// const Input: React.ForwardRefExoticComponent<React.RefAttributes<PropsInterface>> = React.forwardRef<PropsInterface>(
//   (props): React.ReactElement => {
//     return (
//       <>
//         <StyledInput {...props} />
//       </>
//     );
//   },
// );

const Input: React.FunctionComponent<PropsInterface> = (props: PropsInterface) => {
  return (
    <>
      <StyledInput {...props} />
    </>
  );
};

export { Input };
