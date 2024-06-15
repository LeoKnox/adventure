import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(true);
  return (
    <>
      <td onMouseEnter={setHoverMenu}>人</td>
      {hoverMenu ? <label>ao</label> : null}
    </>
  );
};
