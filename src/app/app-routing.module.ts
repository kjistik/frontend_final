import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentsService } from './services/students/students.service';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'update/:id', component: StudentUpdateComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
