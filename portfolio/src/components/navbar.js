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

export default function NavBar ({ theme, setTheme, children }) {

    const [active, setActive] = useState('')

    const navTabs = []

    addTab(navTabs, HomeIcon, '/', 'Home')
    addTab(navTabs, AboutIcon, '/about', 'About')
    addTab(navTabs, PostIcon, '/post', 'Posts')
    addTab(navTabs, ProjectIcon, '/project', 'Projects')

    const linkTabs = []

    addTab(linkTabs, GithubIcon, 'https://github.com/zaps83', 'Github')
    addTab(linkTabs, LinkedinIcon, 'https://www.linkedin.com/in/steven-zapart-59777a152/', 'Linkedin')
    addTab(linkTabs, DownloadIcon, '/media/Test_PDF.pdf', 'Resume')

    function addTab(container, icon, page, display) {
        container.push({
            display: display,
            page: page,
            icon: icon
        })
    }

    let url = 'http://localhost:8000/'
    
    useEffect(() => {        
        if (typeof window !== `undefined`) url = window.location.href

        function pageIdentifier(url) {
            let page = url.match(/(?<=(localhost:8000|zapscode.netlify.app)).*/g)[0]
            if (page === '' || page === '/') {
                return '/'
            } else {
                let beforeSlash = /^\/[^\/]+/g
                return page.match(beforeSlash)[0]
            }
        }

        setActive(pageIdentifier(url))
    }, [])

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

    return (
        <>
        <S.Header>
            <S.NavContainer>
                <S.Nav>
                    {NavTabs}
                </S.Nav>
                <S.RightContainer>
                    <S.Links>
                        {LinkTabs}
                    </S.Links>
                    <S.ToggleContainer>
                        <S.Splash theme={theme} setTheme={setTheme} />
                    </S.ToggleContainer>
                </S.RightContainer>
                <S.DropdownContainer>
                    <S.OpenDropdown 
                        icon={DropdownIcon} />
                    <S.Dropdown>
                        {LinkTabs}
                        <S.Splash theme={theme} setTheme={setTheme} />
                    </S.Dropdown>
                </S.DropdownContainer>
            </S.NavContainer>
        </S.Header>
        {children}
    </>

    )
}