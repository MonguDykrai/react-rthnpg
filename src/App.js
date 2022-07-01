import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Downloader from './Downloader';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>downloader example</h1>
      <textarea
        id="textbox"
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
        }}
      ></textarea>
      <Downloader text={value} />
    </div>
  );
}
