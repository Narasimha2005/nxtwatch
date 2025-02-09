import {Component} from 'react'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import VideosContext from '../../context/VideosContext'
import {
  MainContainer,
  HomePage,
  VideoContainer,
  Heading,
  FailureButton,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailureParagraph,
  LoaderContainer,
  ResponsiveContainer,
  ContentContainer,
  ChannelImage,
  ViewsParagraph,
  SecondContainer,
  HorizontalLine,
  ThumnailContent,
  Description,
  Button,
  ButtonText,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
    videoDetails: {},
    likedStatus: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  onClickLike = () => {
    this.setState({likedStatus: 'like'})
  }

  onClickDislike = () => {
    this.setState({likedStatus: 'dislike'})
  }

  onClickSave = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  onApiSuccess = data => {
    const videoDetails = {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      videoURL: data.video_url,
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
    }
    this.setState({apiStatus: apiStatusConstants.success, videoDetails})
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onApiSuccess(data.video_details)
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
    const {apiStatus, videoDetails, likedStatus} = this.state
    const {id, title, videoURL, channel, viewCount, publishedAt, description} =
      videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const time = formatDistanceToNowStrict(new Date(publishedAt))
    if (apiStatus === apiStatusConstants.failure) {
      return this.renderFailureView()
    }
    return (
      <ThemeContext.Consumer>
        {value => (
          <VideosContext.Consumer>
            {value2 => {
              const onClickSave = () => {
                value2.changeSavedVideos(videoDetails)
              }
              return (
                <VideoContainer>
                  <ResponsiveContainer>
                    <ReactPlayer
                      url={videoURL}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </ResponsiveContainer>
                  <ContentContainer>
                    <Heading theme={value.theme}>{title}</Heading>
                    <SecondContainer>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <ViewsParagraph theme={value.theme}>
                          {viewCount} views
                        </ViewsParagraph>
                        <BsDot />
                        <ViewsParagraph theme={value.theme}>
                          {time} ago
                        </ViewsParagraph>
                      </div>
                      <div style={{display: 'flex'}}>
                        <Button
                          type="button"
                          onClick={this.onClickLike}
                          active={likedStatus === 'like'}
                        >
                          <BiLike
                            style={{
                              height: '20px',
                              width: '20px',
                              marginRight: '5px',
                            }}
                          />
                          <ButtonText active={likedStatus === 'like'}>
                            Like
                          </ButtonText>
                        </Button>
                        <Button
                          type="button"
                          onClick={this.onClickDislike}
                          active={likedStatus === 'dislike'}
                        >
                          <BiDislike
                            style={{
                              height: '20px',
                              width: '20px',
                              marginRight: '5px',
                            }}
                          />
                          <ButtonText active={likedStatus === 'dislike'}>
                            Dislike
                          </ButtonText>
                        </Button>
                        <Button
                          type="button"
                          active={value2.isSaved(id)}
                          onClick={onClickSave}
                        >
                          <BiListPlus
                            style={{
                              height: '20px',
                              width: '20px',
                              marginRight: '5px',
                            }}
                          />
                          <ButtonText active={value2.isSaved(id)}>
                            {value2.isSaved(id) ? 'Saved' : 'Save'}
                          </ButtonText>
                        </Button>
                      </div>
                    </SecondContainer>
                    <HorizontalLine theme={value.theme} />
                    <div
                      style={{
                        display: 'flex',
                        padding: '10px',
                        paddingLeft: '0px',
                      }}
                    >
                      <ChannelImage src={profileImageUrl} alt="channel logo" />
                      <ThumnailContent>
                        <Heading theme={value.theme}>{name}</Heading>
                        <ViewsParagraph theme={value.theme}>
                          {subscriberCount} subscribers
                        </ViewsParagraph>
                        <Description theme={value.theme}>
                          {description}
                        </Description>
                      </ThumnailContent>
                    </div>
                  </ContentContainer>
                </VideoContainer>
              )
            }}
          </VideosContext.Consumer>
        )}
      </ThemeContext.Consumer>
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
              <MainContainer theme={value.theme} data-testid="videoItemDetails">
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
export default VideoItemDetails
