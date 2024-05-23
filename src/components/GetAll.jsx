import { CardContent, Typography, Card, CardMedia, Grid, CircularProgress, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const cohortName = "2402-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const GetAll = () => {
  const [players, setPlayers] = useState([]); //because the object is going to return an array
  const [loading, setLoading] = useState(true); // improves users experience so there is a loading spinner or a message while the data is being fetched
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleViewDetails = (player) => {
    navigate('/player/${player.id}', { state: { player } });
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Players List
      </Typography>
      <Grid container spacing={3}>
        {players.map((player) => (
          <Grid item key={player.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={player.imageUrl || 'https://via.placeholder.com/150'} alt={player.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {player.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breed: {player.breed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {player.status}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleViewDetails(player)}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default GetAll;