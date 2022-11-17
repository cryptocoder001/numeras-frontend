import React, { useState } from 'react';
import { BsPlusLg, BsDash } from 'react-icons/bs';

export default function FaqItem(props) {
    const { title, content } = props;
    const [faqOpen, setfaqOpen] = useState(false);
    return (
        <div>
            <div className="x-font4 mb-2" onClick={() => setfaqOpen(!faqOpen)} style={{ cursor: "pointer" }}>
                {title}
                {!faqOpen ?
                        <BsPlusLg color="#1D73BE" style={{ marginRight: '10px', width: "15px", height: "15px", float: "right" }} />
                        :
                        <BsDash color="#1D73BE" style={{ marginRight: '10px', width: "20px", height: "20px", float: "right" }} />
                }
                <span>&nbsp;</span>
            </div>
            <div className="x-font5 ml-5 mb-2" style={faqOpen ? { display: "block" } : { display: "none" }}>
                {content}
            </div>
        </div>
    )
}