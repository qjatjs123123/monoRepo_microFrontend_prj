import { Layout } from "@monorepo/ui";
import { ViewerTitle } from "@/widgets/title";
import "../global.css";
import { ViewerForm } from "@/widgets/form";
import { FormProvider, useForm } from "react-hook-form";
import type { ViewerFormProps } from "@/features/submitViewerForm";
import { Viewer } from "@/widgets/viewer";

function App() {
  const methods = useForm<ViewerFormProps>({
    defaultValues: {
      corp_code: "00126380",
      bsns_year: "2024",
      reprt_code: "11013",
      fs_div: "CFS",
    },
  });
  return (
    <Layout>
      <ViewerTitle />
      <FormProvider {...methods}>
        <ViewerForm />
        <Viewer />
      </FormProvider>
    </Layout>
  );
}

export default App;
