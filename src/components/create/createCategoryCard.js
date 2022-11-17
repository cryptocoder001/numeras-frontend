import React, { useState } from 'react';

function CreateCategoryCard(props) {
    const [selected, setSelected] = useState(false);
    return (
        <div className="create-x-cate-card cu-po" onClick={() => setSelected(!selected)}  >
            <div className="justify fd-c x-cate-card" style={{ border: 'solid 1px #bdbdbd' }}>
                <div className='x-font3 font-16'>Create New</div>
                <div className='x-font3 font-16'>Category</div>
            </div>
            <p class="x-font4 wei-400">&nbsp;</p>
        </div>
    )
}

export default CreateCategoryCard;