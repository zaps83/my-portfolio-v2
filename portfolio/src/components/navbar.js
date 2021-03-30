import React, { useState } from 'react'
import * as S from './styles/navbar'

export default function NavBar ({ theme, setTheme, children }) {

    const [active, setActive] = useState('home')

    function changeTab(tab) {
        setActive(tab)
    }

    return (
        <>
        <S.Header>
            <S.NavContainer>
                <S.Nav>
                    <S.GatsbyLink onClick={() => changeTab('home')} active={active} tab={'home'}
                        to='/'>Home
                    </S.GatsbyLink>
                    <S.GatsbyLink onClick={() => changeTab('about')} active={active} tab={'about'}
                        to='/about'>About
                    </S.GatsbyLink>
                    <S.GatsbyLink onClick={() => changeTab('post')} active={active} tab={'post'}
                        to='/post'>Posts
                    </S.GatsbyLink>
                    <S.GatsbyLink onClick={() => changeTab('project')} active={active} tab={'project'}
                        to='/project'>Projects
                    </S.GatsbyLink>
                </S.Nav>
                <S.SocialContainer>
                    <S.SocialIconLink url='https://github.com/zaps83' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <S.SocialIconLink url='https://www.linkedin.com/in/steven-zapart-59777a152/' target='_blank' fgColor='#fff'  style={{height: 35, width: 35}} />
                    <S.ResumeLink href='/media/Test_PDF.pdf' download='steven-zapart-resume.pdf'>Resume</S.ResumeLink>
                    <S.Splash theme={theme} setTheme={setTheme} />
                </S.SocialContainer>
            </S.NavContainer>
        </S.Header>
        {children}
    </>

    )
}