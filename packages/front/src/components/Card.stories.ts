import Card from "./Card.vue";

export default {
  component: Card,
  title: "Card",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["red", "blue", "black", "yellow"],
      control: { type: "inline-radio" },
    },
    number: {
      options: Array(14)
        .fill(null)
        .map((_, index) => index),
      control: { type: "inline-radio" },
    },
  },
};

export const Red = {
  args: {
    color: "red",
    number: 11,
  },
};
export const Blue = {
  args: {
    color: "blue",
    number: 11,
  },
};
export const Yellow = {
  args: {
    color: "yellow",
    number: 11,
  },
};
export const Black = {
  args: {
    color: "black",
    number: 11,
  },
};
