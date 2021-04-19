import style from './myheader.module.css';

interface PropsNavItem {
    link: string;
    info: string;
}

export default function NavItem(props: PropsNavItem) {
    return (
        <div className={style.navItem}>
            <a href={props.link}>
                {props.info}
            </a>
        </div>
    );
}