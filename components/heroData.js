export const heroData = {
  name: "Hero",
  class: "fighter",
  hp: 48,
};

const redClick = ({ param }) => {
  heroData.hp = heroData.hp - 8;
  alert(heroData.hp);
  return heroData;
};

export const fighter = (param) => {
  return <button onClick={() => redClick(param)}>Reverse:{heroData.hp}</button>;
  //return <button onClick={() => redTest()}>Red</button>;
};
