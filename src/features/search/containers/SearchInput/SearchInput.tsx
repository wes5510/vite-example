import React from 'react';
import { useSetRecoilState } from 'recoil';

import Input from '@/features/search/components/Input';
import searchAtoms from '@/features/search/searchAtoms';

const SearchInput = () => {
	const setSearchKeyword = useSetRecoilState(searchAtoms.keywordState);
	
	return <Input onEnter={setSearchKeyword} />;
};

export default SearchInput;