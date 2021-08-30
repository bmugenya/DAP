import React, { useState} from 'react'
import axios from '../utils/axios'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import categories from '../utils/categories'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
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


const Category= ({ fetchUrl}) => {

  const [gory, setGory] = useState('The only things you can be sure of are Chuck Norris and taxes.')
const classes = useStyles();




  const HandleQuery = async (event) => {
    // e.preventDefault()
    const request = await axios.get(fetchUrl+`${event}`)
    setGory(request.data.value)
    }

  return (
    <div className='chat_body'>


 <FormControl  className={classes.formControl}>
  <InputLabel id="gory">Category</InputLabel>
        <Select
          labelId="gory"
          id="gory"
          onChange={(e) => HandleQuery(e.target.value)}
        >
       {categories.map((category) => (
 <MenuItem key={category.id} value={category.category}>
 {category.category}
 </MenuItem>
    ))}
        </Select>

</FormControl>
    <div  style={{ background: '#ffffff' }}>
      <p
            key={1}
            className='comment_message'
            style={{ background: '#eff2f5' }}
          >
           {gory}

          </p>


    </div>

    </div>
  )
}

export default Category
