import { atom } from 'recoil';

const keywordState = atom({
  key: 'keywordState',
  default: 'sun',
});

export default {
	keywordState
};