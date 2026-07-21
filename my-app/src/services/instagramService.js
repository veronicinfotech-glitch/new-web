const INSTAGRAM_ENDPOINT = '/api/instagram';

const profileFallback = {
  username: 'veronic_infotech',
  profilePicture: '', // Leave empty so UI uses local logo asset instead of unsplash
  biography: 'Business-Driven IT & Business Software Solutions 🚀',
  name: 'Veronic'
};

export async function getInstagramFeed() {
  try {
    // Attempting a live fetch via RSS2JSON proxy for free public scraping without an API key
    // We use a known free proxy or fallback to our simulated data if it fails due to CORS/Rate limits
    const rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frsshub.app%2Finstagram%2Fuser%2Fveronic_infotech';
    
    let media = [];
    let fromCache = false;
    
    try {
      const liveResponse = await fetch('/api/instagram/live');
      if (liveResponse.ok) {
        const igData = await liveResponse.json();
        const user = igData?.data?.user;
        
        if (user && user.edge_owner_to_timeline_media?.edges) {
          // Capture the REAL profile data dynamically!
          profileFallback.profilePicture = user.profile_pic_url_hd || user.profile_pic_url;
          profileFallback.followers = user.edge_followed_by?.count || 52;
          profileFallback.following = user.edge_follow?.count || 10;
          profileFallback.posts = user.edge_owner_to_timeline_media?.count || 24;
          profileFallback.name = user.full_name || 'Veronic';

          media = user.edge_owner_to_timeline_media.edges.map((edge, index) => {
            const node = edge.node;
            return {
              id: node.id || index,
              image: node.display_url,
              caption: node.edge_media_to_caption?.edges[0]?.node?.text || '',
              likes: node.edge_media_preview_like?.count || 0, // Real Likes!
              comments: node.edge_media_to_comment?.count || 0, // Real Comments!
              username: 'veronic_infotech',
              mediaType: node.is_video ? 'VIDEO' : 'IMAGE',
              permalink: `https://www.instagram.com/p/${node.shortcode}/`
            };
          });
        }
      }
    } catch (e) {
      console.warn("Live API proxy failed. Using smart fallback.", e);
    }

    // Fallback to local data if live API fails
    if (media.length === 0) {
      fromCache = true;
      const dataResponse = await fetch('/instagram/data.json', { cache: 'no-store' });
      if (dataResponse.ok) {
        const rawMedia = await dataResponse.json();
        media = rawMedia.map((post, index) => ({
          id: post.id || index,
          image: post.image || '',
          caption: post.caption || '',
          likes: post.likes || 0,
          comments: post.comments || 0,
          username: post.username || 'veronic_infotech',
          mediaType: post.media_type || 'IMAGE',
          permalink: post.url || `https://www.instagram.com/p/${post.id}/`
        }));
      }
    }

    // If we have fewer than 15 posts, duplicate them so the continuous marquee doesn't have white gaps.
    // Otherwise, show ALL live posts perfectly to auto increment!
    if (media.length > 0 && media.length < 15) {
      let newMedia = [...media];
      let iteration = 1;
      while (newMedia.length < 15) {
        newMedia = newMedia.concat(media.map(m => ({...m, id: m.id + '_' + iteration})));
        iteration++;
      }
      media = newMedia;
    }

    // Attempt to fetch profile info if available
    let rawProfile = {};
    try {
      const profileResponse = await fetch('/instagram/profile.json', { cache: 'no-store' });
      if (profileResponse.ok) {
        rawProfile = await profileResponse.json();
      }
    } catch (e) {}

    const normalizedProfile = {
      username: 'veronic_infotech',
      name: rawProfile.full_name || profileFallback.name,
      profilePicture: rawProfile.profile_pic || profileFallback.profilePicture,
      biography: profileFallback.biography,
      posts: rawProfile.posts || profileFallback.posts || 24,
      followers: rawProfile.followers || profileFallback.followers || 52,
      following: rawProfile.following || profileFallback.following || 10
    };

    return {
      profile: normalizedProfile,
      media,
      lastUpdated: new Date().toISOString(),
      fromCache: fromCache
    };
  } catch (error) {
    throw new Error('Failed to fetch Instagram data');
  }
}
