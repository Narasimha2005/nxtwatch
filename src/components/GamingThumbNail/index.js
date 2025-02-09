import {Link} from 'react-router-dom'
import {
  ThumbnailContainer,
  ThumnailImage,
  Heading,
  Paragraph,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const ThumbNail = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <ThemeContext.Consumer>
      {value => (
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <ThumbnailContainer>
            <ThumnailImage src={thumbnailUrl} alt="video thumbnail" />
            <Heading theme={value.theme}>{title}</Heading>
            <Paragraph theme={value.theme}>
              {viewCount} Watching Worldwide
            </Paragraph>
          </ThumbnailContainer>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}
export default ThumbNail
