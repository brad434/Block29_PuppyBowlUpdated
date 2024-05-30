import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'


const cohortName = "2402-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setPlayers(data.data.player);
        setLoading(false);
        console.log(player)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPlayer();
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!player) {
    return <div>No player data available</div>
  }


  return (
    <Card>
      <CardMedia component="img" height="200" image={player.imageUrl || 'https://via.placeholder.com/150'} alt={player.name} />
      <CardContent>
        {/* why cant the component be a {} instead of a " " */}
        <Typography gutterBottom variant='h4' component='div'>
          {player.name}
        </Typography>
        <Typography variant='body1' color="text.secondary">
          Breed: {player.breed}
        </Typography>
        <Typography variant='body1' color="text.secondary">
          Status: {player.status}
        </Typography>
        <Typography variant='body1' color="text.secondary">
          Created At: {player.createdAt}
        </Typography>
        <Typography variant='body1' color="text.secondary">
          Updated At: {player.updatedAt}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Back</Button>
      </CardContent>
    </Card>
  )
}

export default PlayerDetail;