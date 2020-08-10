import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { MovieListComponent } from './modules/movie-list/components/movie-list/movie-list.component';
import { MovieComponent } from './modules/movie-list/components/movie/movie.component';


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
  },
  {
    path: 'movies/favorites',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
