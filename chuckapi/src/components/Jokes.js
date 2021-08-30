import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import Moment from 'react-moment';
import 'moment-timezone';

import { Avatar } from '@material-ui/core'
const Jokes = ({ fetchUrl}) => {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setJokes(request.data)
      return request
    }
  fetchData()
  }, [fetchUrl])


  return (


 <div className='chat_body' style={{ background: '#ffffff' }}>


          <Avatar src={jokes.icon_url} />
          <p
            key={jokes.id}
            className='comment_message'
            style={{ background: '#eff2f5' }}
          >
           {jokes.value}
            <span className='chat_time'>
            <Moment>{jokes.updated_at}</Moment>
            </span>
          </p>

    </div>


  )
}

export default Jokes
