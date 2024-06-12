export const heroData = {
  name: "Hero",
  class: "fighter",
  hp: 48,
};

const redClick = ({ param }) => {
  alert(param());
};

export const fighter = (param) => {
  return <button onClick={() => redClick(param)}>Red</button>;
  //return <button onClick={() => redTest()}>Red</button>;
};
