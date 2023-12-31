import React, { useState } from 'react';
import './Style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../reducers/toggleSlice';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.toggle.mode);
   console.log(mode)
  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={`toggle-container`}>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={mode === 'night'} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
