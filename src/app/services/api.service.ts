import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  get(path: string): any {
    return this._http.get(path);
  }

}
