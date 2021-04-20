import Contribute from './Contribute';
import MyAvatar from './MyAvatar';
import NavItem from './NavItem';

import style from './myheader.module.css';

interface Props { }

export default function NavUser(props: Props) {
    return (
        <div className={style.navUser}>
            <MyAvatar />
            <NavItem link="1" info="消息" />
            <NavItem link="1" info="动态" />
            <NavItem link="1" info="收藏" />
            <NavItem link="1" info="历史" />
            <Contribute />
        </div>
    );
}