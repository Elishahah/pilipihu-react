import React from 'react';

import { Avatar, Button} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function MyHeader(props: any){
    return (
        <div className="header">
            <SiteInfo />
            <SearchBox />
            <UserInfo />
        </div>
    );
}

function SiteInfo(props: any){
    return (
        <div className="site_info">
            <span>
                <img src="#" alt="home page"/>
                <a href="#">首页</a>
                <DownOutlined />
            </span>
            <a href="#">文章</a>
            <a href="#">视频</a>
        </div>
    );
}

function UserInfo(props: any){
    return (
        <div className="user_info">
            <Avatar shape="square" icon={<UserOutlined />} />
            <a href="#">消息</a>
            <a href="#">动态</a>
            <a href="#">历史</a>
            <a href="#">收藏</a>
            <a href="#">投稿</a>
        </div>
    );
}

function SearchBox(props: any){
    return (
        <div className="search_box">
            <input type="text"/>
            <Button></Button>
        </div>
    );
}

export default MyHeader;