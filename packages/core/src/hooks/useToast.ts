import { useEffect, useState } from "react";
import { subscribeToast } from "../lib/service/toastService";

const toastTimer = 3000;
// 3초 뒤 메시지는 초기화 된다.
export function useToast() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg("");
    }, toastTimer);

    return () => clearTimeout(timer);
  }, [msg, setMsg]);

  useEffect(() => {
    const unsubscribe = subscribeToast((newMessage) => {
      setMsg(newMessage);
    });

    return () => unsubscribe();
  }, []);

  return msg;
}
