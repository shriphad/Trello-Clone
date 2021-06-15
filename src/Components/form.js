import { Form, Input, Col, Button, message, Row } from "antd";
import IsMobile from "../Service/isMobile";

function titleExists(list, val) {
  return list.some(function (it) {
    return it.Title === val;
  });
}

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
};

export default function Demo(props) {
  const { list, addTitle, isCard } = props;
  const isMobile = IsMobile();
  const [form] = Form.useForm();
  const styleTitleForm = {
    display: "flex",
    flexDirection: "row"
  };
  const formCardDescription = (
    <Form.Item
      name={["user", "Description"]}
      label="Description"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input.TextArea allowClear={true} />
    </Form.Item>
  );
  const inputStyle = isMobile ? { width: "100%", whiteSpace: "nowrap" } : { width: "100%" };

  //Preprocess the form data and adds the Title if it's unique
  const AddTitle = (values) => {
    const val = values.user.Name;
    const obj = {
      Title: val,
      cards: [],
    };
    //If Title already exists, then exit immediately
    if (titleExists(list, val)) {
      message.error(`${val} Title already exists`, 1);
      return;
    } else {
      //If its a Unique Title then add.
      const updatedList = [...list, obj];
      addTitle(updatedList);
    }
    form.resetFields();
  };

  //Preprocess the form data and adds the Cards if it's unique
  const AddCard = (values) => {
    form.resetFields();
    props.add(values);
  };

  return (

    <Form
      form={form}
      name="nest-messages"
      onFinish={isCard ? AddCard : AddTitle}
      validateMessages={validateMessages}
    >
      <div style={isCard ? null : styleTitleForm}>
        <Row>
          <Col span={12} >
            <Form.Item
              name={["user", "Name"]}
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input style={inputStyle} allowClear={true} />
            </Form.Item>
          </Col>
          {isCard ? formCardDescription : null}
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {isCard ? "Add Card" : "Add Title"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Form>
  );
}
