import { g as getCollection } from './_astro_content_Cbqj-FSa.mjs';

const collection = "work";
async function getAllWorks() {
  return await getCollection(collection, ({ data }) => {
    return data.draft !== true ;
  });
}
async function getFeaturedWorks() {
  return await getCollection(collection, ({ data }) => {
    return data.featured === true;
  });
}
function sortMDByDate(works) {
  return works.sort((a, b) => {
    const aDate = new Date(a.data.publishDate).valueOf();
    const bDate = new Date(b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(works) {
  return works.flatMap((work) => [...work.data.tags]);
}
function getUniqueTags(works) {
  return [...new Set(getAllTags(works))];
}

export { getUniqueTags as a, getFeaturedWorks as b, getAllWorks as g, sortMDByDate as s };
