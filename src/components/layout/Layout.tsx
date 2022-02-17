import { NavigateFunction, Outlet, useNavigate } from "react-router";

import { Header, Footer } from "../blocks";
import { Error } from "../errors/Error";

import { useStyles } from "../../theme/style";
import { useTriggerAlerts } from "../../hooks/useTriggerAlerts";

import { AlertProps } from "../../hooks/interface";
import { StatusItem } from "../../helper/interface";

export const Layout = ({
  alertProps,
  hasError,
}: {
  alertProps: AlertProps;
  hasError: StatusItem | undefined;
}) => {
  const navigate: NavigateFunction = useNavigate();
  const { wrapper, main } = useStyles();

  const informationMessage = useTriggerAlerts(alertProps);

  const component = hasError ? <Error hasError={hasError} /> : <Outlet />;

  const onClick = (url: string) => {
    return () => {
      navigate(url, { state: { open: true } });
    } 
  };

  return (
    <div className={wrapper}>
      <Header handelClick={onClick} />
      {informationMessage}
      <main className={main}>{component}</main>
      <Footer />
    </div>
  );
};
