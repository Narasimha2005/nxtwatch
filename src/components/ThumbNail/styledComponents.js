import styled from 'styled-components'

export const ThumnailImage = styled.img`
    width: 250px;
    height: 150px;
    background-color: transparent;
    margin-bottom: 5px;
`
export const ThumbnailContainer = styled.li`
    width: 260px;
    margin: 20px 5px;
`
export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 40px;
`
export const ThumnailContent = styled.div`
    padding:10px;
    padding-top: 0px;
`
export const Heading = styled.p`
    font-family: "Roboto";
    line-height: 1.5;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')};
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 13px;
`
export const Paragraph = styled.p`
    font-family: "Roboto";
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 12px;
    color: ${props => (props.theme === 'light' ? '#475569' : '#64748b')};
`
export const ViewsParagraph = styled(Paragraph)`
    margin: 0px;
`
