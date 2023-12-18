import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Member } from '../../models/member';
import { Ranking } from '../../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  
  private ranksUrl = "http://127.0.0.1:8080/api/v1/ranking";
  private getMembersUrl = "http://127.0.0.1:8080/api/v1/members";

  constructor(private http: HttpClient) { }

  getParticipants(competition: string | undefined): Observable<Ranking[]> {
    const url = `${this.ranksUrl}/competition/${competition}`;
    return this.http.get<Ranking[]>(url).pipe(
      map((res: any) => res.data)
    )
  }

  findMember(number: number): Observable<Member[]> {
    const url = `${this.getMembersUrl}/search/${number}`;
    return this.http.get<Member[]>(url).pipe(
      map((res: any) => res.data)
  )
  }

}
