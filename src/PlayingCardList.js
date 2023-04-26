import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, setCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")
  console.log(cards)
  // const addCard = async () => {
  //   setCards(cards => [...cards, { ...cards.data, id: uuid() }]);
  // };
  // console.log(cards)
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards ? cards.map(cardData => (
          <PlayingCard key={cardData.deck_id} front={cardData.cards[0].image} />
        )) : <div></div>}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
