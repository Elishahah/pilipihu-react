import { Button } from "antd";

import style from './myheader.module.css';

interface Props{}

export default function Contribute(props: Props){
    return (
        <Button className={style.button} type="primary" size="large">
          投稿
        </Button>
    );
}