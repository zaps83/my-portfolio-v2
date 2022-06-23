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

    const [active, setActive] = useState('')

    useEffect(() => {        
        setActive(path === '/' ? path : path.match(/^\/[^\/]+/g)[0])
    }, [path])

    const navTabs = []
    addTab(navTabs, HomeIcon, '/', 'Home')
    addTab(navTabs, ProjectIcon, '/projects', 'Projects')
    addTab(navTabs, PostIcon, '/posts', 'Blog Posts')
    addTab(navTabs, AboutIcon, '/about', 'About Me')


    const linkTabs = []
    addTab(linkTabs, GithubIcon, 'https://github.com/zaps83', 'Github')
    addTab(linkTabs, LinkedinIcon, 'https://www.linkedin.com/in/steven-zapart-59777a152/', 'Linkedin')
    // addTab(linkTabs, DownloadIcon, '/Steven Zapart Resume.pdf', 'Resume')
    // new
    function addTab(container, icon, page, display) {
        container.push({
            display: display,
            page: page,
            icon: icon
        })
    }

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

    const LinkTabs = (location) => {
        
        return linkTabs.map(({ icon, page, display }) => {
            return (
                <S.SocialLink
                    href={page}
                    target='_blank'
                    download='Steven Zapart Resume'
                    key={display}>
                    <S.Inner location={location}>
                        <S.Icon icon={icon} />
                        {display}
                    </S.Inner>
                </S.SocialLink>
            )
        })
    }

    const Dropdown = (device) => (
        <S.DropdownContainer device={device}>
            <S.OpenDropdown 
                icon={DropdownIcon} />
            <S.Dropdown>
                {LinkTabs('dropdown')}
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
                        {LinkTabs('header')}
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
                {LinkTabs('footer')}
            </S.Links>
            <S.Email>Contact me at steven.zapart@gmail.com</S.Email>
        </S.Footer>
    </>

    )
}