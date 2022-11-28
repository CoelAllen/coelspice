import React, { useEffect, useState } from 'react'



function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])
  // empty array is where you would trigger the action such as [search], to run where there is a search result

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    setPopular(data.recipes);

  }
  return (
    <div>Popular</div>
  )
}

export default Popular