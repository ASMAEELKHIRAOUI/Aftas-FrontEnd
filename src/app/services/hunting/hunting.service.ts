import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hunting } from '../../models/hunting';
import { Observable, map } from 'rxjs';
import { ResponseModel } from '../../core/request/response.model';
import { Fish } from '../../models/fish';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private huntingUrl = "http://127.0.0.1:8080/api/v1/hunting";
  private fishUrl = "http://127.0.0.1:8080/api/v1/fishes";

  constructor(private http: HttpClient) { }

  getFishes(): Observable<Fish[]>{
    return this.http.get<Fish[]>(this.fishUrl).pipe(
        map((res: any) => res.data)
    )
  }

  addHunting(hunting: Hunting):Observable<ResponseModel<Hunting>>{
    return this.http.post<ResponseModel<Hunting>>(this.huntingUrl, hunting);
  }
}
