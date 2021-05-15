/* eslint-disable prettier/prettier */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ISteps } from '../interfaces/steps.interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

  constructor(private http: HttpClient) { }

  getSteps(): Observable<ISteps[]> {
    return this.http.get<ISteps[]>(this.url);
  }
}
