import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { lastGamerIdReducer } from './state/last-gamer-id.reducer';
import { gamersReducer } from './state/gamers.reducer';
import { AppComponent } from './components/app.component';
import { GamersComponent } from './components/gamers.component';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['lastGamerId', 'gamers'],
    rehydrate: true,
  })(reducer);
}
const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    GamersComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ lastGamerId: lastGamerIdReducer, gamers: gamersReducer }, { metaReducers }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
