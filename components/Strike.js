import { heroData } from "./heroData.js";

export default Strike = ({ redTest }) => {
  return (
    <>
      <button onClick={() => redTest(heroData.dam)}>strike</button>
    </>
  );
};
