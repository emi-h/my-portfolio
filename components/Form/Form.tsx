import React from "react";
import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Btn } from "src/components/Btn/Btn";
import styles from "src/components/Form/Form.module.css";

const Form = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <div className={styles.formArea}>
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

export default Form;
