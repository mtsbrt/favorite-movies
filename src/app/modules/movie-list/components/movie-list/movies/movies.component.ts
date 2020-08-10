import { Component, OnInit, Input, OnChanges, ɵConsole } from "@angular/core";
import { Movie } from 'src/app/modules/core/models/movie';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

    @Input() movies: Movie[] = [];

    public rows = [];

    constructor() {

    }

    public ngOnInit() {
        this.turnMoviesIntoRows(this.movies);
    }
    
    public ngOnChanges() {
        this.turnMoviesIntoRows(this.movies);
    }

    public turnMoviesIntoRows(movies: Array<Object>) {
        if (movies.length > 0) {
            console.log('hi');
            const rows = [];
            let rowOfMovies = [];
            while (movies.length > 0) {
                rowOfMovies.push(movies.shift());
                if (rowOfMovies.length === 6 || movies.length === 0) {
                    rows.push(rowOfMovies);
                    rowOfMovies = [];
                    console.log(rows);
                }
                console.log(rowOfMovies);
            }
            this.rows = rows;
        }
    }
}