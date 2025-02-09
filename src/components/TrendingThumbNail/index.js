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
  NameContainer,
  Dot,
} from './styledComponents'

const TrendingThumbNail = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNowStrict(new Date(publishedAt), 'YYYY')

  return (
    <ThemeContext.Consumer>
      {value => (
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <ThumbnailContainer>
            <ThumnailImage src={thumbnailUrl} alt="video thumbnail" />
            <div style={{display: 'flex', padding: '10px', paddingTop: '0px'}}>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ThumnailContent>
                <Heading theme={value.theme}>{title}</Heading>
                <NameContainer>
                  <Paragraph theme={value.theme}>{name}</Paragraph>
                  <div style={{display: 'flex'}}>
                    <Dot />
                    <ViewsParagraph theme={value.theme}>
                      {viewCount} views
                    </ViewsParagraph>
                    <BsDot />
                    <ViewsParagraph theme={value.theme}>
                      {time} ago
                    </ViewsParagraph>
                  </div>
                </NameContainer>
              </ThumnailContent>
            </div>
          </ThumbnailContainer>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}
export default TrendingThumbNail
