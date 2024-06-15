import {useState} from "react";

export default HeroTile = () => {
const [hoverMenu, setHoverMenu] = useState("true")
  return <td {hoverMenu ? <label>aka</label>:null}>人</td>;
  //return <td onMouseEnter={(color = "blue")}>人</td>;
};
