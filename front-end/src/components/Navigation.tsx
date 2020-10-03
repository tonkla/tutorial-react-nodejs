import React from 'react'

interface Props {
  text: string
}

export default function Navigation({ text }: Props) {
  return <div>{text}</div>
}
