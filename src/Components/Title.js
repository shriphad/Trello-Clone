import { List, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AddCardForm from "./AddCard";
import TrelloCards from "./Cards";
import { Droppable, Draggable } from "react-beautiful-dnd";
import IsMobile from "../Service/isMobile";

export default function Title(props) {
  const { data, deleteTitle, deleteCard, addCard } = props;
  const isMobile = IsMobile();
  const styleCards = {
    overflowY: "scroll",
    maxHeight: "400px",
    marginBottom: "20px",
  };

  const grid = isMobile ? { column: 1 } : { column: 4 }

  return (
    <List
      grid={grid}
      dataSource={data}
      renderItem={(item) => (
        <Droppable droppableId={item.Title}>
          {(provided) => (
            <div ref={provided.innerRef}>
              <List.Item>
                <Card
                  title={item.Title}
                  style={{ margin: "15px" }}
                  extra={
                    <CloseOutlined
                      style={{ color: "red", padding: "5px" }}
                      onClick={() => deleteTitle(item)}
                    />
                  }
                  hoverable={true}
                >
                  <div style={styleCards}>
                    {item.cards.map((card, index) => (
                      <Draggable
                        key={card.ID}
                        draggableId={card.ID}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TrelloCards
                              card={card}
                              item={item}
                              key={index}
                              deleteCard={deleteCard}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <AddCardForm
                    list={item}
                    style={{ marginLeft: "50%" }}
                    cards={item.cards}
                    addCard={addCard}
                  />
                </Card>
              </List.Item>
            </div>
          )}
        </Droppable>
      )}
    />
  );
}
