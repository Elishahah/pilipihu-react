import { DownOutlined } from '@ant-design/icons';

import style from './myheader.module.css';

interface PropsHomeLink {
}

export default function HomeLink(props: PropsHomeLink) {
   return (
       <div className={style.homeLink}>
           <img src="" alt="主页" />
           <a href="123">主页</a>
           <DownOutlined />
       </div>
   );
}