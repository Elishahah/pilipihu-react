import React from 'react';
import HomeLink from './HomeLink';
import NavItem from './NavItem';

import style from './myheader.module.css';

interface Props { }

export default function NavSite(props: Props) {
    return (
        <div className={style.navSite}>
            <HomeLink />
            <NavItem link="1" info="文章" />
            <NavItem link="1" info="视频" />
        </div>
    );
}