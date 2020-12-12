import { createReducer, on } from '@ngrx/store';

import { addGamer } from './gamers.actions';

export const initialState: string = '1';

export const lastGamerIdReducer = createReducer(
  initialState,
  on(addGamer, state => (Number(state) + 1) + ''),
);
