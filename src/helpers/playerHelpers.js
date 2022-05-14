/* 
The preparePlayerData function will be converting playerData from an object to an array. 

The addWinsToPlayers function will add a wins key to every player.

preparePlayerData - To make this function work, preparePlayerData will need the playerData object as an input and will output an array of players.
*/

export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
   return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
};