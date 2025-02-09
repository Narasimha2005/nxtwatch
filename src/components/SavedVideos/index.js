import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingThumbNail from '../TrendingThumbNail'
import ThemeContext from '../../context/ThemeContext'
import VideosContext from '../../context/VideosContext'
import {
  MainContainer,
  HomePage,
  VideosContainer,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosImage,
  NoVideosParagraph,
  HeadingContainer,
  IconContainer,
  MainHeading,
} from './styledComponents'

const SavedVideos = () => {
  const renderNoSavedVedios = () => (
    <ThemeContext.Consumer>
      {value => (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading theme={value.theme}>
            No saved videos Found
          </NoVideosHeading>
          <NoVideosParagraph theme={value.theme}>
            You can save your videos while watching them
          </NoVideosParagraph>
        </NoVideosContainer>
      )}
    </ThemeContext.Consumer>
  )
  return (
    <ThemeContext.Consumer>
      {value => (
        <div>
          <Header />
          <HomePage>
            <Sidebar />
            <MainContainer theme={value.theme} data-testid="savedVideos">
              <VideosContext.Consumer>
                {value2 => {
                  if (value2.videos.length > 0) {
                    return (
                      <VideosContainer>
                        <HeadingContainer theme={value.theme}>
                          <IconContainer theme={value.theme}>
                            <BiListPlus
                              color="#ff0000"
                              style={{height: '25px', width: '25px'}}
                            />
                          </IconContainer>
                          <MainHeading theme={value.theme}>
                            Saved Videos
                          </MainHeading>
                        </HeadingContainer>
                        {value2.videos.map(eachVideo => (
                          <TrendingThumbNail
                            key={eachVideo.id}
                            details={eachVideo}
                          />
                        ))}
                      </VideosContainer>
                    )
                  }
                  return renderNoSavedVedios()
                }}
              </VideosContext.Consumer>
            </MainContainer>
          </HomePage>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
export default SavedVideos
