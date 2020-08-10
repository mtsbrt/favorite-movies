import { Component, OnInit } from "@angular/core";
import { MoviesService } from 'src/app/modules/core/services/movies.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Movie } from 'src/app/modules/core/models/movie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    public unfilteredMovies: Movie[] = [];
    public movies: Movie[] = [];
    public searchControl = new FormControl('');
    public isFavorites = false;

    constructor(
        private moviesService: MoviesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {

    }

    public ngOnInit() {
        if (this.router.url.includes('favorites')) {
            this.isFavorites = true;
            this.unfilteredMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
            this.searchMovies('');
        }
        this.searchControl.valueChanges.pipe(debounceTime(1500)).subscribe((value: string) => {
            if (value.length >= 3 || this.isFavorites)
            this.searchMovies(value);
        })
    }

    public searchMovies(keyword) {
        if (!this.isFavorites) {
            this.moviesService.search(keyword, 1).subscribe(res => {
                this.unfilteredMovies = res.Search;
                this.movies = res.Search;
            })
        }
        else {
            if (keyword) {
                this.movies = this.unfilteredMovies.filter(x => x.Title.includes(keyword));
            } 
            else {
                this.movies = this.unfilteredMovies;
            }
        }
    }

    public toggleFavorites() {
        if (!this.isFavorites) {
            this.isFavorites = true;
            this.unfilteredMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
            this.router.navigateByUrl('movies/favorites');
            this.searchMovies(this.searchControl.value);
        }
        else {
            this.isFavorites = false;
            this.router.navigateByUrl('/movies');
            if (this.searchControl.value.length >= 3) {
                this.searchMovies(this.searchControl.value);
            }
            else {
                this.movies = null;
            }
        }
    }

}