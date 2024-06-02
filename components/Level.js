import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  roomData.map((room) => {
    console.log(`room ${room}`);
  });
  return (
    <>
      <h3>level page</h3>
      <table>
      {roomData.map((y, iy) => (
      <tr>
        {y.map((x, ix) => (
          <td id={iy + "-" + ix}>{x.icon}</td>
        ))}
      </tr>
    ))}
      </table>
    </>
  );
};
