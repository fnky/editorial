import type { ChangeEvent, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { Field, FieldGroup, Form, InputField, Switch } from "components";

import { slugState, titleState } from "./EditorState";

export default function EditorDetailsFormView(): ReactElement {
  const [title, setTitle] = useRecoilState(titleState);
  const [slug, setSlug] = useRecoilState(slugState);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeSlug = (event: ChangeEvent<HTMLInputElement>) => {
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
