import { createAction, props } from '@ngrx/store';
 
import { Gamer } from '../interfaces/gamer.interface';

export const addGamer = createAction(
  '[Gamers List] Add Gamer',
  props<{ gamer: Gamer }>()
);
 
export const removeGamer = createAction(
  '[Gamers List] Remove Gamer',
  props<{ gamer: Gamer }>()
);
 
export const minusGamerScore = createAction(
  '[Gamers List] Gamer score minus',
  props<{ gamer: Gamer }>()
);
 
export const plusGamerScore = createAction(
  '[Gamers List] Gamer score plus',
  props<{ gamer: Gamer }>()
);
