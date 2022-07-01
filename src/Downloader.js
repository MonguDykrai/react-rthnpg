import React, { forwardRef } from 'react';
import './style.css';

const Downloader = forwardRef(({ onDownload }, forwardRef) => {
  const alinkref = React.createRef();
  const makeTextFile = (text) => {
    let textFile = '';
    var data = new Blob([text], { type: 'text/plain' });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    console.log(textFile);

    return textFile;
  };

  return (
    <div>
      <button
        id="create"
        onClick={() => {
          const text = onDownload((text) => text);
          if (text.length === 0) return;

          try {
            const link = alinkref.current;
            if (
              !link ||
              Object.prototype.toString.call(link) !==
                '[object HTMLAnchorElement]'
            )
              throw new Error('get link failed');
            link.href = makeTextFile(text);
            link.click && link.click();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        下载tsx文件
      </button>
      <a
        download="index.tsx"
        id="downloadlink"
        style={{ display: 'none' }}
        ref={alinkref}
      >
        Download
      </a>
    </div>
  );
});

export default Downloader;
