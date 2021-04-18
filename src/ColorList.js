import React from 'react'
import { useColors } from "./ColorProvider"
import Color from "./Color"

export default function ColorList() {
  const { colors } = useColors()
  if(!colors.length) return <div>No Colors Listed</div>
  return (
    <div>
      { colors.map(color => <Color key={colors.id} {...color} />) }
    </div>
  )
}
