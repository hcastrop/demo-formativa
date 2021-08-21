import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>('https://thawing-inlet-73839.herokuapp.com/banner');
  }
  delete(id: number) {
    return this.http.delete<any[]>(`https://thawing-inlet-73839.herokuapp.com/banner/${id}`);
  }
  save(params: any) {
    return this.http.post<any>(`https://thawing-inlet-73839.herokuapp.com/banner`, params);
  }
}
