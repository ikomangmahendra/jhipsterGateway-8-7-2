import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f5c6a299-c6c2-48be-a519-e416c4cf783e',
};

export const sampleWithPartialData: IAuthority = {
  name: '6906d2bb-7b23-4ebd-bbc2-c9ffa8696ac8',
};

export const sampleWithFullData: IAuthority = {
  name: 'd4c273ae-87c1-4ff3-876d-9c579bfebe4e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
