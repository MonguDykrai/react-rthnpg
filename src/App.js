import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Downloader from './Downloader';

export default function App() {
  const downloader = useRef();
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
          downloader.current.setHref(value);
        }}
      ></textarea>
      <Downloader ref={downloader} />
    </div>
  );
}
