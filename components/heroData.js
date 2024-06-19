export const heroData = {
  name: "Hero",
  class: "fighter",
  hp: 48,
  dam: 3,
};

export const getDam = heroData.dam;

const redClick = ({ param = 100 }) => {
  heroData.hp = heroData.hp - 8;
  alert(heroData.hp);
  return heroData.hp;
};

export const fighter = (param) => {
  return <button onClick={() => redClick(param)}>Reverse:{heroData.hp}</button>;
  //return <button onClick={() => redTest()}>Red</button>;
};
