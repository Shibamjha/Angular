import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = '/api';
  private idCounter = 1;

  constructor(private _http: HttpClient) {}

  addUser(data:any): Observable<any>{
    return this.getUserList().pipe(
      map((users: any[]) => {
        const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
        data.id = maxId + 1;
        return data;
      }),
      switchMap(userData => this._http.post(this.apiUrl, userData))
    );
  }

  getUserList(): Observable<any>{
    return this._http.get(this.apiUrl);
  }

}
