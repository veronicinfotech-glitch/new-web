import instaloader
import json

L = instaloader.Instaloader(quiet=True)
profile = instaloader.Profile.from_username(L.context, 'veronic_information_technology')

posts = []
for post in profile.get_posts():
    posts.append(f"https://www.instagram.com/p/{post.shortcode}/")
    if len(posts) >= 20:
        break

print(json.dumps(posts))
