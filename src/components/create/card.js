import React from 'react';

export default function CardItem(props){
    const {title, content, button} = props;
    return(
        <div className = "x-cr-sy-card">
            <div className = "x-font11 mb-2">
                {title}
            </div>
            <div className = "font-14 ls-1">
                {content}
            </div>
            <div className = "text-center mt-4">
                <button className = "x-button6">{button}</button>
            </div>
        </div>
    )
}