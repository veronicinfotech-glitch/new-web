const ig = require('@bochilteam/scraper-instagram');

async function test() {
  try {
    const data = await ig.instagram('veronic_information_technology');
    console.log(JSON.stringify(data, null, 2));
  } catch(e) {
    console.error(e);
  }
}
test();
