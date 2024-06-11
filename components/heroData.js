export const heroData = {
  name: "Hero",
  class: "fighter",
};

const redClick = () => {
  alert("red");
};

export const fighter = <button onClick={redClick}>Red</button>;
