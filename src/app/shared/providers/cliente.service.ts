import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>(
      'https://thawing-inlet-73839.herokuapp.com/cliente'
    );
  }

  delete(id: number) {
    return this.http.delete<any[]>(
      `https://thawing-inlet-73839.herokuapp.com/cliente/${id}`
    );
  }

  edit(id: number,params: any) {
    return this.http.put<any>(
      `https://thawing-inlet-73839.herokuapp.com/cliente/${id}`,
      params
    );
  }

  save(params: any) {
    return this.http.post<any>(
      `https://thawing-inlet-73839.herokuapp.com/cliente`,
      params
    );
  }

}
