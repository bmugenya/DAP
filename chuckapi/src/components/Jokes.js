import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'


const Jokes = ({ fetchUrl}) => {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request.data)
      return request
    }
  fetchData()
  }, [fetchUrl])


  return (
    <div className='row'>



    </div>
  )
}

export default Jokes
