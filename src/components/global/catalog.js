import { useState } from 'react';

export default function Catalog({ propsData }) {
  const title = propsData.title.length > 27 ? propsData.title?.substring(0, 27) + '...' : propsData.title;
  const description =
    propsData.description.length > 74 ? propsData.description?.substring(0, 74) + '...' : propsData.description;
  const url = '/images/' + propsData.parent + '/' + propsData.image;

  const [favorite, setFavorite] = useState(false);

  return (
    <div className="py-1">
      <img src={url} width="100%" alt={propsData.parent} className = "rounded-3"/>
      <p className="font-18 wei-400 mt-2 mb-1 x-linkColor">{title} &nbsp;&nbsp;<i className={(favorite ? 'fa-solid text-pink' : 'fa-light text-gray') + " fa-heart cu-po"} onClick={() => setFavorite(!favorite)}></i></p>
      <div className="font-13">{description}</div>
    </div>
  );
}
