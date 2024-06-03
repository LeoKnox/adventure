import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  let maxWidth = roomData.length -1;
  let maxLength = roomData[0].length-1;
  return (
    <>
      <h3>level page</h3>
      <table>
        {roomData.slice(1, maxWidth).map((y, iy) => (
          <tr>
            {y.slice(1, maxLength).map((x, ix) => (
              <td id={iy + "-" + ix}>{x.icon}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};
