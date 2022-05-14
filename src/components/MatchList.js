import React from 'react'
import matchData from '../data/matchData';
import Match from './Match'

/* 
Remember that each component needs to be passed props.

To create the array, iterate over matchData using .map.

Replace the single match in Match.js with the array you create.

Toggle the answer when you are ready.
*/

export default function MatchList(props) {
  const matches = matchData.map((match)=>{
   return <Match players={match.players} winner={match.winner} scoreDifference={match.scoreDifference}/>
  });

  return (
  <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
  </section>
  )
}
