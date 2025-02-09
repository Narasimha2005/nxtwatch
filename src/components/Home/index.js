import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThumbNail from '../ThumbNail'
import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  HomePage,
  Banner,
  BuyButton,
  SearchBar,
  VideosContainer,
  Logo,
  BannerText,
  SearchIcon,
  SearchInput,
  NoVideosImage,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosParagraph,
  FailureParagraph,
  FailureHeading,
  FailureImage,
  FailureContainer,
  FailureButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    searchq: '',
    apiStatus: apiStatusConstants.loading,
    videos: [],
    bannerStatus: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearch = event => {
    this.setState({searchq: event.target.value})
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
    const {searchq} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchq}`,
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
            alt="failure view"
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
    if (videos.length > 0) {
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
            return <ThumbNail key={eachVideo.id} details={updatedData} />
          })}
        </VideosContainer>
      )
    }
    return (
      <ThemeContext.Consumer>
        {value => (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading theme={value.theme}>
              No Search Results Found
            </NoVideosHeading>
            <NoVideosParagraph theme={value.theme}>
              Try different key words or remove search filter
            </NoVideosParagraph>
            <FailureButton onClick={this.getVideos}>Retry</FailureButton>
          </NoVideosContainer>
        )}
      </ThemeContext.Consumer>
    )
  }

  removeBanner = () => {
    this.setState({bannerStatus: false})
  }

  render() {
    const {apiStatus, bannerStatus, searchq} = this.state
    return (
      <ThemeContext.Consumer>
        {value => (
          <div>
            <Header />
            <HomePage>
              <Sidebar />
              <MainContainer theme={value.theme} data-testid="home">
                {bannerStatus ? (
                  <Banner data-testid="banner">
                    <div>
                      <Logo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BuyButton>GET IT NOW</BuyButton>
                    </div>
                    <button
                      type="button"
                      style={{
                        backgroundColor: 'transparent',
                        border: 'solid 0px',
                        alignSelf: 'flex-start',
                      }}
                      data-testid="close"
                      onClick={this.removeBanner}
                    >
                      <IoMdClose />
                    </button>
                  </Banner>
                ) : null}
                <SearchBar theme={value.theme}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    theme={value.theme}
                    value={searchq}
                    onChange={this.onChangeSearch}
                  />
                  <SearchIcon
                    type="button"
                    onClick={this.getVideos}
                    theme={value.theme}
                    data-testid="searchButton"
                  >
                    <IoMdSearch style={{height: '20px', width: '20px'}} />
                  </SearchIcon>
                </SearchBar>
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
export default Home
