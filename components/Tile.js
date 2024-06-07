export default Tile = ({ tileData, position }) => {
  if (position != "0x0") {
    return (
      <td id={position}>
        <div className="mapTile">{tileData.icon}</div>
      </td>
    );
  } else {
    return (
      <td id={position}>
        <div className="mapTile">{tileData.icon}</div>
      </td>
    );
  }
};
