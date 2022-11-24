import React from 'react'

export const Image = ({props}) => {
  return (
    <img
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        onClick={props.onClick}
    >
    </img>
  )
}
