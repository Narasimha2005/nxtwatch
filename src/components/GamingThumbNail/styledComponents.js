import styled from 'styled-components'

export const ThumnailImage = styled.img`
    width: 170px;
    height: 280px;
    margin-bottom: 5px;
    @media screen and (min-width: 768px) {
        width: 200px
    }
`
export const ThumbnailContainer = styled.li`
    width: 170px;
    margin: 20px 10px;
    background-color: transparent;
    @media screen and (min-width: 768px) {
        width: 200px;
        margin: 20px 7px;
    }
`
export const Heading = styled.p`
    font-family: "Roboto";
    font-weight: 500;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')};
    margin: 0px;
    font-size: 16px;
`
export const Paragraph = styled.p`
    font-family: "Roboto";
    margin: 0px;
    margin-top: 5px;
    font-size: 15px;
    color: ${props => (props.theme === 'light' ? '#475569' : '#64748b')};
`
