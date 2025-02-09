import styled from 'styled-components'

export const ThemeButton = styled.button`
    display: flex;
    background: transparent;
    border: solid 0px;
    margin-right: 0px;
    @media screen and (min-width: 768px) {
        margin-right: 20px;
    }
`
export const ButtonLg = styled.button`
    display: flex;
    background: transparent;
    border: solid 0px ;
    margin-right: 20px;
    @media screen and (max-width: 767px) {
        display: none;
    }
`
export const LogoutButton = styled(ButtonLg)`
    padding: 5px 15px;
    color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
    font-family: "Roboto";
    font-weight: 500;
    border: solid 2px ${props =>
      props.theme === 'light' ? '#3b82f6' : '#ffffff'};
    border-radius: 5px;
    cursor: pointer;
`
export const ButtonSm = styled.button`
    display: flex;
    color: ${props => (props.theme === 'light' ? 'black' : '#ffffff')};
    background: transparent;
    border: solid 0px;
    margin-right: 0px;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#212121'};
    padding: 20px 30px;
    align-items: center;
`
export const MenuContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
    margin: 0px;
`
export const Logo = styled.img`
    height: 30px;
    width: 120px;
`
export const MenuItem = styled.div`
    display:flex;
    align-items: center;
    width: 100vw;
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
    padding: 10px ;
    padding-left: 30vw;
`
export const Text = styled.p`
    font-family: "Roboto";
    font-weight: 600;
    color: ${props => (props.theme === 'light' ? 'black' : '#ffffff')};
    font-size: 20px;
    margin: 0px;
    margin-left: 15px;
`
export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 50vh;
`
export const CloseButton = styled.button`
    background: transparent;
    color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
    border: solid 0px;
    align-self: flex-end;
    margin: 30px;
    cursor: pointer;
`
export const LogoutPopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#181818'};
    padding: 30px 30px;
    border-radius: 10px;
`
export const PopupText = styled.p`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
    margin-top: 0px;
    margin-bottom: 30px;
`
export const CancelButton = styled.button`
    font-family:"Roboto";
    font-weight: 400;
    color: ${props => (props.theme === 'light' ? '#94a3b8' : '#64748b')};
    padding: 8px 10px;
    border: solid 1px ${props =>
      props.theme === 'light' ? '#94a3b8' : '#64748b'};
    background-color: transparent;
    margin-right: 20px;
    border-radius: 3px;
    cursor: pointer;
`
export const LogoutPopupButton = styled.button`
    color: #ffffff;
    padding: 9px 10px;
    border: solid 0px;
    background-color: #3b82f6;
    border-radius: 3px;
    cursor: pointer;
`
