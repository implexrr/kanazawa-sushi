export default function clearContent() {
  document.querySelector('#content').replaceChildren();
  console.log("Content cleared.");
}