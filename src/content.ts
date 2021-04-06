// https://stackoverflow.com/a/9517879
// injects script.ts into the correct window context
let s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
  // remove the script so it doesn't appear in the DOM tree
  s.remove();
};
const head = document.head || document.documentElement
if (head !== null) {
  head.appendChild(s);
}
