import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import SearchInput from '@/features/search/containers/SearchInput';
import SearchResults from '@/features/nasa/containers/SearchResults';

function App() {
	return (
		<RecoilRoot>
			<SearchInput />
			<Suspense fallback={<div>Loading...</div>}>
				<SearchResults />
			</Suspense>
		</RecoilRoot>
	);
}

export default App;