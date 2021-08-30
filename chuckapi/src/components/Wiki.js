import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
const WikiLeak = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4 className='title'>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <RemoveIcon /> : <AddIcon />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default WikiLeak
