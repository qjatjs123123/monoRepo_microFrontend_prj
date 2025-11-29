import { Modal } from "@/shared/ui/Modal/Modal";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
export function ModalWrapper() {
  return (
    <Modal>
      <div
        className="bg-white rounded-2xl shadow-xl flex flex-col 
                   w-[400px] justify-center items-center text-center gap-4 px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
      </div>
    </Modal>
  );
}
