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
      props.theme === 'light' ? '#f1f1f1' : '#181818'};
    overflow-y: auto;
`
export const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
`
export const BuyButton = styled.button`
    font-family: "Roboto";
    font-size: 12px;
    padding: 5px 10px;
    background-color: #ffffff;
    border: solid 2px black;
`
export const VideosContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
    list-style-type: none;
`
export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 25px;
    padding-bottom: 0px;
`
export const Logo = styled.img`
    height: 30px;
    width: 120px;
`
export const BannerText = styled.p`
    font-family: "Roboto";
    max-width: 250px;
    font-size: 14px;
`
export const SearchInput = styled.input`
    height: 30px;
    width: 90%;
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#181818'};
    color: ${props => (props.theme === 'light' ? '#181818' : '#ffffff')};
    padding: 5px 10px;
    @media screen and (min-width: 576px) {
        width: 320px;
    }
    border: solid 1px ${props =>
      props.theme === 'light' ? '#cccccc' : '#606060'};
    outline: none;
`
export const SearchIcon = styled.button`
    display: flex;
    align-items:center;
    justify-content: center;
    height: 30px;
    width: 70px;
    color: #606060;
    background-color: ${props =>
      props.theme === 'light' ? '#f1f1f1' : '#313131'};
    border: solid 1px ${props =>
      props.theme === 'light' ? '#cccccc' : '#606060'};
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
export const NoVideosContainer = styled(FailureContainer)``
export const NoVideosImage = styled(FailureImage)``
export const NoVideosParagraph = styled(FailureParagraph)``
export const NoVideosHeading = styled(FailureHeading)``
