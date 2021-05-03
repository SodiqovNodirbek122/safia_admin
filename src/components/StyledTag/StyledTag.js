import React from "react"
import { Tag } from "antd"

export default function StyledTag({color, children, style, ...props}) {
  const styles = () => {
    switch(color) {
      case "link":
        return {background: 'rgba(0, 122, 255, 0.1)', color: 'rgb(0,122,255)', ...generalStyle, ...style};
      case "danger":
        return {background: 'rgba(108, 117, 125, 0.1)', color: '#6C757D', ...generalStyle, ...style};
      case "success":
        return {background: 'rgba(0, 122, 255, 0.1)', color: '#007AFF', ...generalStyle, ...style};
      default:
        return {background: 'rgba(139, 0, 55, 0.1)', color: '#8B0037', ...generalStyle, ...style}
    }
  }

  const generalStyle = {
    border: 'none', 
    // marginRight: '5px',
    padding: '7px 12px',
    borderRadius: '6px',
  }

  return (
    <Tag style={styles()} {...props}>{children}</Tag>
  )
}