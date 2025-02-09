import React from 'react'

const VideosContext = React.createContext({
  videos: [],
  changeSavedVideos: () => {},
  isSaved: () => {},
})

export default VideosContext
