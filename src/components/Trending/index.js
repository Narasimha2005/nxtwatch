import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingThumbNail from '../TrendingThumbNail'
import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  HomePage,
  VideosContainer,
  HeadingContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureButton,
  IconContainer,
  MainHeading,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
    videos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  onApiSuccess = data => {
    const {videos} = data
    this.setState({apiStatus: apiStatusConstants.success, videos})
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/trending`,
      options,
    )
    const data = await response.json()
    if (response.ok === true) {
      this.onApiSuccess(data)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => (
        <FailureContainer>
          <FailureImage
            src={
              value.theme === 'light'
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
          />
          <FailureHeading theme={value.theme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureParagraph theme={value.theme}>
            We are having some trouble completing your request.
            <br />
            Please try again.
          </FailureParagraph>
          <FailureButton onClick={this.getVideos}>Retry</FailureButton>
        </FailureContainer>
      )}
    </ThemeContext.Consumer>
  )

  renderVideos = () => {
    const {apiStatus, videos} = this.state
    if (apiStatus === apiStatusConstants.failure) {
      return this.renderFailureView()
    }
    return (
      <VideosContainer>
        {videos.map(eachVideo => {
          const updatedData = {
            id: eachVideo.id,
            title: eachVideo.title,
            thumbnailUrl: eachVideo.thumbnail_url,
            viewCount: eachVideo.view_count,
            publishedAt: eachVideo.published_at,
            channel: {
              name: eachVideo.channel.name,
              profileImageUrl: eachVideo.channel.profile_image_url,
            },
          }
          return <TrendingThumbNail key={eachVideo.id} details={updatedData} />
        })}
      </VideosContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => (
          <div>
            <Header />
            <HomePage>
              <Sidebar />
              <MainContainer theme={value.theme} data-testid="trending">
                <HeadingContainer theme={value.theme}>
                  <IconContainer theme={value.theme}>
                    <HiFire
                      color="#ff0000"
                      style={{height: '25px', width: '25px'}}
                    />
                  </IconContainer>
                  <MainHeading theme={value.theme}>Trending</MainHeading>
                </HeadingContainer>
                {apiStatus === apiStatusConstants.loading ? (
                  <LoaderContainer data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color={value.theme === 'light' ? 'black' : 'white'}
                      height="50"
                      width="50"
                    />
                  </LoaderContainer>
                ) : (
                  this.renderVideos()
                )}
              </MainContainer>
            </HomePage>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
