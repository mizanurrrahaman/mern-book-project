import React, { useEffect, useState } from 'react'

const FavoriteBook = () => {
    const [book, setBook] = useState([]);
    useEffect( ()=> {
      fetch("http://localhost:4000/all-books").then(res => res.json()).then(data => console.log(data))
    },[])
  return (
    <div>FavoriteBook</div>
  )
}

export default FavoriteBook