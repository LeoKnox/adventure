export const heroData = {
  name: "Hero",
  class: "fighter",
  hp: 48,
};

const redClick = ({ param }) => {
  heroData.hp = heroData.hp - 19;
  alert(param() + heroData.hp);
};

export const fighter = (param) => {
  return <button onClick={() => redClick(param)}>Red</button>;
  //return <button onClick={() => redTest()}>Red</button>;
};
