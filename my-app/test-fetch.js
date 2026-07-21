async function run() {
  try {
    const res = await fetch('https://www.instagram.com/api/v1/users/web_profile_info/?username=veronic_information_technology', {
      headers: {
        'x-ig-app-id': '936619743392459',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const text = await res.text();
    const json = JSON.parse(text);
    console.log('Success!', json.data.user.edge_owner_to_timeline_media.edges.length, 'posts found');
  } catch (e) {
    console.log('Error:', e.message);
  }
}
run();
