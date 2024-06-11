import { fighter } from "./heroData.js";

export default FighterSkills = () => {
  return (
    <div>
      <button>Attack</button>
      <button>Defend</button>
      {fighter({param:"RED"})}
    </div>
  );
};
