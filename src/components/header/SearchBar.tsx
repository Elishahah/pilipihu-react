import MyInPut from "./MyInPut";

import style from './myheader.module.css';

interface Props { }

export default function SearchBar(props: Props) {
    return (
        <div className={style.searchBar}>
            <MyInPut />
        </div>
    );
}