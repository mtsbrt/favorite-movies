import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { MovieListComponent } from './modules/movie-list/components/movie-list/movie-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/profile'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
