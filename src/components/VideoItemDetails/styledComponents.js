import styled from 'styled-components'

export const HomePage = styled.div`
    display: flex;
`
export const ResponsiveContainer = styled.div`
    height: 32vh;
    @media screen and (min-width: 768px) {
        height: 40vw;
    }
    margin-bottom: 20px;
`
export const ContentContainer = styled.div`
    padding: 10px;
    @media screen and (min-width: 768px) {
        padding: 0px;
    }
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: ${props =>
      props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
    overflow-y: auto;
`
export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    @media screen and (min-width: 768px) {
        padding: 20px;
    }
    height: 100vh;
`
export const HorizontalLine = styled.hr`
    border-color: ${props => (props.theme === 'light' ? '' : '#64748b')};
`
export const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`
export const ViewsParagraph = styled.p`
    font-family: "Roboto";
    margin:0px;
    font-size: 12px;
    color: ${props => (props.theme === 'light' ? '#475569' : '#64748b')};
`
export const ButtonText = styled(ViewsParagraph)`
    font-weight: bold;
    color: ${props => {
      if (props.active !== true) {
        if (props.theme === 'light') {
          return '#475569'
        }
        return '#64748b'
      }
      return '#2563eb'
    }};
`
export const Description = styled.p`
    font-family: "Roboto";
    margin-top:30px;
    line-height: 1.5;
    font-size: 13px;
    color: ${props => (props.theme === 'light' ? '#475569' : '#ffffff')};
`
export const Heading = styled.p`
    font-family: "Roboto";
    font-weight: 400;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')};
    margin: 5px 0px;
    font-size: 14px;
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
export const LoaderContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-left: 10px;
`
export const ThumnailContent = styled.div`
    padding:10px;
    padding-top: 0px;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    border: solid 0px;
    background-color: transparent;
    padding-left: 0px;
    padding-right: 12px;
    color: ${props => {
      if (props.active !== true) {
        if (props.theme === 'light') {
          return '#475569'
        }
        return '#64748b'
      }
      return '#2563eb'
    }};
    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`
