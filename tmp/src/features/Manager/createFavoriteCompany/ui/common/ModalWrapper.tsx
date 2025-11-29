"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Modal as BaseModal} from "@/shared/ui/Modal/Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { FavoriteCompanyFormProps } from "../../model/favorite-company-form";
import { EMAIL } from "@/shared/config/constants/constants";

export function ModalWrapper() {
  const methods = useForm<FavoriteCompanyFormProps>({
    defaultValues: {
      email: EMAIL,
      company_name: "",
      memo: "",
    },
  });

  return (
    <BaseModal>
      <div
        className="bg-white rounded-2xl shadow-xl flex flex-col 
          w-[320px] sm:w-[480px] md:w-[640px]"
        onClick={(e) => e.stopPropagation()}
      >
        <FormProvider {...methods}>
          <form>
            <ModalHeader />
            <ModalBody />
            <ModalFooter />
          </form>
        </FormProvider>
      </div>
    </BaseModal>
  );
}
