import styled from 'styled-components'

export const HomePage = styled.div`
    display: flex;
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    width: 100vw;
    background-color: ${props =>
      props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
    overflow-y: auto;
`
export const VideosContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0px;
    list-style-type: none;
    @media screen and (min-width: 768px) {
        padding: 0px 20px;
    }
`
export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props =>
      props.theme === 'light' ? '#f1f1f1' : '#181818'};
    padding: 20px 30px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    width: 70px;
    height: 70px;
    background-color: ${props =>
      props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const MainHeading = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
    margin: 10px 20px;
`
export const NoVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const NoVideosImage = styled.img`
    width: 400px;
    margin: 50px 0px;
`
export const NoVideosParagraph = styled.p`
    font-family: "Roboto";
    font-size: 18px;
    text-align:center;
    color: ${props => (props.theme === 'light' ? '#475569' : '#94a3b8')}
`
export const NoVideosHeading = styled.h1`
    font-family: "Roboto";
    font-size: 20px;
    margin:0px;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')}
`
