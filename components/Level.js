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
        <tbody>
          <tr>
            {roomData.map((row) => (
              row.map((column) => (
<td>{column.icon}</td>
              ))
              
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
