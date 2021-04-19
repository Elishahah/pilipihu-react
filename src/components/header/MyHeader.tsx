import NavSite from './NavSite';
import NavUser from './NavUser';
import SearchBar from './SearchBar';

import style from './myheader.module.css';

interface PropsHeader { }

export default function MyHeader(props: PropsHeader) {
    return (
        <div className={style.header}>
            <NavSite />
            <SearchBar />
            <NavUser />
            <div className={style.clearFloat}></div>
        </div>
    );
}