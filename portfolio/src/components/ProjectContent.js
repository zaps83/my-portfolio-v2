import React, { useState } from 'react'
import * as S from './styles/project-content'
import { serializer } from './serializer'


const ProjectContent = ({ page, data }) => {

    const sortedData = []

    for (data of data.allSanityProject.edges) {
        if (data.node.title === 'Netflix Clone') sortedData[0] = data
        if (data.node.title === 'NBA Stats Visualization') sortedData[1] = data
        if (data.node.title === 'ECommerce Store') sortedData[2] = data
        if (data.node.title === 'Chat App') sortedData[3] = data
        if (data.node.title === 'ZapsCode (This Website)') sortedData[4] = data
    }

    page === 'home' && sortedData.splice(2)

    const demoData = {}

    for (let i = 0; i < sortedData.length; i++) {
        demoData[sortedData[i].node.title] = false
    }

    const [demo, setDemo] = useState(demoData)

    function activateDemo(title) {
        if (demo[title] === true) {
            setDemo({...demo, [title]: false})
        } else {
            for (data in demo) {
                demo[data] = false
              }
            setDemo({...demo, [title]: true})
        }
    }

    return (
        <>
        <S.Container>
            <S.Grid>
                {sortedData.map(({ node: project }) => {
                return (
                    <S.ProjectContainer key={project.title}>
                        <S.ProjectTitle>
                            {project.title}
                        </S.ProjectTitle>
                        <S.InnerContainer>
                            {demo[project.title] ? 
                                <S.DemoPlayer
                                    src={`https://stream.mux.com/${project.video.asset.playbackId}.m3u8`}
                                    autoPlay={true}
                                    controls={true}
                                    width="auto"
                                    height="auto" /> :
                                <S.Image image={project.mainImage.asset.fluid.src} alt='' />}
                            <S.Buttons>
                                {project.visitSite ? (<S.Button target='_blank' rel="noreferrer" href={project.visitSite} >
                                    Visit Site
                                </S.Button>): null}
                                
                                {project.viewCode ? (<S.Button target='_blank' rel="noreferrer" href={project.viewCode} >
                                    View Code
                                </S.Button>) : null}
                                {project.video ?
                                    <S.Button onClick={() => activateDemo(project.title)}>
                                        {demo[project.title] ? 'Stop' : 'Watch'} Demo
                                    </S.Button> : null}
                            </S.Buttons>
                        </S.InnerContainer>
                        <S.Body>
                        <S.Date>
                            {new Date(project.publishedAt).toLocaleString('en-US').slice(0, 9)}
                        </S.Date>
                        <S.Description 
                            blocks={project._rawBody} 
                            serializers={serializer} 
                            projectId='ldqg7s9d' 
                            dataset='production'/>
                            {project.relatedPosts.length ? (
                                <>
                                    <S.ReadAbout>Read More About This Project</S.ReadAbout>
                                    <S.ReadAboutLinks>
                                    {project.relatedPosts.map(({ postInfo }) => (
                                        <S.ReadAboutLink key={postInfo.postLink} to={postInfo.postLink}>{postInfo.postName}</S.ReadAboutLink>
                                    ))}    
                                    </S.ReadAboutLinks>
                                </>
                            ) : null}
                            </S.Body>
                    </S.ProjectContainer>
                )})}
            </S.Grid>
        </S.Container>
    </>
)}

export default ProjectContent
