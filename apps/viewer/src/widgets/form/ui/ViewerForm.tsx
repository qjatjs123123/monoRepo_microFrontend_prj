import {
  SubmitButton,
} from "@/features/submitViewerForm";
import { FormInput, inputFieldData } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";

export function ViewerForm() {
  const methods = useFormContext();

  return (
    <form className="flex flex-col gap-3">
      {inputFieldData.map((f) => (
        <Controller
          key={f.name}
          name={f.name}
          control={methods.control}
          render={({ field }) => (
            <FormInput
              field={field}
              title={f.label}
              placeholder={f.placeholder}
            />
          )}
        />
      ))}
      <SubmitButton />
    </form>
  );
}
