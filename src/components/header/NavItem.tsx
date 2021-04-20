import style from './myheader.module.css';

interface Props {
    link: string;
    info: string;
}

export default function NavItem(props: Props) {
    return (
        <div className={style.navItem}>
            <a href={props.link}>
                {props.info}
            </a>
        </div>
    );
}