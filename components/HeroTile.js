import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const playerMenu = () => {
    return (
      <div>
        <label>Hit</label>
        <label>Block</label>
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
      {hoverMenu ? { () =>playerMenu() } : null}
    </>
  );
};
