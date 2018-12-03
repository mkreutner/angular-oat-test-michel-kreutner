import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { OATUser } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http$: HttpClient) { }

  /**
   * Get all users as List of OATUserElement.
   * @return Observable<OATUserElement[]>
   **/
  getAll() {
    return this.http$.get(`${environment.apiUrl}/${environment.apiVersion}/${environment.usersPath}`)
      .pipe(map((response: OATUser[]) => response));
  }

  /**
   * Get details about user
   * @param userId as number
   * @return Observable<OATUser>
   */
  get(userId: number) {
    return this.http$.get(`${environment.apiUrl}/${environment.apiVersion}/${environment.userPath}/${userId}`)
      .pipe(map((response: OATUser) => {
        response.userId = +response.userId;
        return response
      }));
  }
}
