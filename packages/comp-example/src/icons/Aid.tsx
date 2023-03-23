import React from 'react'
import { withSVG, IconProps } from '../helper/withSVG'

export const Aid: React.FC<IconProps> = ({ color = 'currentColor', secondaryColor, set = 'line' }) => {
  const Line = () => (
    <text x="0" y="18" style={{ fill: 'red', font: 'italic 12px san-serif' }}>
      Line
    </text>
  )
  const Solid = () => (
    <text x="0" y="18" style={{ fill: 'red', font: 'italic 12px san-serif' }}>
      Solid
    </text>
  )
  const Lineal = () => <text>Lineal</text>
  const Bulk = () => <text>Bulk</text>

  switch (set) {
    case 'solid':
      return <Solid />
    case 'lineal':
      return <Lineal />
    case 'bulk':
      return <Bulk />
    default:
      return <Line />
  }
}

export default withSVG(Aid)
