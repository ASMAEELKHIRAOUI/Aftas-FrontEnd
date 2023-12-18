import { Ranking } from './../../models/ranking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Member } from '../../models/member';
import { ResponseModel } from '../../core/request/response.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterMemberService {

  private getMembersUrl = "http://127.0.0.1:8080/api/v1/members";
  private registerMemberUrl = "http://127.0.0.1:8080/api/v1/ranking";

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.getMembersUrl).pipe(
        map((res: any) => res.data)
    )
  }

  registerMember(ranking: Ranking): Observable<ResponseModel<Ranking>>{
    return this.http.post<ResponseModel<Ranking>>(this.registerMemberUrl, ranking);
  }

  searchByCriteria(criteria: string): Observable<Member[]> {
    const url = `${this.getMembersUrl}/search/${criteria}`;
    return this.http.get<Member[]>(url).pipe(
      map((res: any) => res.data)
  )
  }

}
