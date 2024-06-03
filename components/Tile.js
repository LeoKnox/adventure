export default Tile = ({ tileData, position }) => {
  return (
    <td>
      <div className="mapTile" id={position}>
        {tileData.icon}
      </div>
    </td>
  );
};
