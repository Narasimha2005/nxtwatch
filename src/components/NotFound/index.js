import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  HomePage,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => (
      <div>
        <Header />
        <HomePage>
          <Sidebar />
          <FailureContainer theme={value.theme}>
            <FailureImage
              src={
                value.theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              }
              alt="not found"
            />
            <FailureHeading theme={value.theme}>Page Not Found</FailureHeading>
            <FailureParagraph theme={value.theme}>
              We are sorry, the page you requested could not be found.
            </FailureParagraph>
          </FailureContainer>
        </HomePage>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default NotFound
