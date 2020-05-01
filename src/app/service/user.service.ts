import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";

import { User } from "../shared/models/User";
import { Hosts } from '../shared/hosts';

@Injectable()
export class UserService {

    baseUrl: string = Hosts.usersApi;

    constructor(private http: HttpClient){}

    login(payload): Observable<any> {
        let url = this.baseUrl + '/authenticate';
        return this.http.post(url,payload);
    }

    getUsers() : Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }

    createUser(user: User, loggedUser: User): Observable<any> {
        return this.http.post<any>(this.baseUrl, user);
    }
}