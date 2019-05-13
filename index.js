// Code your solutions in this file
const writeCards = (names) => {
  let cards = [];
  for (let idx = 0; idx < names.length; idx++) {
    const card = `Thank you, ${names[idx]}, for the wonderful surprise gift!`;
    cards = [...cards, card];
  }
  return cards;
};

const countdown = (number) => {
  while (number >= 0) {
    console.log(number--);
  }
};
