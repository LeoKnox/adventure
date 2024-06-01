import { roomData } from "./roomData.js";
import { tile } from "./Tile.js";

export default Level = () => {
  return (
    <>
      <h3>level page</h3>
      <table>
        <tr>
          <Tile tileData={roomData} />
        </tr>
      </table>
    </>
  );
};
