import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentGradeComponent } from './components/student-grade/student-grade.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
    StudentAddComponent,
    GradesComponent,
    SubjectsComponent,
    TeachersComponent,
    StudentGradeComponent,
    TeacherDetailsComponent,
    TeacherAddComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
