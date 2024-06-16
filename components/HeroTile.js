import { useState } from "react";

export default HeroTile = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const playerMenu = () => {
    return (
      <>
        <select id="heroSelection">
          <option id="attack">attack</option>
          <option id="defend">defend</option>
        </select>
      </>
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
      {hoverMenu ? { playerMenu } : null}
    </>
  );
};
