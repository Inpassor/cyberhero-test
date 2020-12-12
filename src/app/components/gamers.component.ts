import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { AppState } from '../interfaces/app-state.interface';
import { Gamer } from '../interfaces/gamer.interface';
import { addGamer, removeGamer, minusGamerScore, plusGamerScore } from '../state/gamers.actions';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.scss'],
})
export class GamersComponent {
  lastGamerId: string = '1';
  dataSource = new MatTableDataSource<Gamer>();
  displayedColumns: string[] = ['id', 'name', 'score', 'score-controls', 'controls'];
  @ViewChild(MatSort, { static: false }) sort?: MatSort;
  gamerNameInput = '';

  constructor(private store: Store) {
    this.store.subscribe(state => {
      const appState = state as AppState;
      this.lastGamerId = appState.lastGamerId;
      this.dataSource.data = appState.gamers;
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  onGamerAdd() {
    if (this.gamerNameInput) {
      if (!this.dataSource.data.find(currentGamer => currentGamer.name === this.gamerNameInput)) {
        this.store.dispatch(addGamer({
          gamer: {
            id: this.lastGamerId,
            name: this.gamerNameInput,
            score: 0,
          }
        }));
      }
      this.gamerNameInput = '';
    }
  }

  onGamerRemove(gamer: Gamer) {
    this.store.dispatch(removeGamer({ gamer }));
  }

  onGamerScoreMinus(gamer: Gamer) {
    this.store.dispatch(minusGamerScore({ gamer }));
  }

  onGamerScorePlus(gamer: Gamer) {
    this.store.dispatch(plusGamerScore({ gamer }));
  }
}
