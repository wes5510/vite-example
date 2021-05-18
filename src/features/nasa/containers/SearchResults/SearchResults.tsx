import React from 'react';
import { useRecoilValue } from 'recoil';

import Images from '@/features/nasa/components/Images';
import nasaAtoms from '@/features/nasa/nasaAtoms';

const SearchResults = () => {
	const images = nasaAtoms.extractImages(useRecoilValue(nasaAtoms.search));

	return <Images images={images} />;
};

export default SearchResults;