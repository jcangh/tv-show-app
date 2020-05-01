import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";

import { Show } from '../shared/models/show';

@Injectable()
export class ShowService{

    showsUrl: string = 'http://api.tvmaze.com/shows';

    constructor(private http: HttpClient){}


    getShows() : Observable<Show[]>{
        return this.http.get<Show[]>(this.showsUrl);
    }
}