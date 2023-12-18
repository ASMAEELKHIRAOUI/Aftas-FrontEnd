import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Competition } from '../../models/competition';
import { ResponseModel } from '../../core/request/response.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = "http://127.0.0.1:8080/api/v1/competitions";

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(this.apiUrl).pipe(
        map((res: any) => res.data)
    )
  }

  addEquipments(competition: Competition): Observable<ResponseModel<Competition>>{
    return this.http.post<ResponseModel<Competition>>(this.apiUrl, competition);
  }
}