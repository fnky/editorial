import dynamic from "next/dynamic";
import Page from "../layouts/Page";
import { Loading } from "../components";

const Editor = dynamic(() => import("../features/Editor"), {
  ssr: false,
  loading: () => <Loading />,
});

const EditPage = () => {
  return (
    <Page title="Edit">
      <Editor />
    </Page>
  );
};

export default EditPage;
