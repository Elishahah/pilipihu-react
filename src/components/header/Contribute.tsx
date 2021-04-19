import { Button } from "antd";

import style from './myheader.module.css';

interface PropsContribute{}

export default function Contribute(props: PropsContribute){
    return (
        <Button className={style.button} type="primary" size="large">
          投稿
        </Button>
    );
}