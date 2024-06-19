import React from "react";
import CIcon from "@coreui/icons-react";
import { cibLeetcode } from "@coreui/icons";
import * as allIcons from "@coreui/icons"; // Import all icons

const CustomCoreIcon = ({ iconName }) => {
  const icon = allIcons[iconName];

  return (
    <CIcon
      style={{
        fontSize: "20px",
        width: "20px",
        height: "20px",
        "--ci-primary-color": "red",
      }}
      icon={icon}
    />
  );
};

export default CustomCoreIcon;
