import axios from 'axios';
import { useState } from 'react';

import style from './login.module.css';

interface Props {

}

export default function Login(props: Props) {

    const [userName, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios.defaults.baseURL = "http://localhost:3000/api1";
        axios.post("/user", {
            userName,
            password
        }).then((response) => {
            const data = response.data;
            if (data.userName === userName && data.password === password) {
                alert("登录成功");
            } else {
                alert("用户名或密码不正确!");
            }

        }).catch((reason) => {
            console.log(reason);
        });
    }

    const handleSignup = ()=>{
        axios.defaults.baseURL = "http://localhost:3000/api1";
        axios.post("/user", {
            userName,
            password
        }).then((response) => {
            const data = response.data;
            if (data.userName === userName) {
                alert("该帐号已经被注册");
            } else {
                axios.put("/user", {
                    userName,
                    password
                }).then((response)=>{
                    alert("注册成功");
                }
                ).catch((reason)=>{
                    console.log(reason);
                });
            }

        }).catch((reason) => {
            console.log(reason);
        });
    }

    return (
        <div className={style.login}>
            {/* <input type="hidden" name="_method" value="post" /> */}
            用户名：<input type="text" name="???" id="???" onKeyUp={(e) => setName(e.currentTarget.value)} />
            密码：<input type="password" name="???" id="???" onKeyUp={(e) => setPassword(e.currentTarget.value)} />
            <input type="submit" onClick={handleLogin} value="登录" />
            <input type="submit" onClick={handleSignup} value="注册"/>
        </div>
    );
}