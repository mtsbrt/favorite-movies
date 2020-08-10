import { NgModule } from "@angular/core";
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        MovieListComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: []
})
export class MovieListModule { }