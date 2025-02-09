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
export const GamesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    list-style-type: none;
`
export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props =>
      props.theme === 'light' ? '#f1f1f1' : '#181818'};
    padding: 20px 30px;
`
export const LoaderContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const FailureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const FailureImage = styled.img`
    width: 300px;
    margin: 50px 0px;
`
export const FailureParagraph = styled.p`
    font-family: "Roboto";
    font-size: 18px;
    text-align:center;
    color: ${props => (props.theme === 'light' ? '#475569' : '#94a3b8')}
`
export const FailureHeading = styled.h1`
    font-family: "Roboto";
    font-size: 20px;
    margin:0px;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')}
`
export const FailureButton = styled.button`
    background-color: #4f46e5;
    color: #ffffff;
    padding: 10px 30px;
    border: solid 0px;
    border-radius: 5px;
`
