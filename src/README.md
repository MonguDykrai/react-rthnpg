# README

[How to create .txt file using JavaScript / HTML5?](https://stackoverflow.com/questions/31048215/how-to-create-txt-file-using-javascript-html5)

```js
(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

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

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
  }, false);
})();
```

```html
<textarea id="textbox">Type something here</textarea> <button id="create">Create file</button>
<a download="info.txt" id="downloadlink" style="display: none">Download</a>
```
