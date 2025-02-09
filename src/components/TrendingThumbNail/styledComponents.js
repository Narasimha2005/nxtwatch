import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const ThumnailImage = styled.img`
    width: 100%;
    height: 220px;
    background-color: transparent;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
        width: 250px;
        height: 150px;
        margin-bottom: 5px;
    }
`
export const ThumbnailContainer = styled.li`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin: 20px;
    }
`
export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 40px;
    margin-left: 10px;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const ThumnailContent = styled.div`
    padding:10px;
    padding-top: 0px;
    margin-left: 10px;
    @media screen and (min-width: 768px) {
        padding: 0px;
        margin: 0px;
    }
`
export const Heading = styled.p`
    font-family: "Roboto";
    font-weight: 500;
    line-height: 1.5;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')};
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 18px;
`
export const Paragraph = styled.p`
    font-family: "Roboto";
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 12px;
    color: ${props => (props.theme === 'light' ? '#475569' : '#64748b')};
`
export const Dot = styled(BsDot)`
    display:flex;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const ViewsParagraph = styled(Paragraph)`
    margin: 0px;
`
export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 768px) {
        flex-direction: column;
    }
`
