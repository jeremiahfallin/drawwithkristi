require("isomorphic-fetch");

const url = `https://www.instagram.com/graphql/query/?query_hash=04334405dbdef91f2c4e207b84c204d7&variables={"only_stories":true,"stories_prefetch":true,"stories_video_dash_manifest":false}`;

const cache = {
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  // first see if we have a cache in 5 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 300000) {
    return cache.posts;
  }
  const res = await fetch(url, {
    headers: {
      // get this value from your Storage tab in Firefox dev tools, or the application tab in chrome. As far as I can tell it's good for 1 year, but that seems to be updated daily...
      cookie: `sessionid=${process.env.INSTAGRAM_COOKIE}`,
    },
  })
    .then(x => x.json())
    .catch(err => console.log(err));
  // get ready
  const posts = res.data.user.feed_reels_tray.edge_reels_tray_to_reel.edges
    .map(edge => edge.node)[0]
    .items.map(item => ({
      media_preview: item.media_preview,
      display_url: item.display_url,
    }));
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return cache.posts;
}

exports.handler = async function (event, context, callback) {
  const res = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
  });
};
