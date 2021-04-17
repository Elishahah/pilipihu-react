import React from 'react';

import style from './myheader.module.css';

import { Input, Space, Avatar, Button } from 'antd';
 import { UserOutlined, DownOutlined } from '@ant-design/icons';

interface PropsHeader { }

function MyHeader(props: PropsHeader) {
    return (
        <div className={style.header}>
            <NavSite />
            <SearchBar />
            <NavUser />
            <div className={style.clearFloat}></div>
        </div>
    );
}

interface PropsNavSite { }

function NavSite(props: PropsNavSite) {
    return (
        <div className={style.navSite}>
            <HomeLink />
            <NavItem link="1" info="文章" />
            <NavItem link="1" info="视频" />
        </div>
    );
}

interface PropsSearchBar { }

function SearchBar(props: PropsSearchBar) {
    return (
        <div className={style.searchBar}>
            <MyInPut />
        </div>
    );
}

interface PropsNavUser { }

function NavUser(props: PropsNavUser) {
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

interface PropsNavItem {
    link: string;
    info: string;
}

function NavItem(props: PropsNavItem) {
    return (
        <div className={style.navItem}>
            <a href={props.link}>
                {props.info}
            </a>
        </div>
    );
}

interface PropsHomeLink {
 }

function HomeLink(props: PropsHomeLink) {
    return (
        <div className={style.homeLink}>
            <img src="" alt="主页" />
            <a href="123">主页</a>
            <DownOutlined />
        </div>
    );
}

interface PropsMyInput { }

function MyInPut(props: PropsMyInput) {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    return (
        <div>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>
        </div>
    );
}

interface PropsMyAvatar{}

function MyAvatar(props: PropsMyAvatar) {
    return (
        <Avatar size='large' icon={<UserOutlined />} />
    );
}

interface PropsContribute{}

function Contribute(props: PropsContribute){
    return (
        <Button className={style.button} type="primary" size="large">
          投稿
        </Button>
    );
}

export default MyHeader;