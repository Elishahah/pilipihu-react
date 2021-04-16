import React from 'react';

import PropsChildren from '../Props'
import mylayout from './mylayout.modules.css';

interface Props {
    children: PropsChildren
}

function MyLayout(props: Props) {
    return (
        <div className={mylayout.main}>{props.children}</div>
    );
}

export default MyLayout;