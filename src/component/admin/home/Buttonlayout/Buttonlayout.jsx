import React from 'react'
import { useParams } from 'react-router-dom'

function Buttonlayout() {
    const { layout } = useParams()
  return (
    <>
    {layout}
    </>
  )
}

export default Buttonlayout