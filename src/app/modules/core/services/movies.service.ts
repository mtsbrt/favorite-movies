import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private _baseUrl = "http://www.omdbapi.com/?apikey=cd9e2d7f"

    constructor(
        private _http: HttpClient
    ) {}

    public search(keyword: string, page: number) {
        return this._http.get<SearchResult>(`${this._baseUrl}&s=${keyword}&page=${page}`);
    }
}