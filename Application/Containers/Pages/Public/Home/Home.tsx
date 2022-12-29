import { useRef } from "react";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Content } from "@/Application/Containers/UI/Application/Content/Content";

import { Language } from "@/Application/Containers/UI/Details/Language/Language";
import { Theme } from "@/Application/Containers/UI/Details/Theme/Theme";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";

const Home: React.FunctionComponent = (): React.ReactElement => {
  const passwordref = useRef();

  return (
    <>
      <Wrapper>
        <Content>
          <Language />
          <Theme />
          <Input ref={passwordref} type={""} placeholder={""} />
        </Content>
      </Wrapper>
    </>
  );
};

export { Home };
