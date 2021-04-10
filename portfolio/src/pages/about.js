import React from 'react'
import * as S from '../page-styles/home'


export default function About () {

    return (
        <>
            <S.AboutContainer>
                <S.AboutTitle>Steven Zapart</S.AboutTitle>
                <S.SubTitle>Full-Stack Developer</S.SubTitle>
                <S.Description>
                    The initial idea for this website was for it to be a simple site for presenting some of my work to show to potential employers.
                    However, as the development process went on, I continued to have other ideas of features to add.
                    At the time of it's creation, I was also spending time practicing algorithm challenges and I found that writing out 
                    my thought process as I work through them helped me organize my thoughts and more effectively arrive at efficient solutions. 
                    This brought to add a blog posts page where I have many posts where I walk through my process of process of problem solving.
                    I have found this writing practice to be great for ensuring I know concepts very well my thought process is clear and logical. 
                    Soon after, I also began to make blog posts about practical knowledge that walks through the process of implementing specific features 
                    that others may find interesting or useful for their own projects.
                    On top of this, I of course also just enjoy the idea of sharing what I have learned and helping others.
                    It feels good to go back and walk through a challenging problem once you've figured it out.  

                </S.Description>
            </S.AboutContainer>
        </>
    )
}


