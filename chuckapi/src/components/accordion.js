import React, { useState } from 'react'
import data from '../utils/data'
import WikiLeak from './Wiki'
import '../assets/accordion.css'

export default function Accordion() {
  const [leaks, setLeak] = useState(data)
  return (
      <main>
      <section>
         <img
            src='https://raw.githubusercontent.com/bmugenya/DAP/main/chuckapi/public/cloud.png'
            alt='logo'
          />
</section>
        <section className='info'>
          {leaks.map((leak) => {
            return <WikiLeak key={leak.id} {...leak} />
          })}
        </section>
      </main>

  )
}
