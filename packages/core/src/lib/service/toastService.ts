import { EventBus } from "../eventBus";

export const toastBus = new EventBus<string>();

export const setToast = (message: string) => {
  toastBus.emit("toastChange", message);
};

export const subscribeToast = (callback: (message: string) => void) => {
  return toastBus.on("toastChange", callback);
};
