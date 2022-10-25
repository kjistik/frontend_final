import { Component, OnInit } from '@angular/core';
import { grades } from '../models/grades';
import { GradesService } from '../services/grades/grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(private service: GradesService) { }

  ngOnInit(): void {
    this.getGrades
    this.selectGrades(1)
  }

  grades: grades[] = []
  gradesF: grades[] = []

  getGrades(): void {
    this.service.getgrades()
      .subscribe(grades => this.grades = grades)
  }

  selectGrades(id: any) {
    if (this.grades) {
      for (let grade of this.grades) {
        if (grade.grades_student.idStudent == id)
          this.gradesF.push(grade)
          console.log(grade.idGrade)
      }
    }
  }
}
