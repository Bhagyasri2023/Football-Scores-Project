import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballLeaguesComponent } from './components/football-leagues/football-leagues.component';
import { FootballLeagueDetailsComponent } from './components/football-league-details/football-league-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: FootballLeaguesComponent },
  { path: 'teams/:teamNumber', component: FootballLeagueDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
