import { BsPersonCircle } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import myLogo from '../images/white.png';
import '../styles/footer.css';

export function Footer() {
  return (
    <div className='Footer'>
      <ul className="Footer__list">
        <li>
          <span><BsPersonCircle className='Footer__list-icon' /></span>
          <p><a href="https://alicbm.github.io/alicbarandica.github.io/" target='_blank' rel="noopener noreferrer">Who am I?</a></p>
        </li>
        <li>
          <p><a href="https://linkedin.com/in/alic-barandica" target='_blank' rel="noopener noreferrer"><BsLinkedin className='Footer__list-icon' />Linkedin</a></p>
        </li>
        <li>
          <p><a href="https://github.com/Alicbm/pelisflix" target='_blank' rel="noopener noreferrer"><BsGithub className='Footer__list-icon' />GitHub</a></p>
        </li>
      </ul>
      <div className="Footer__logo">
        <img src={myLogo} alt="My logo" />
      </div>
    </div>
  )
}