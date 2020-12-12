import { Gamer } from './gamer.interface';

export interface AppState {
  lastGamerId: string;
  gamers: Gamer[];
}
