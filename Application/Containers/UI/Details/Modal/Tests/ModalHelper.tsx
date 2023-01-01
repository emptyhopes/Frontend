import { useState } from "react";

import { Modal } from "@/Application/Containers/UI/Details/Modal/Modal";

const ModalHelper: React.FunctionComponent = (): React.ReactElement => {
  const [active, SetActivated] = useState(false);

  return (
    <>
      <Modal isActivated={active} SetActivated={SetActivated} />
    </>
  );
};

export { ModalHelper };
