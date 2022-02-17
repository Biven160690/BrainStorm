import { SuccessAlert, ErrorAlert } from "../components/alerts";

import { AlertProps } from "./interface";

export const useTriggerAlerts = (alertProps: AlertProps) => {
  const { status } = alertProps;
 
  const name = status?.name.toLocaleLowerCase();  
  
  if (status) {
    switch (name) {
      case "error":
        return <ErrorAlert {...alertProps} />;
      case "success":
        return <SuccessAlert {...alertProps} />;
    }
  }
};
