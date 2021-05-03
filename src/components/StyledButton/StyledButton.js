import React from "react";
import { Button, Tooltip } from "antd";

// ************ COMMENT ************
// color can be 4 type, denger => red, link => blue, success => green, nothing => default

export default function StyledButton({
  icon,
  title,
  color,
  style,
  tooltip,
  ...args
}) {
  const Icon = icon;

  const iconStyles = () => {
    switch (color) {
      case "view":
        return { color: "rgb(255,222,0)" };
      case "link":
        return { color: "rgb(0,122,255)" };
      case "danger":
        return { color: "rgb(255,59,48)" };
      case "success":
        return { color: "#4CD964" };
      default:
        return { color: "#007AFF" };
    }
  };

  const buttonStyles = () => {
    switch (color) {
      case "view":
        return {
          background: "rgba(255, 222, 0, 0.1)",
          ...generalStyle,
          ...style,
        };
      case "link":
        return {
          background: "rgba(0, 122, 255, 0.1)",
          ...generalStyle,
          ...style,
        };
      case "danger":
        return {
          background: "rgba(255, 59, 48, 0.1)",
          ...generalStyle,
          ...style,
        };
      case "success":
        return {
          background: "rgba(76, 217, 100, 0.1)",
          ...generalStyle,
          ...style,
        };
      default:
        return {
          background: "rgba(0, 122, 255, 0.1)",
          ...generalStyle,
          ...style,
        };
    }
  };

  const generalStyle = {
    border: "none",
    marginRight: "5px",
    padding: title ? "4px 16px" : "4px 10px",
    borderRadius: "6px",
    // fontSize: "15px"
  };

  return (
    <Tooltip placement="top" title={tooltip}>
      <Button
        style={buttonStyles()}
        icon={<Icon style={iconStyles()} />}
        {...args}
      >
        <span
          style={{
            fontSize: 16,
            lineHeight: "16px",
            marginLeft: title ? 5 : 0,
            ...iconStyles(),
          }}
        >
          {title}
        </span>
      </Button>
    </Tooltip>
  );
}
