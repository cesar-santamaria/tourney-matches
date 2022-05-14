import React from 'react'

export default function Player(props) {
  let record = "";

  if (props.wins > 0) {
    record = `Currently at ${props.wins} wins`
  } else {
    record = "Currently with no wins :("
  }
  
  return (
  <article className="Player">
    <h1>
      {props.firstName} <span>{props.gamerTag}</span> {props.lastName}
    </h1>
    {/* To be shown when there is no wins */}
    <h2 className="zero">{record}</h2>
  </article>
  )
}
