export default Tile = ({ tileData }) => {
  return (
    <td>
      <div className="mapTile">{tileData.icon}</div>
    </td>
  );
};
