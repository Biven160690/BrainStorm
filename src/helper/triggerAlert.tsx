import { ErrorAlert, SuccessAlert, WarningAlert } from '../components/alerts';

import { AlertProps } from '../hooks/interface';

export const triggerAlert = (alertProps: AlertProps) => {
  if (alertProps.status) {
    switch (alertProps.status.name) {
      case 'Error':
        return <ErrorAlert {...alertProps} />;
      case 'Success':
        return <SuccessAlert {...alertProps} />;
      case 'Warning':
        return <WarningAlert {...alertProps} />;
    }
  }
};
