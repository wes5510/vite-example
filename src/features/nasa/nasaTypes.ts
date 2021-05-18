interface Link {
	rel: string;
	href?: string;
}

interface Item {
	links?: Link[];
}

export interface SearchResult {
	collection: {
		items: Item[];
	}
}