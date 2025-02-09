import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {TiHome} from 'react-icons/ti'
import {BiListPlus} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  Logo,
  ButtonLg,
  ButtonSm,
  MenuContainer,
  ThemeButton,
  LogoutButton,
  MenuItem,
  Text,
  PopupContainer,
  CloseButton,
  LogoutPopupContainer,
  PopupText,
  CancelButton,
  LogoutPopupButton,
} from './styledComponents'

const tabs = [
  {
    id: 'home',
    tab: '',
    displayText: 'Home',
    icon: <TiHome style={{width: '30px', height: '30px'}} />,
  },
  {
    id: 'trending',
    tab: 'trending',
    displayText: 'Trending',
    icon: <HiFire style={{width: '30px', height: '30px'}} />,
  },
  {
    id: 'gaming',
    tab: 'gaming',
    displayText: 'Gaming',
    icon: <SiYoutubegaming style={{width: '30px', height: '30px'}} />,
  },
  {
    id: 'saved-videos',
    tab: 'saved-videos',
    displayText: 'Saved Videos',
    icon: <BiListPlus style={{width: '30px', height: '30px'}} />,
  },
]

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const overlayStyles = {
        backgroundColor: value.theme === 'light' ? '#ffffff' : 'black',
      }
      return (
        <Navbar theme={value.theme}>
          <Link to="/">
            <Logo
              src={
                value.theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <MenuContainer>
            <li>
              <ThemeButton data-testid="theme" onClick={value.changeTheme}>
                {value.theme === 'light' ? (
                  <FaMoon style={{width: '25px', height: '25px'}} />
                ) : (
                  <FiSun
                    style={{width: '25px', height: '25px', color: 'white'}}
                  />
                )}
              </ThemeButton>
            </li>
            <li>
              <ButtonLg>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  style={{width: '25px', height: '25px'}}
                />
              </ButtonLg>
              <Popup
                modal
                trigger={
                  <ButtonSm theme={value.theme}>
                    <IoReorderThreeOutline
                      style={{width: '40px', height: '40px'}}
                    />
                  </ButtonSm>
                }
                overlayStyle={overlayStyles}
              >
                {close => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100vh',
                    }}
                  >
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      theme={value.theme}
                    >
                      <IoMdClose style={{width: '40px', height: '40px'}} />
                    </CloseButton>
                    <PopupContainer>
                      <div>
                        {tabs.map(eachTab => (
                          <Link
                            to={`/${eachTab.tab}`}
                            key={eachTab.id}
                            style={{textDecoration: 'none'}}
                          >
                            <MenuItem
                              id={eachTab.id}
                              isActive={`/${eachTab.tab}` === props.match.path}
                              theme={value.theme}
                            >
                              {eachTab.icon}
                              <Text theme={value.theme}>
                                {eachTab.displayText}
                              </Text>
                            </MenuItem>
                          </Link>
                        ))}
                      </div>
                    </PopupContainer>
                  </div>
                )}
              </Popup>
            </li>
            <li>
              <Popup
                modal
                trigger={
                  <LogoutButton theme={value.theme}>Logout</LogoutButton>
                }
              >
                {close => (
                  <LogoutPopupContainer theme={value.theme}>
                    <PopupText theme={value.theme}>
                      Are you sure, you want to logout
                    </PopupText>
                    <div>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <LogoutPopupButton
                        type="button"
                        onClick={() => {
                          const {history} = props
                          Cookies.remove('jwt_token')
                          history.replace('/login')
                        }}
                      >
                        Confirm
                      </LogoutPopupButton>
                    </div>
                  </LogoutPopupContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <ButtonSm theme={value.theme}>
                    <FiLogOut style={{width: '25px', height: '25px'}} />
                  </ButtonSm>
                }
              >
                {close => (
                  <LogoutPopupContainer theme={value.theme}>
                    <PopupText theme={value.theme}>
                      Are you sure you want to logout?
                    </PopupText>
                    <div>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <LogoutPopupButton
                        type="button"
                        onClick={() => {
                          const {history} = props
                          Cookies.remove('jwt_token')
                          history.replace('/')
                        }}
                      >
                        Logout
                      </LogoutPopupButton>
                    </div>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </li>
          </MenuContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
