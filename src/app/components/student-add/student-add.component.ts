import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  students: any;

  constructor(private service: StudentsService, private location: Location) { }

  addStudent(name: string, lastName: string) {
    name = name.trim()
    lastName = lastName.trim()
    if (!name) { return; }
    this.service.addStudent({ name, lastName } as students)
      .subscribe((student: students) => {
        this.students.push(student);
      });
    this.back();
  }


  back() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
