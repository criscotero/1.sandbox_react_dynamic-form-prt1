import React, { useState } from "react";
import { Form, Input, Button } from "antd";

export default function NewFieldForm(props) {
  const [newFieldProps, setNewFieldProps] = useState({
    name: "",
    type: "",
    description: ""
  });
  function createField() {
    console.log(newFieldProps);
  }

  const onChange = (e) => {
    setNewFieldProps({
      ...newFieldProps,
      [e.target.name]: e.target.value
    });
  };
  return (
    <React.Fragment>
      <span> Agregar un nuevo campo </span>

      <Form
        className="newfield-form"
        onSubmitCapture={createField}
        onChange={onChange}
      >
        <Form.Item>
          <Input
            type="text"
            name="name"
            placeholder="Nombre del nuevo campo"
            className="register-form__input"
            value={newFieldProps.name}
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            name="type"
            placeholder="Tipo del campo"
            className="register-form__input"
            value={newFieldProps.type}
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            name="description"
            placeholder="Descripcion del nuevo campo"
            className="register-form__input"
            value={newFieldProps.description}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="newfield-form__button">
            Crear Nuevo Campo
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
