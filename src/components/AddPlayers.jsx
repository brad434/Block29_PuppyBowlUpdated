import { useState } from "react";

// import React, { useEffect, useState } from 'react'
const cohortName = "2402-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const Form = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerObj = { name, breed, status, imageUrl }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerObj }),
      });
      const data = await response.json();
      return data;
      alert('Successfully added player!')

      setName('');
      setBreed('');
      setStatus('');
      setImageUrl('');

      // const newPlayer = { name: name, breed: breed, status: status, imageUrl: imageUrl }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" name="breed" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
      <input type="text" name="status" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <input type="text" name="imageUrl" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>

  )
}

export default Form;

