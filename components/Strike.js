import { getDam } from "./heroData.js";

export default Strike = ({ redTest }) => {
  return (
    <>
      <button onClick={() => redTest({getDam})}>strike</button>
    </>
  );
};
