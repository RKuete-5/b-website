import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
  }


  public getPosts(): Observable<any> {
    return this.http.get<any>(`${environment.apiGhost}/posts/?key=${environment.apiKey}&include=tags,authors`);
  }

  public getPost(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiGhost}/posts/${id}?key=${environment.apiKey}&include=tags,authors`);
  }
  
}
