import React, { useState } from 'react';

const ItemsRemove = ({ onRemoveItem }) => {
  const [indexToRemove, setIndexToRemove] = useState(0);

  const handleIndexChange = (e) => {
    setIndexToRemove(parseInt(e.target.value));
  };

  const handleRemoveItem = (e) => {
    e.preventDefault();
    onRemoveItem(indexToRemove);
  };

  return (
    <div>
      <form onSubmit={handleRemoveItem}>
        <label>
          Index to remove:
          <input
            type='number'
            value={indexToRemove}
            onChange={handleIndexChange}
          />
        </label>
        <button type="button" onClick={handleRemoveItem}>
          Remove Item
        </button>
      </form>
    </div>
  );
};

export default ItemsRemove;