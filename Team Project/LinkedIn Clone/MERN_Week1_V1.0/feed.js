//User feed logic
const { posts } = require("./posts");

async function getFeed(currentUser) {
    if (!currentUser) {
        console.log("Please login first");
        return [];
    }

    // Get connection IDs
    const connectionIds = (currentUser.connections || []).map(c => c.id);

    // Include current user also
    connectionIds.push(currentUser.id);

    // Filter posts from connections + self
    const feedPosts = posts.filter(p => connectionIds.includes(p.userId));

    // Sort by latest first 
    feedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return feedPosts;
}

module.exports = { getFeed };