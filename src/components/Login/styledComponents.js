import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#0f0f0f'};
    box-shadow: ${props =>
      props.theme === 'light' ? '0px 4px 16px 0px #bfbfbf' : ''};
    border-radius: 10px;
    padding: 30px;
`
export const Logo = styled.img`
    width: 120px;
    height: 30px;
    margin-bottom: 30px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: ${props =>
      props.theme === 'light' ? '#f9f9f9' : '#181818'}
`
export const Label = styled.label`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? '#7e858e' : '#f4f4f4')};
    font-size: 11px;
    font-weight: bold;
    align-self: flex-start;
    margin-top: 5px;
    margin-bottom: 4px;
`
export const Input = styled.input`
    font-family: "Roboto";
    width: 100%;
    padding: 8px 10px;
    margin-bottom: 10px;
    border: solid 1px ${props =>
      props.theme === 'light' ? '#d7dfe9' : '#475569'};
    border-radius: 5px;
    font-size: 12px; 
    color: ${props => (props.theme === 'light' ? '#616e7c' : '#ffffff')};
    outline: none;
    background-color: transparent;
`
export const Button = styled.button`
    width: 100%;
    color: #ffffff;
    font-size: 13px;
    font-weight: 500;
    background-color: #3b82f6;
    font-family: "Roboto";
    border: solid 0px;
    border-radius: 6px;
    padding: 8px;
    margin-top: 25px;
    cursor: pointer;
`
export const Text = styled.label`
    font-family: "Roboto";
    color: ${props => (props.theme === 'light' ? '#181818' : '#ffffff')};
    font-size: 13px;
    margin-left: 5px;
`
export const ErrorMsg = styled.p`
    align-self: flex-start;
    font-family: "Roboto";
    color: #ff0b37;
    font-size: 14px;
    font-weight: 400;
`
export const ShowPasswordContainer = styled.div`
    display:flex;
    align-self: flex-start;
    align-items: center;
`
