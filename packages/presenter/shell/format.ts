import { CARD_JOKER_NUMBER } from "@rumi/domain/constants/card";
import { CardDto } from "@rumi/domain/dtos/card";
import { CombinationDto } from "@rumi/domain/dtos/combination";
import chalk from "chalk";

export const formatCard = (card: CardDto): string =>
  chalk[card.color](card.number === CARD_JOKER_NUMBER ? "J" : card.number);

export const formatCombination = (combination: CombinationDto): string =>
  `(${combination.cards.map(formatCard).join(" ")})`;
