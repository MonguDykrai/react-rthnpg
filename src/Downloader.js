import React, { useEffect } from 'react';
import './style.css';

export default function Downloader() {
  useEffect(() => {
    (function () {
      var textFile = null,
        makeTextFile = function (text) {
          var data = new Blob([text], { type: 'text/plain' });

          // If we are replacing a previously generated file we need to
          // manually revoke the object URL to avoid memory leaks.
          if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
          }

          textFile = window.URL.createObjectURL(data);

          return textFile;
        };

      var create = document.getElementById('create'),
        textbox = document.getElementById('textbox');

      // create.addEventListener(
      //   'click',
      //   function () {
      //     var link = document.getElementById('downloadlink');
      //     link.href = makeTextFile(textbox.value);
      //     link.style.display = 'block';
      //   },
      //   false
      // );

      create.addEventListener(
        'click',
        function () {
          var link = document.getElementById('downloadlink');
          link.href = makeTextFile(textbox.value);
          link.click();
        },
        false
      );
    })();
  }, []);
  return (
    <div>
      <textarea id="textbox">Type something here</textarea>
      <button id="create">下载tsx文件</button>
      {/* <button id="create">Create file</button> */}
      <a download="index.tsx" id="downloadlink" style={{ display: 'none' }}>
        Download
      </a>
    </div>
  );
}
