import { motion, AnimatePresence } from "framer-motion";
import styles from "./Toast.module.css";

export function Toast({ message }: { message: string }) {
  return (
    <AnimatePresence>
      {message && (
        <div className={styles.toastWrapper}>
          <motion.div
            key={message}
            data-cy="toast"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }} // 🔥 exit 애니메이션
            transition={{ duration: 0.3 }}
            className={styles.toast}
          >
            {message}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
