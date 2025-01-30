import React from 'react'

type PnormalTextPropsType = {
    text: string
}

const PnormalText = ({text}: PnormalTextPropsType ) => {
  return (
    <p className="mb-28 text-lg">{text}</p>
  )
}

export default PnormalText