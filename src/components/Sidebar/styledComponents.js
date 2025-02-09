import styled from 'styled-components'

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    height: 100vh;
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#212121'};
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const MenuItem = styled.div`
    display: flex;
    padding-left: 0px;
    width: 100%;
    background-color: ${props => {
      if (props.isActive === true) {
        if (props.theme === 'light') {
          return '#e2e8f0'
        }
        return '#313131'
      }
      return 'transparent'
    }};
    color: ${props => {
      if (props.isActive !== true) {
        if (props.theme === 'light') {
          return '#383838'
        }
        return '#909090'
      }
      return '#ff0000'
    }};
    border: solid 0px;
    align-items: center;
    padding: 10px 20px;
`
export const Text = styled.p`
    font-family: "Roboto";
    font-weight: 600;
    color: ${props => (props.theme === 'light' ? 'black' : '#ffffff')};
    font-size: 14px;
    margin: 0px;
    margin-left: 15px;
`
export const ContactText = styled.p`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? 'black' : '#ffffff')};
    font-size: 16px;
    margin-bottom: 20px;
`
export const ContactParagraph = styled.p`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? 'black' : '#ffffff')};
    font-size: 13px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 30px;
`
export const ContactImages = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`
