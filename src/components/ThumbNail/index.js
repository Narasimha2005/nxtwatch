import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  ThumbnailContainer,
  ThumnailImage,
  ChannelImage,
  ThumnailContent,
  Paragraph,
  Heading,
  ViewsParagraph,
} from './styledComponents'

const ThumbNail = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => (
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <ThumbnailContainer>
            <ThumnailImage src={thumbnailUrl} alt="video thumbnail" />
            <div style={{display: 'flex'}}>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ThumnailContent>
                <Heading theme={value.theme}>{title}</Heading>
                <Paragraph theme={value.theme}>{name}</Paragraph>
                <div style={{display: 'flex'}}>
                  <ViewsParagraph theme={value.theme}>
                    {viewCount} views
                  </ViewsParagraph>
                  <BsDot />
                  <ViewsParagraph theme={value.theme}>
                    {time} ago
                  </ViewsParagraph>
                </div>
              </ThumnailContent>
            </div>
          </ThumbnailContainer>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}
export default ThumbNail
