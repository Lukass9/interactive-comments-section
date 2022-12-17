import styled from 'styled-components'
import { Wrapp } from '../addCommentSection/AddCommentSection'
import { WrapButton } from '../../atoms/Button/Button.style'

export const WrappReply = styled(Wrapp)`
    width: ${(props: {isReply: boolean})=> props.isReply? '90%' : '95%' };
`
export const WrapButtonReply = styled(WrapButton)` 
    align-items: flex-start;
`