import "antd/dist/antd.css";
import { useState } from "react";
import Form from "./Components/form";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import { message } from "antd";
import "./App.css";
import { setLocalStorage, getLocalStorage } from "./Service/storageService";
import IsMobile from "./Service/isMobile";
import { DragDropContext } from "react-beautiful-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const key = "TRELLO_REACT_APP_ID";

export default function App() {
  const initialList = getLocalStorage(key);
  const [list, setList] = useState(initialList);
  const isMobile = IsMobile();

  const backend = isMobile ? TouchBackend : HTML5Backend;

  function getTitleIndex(Titles, item) {
    const val = item.Title ? item.Title : item;
    return Titles.findIndex((it) => it.Title === val);
  }

  function getCard(cards, ID) {
    return cards.filter((it) => it.ID === ID);
  }

  function swapCards(cards, TitleSourceIndex, TitleDestinationIndex) {
    const temp = cards[TitleSourceIndex];
    cards[TitleSourceIndex] = cards[TitleDestinationIndex];
    cards[TitleDestinationIndex] = temp;
    return cards;
  }

  //Finds if the given card exists in the given index of the list
  function cardExists(list, value, index) {
    return list[index].cards.some(function (item) {
      return item.ID === value.ID;
    });
  }

  const addTitle = (updatedList) => {
    setList(updatedList);
    message.success(`Title has been added successfully`, 1);
    setLocalStorage(key, updatedList);
  };

  //To Delete a List
  const deleteTitle = (value) => {
    const updatedList = list.filter(function (item) {
      return item.Title !== value.Title;
    });
    setList(updatedList);
    setLocalStorage(key, updatedList);
  };

  //Add a Card to the specified list
  const addCard = (
    item,
    card,
    listIndex = null,
    cardDestinationIndex = null
  ) => {
    let index;
    if (listIndex === null) index = getTitleIndex(list, item);
    else index = listIndex;

    if (cardExists(list, card, index)) {
      message.error(`${card.Name} card already exists`, 1);
      return false;
    } else if (listIndex === null) {
      // inserting at end of the cards
      let data = list.slice();
      data[index].cards.push({
        Name: card.Name,
        Description: card.Description,
        ID: card.ID,
      });
      setList(data);
      setLocalStorage(key, data);
      message.success(`${card.Name} card has successfully been added`, 1);
      return true;
    } else {
      // inserting at specified index of the list
      let data = list.slice();
      data[index].cards.splice(cardDestinationIndex, 0, card);
      setList(data);
      setLocalStorage(key, data);
      message.success(`${card.Name} card has successfully been added`, 1);
      return true;
    }
  };

  //Delete a Card from the specified list
  const deleteCard = (item, value, listIndex = null) => {
    let index;
    if (listIndex === null) index = getTitleIndex(list, item);
    else index = listIndex;

    const updatedCards = list[index].cards.filter(function (item) {
      return item.ID !== value;
    });

    let data = [...list];
    data[index].cards = updatedCards;

    setList(data);
    setLocalStorage(key, data);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      let updatedList = [...list];
      const index = getTitleIndex(list, destination.droppableId);

      updatedList[index].cards = swapCards(
        updatedList[index].cards,
        source.index,
        destination.index
      );
      setList(updatedList);
      setLocalStorage(key, updatedList);
    } else {
      const TitleDestinationIndex = getTitleIndex(
        list,
        destination.droppableId
      );
      const TitleSourceIndex = getTitleIndex(list, source.droppableId);
      const card = getCard(list[TitleSourceIndex].cards, result.draggableId);

      const isAdded = addCard(
        list[TitleDestinationIndex].cards,
        card[0],
        TitleDestinationIndex,
        destination.index
      );
      if (isAdded)
        deleteCard(
          list[TitleSourceIndex].cards,
          result.draggableId,
          TitleSourceIndex
        );
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Form list={list} addTitle={addTitle} isCard={false} />
      <DragDropContext backend={backend} onDragEnd={onDragEnd}>
        <Title
          data={list}
          deleteTitle={deleteTitle}
          deleteCard={deleteCard}
          addCard={addCard}
        />
      </DragDropContext>
    </div>
  );
}
