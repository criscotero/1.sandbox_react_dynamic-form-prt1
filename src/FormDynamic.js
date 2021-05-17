import React, { setState } from "react";
import { Form, Input, Button } from "antd";

const [formFields, setFormField] = setState({
  fieldName: "field-incial",
  fieldType: "field-type",
  filedDescrip: "fieldDescription"
});

export default function FormDynamic() {
  return (
    <Form
      className="register-form"
      onSubmitCapture={register}
      onChange={changeForm}
    >
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
