import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  return (
    <>
      <h3>level page</h3>
      <table>
        <tbody>
        <tr>
          {roomData[0].map((room) => {
            <Tile tileData={room} />;
          })}
        </tr>
        </tbody>
      </table>
    </>
  );
};
