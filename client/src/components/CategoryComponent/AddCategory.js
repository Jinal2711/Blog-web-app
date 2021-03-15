import React from "react";
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
} from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  slug: yup.string().required(),
  description: yup.string(),
});

function AddCategory() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit()}>
      <Label>
        <span>Name*</span>
        <Input
          className="mt-1"
          valid={!errors.name}
          name="name"
          ref={register}
          placeholder="Jane Doe"
        />
        <HelperText valid={!errors.name}>{errors.name?.message}</HelperText>
      </Label>
      <Label className="mt-4">
        <span>Slug*</span>
        <Input
          className="mt-1"
          valid={!errors.slug}
          name="slug"
          ref={register}
          placeholder="for-example"
        />
        <HelperText valid={!errors.slug}>{errors.slug?.message}</HelperText>
      </Label>
      <Label className="mt-4">
        <span>Description</span>
        <Textarea
          className="mt-1"
          rows="3"
          name="description"
          ref={register}
          placeholder="Enter some long form content."
        />
      </Label>
      <div className="mt-4">
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  );
}

export default AddCategory;
