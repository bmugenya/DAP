import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import Moment from 'react-moment';
import 'moment-timezone';
import '../assets/jokes.css'
import { Avatar } from '@material-ui/core'

const Jokes = ({ fetchUrl,reciever}) => {
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


          <Avatar
          className={`chat_message ${reciever && 'chat_reciever'}`}
           src={jokes.icon_url}
           style={{ background: '#ffffff' }} />
          <p
            key={jokes.id}
            className={`chat_message ${reciever && 'chat_reciever'}`}

          >
           {jokes.value}
            <span className='chat_time'>
            <Moment fromNow>{jokes.updated_at}</Moment>
            </span>
          </p>

    </div>


  )
}

export default Jokes
