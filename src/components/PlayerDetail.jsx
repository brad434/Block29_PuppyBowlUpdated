import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PlayerDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const player = location.state?.player;

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