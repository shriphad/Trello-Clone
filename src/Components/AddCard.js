import { Popover, Button } from "antd";
import { useState } from "react";
import Form from "./form";
import { v4 as uuidv4 } from "uuid";

export default function AddCard(props) {
  const [visible, setVisible] = useState(false);
  const { list, addCard } = props;

  const add = (values) => {
    const ID = uuidv4();
    values.user["ID"] = ID;
    const val = values.user;
    addCard(list, val);
    setVisible(false);
  };
  return (
    <Popover
      content={<Form isCard={true} add={add} />}
      title="Add Card"
      trigger="click"
      visible={visible}
      onVisibleChange={() => setVisible(!visible)}
    >
      <Button type="primary">{visible ? "Close" : "Add Card"}</Button>
    </Popover>
  );
}
