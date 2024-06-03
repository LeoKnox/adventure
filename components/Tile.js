export default Tile = ({ tileData, position }) => {
  return (
    <td id={position}>
      <div className="mapTile">{tileData.icon}</div>
    </td>
  );
};
