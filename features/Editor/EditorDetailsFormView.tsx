import * as React from "react";
import { Field, FieldGroup, Form, InputField, Switch } from "components";
import { useRecoilState } from "recoil";
import { slugState, titleState } from "./EditorState";

export default function EditorDetailsFormView(): React.ReactElement {
  const [title, setTitle] = useRecoilState(titleState);
  const [slug, setSlug] = useRecoilState(slugState);

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setTitle(event.target.value);
  };

  const handleChangeSlug: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setSlug(event.target.value);
  };

  return (
    <Form>
      <FieldGroup>
        <InputField
          label="Title"
          id="title"
          type="text"
          defaultValue={title}
          onChange={handleChangeTitle}
        />
        <InputField
          label="Slug"
          id="slug"
          type="text"
          value={slug}
          onChange={handleChangeSlug}
          placeholder="slug"
        />
        <InputField label="Publish Date" id="publishDate" type="date" />
        <Field label="Published">
          <Switch defaultChecked={false} />
        </Field>
      </FieldGroup>
    </Form>
  );
}
