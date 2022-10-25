import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { subject } from 'src/app/models/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

  constructor(private service: SubjectsService) { }

  ngOnInit(): void {
    this.getSubjects()
  }

  subjects: subject[] = []

  getSubjects(): void {
    this.service.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }

  disable(subject: subject): void {
    subject.active = false;
    this.service.changeSubject(subject)
      .subscribe();
  }
}