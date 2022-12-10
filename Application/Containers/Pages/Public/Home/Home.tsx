import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Content } from "@/Application/Containers/UI/Application/Content/Content";

import { Language } from "@/Application/Containers/UI/Details/Language/Language";
import { Theme } from "@/Application/Containers/UI/Details/Theme/Theme";

const Home: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Wrapper>
        <Content>
          <Language />
          <Theme />
        </Content>
      </Wrapper>
    </>
  );
};

export { Home };
