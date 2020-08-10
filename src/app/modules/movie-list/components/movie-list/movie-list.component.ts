import { Component, OnInit } from "@angular/core";
import { MoviesService } from 'src/app/modules/core/services/movies.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Movie } from 'src/app/modules/core/models/movie';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    public movies: Movie[] = [];
    public searchControl = new FormControl('');

    constructor(
        private moviesService: MoviesService
    ) {

    }

    public ngOnInit() {
        this.searchControl.valueChanges.pipe(debounceTime(1500)).subscribe((value: string) => {
            if (value.length >= 3)
            this.searchMovies(value);
        })
    }

    public searchMovies(keyword) {
        this.moviesService.search(keyword, 1).subscribe(res => {
            this.movies = res.Search;
        })
    }

}