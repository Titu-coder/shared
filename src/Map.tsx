import * as React from "react"
import Hex from './Hex';

function Map(props: any) {
  return (
    <svg data-name="Layer 1" viewBox="0 0 1366 768" {...props}>
      <Hex x={0} y={0} />
      <Hex x={115} y={0} />
      <Hex x={230} y={0} />
    </svg>
  )
}

export default Map
