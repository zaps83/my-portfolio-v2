import React, { useState, useEffect } from 'react'
import * as S from './styles/navbar'
import { 
    faHome as HomeIcon,
    faAddressCard as AboutIcon,
    faPencilAlt as PostIcon,
    faTasks as ProjectIcon,
    faFileDownload as DownloadIcon,
    faCaretDown as DropdownIcon
 } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin as LinkedinIcon, 
    faGithub as GithubIcon
} from "@fortawesome/free-brands-svg-icons";

export const NavBar = ({ theme, setTheme, children, path }) => {
    console.log('path', path)

    const [active, setActive] = useState('')

    const navTabs = []

    addTab(navTabs, HomeIcon, '/', 'Home')
    addTab(navTabs, AboutIcon, '/about', 'About')
    addTab(navTabs, PostIcon, '/post', 'Posts')
    addTab(navTabs, ProjectIcon, '/project', 'Projects')

    const linkTabs = []

    addTab(linkTabs, GithubIcon, 'https://github.com/zaps83', 'Github')
    addTab(linkTabs, LinkedinIcon, 'https://www.linkedin.com/in/steven-zapart-59777a152/', 'Linkedin')
    addTab(linkTabs, DownloadIcon, '/Test_PDF.pdf', 'Resume')

    function addTab(container, icon, page, display) {
        container.push({
            display: display,
            page: page,
            icon: icon
        })
    }

    let url = 'http://localhost:8000/'
    
    useEffect(() => {        
        //if (typeof window !== `undefined`) url = window.location.href

        function pageIdentifier(path) {
            //let page = url.match(/(?<=(localhost:8000|zapscode.netlify.app)).*/g)[0]
            if (path === '/') {
                return '/'
            } else {
                let beforeSlash = /^\/[^\/]+/g
                return path.match(beforeSlash)[0]
            }
        }

        setActive(pageIdentifier(path))
    }, [path])

    const NavTabs = navTabs.map(({ icon, page, display }) => {
        return (
            <S.GatsbyLink 
                onClick={() => setActive(page)}
                active={active} 
                tab={page}
                to={page}
                key={display}>
                <S.GatsbyInner>
                    <S.Icon icon={icon} />
                    <S.NavText>
                        {display}
                    </S.NavText>
                </S.GatsbyInner>
            </S.GatsbyLink>
        )
    })

    const LinkTabs = linkTabs.map(({ icon, page, display }) => {
        return (
            <S.SocialLink
                href={page}
                target='_blank'
                download='steven-zapart-resume'
                key={display}>
                <S.Inner>
                    <S.Icon icon={icon} />
                    {display}
                </S.Inner>
            </S.SocialLink>
        )
    })

    const Dropdown = (location) => (
        <S.DropdownContainer location={location}>
        <S.OpenDropdown 
            icon={DropdownIcon} />
        <S.Dropdown>
            {LinkTabs}
            <S.Splash theme={theme} setTheme={setTheme} />
        </S.Dropdown>
    </S.DropdownContainer>
    )

    return (
        <>
        <S.Header>
            <S.NavContainer>
                <S.Nav>
                    {NavTabs}
                    {Dropdown('mobile')}
                </S.Nav>
                <S.RightContainer>
                    <S.Links>
                        {LinkTabs}
                    </S.Links>
                    <S.ToggleContainer>
                        <S.Splash theme={theme} setTheme={setTheme} />
                    </S.ToggleContainer>
                </S.RightContainer>
                {Dropdown('desktop')}
            </S.NavContainer>
        </S.Header>
        {children}
        <S.Footer>
            <S.Links>
                {LinkTabs}
            </S.Links>
            <S.Email>Contact me at steven.zapart@gmail.com</S.Email>
        </S.Footer>
    </>

    )
}