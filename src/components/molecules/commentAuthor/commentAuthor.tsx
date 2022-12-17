import { User } from "../../../asserts/interfaces/interfaces";
import { Avatar } from "../../atoms/avatar/Avatar";
import { CreatedAt, UserName, UserStyle, WrapRow } from "./commentAuthor.style";

interface Props {
    user: User,
    isCurrentlyUser?: boolean,
    createdAt?: string
}

export const CommentAuthor: React.FC<Props> = ({ user: { username, image: { png } }, createdAt,isCurrentlyUser}) => {
    return (
        <WrapRow>
                {console.log(png)}
                <Avatar src={process.env.PUBLIC_URL + png} alt="avatar" />
                <UserName> {username} </UserName>
                {isCurrentlyUser ? <UserStyle>you</UserStyle> : null}
                <CreatedAt> {createdAt} </CreatedAt>
        </WrapRow>
    )
};