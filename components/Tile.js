export default Tile = ({ tileData, position, heroPos }) => {
  if (position != "0x0") {
    return (
      <td id={position}>
        <div className="mapTile">{tileData.icon}</div>
      </td>
    );
  } else {
    return (
      <td id={position} ref={heroPos}>
        <div className="mapTile">{tileData.icon}</div>
      </td>
    );
  }
};
