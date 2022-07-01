import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import './style.css';

const Downloader = forwardRef(({}, forwardRef) => {
  const [href, setHref] = useState('');
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

  useImperativeHandle(forwardRef, () => ({
    makeTextFile,
    setHref,
  }));

  return (
    <div>
      <button
        id="create"
        onClick={() => {
          if (href.length === 0) return;

          try {
            const link = alinkref.current;
            if (
              !link ||
              Object.prototype.toString.call(link) !==
                '[object HTMLAnchorElement]'
            )
              throw new Error('get link failed');
            link.href = makeTextFile(href);
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
