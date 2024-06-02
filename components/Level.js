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
            {roomData.map((row) => {
              <Tile tileData={row[0]} />;
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};
