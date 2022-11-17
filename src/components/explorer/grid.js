import exp from 'constants';
import React, { useState } from 'react';

function CreateCategoryCard(props) {
    const { image, onSelect } = props;
    const [selected, setSelected] = useState(false);
    return (
        <div className="create-x-cate-card" onClick={() => setSelected(!selected)}  >
            <div className="justify fd-c" style={{ width: '100%', height: '100%', border: 'solid 1px #bdbdbd' }} >
                <div className='x-font3 font-16'>Create New</div>
                <div className='x-font3 font-16'>Category</div>
            </div>
            <p class="x-font4 wei-400">&nbsp;</p>
        </div>
    )
}

export default CreateCategoryCard;