import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { TitoSession, useTito } from '../hooks/useTito'

const GlobalPageStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Rubik', sans-serif;
  }
`

const Wrapper = styled.div<any>`
  width: ${props => props.width || 880}px;
  height: ${props => props.height || 440}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  background-color: #437abf;
  position: relative;
`

const Square = styled.div<any>`
  width: ${props => props.width || 880}px;
  height: ${props => props.height || 440}px;
  position: absolute;
  outline: 3px solid #fff !important;
  outline-offset: -25px;
`

const Preview = styled.div<any>`
  width: ${props => props.width || 880}px;
  height: ${props => props.height || 440}px;
  background-image: url('${props =>
        props.hero || withPrefix(props.siteCover)}');
  background-position: center;
  background-size: cover;
  position: absolute;
`

const VikingTwitter = styled.div<any>`
  font-size: 1rem;
  right: 25px;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  position: absolute;
  bottom: 22px;
  background-color: #fff;
  padding: 1px 5px 1px 5px;
`

const VikingWebsite = styled.div<any>`
  font-size: 1rem;
  left: 25px;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  position: absolute;
  bottom: 22px;
  background-color: #fff;
  padding: 1px 5px 1px 5px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  margin: 10px 60px;
  font-family: Caesar Dressing; 
  text-align: center;
  z-index: 1;
`

const SiteTitle = styled.p`
  font-size: 1rem;
  left: 50%;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 22px;
  background-color: #fff;
  padding: 1px 5px 1px 5px;
  transform: translate(-50%);
  width: max-content;
`

const AuthorImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 80px;
  margin-right: 1rem;
  display: inline-block;
  vertical-align: middle;
`

const SubTitle = styled.div`
  vertical-align: middle;
  text-align: left;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 48%;
  
`
const SpeakerDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`

const ReadTime = styled.span`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  text-align: left;
`
const TagLine = styled.span`
  font-size: .8rem;
  display: flex;
  align-items: center;
  text-align: left;
`

const AuthorsHolder = styled.div` 
  z-index: 1;
  padding-bottom: 1rem;
  display: flex;
      justify-content: center;
`;

export default (props: { pageContext: { session: TitoSession, width?: number, height?: number } }) => {
    const { width, height, session } = props.pageContext
    const heroImg = '/assets/card-bg.png';
    const { speakers } = useTito();
    const findSpeakerById = (id: string) => {
        return speakers.find((s) => s.id === id);
    };
    return (
        <Wrapper width={width} height={height}>
            <link
                href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Caesar+Dressing:400|Poppins:400,700&display=swap"
                rel="stylesheet"
            />
            <GlobalPageStyle />
            <SiteTitle>FlutterVikings 2022</SiteTitle>
            <Title>{session.title}</Title>
            <AuthorsHolder>{session.speakers.map((id) => {
                const speaker = findSpeakerById(id);
                return <SubTitle>
                    <AuthorImg src={speaker?.profilePicture} />
                    <SpeakerDetail>
                        <ReadTime>{speaker?.fullName}</ReadTime>
                        <TagLine >
                            {speaker?.tagLine}
                            <br />
                            {speaker?.links.filter(l => l.linkType === 'Twitter')[0]?.url}
                        </TagLine>
                    </SpeakerDetail>
                </SubTitle>
            })}
            </AuthorsHolder>

            <Preview
                width={width}
                height={height}
                hero={heroImg}
            />
            <VikingTwitter
                width={width}
                height={height}
            >@FlutterVikings</VikingTwitter>
            <VikingWebsite
                width={width}
                height={height}
            >FlutterVikings.com</VikingWebsite>
            <Square width={width} height={height} />
        </Wrapper>
    )
}