import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Content/Types/PropsInterface";

const StyledContent = styled.div`
  display: ${(props: PropsInterface) => props.flex && "flex"};
  width: ${(props: PropsInterface) => props.$width && "100%"};
  height: ${(props: PropsInterface) => props.$height && "100%"};
  flex-direction: ${(props: PropsInterface) => props.column && "column"};
  align-items: ${(props: PropsInterface) => props.VerticalCenter && "center"};
  justify-content: ${(props: PropsInterface) => props.HorizontalCenter && "center"};
`;

const Content: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return <StyledContent {...props} />;
};

export { Content };
