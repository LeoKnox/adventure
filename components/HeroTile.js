import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const playerMenu = () => {
    return (
      <button style={{ visibility: hoverMenu ? "visible" : "hidden" }}>
        Hit
      </button>
    );
  };
  return (
    <div>
      <td
        onMouseLeave={() => setHoverMenu(!hoverMenu)}
        onMouseEnter={() => setHoverMenu(!hoverMenu)}
      >
        人
      </td>
      {playerMenu()}
    </div>
  );
};
