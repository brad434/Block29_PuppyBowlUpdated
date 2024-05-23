import React, { useEffect, useState } from 'react'
const cohortName = "2402-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const GetAll = () => {
  const [players, setPlayers] = useState([]); //because the object is going to return an array
  const [loading, setLoading] = useState(true); // improves users experience so there is a loading spinner or a message while the data is being fetched
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPlayers(data.data.players)
        console.log(players)
        setLoading(false);
        return players;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}, {player.breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default GetAll