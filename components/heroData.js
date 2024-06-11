export const heroData = {
  name: "Hero",
  class: "fighter",
};

const redClick = ({param}) => {
  alert(param);
};

export const fighter = (param ) => {
  return <button onClick={() => redClick(param)}>Red</button>;
};
