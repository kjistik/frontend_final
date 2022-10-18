import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  selected?: students;

  alumnos: students[] = []

  onselect(a: students) {
    this.selected = a;
  }

  getStudents(): void {
    this.service.getStudents()
      .subscribe(students => this.alumnos = students)
  }

  reload() {
    window.location.reload()
  }

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
    this.getStudents()
  }

}