import React, { useState, useEffect } from 'react'
import * as S from './styles/navbar'
import { 
    faHome as HomeIcon,
    faAddressCard as AboutIcon,
    faPencilAlt as PostIcon,
    faTasks as ProjectIcon,
    faFileDownload as DownloadIcon,
 } from '@fortawesome/free-solid-svg-icons'



export default function NavBar ({ theme, setTheme, children }) {

    const [active, setActive] = useState('')

    const tabs = []

    addTab('Home', '/', HomeIcon)
    addTab('About', '/about', AboutIcon)
    addTab('Posts', '/post', PostIcon)
    addTab('Projects', '/project', ProjectIcon)

    function addTab(display, page, icon) {
        tabs.push({
            display: display,
            page: page,
            icon: icon
        })
    }

    const url = window.location.href

    function pageIdentifier(url) {
        let page = url.match(/(?<=localhost:8000).*/g)[0] // change this once I know the real name of the website
        let beforeSlash = /^\/[^\/]+/g
        if (page === '' || page === '/') {
          return '/'
        } else {
          return page.match(beforeSlash)[0]
        }
      }
    
    useEffect(() => {
        setActive(pageIdentifier(url))
    }, [url])

    console.log('active', active)

    return (
        <>
        <S.Header>
            <S.NavContainer>
                <S.Nav>
                    {tabs.map(({ display, page, icon}) => {
                        return (
                            <S.GatsbyLink 
                                active={active} 
                                tab={page}
                                to={page}>
                                <S.Inner>
                                    <S.NavIcon icon={icon} />
                                    {display}
                                </S.Inner>
                            </S.GatsbyLink>
                        )
                    })}
                </S.Nav>
                <S.RightContainer>
                    <S.SocialContainer>
                        <S.SocialIconLink 
                            url='https://github.com/zaps83' 
                            target='_blank' 
                            fgColor={'#fff'} 
                            style={{height: 30, width: 30}} />
                        <S.SocialIconLink 
                            url='https://www.linkedin.com/in/steven-zapart-59777a152/' 
                            target='_blank' 
                            fgColor='#fff'  
                            style={{height: 30, width: 30}} />
                        <S.ResumeLink 
                            href='/media/Test_PDF.pdf' 
                            download='steven-zapart-resume.pdf'>
                            <S.NavIcon icon={DownloadIcon} />Resume
                        </S.ResumeLink>
                    </S.SocialContainer>
                    <S.ToggleContainer>
                        <S.Splash theme={theme} setTheme={setTheme} />
                    </S.ToggleContainer>
                </S.RightContainer>
                <S.DropdownContainer>
                    <S.Picture 
                    icon={DownloadIcon} />
                    <S.Dropdown>
                        <S.Group>
                        <S.SocialIconLink 
                            url='https://github.com/zaps83' 
                            target='_blank' 
                            fgColor={'#fff'} 
                            style={{height: 30, width: 30}} />Github
                        </S.Group>
                        <S.Group>
                        <S.SocialIconLink 
                            url='https://www.linkedin.com/in/steven-zapart-59777a152/' 
                            target='_blank' 
                            fgColor='#fff'  
                            style={{height: 30, width: 30}} />LinkedIn
                        </S.Group>
                        <S.Group>
                            <S.ResumeLink 
                                href='/media/Test_PDF.pdf' 
                                download='steven-zapart-resume.pdf'>
                                <S.ResumeIcon icon={DownloadIcon} />
                                Resume
                            </S.ResumeLink>
                        </S.Group>
                        <S.Group>
                            <S.Splash theme={theme} setTheme={setTheme} />Dark Mode
                        </S.Group>
                    </S.Dropdown>
                </S.DropdownContainer>
            </S.NavContainer>
        </S.Header>
        {children}
    </>

    )
}