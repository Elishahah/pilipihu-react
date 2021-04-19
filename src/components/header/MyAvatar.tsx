import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

interface PropsMyAvatar{}

export default function MyAvatar(props: PropsMyAvatar) {
    return (
        <Avatar size='large' icon={<UserOutlined />} />
    );
}