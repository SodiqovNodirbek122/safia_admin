import React from "react"
import { Tag } from "antd"

export default function StyledTag({color, children, style, ...props}) {
  const styles = () => {
    switch(color) {
      case "link":
        return {background: 'rgba(0, 122, 255, 0.1)', color: 'rgb(0,122,255)', ...generalStyle, ...style};
      case "danger":
        return {background: 'rgba(255, 59, 48, 0.1)', color: 'rgb(255,59,48)', ...generalStyle, ...style};
      case "success":
        return {background: 'rgba(76, 217, 100, 0.1)', color: '#4CD964', ...generalStyle, ...style};
      default:
        return {background: 'rgba(139, 0, 55, 0.1)', color: '#8B0037', ...generalStyle, ...style}
    }
  }

  const generalStyle = {
    border: 'none', 
    // marginRight: '5px',
    padding: '5px 16px',
    borderRadius: '8px',
  }

  return (
    <Tag style={styles()} {...props}>{children}</Tag>
  )
}