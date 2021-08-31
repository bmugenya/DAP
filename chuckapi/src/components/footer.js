import React from 'react'
import CustomButton from './Button'
import '../assets/footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import GradeIcon from '@material-ui/icons/Grade'
import StarsIcon from '@material-ui/icons/Stars'

export default function Footer() {
  return (
      <main>
      <h3>Digital Apprenticeship Program</h3>
      <p>This is a program implemented by EldoHub in partnership with
      Thunderbird School of Global Management (Arizona State University)
      supported by the UK-Kenya Tech Hub that places junior tech professionals in host
      businesses to work on specific digital projects for three months while receiving
       1:1 mentorship from experienced professionals in the tech industry.</p>
          <a target='_blank' rel="noreferrer" href='https://github.com/bmugenya/DAP'>
          <CustomButton text={'Code'} icon={<GitHubIcon />} />
          </a>
           <a target='_blank' rel="noreferrer" href='https://www.credly.com/users/brian-mugenya/badges'>
              <CustomButton text={'Awards'} icon={<StarsIcon />} />
              </a>
            <a target='_blank' rel="noreferrer" href='https://secure.plum.io/p/g5Wx3lfhJjj_JR-YvTmjMg'>
                  <CustomButton text={'Strength'} icon={<GradeIcon />} />
                  </a>
      </main>

  )
}
