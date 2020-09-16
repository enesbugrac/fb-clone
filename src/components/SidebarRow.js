import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.style.css";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src ? <Avatar src={src} /> : null}
      {Icon ? <Icon /> : null}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
