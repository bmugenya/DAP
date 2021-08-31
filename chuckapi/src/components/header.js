import React, { useState } from 'react'
import '../assets/header.css'
import SearchIcon from '@material-ui/icons/Search'
import axios from '../utils/axios'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




let vdefault = [
{
categories: [],
created_at: "2020-01-05 13:42:19.576875",
icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
id: "Tg3Q-ujvSpOXmrrkZUhVHA",
updated_at: "2020-01-05 13:42:19.576875",
url: "https://api.chucknorris.io/jokes/Tg3Q-ujvSpOXmrrkZUhVHA",
value: "Chuck Norris believes that Shanimal rocks.",
},{
categories: [],
created_at: "2020-01-05 13:42:20.568859",
icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
id: "5D6ilY48Q8yoE4_ch_U8Dw",
updated_at: "2020-01-05 13:42:20.568859",
url: "https://api.chucknorris.io/jokes/5D6ilY48Q8yoE4_ch_U8Dw",
value: "The Honey Badger (most fearless animal in the Guinness Book of World Records) checks under its bed&#65279; every night for Chuck Norris.",
}
]
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Header({fetchUrl}) {
  const [query, setQuery] = useState('')
  const [data , setData] = useState([vdefault])

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
   const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
       {data.map((item ) => (
        <Card  key={item.id} className={classes.root}>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
    <p>{item.value}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

    </Card>
          ))}

    </div>
  );




  const HandleQuery = async (e) => {
    e.preventDefault()
    const request = await axios.get(fetchUrl+`${query}`)
      setData(request.data.result)
      setOpen(true);
      return request
    }




  return (
    <>
      <div className='header'>
        <div className='header_left'>
          <img
            src='https://raw.githubusercontent.com/bmugenya/assets/main/logo.png'
            alt='logo'
          />
        </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        <div className='header_right'>
          <div className='header_input'>
            <form>
              <SearchIcon />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Ask Chuck'
                type='text'
              />
              <button onClick={HandleQuery} type='submit'>
                Hidden Button
              </button>
            </form>
          </div>
          </div>
</div>

    </>
  )
}

export default Header
