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

@NgModule({
    declarations: [
        MovieListComponent,
        MoviesComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        CoreModule
    ],
    exports: []
})
export class MovieListModule { }