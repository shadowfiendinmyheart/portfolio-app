import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../interfaces/card";
import { SWITCHER_MODE } from "../../interfaces/switcher";
import mockCards from "./mock";

interface CardState {
  cards: Card[];
  currentCards: Card[];
  currentMode: SWITCHER_MODE;
  addCardsCounter: number;
}

const initialState: CardState = {
  cards: mockCards,
  currentCards: mockCards,
  currentMode: SWITCHER_MODE.ShowAll,
  addCardsCounter: 0,
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<SWITCHER_MODE>) {
      if (action.payload === SWITCHER_MODE.ShowAll) {
        state.currentCards = state.cards;
      } else {
        state.currentCards = state.cards.filter(
          (card) => card.mode === action.payload
        );
      }
      state.currentMode = action.payload;
    },

    pickCard(state, action: PayloadAction<string>) {
      let pickedCard: Card;
      for (const card of state.currentCards) {
        if (card.title === action.payload) {
          pickedCard = card;
          continue;
        }
        card.isActive = false;
      }

      pickedCard.isActive = !pickedCard.isActive;
    },

    deleteCard(state) {
      const pickedCard = state.currentCards.find(
        (card) => card.isActive === true
      );

      if (!pickedCard) return;

      const currentCardToDeleteIndex = state.currentCards.findIndex(
        (currentCard) => currentCard.title === pickedCard.title
      );
      state.currentCards.splice(currentCardToDeleteIndex, 1);

      const cardToDeleteIndex = state.currentCards.findIndex(
        (card) => card.title === pickedCard.title
      );
      state.cards.splice(cardToDeleteIndex, 1);
    },

    loadMoreCards(state) {
      const newCards = mockCards.map((card) => {
        return {
          ...card,
          title: card.title + String(state.addCardsCounter),
        };
      });

      state.cards = [...state.cards, ...newCards];
      if (state.currentMode === SWITCHER_MODE.ShowAll) {
        state.currentCards = state.cards;
      } else {
        state.currentCards = state.cards.filter(
          (card) => card.mode === state.currentMode
        );
      }
      state.addCardsCounter += 1;
    },
  },
});

export default cardSlice.reducer;
