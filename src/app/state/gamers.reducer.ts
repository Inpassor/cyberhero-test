import { createReducer, on } from '@ngrx/store';

import { Gamer } from '../interfaces/gamer.interface';
import { addGamer, removeGamer, minusGamerScore, plusGamerScore } from './gamers.actions';

export const initialState: Gamer[] = [];

const changeScoreFn = (state: Gamer[], gamer: Gamer, increment: number) => {
  const gamerIndex = state.indexOf(gamer);
  if (gamerIndex !== -1) {
    return state.map((gamer, index) => {
      if (index === gamerIndex) {
        return {
          ...gamer,
          score: gamer.score + increment,
        };
      }
      return gamer;
    });  
  }
  return state;
};

export const gamersReducer = createReducer(
  initialState,
  on(addGamer, (state, { gamer }) => [...state, gamer]),
  on(removeGamer, (state, { gamer }) => state.filter(currentGamer => currentGamer.id !== gamer.id)),
  on(minusGamerScore, (state, { gamer }) => changeScoreFn(state, gamer, -1)),
  on(plusGamerScore, (state, { gamer }) => changeScoreFn(state, gamer, 1)),
);
