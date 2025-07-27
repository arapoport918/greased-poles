import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { PlayerComponent } from './features/player/player.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'leaderboard', component: LeaderboardComponent},
    {path: 'player/:id', component: PlayerComponent},
];
