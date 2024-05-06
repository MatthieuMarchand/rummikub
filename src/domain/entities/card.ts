import { CARD_JOKER_NUMBER } from "../constants/card";

export type CardColor = "red" | "blue" | "black" | "yellow";

export type CardJokerNum = 0;

export type CardNum =
  | CardJokerNum
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13;

export type Card = Readonly<{
  color: CardColor;
  num: CardNum;
}>;

export const isJoker = (card: Card) => {
  return card.num === CARD_JOKER_NUMBER;
};
