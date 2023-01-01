import { useState } from "react";

import { Notification } from "@/Application/Containers/UI/Details/Notification/Notification";

const NotificationHelper: React.FunctionComponent = (): React.ReactElement => {
  const [active, SetActivated] = useState(false);

  return (
    <>
      <Notification isActivated={active} SetActivated={SetActivated} />
    </>
  );
};

export { NotificationHelper };
