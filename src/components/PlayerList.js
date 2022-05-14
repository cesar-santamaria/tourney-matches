import React from 'react'
import matchData from '../data/matchData';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import Player from './Player';

export default function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  
  const players = parsedPlayerData.map((player)=>{
    return (
    <Player 
      key={player.gamerTag} 
      gamerTag={player.gamerTag} 
      firstName={player.firstName} 
      lastName={player.lastName} 
      wins={player.wins} />);
  });

  return (
  <section className="PlayerList">
    <h1>Current participating players</h1>
    {players}
  </section>
  )
}
