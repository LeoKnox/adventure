export default Tile = ({ tileData, position }) => {
  if (position !== "1x1") {
    return (
      <td id={position}>
        <div className="mapTile">{tileData.icon}</div>
      </td>
    );
  } else {
    return (
      <td id={position}>
        <div className="mapTile">人</div>
      </td>
    );
  }
};
