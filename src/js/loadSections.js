async function loadSection(id, path) {

  const response =
    await fetch(path);

  const html =
    await response.text();

  document
    .getElementById(id)
    .innerHTML = html;

}


export async function loadSections() {

  await loadSection(
    'hero-container',
    './src/pages/hero.html'
  );

  await loadSection(
    'about-container',
    './src/pages/about.html'
  );

   await loadSection(
    'culture-container',
    './src/pages/culture.html'
  );


}