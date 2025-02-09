import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  Text,
  ErrorMsg,
  Logo,
  ShowPasswordContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassowrd = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const creds = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(creds),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        jwtToken: data.jwt_token,
      }
      this.onLoginSuccess(updatedData.jwtToken)
    } else {
      const updatedData = {
        errorMsg: data.error_msg,
        statusCode: data.status_code,
      }
      this.onLoginFailure(updatedData.errorMsg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg, showPassword} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => (
          <Container theme={value.theme}>
            <Form onSubmit={this.onLogin} theme={value.theme}>
              <Logo
                src={
                  value.theme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
              <Label htmlFor="username" theme={value.theme}>
                USERNAME
              </Label>
              <Input
                type="text"
                id="username"
                onChange={this.onChangeUsername}
                placeholder="Username"
                theme={value.theme}
              />
              <Label htmlFor="password" theme={value.theme}>
                PASSWORD
              </Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                onChange={this.onChangePassword}
                placeholder="Password"
                theme={value.theme}
              />
              <ShowPasswordContainer>
                <input
                  type="checkbox"
                  id="showpassword"
                  onChange={this.onClickShowPassowrd}
                  style={{width: '15px', height: '15px'}}
                />
                <Text htmlFor="showpassword" theme={value.theme}>
                  Show Password
                </Text>
              </ShowPasswordContainer>
              <Button type="submit">Login</Button>
              {showErrorMsg ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
            </Form>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
