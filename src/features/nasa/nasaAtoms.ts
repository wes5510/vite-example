import { selector } from 'recoil';

import searchAtoms from '@/features/search/searchAtoms';
import { SearchResult } from './nasaTypes';

const DEFAULT_KEYWORD = 'sun';

const search = selector({
	key: 'Search',
	get: async ({ get }) => {
		const keyword = get(searchAtoms.keywordState) || DEFAULT_KEYWORD;
		const res = await fetch(`https://images-api.nasa.gov/search?q=${keyword}`);

		const data = await res.json();
		return data;
	},
});

const extractImages = ({ collection: { items } }: SearchResult) =>
	items.map((item) => {
		const previewLink = item.links?.find((link) => link.rel === 'preview');
		return previewLink?.href;
	}).filter(Boolean);

export default {
	search,
	extractImages,
};