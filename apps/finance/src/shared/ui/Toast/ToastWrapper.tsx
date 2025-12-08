import { useToast } from "@monorepo/core";
import { Toast } from "@monorepo/ui";

export function ToastWrapper() {
  const message = useToast();

  return <Toast message={message} />;
}
