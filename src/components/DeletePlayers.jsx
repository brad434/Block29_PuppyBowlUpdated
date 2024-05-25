// import { useState } from "react";
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

// import React, { useEffect, useState } from 'react'
const cohortName = "2402-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const DeletePlayers = async (playerId) => {
  // e.preventDefault();

  try {
    const response = await fetch(API_URL + `/${playerId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    alert('Player deleted.')
    return data;

  } catch (error) {
    console.error(error)
    alert('Error deleting player: ${error.message}');
  }


  // return (
  //   <Box component="form" sx={{
  //     '& .MuiTextField-root': { m: 1, width: '25ch' },
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   }}
  //     noValidate
  //     autoComplete="off"
  //     onSubmit={handleSubmit}
  //   >
  //     <TextField
  //       required
  //       id="name"
  //       name="name"
  //       label="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <TextField
  //       required
  //       id="breed"
  //       name="breed"
  //       label="Breed"
  //       value={breed}
  //       onChange={(e) => setBreed(e.target.value)}
  //     />

  //     <FormControl sx={{ m: 1, minWidth: 120 }}>
  //       <InputLabel id="status-label">Status</InputLabel>
  //       <Select labelId="status-label" id="status" name="status" value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
  //         <MenuItem value="field">field</MenuItem>
  //         <MenuItem value="bench">bench</MenuItem>
  //       </Select>
  //     </FormControl>
  //     <TextField required id="imageUrl" name="imageUrl" label="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
  //     <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
  //       Submit
  //     </Button>
  //   </Box>

  // )
}


export default DeletePlayers