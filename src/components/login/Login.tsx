import axios from 'axios';
import style from './login.module.css';

interface Props{

}

export default function Login(props: Props) {

    const handleSubmit = ()=>{
        axios.defaults.baseURL = "http://127.0.0.1:8848/user-services/api1"
        axios({
            method: "GET",
            url: "user/"
        }).then((response)=>{
            console.log(response);
        }).catch((reason)=>{
            console.log(reason);
            
        })
    }

    return (
        <div className={style.login}>
            <input type="hidden" name="_method" value="post"/>
            用户名：<input type="text" name="???" id="???"/>
            密码：<input type="password" name="???" id="???"/>
            <input type="submit" onClick={handleSubmit} value="登录"/>
        </div>
    );
}