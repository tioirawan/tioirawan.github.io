import { g as getCollection } from './_astro_content_Cbqj-FSa.mjs';

async function getAllPosts() {
  return await getCollection("post", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(posts) {
  return posts.flatMap((post) => [...post.data.tags]);
}
function getUniqueTags(posts) {
  return [...new Set(getAllTags(posts))];
}
function getUniqueTagsWithCount(posts) {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

export { getUniqueTags as a, getUniqueTagsWithCount as b, getAllPosts as g, sortMDByDate as s };
