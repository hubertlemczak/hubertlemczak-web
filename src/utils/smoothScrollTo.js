export default function smoothScrollTo(e, id) {
  e.preventDefault();

  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
}
