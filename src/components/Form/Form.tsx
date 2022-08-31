import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

import { Btn } from "../Btn/Btn";
import styles from "./Form.module.css";

export const Form = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <div className={styles.formArea}>
        {/* eslint-disable-next-line no-console*/}
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </div>
          <div>
            <TextInput
              label="Name"
              placeholder="Taro yamada"
              {...form.getInputProps("name")}
            />
          </div>
          <div>
            <Textarea
              placeholder="I want to order your goods"
              label="Your message"
            />
          </div>
          <Btn text="Send message" url="" />
        </form>
      </div>
    </>
  );
};
