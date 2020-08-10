import { NgModule } from "@angular/core";
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MoviesComponent } from './components/movie-list/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        MovieListComponent,
        MoviesComponent,
        MovieComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        CoreModule,
        MatSnackBarModule
    ],
    exports: []
})
export class MovieListModule { }