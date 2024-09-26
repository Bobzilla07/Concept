function makeIframe() {
    var url = document.getElementById('url').value;
    var ifrm = document.createElement('iframe');
    iframe.src = url;
    doccument.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    makeIframe();
  }
});
