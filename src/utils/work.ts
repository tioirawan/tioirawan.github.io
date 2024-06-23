import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

const collection = 'work'

/** Note: this function filters out draft works based on the environment */
export async function getAllWorks() {
	return await getCollection(collection, ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true
	})
}

export async function getFeaturedWorks() {
	return await getCollection(collection, ({ data }) => {
		return data.featured === true
	})
}

export function sortMDByDate(works: Array<CollectionEntry<'work'>>) {
	return works.sort((a, b) => {
		const aDate = new Date(a.data.publishDate).valueOf()
		const bDate = new Date(b.data.publishDate).valueOf()
		return bDate - aDate
	})
}

/** Note: This function doesn't filter draft works, pass it the result of getAllWorks above to do so. */
export function getAllTags(works: Array<CollectionEntry<'work'>>) {
	return works.flatMap((work) => [...work.data.tags])
}

/** Note: This function doesn't filter draft works, pass it the result of getAllWorks above to do so. */
export function getUniqueTags(works: Array<CollectionEntry<'work'>>) {
	return [...new Set(getAllTags(works))]
}

/** Note: This function doesn't filter draft works, pass it the result of getAllWorks above to do so. */
export function getUniqueTagsWithCount(
	works: Array<CollectionEntry<'work'>>
): Array<[string, number]> {
	return [
		...getAllTags(works).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>()
		)
	].sort((a, b) => b[1] - a[1])
}
