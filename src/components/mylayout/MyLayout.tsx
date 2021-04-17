import React from 'react';

import PropsChildren from '../Props'

interface Props {
    children: PropsChildren
}

function MyLayout(props: Props) {
    return (
        <div>{props.children}</div>
    );
}

export default MyLayout;