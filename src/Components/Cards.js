import { Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function Cards(props) {
  const { card, deleteCard, item } = props;
  const styleCloseMark = {
    fontSize: "13px",
    color: "red",
    padding: "5px",
  };

  return (
    <Card
      size="small"
      title={card.Name}
      style={{ marginBottom: "10px" }}
      hoverable={true}
      extra={
        <CloseOutlined
          onClick={() => deleteCard(item, card.ID)}
          style={styleCloseMark}
        />
      }
    >
      {card.Description}
    </Card>
  );
}
