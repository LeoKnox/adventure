import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  return (
    <>
      <h3>level page</h3>
      <table>
        {roomData.slice(1,roomData.length-1).map((y, iy) => (
          <tr>
            {y.slice(1, y.length-1).map((x, ix) => (
              <td id={iy + "-" + ix}>{x.icon}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};
