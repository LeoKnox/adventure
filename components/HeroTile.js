import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const playerMenu = () => {
    return (
      <button style={{ onMouseEnter: setHoverMenu(true), visibility: hoverMenu ? "visible" : "hidden" }}>
        Hit
      </button>
    );
  };
  return (
    <>
      <td
        onMouseLeave={() => setHoverMenu(!hoverMenu)}
        onMouseEnter={() => setHoverMenu(!hoverMenu)}
      >
        人
      </td>
      {() => playerMenu()}
    </>
  );
};
