import React from "react";
import {css} from '@emotion/react';

const PropsDisplay = ({componentInfo}) => {
    
    return<div>
        <h2>{componentInfo.displayName}</h2>
        <p>{componentInfo.description}</p>
        <h3>Props</h3>
        {componentInfo.props ? componentInfo.props.map((prop) => {
            return <div css={css`padding-bottom: 10px`}>
                <div><b>{prop.name}</b></div>
                <span>Type: <i>{prop.type}</i></span>
                {prop.required && <div css={css`color: red`}><i>Required</i></div> }
                <p>{prop.description}</p>
            </div>
        }) : <p>None</p>}
    </div>

};

export default PropsDisplay;
