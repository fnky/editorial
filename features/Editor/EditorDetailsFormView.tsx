import type { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { Field, FieldGroup, Form, InputField, Switch } from "../../components";
import { titleState } from "./EditorState";

export default function EditorDetailsFormView(): ReactElement {
  const title = useRecoilValue(titleState);

  return (
    <Form>
      <FieldGroup>
        <InputField label="Title" id="title" type="text" defaultValue={title} />
        <InputField label="Slug" id="slug" type="text" placeholder="heading" />
        <InputField label="Publish Date" id="publishDate" type="date" />
        <Field label="Published">
          <Switch defaultChecked={false} />
        </Field>
      </FieldGroup>
    </Form>
  );
}
