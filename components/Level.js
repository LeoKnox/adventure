import {useState} from "react";
import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  const [maxWidth, setMaxWidth] = useState(roomData.length - 1);
  const [maxLength, setMaxLength] = useState(roomData[0].length - 1);
  const [minWidth, setMinWidth] = useState(1);
  const [minLength, setMinLength] = useState(1);
  return (
    <>
      <h3>level page</h3>
      <table>
        {roomData.slice(minWidth, maxWidth).map((y, iy) => (
          <tr>
            {y.slice(minLength, maxLength).map((x, ix) => (
              <td id={iy + "-" + ix}>{x.icon}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};
