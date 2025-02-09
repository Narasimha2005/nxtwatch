import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './context/ThemeContext'
import VideosContext from './context/VideosContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    theme: 'light',
    videos: [],
  }

  changeTheme = () => {
    const {theme} = this.state
    if (theme === 'dark') {
      this.setState({theme: 'light'})
    } else {
      this.setState({theme: 'dark'})
    }
  }

  changeSavedVideos = newVideo => {
    const {videos} = this.state
    let newVideos = videos.filter(eachVideo => {
      if (eachVideo.id === newVideo.id) {
        return false
      }
      return true
    })
    const ispresent = videos.filter(eachVideo => {
      if (eachVideo.id === newVideo.id) {
        return true
      }
      return false
    })
    if (ispresent.length === 0) {
      newVideos = [...videos, newVideo]
    }
    this.setState({videos: newVideos})
  }

  isSaved = id => {
    const {videos} = this.state
    const ispresent = videos.filter(eachVideo => {
      if (eachVideo.id === id) {
        return true
      }
      return false
    })
    if (ispresent.length === 0) {
      return false
    }
    return true
  }

  render() {
    const {theme, videos} = this.state
    return (
      <ThemeContext.Provider value={{theme, changeTheme: this.changeTheme}}>
        <VideosContext.Provider
          value={{
            videos,
            changeSavedVideos: this.changeSavedVideos,
            isSaved: this.isSaved,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
