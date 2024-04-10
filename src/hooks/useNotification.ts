import { App } from "antd";

type NotificationType = "info" | "success" | "error";

const useNotification = () => {
  const { notification } = App.useApp();

  const onNotify = (
    type: NotificationType,
    description: string,
    message?: string
  ) => {
    switch (type) {
      case "info":
        notification.info({
          message,
          description,
          placement: "topRight",
        });
        break;
      case "success":
        notification.success({
          message,
          description,
          placement: "topRight",
        });
        break;
      default:
        notification.error({
            message,
            description,
            placement: "topRight",
          });
        break;
    }
  };

  return { onNotify };
};

export default useNotification;
