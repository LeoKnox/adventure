import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const playerMenu = () => {
    return (
      <div>
        <button>Hit</button>
        <button>Block</button>
      </div>
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
      {hoverMenu ? <playerMenu /> : null}
    </>
  );
};
