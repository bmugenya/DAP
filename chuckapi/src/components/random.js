import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import categories from '../utils/categories'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, IconButton } from '@material-ui/core'
import '../assets/categories.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Random = ({ fetchUrl}) => {
  const [jokes, setJokes] = useState([])
const classes = useStyles();


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request.data)
      return request
    }
  fetchData()
  }, [fetchUrl])


  return (
    <div className='chat_body'>
 <FormControl className={classes.formControl}>
  <InputLabel id="catt">Category</InputLabel>
        <Select
          labelId="catt"
          id="catt"

        >
           {categories.map((cat) => {
            <MenuItem value={cat.id}>{cat.category}
            </MenuItem>
          })}

        </Select>
</FormControl>

     <div className='chat_body' style={{ background: '#ffffff' }}>
      {posts.map((post) => (
        <>
          // <Avatar src={post.photo} />
          <p
            key={post.comment_id}
            className='comment_message'
            style={{ background: '#eff2f5' }}
          >
            <span className='chat_name'>{post.name}</span>
            {post.comment}
            <span className='chat_time'>
              <Moment fromNow>{post.timestamp}</Moment>
            </span>
          </p>
        </>
      ))}
    </div>
    </div>

    </div>
  )
}

export default Random



    

  
