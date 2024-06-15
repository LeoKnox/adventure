import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  return (
    <>
      <td onMouseOut={()=> setHoverMenu(!hoverMenu)} onMouseEnter={() => setHoverMenu(true)}>人</td>
      {hoverMenu ? <label>ao</label> : null}
    </>
  );
};
