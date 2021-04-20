import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

interface Props{}

export default function MyAvatar(props: Props) {
    return (
        <Avatar size='large' icon={<UserOutlined />} />
    );
}