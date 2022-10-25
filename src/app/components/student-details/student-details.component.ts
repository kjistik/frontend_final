import { Component, Input, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentsService } from 'src/app/services/students/students.service';
import { grades } from 'src/app/models/grades';
import { GradesService } from 'src/app/services/grades/grades.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private studentService: StudentsService, private location: Location,
    private route: ActivatedRoute, private gradeService: GradesService) { }

  ngOnInit(): void {
    this.getStudent();
  }
  @Input() student?: students

  grades: grades[] = []

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

}