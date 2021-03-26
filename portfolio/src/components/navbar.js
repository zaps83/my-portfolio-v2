import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './styles/navbar.css'
import { Link } from 'gatsby'


export default function NavBar () {

    return (
        <header className='header'>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link 
                        className='nav-link'
                        activeClassName='active'
                        to='/'>Home
                    </Link>
                    <Link 
                        className='nav-link'
                        activeClassName='active'
                        to='/about'>About
                    </Link>
                    <Link 
                        className='nav-link'
                        activeClassName='active'
                        to='/post'>Posts
                    </Link>
                    <Link 
                        className='nav-link'
                        activeClassName='active'
                        to='/project'>Projects
                    </Link>
                </nav>
                <div className='social-container'>
                    <SocialIcon url='https://github.com/zaps83' target='_blank' className='social-link' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://www.linkedin.com/in/steven-zapart-59777a152/' className='social-link' target='_blank' fgColor='#fff'  style={{height: 35, width: 35}} />
                    <a href='/media/Test_PDF.pdf' download='steven-zapart-resume.pdf' className='resume-link'>Resume</a>
                </div>
            </div>
        </header>

    )
}