import {Link, withRouter} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {TiHome} from 'react-icons/ti'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  MenuItem,
  Text,
  ContactText,
  ContactImages,
  ContactParagraph,
} from './styledComponents'

const tabs = [
  {
    id: 'home',
    tab: '',
    displayText: 'Home',
    icon: <TiHome style={{width: '20px', height: '20px'}} />,
  },
  {
    id: 'trending',
    tab: 'trending',
    displayText: 'Trending',
    icon: <HiFire style={{width: '20px', height: '20px'}} />,
  },
  {
    id: 'gaming',
    tab: 'gaming',
    displayText: 'Gaming',
    icon: <SiYoutubegaming style={{width: '20px', height: '20px'}} />,
  },
  {
    id: 'saved-videos',
    tab: 'saved-videos',
    displayText: 'Saved videos',
    icon: <BiListPlus style={{width: '20px', height: '20px'}} />,
  },
]

const Sidebar = props => (
  <ThemeContext.Consumer>
    {value => (
      <SideBarContainer theme={value.theme}>
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
                <Text theme={value.theme}>{eachTab.displayText}</Text>
              </MenuItem>
            </Link>
          ))}
        </div>
        <div style={{padding: '0px 20px'}}>
          <ContactText theme={value.theme}>CONTACT US</ContactText>
          <div style={{display: 'flex'}}>
            <ContactImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </div>
          <ContactParagraph theme={value.theme}>
            Enjoy! Now to see your channels and recommendations!
          </ContactParagraph>
        </div>
      </SideBarContainer>
    )}
  </ThemeContext.Consumer>
)

export default withRouter(Sidebar)
