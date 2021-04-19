import MyInPut from "./MyInPut";

import style from './myheader.module.css';

interface PropsSearchBar { }

export default function SearchBar(props: PropsSearchBar) {
    return (
        <div className={style.searchBar}>
            <MyInPut />
        </div>
    );
}