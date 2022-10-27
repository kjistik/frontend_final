import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teachers } from 'src/app/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  teachersURL = "http://localhost:8080/api/docentes/todos"
  changeURL = "http://localhost:8080/api/docentes/cambiar"

  getTeachers(): Observable<teachers[]> {
    return this.http.get<teachers[]>(this.teachersURL)
  }

  changeTeacher(teacher: teachers): Observable<any> {
    return this.http.put(`${this.changeURL}/${teacher.idTeacher}`, teacher, this.httpOptions)
  }

}