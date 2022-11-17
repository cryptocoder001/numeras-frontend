import React, { useState } from 'react';

function CategoryCard(props) {
    const { image, onSelect } = props;
    const [selected, setSelected] = useState(false);
    return (
        <div className="x-cate-card" onClick={() => setSelected(!selected)}  >
            <img style={selected ? { boxShadow: "#2232cd 0px 0px 0px 5px", padding: '0px' } : {}} src={image} alt="category" width="100%" height="100%" />
        </div>
    )
}

export default CategoryCard;