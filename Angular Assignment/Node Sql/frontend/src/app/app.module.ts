import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Components/student/student.component';
import { FormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';
import { CreateStudentComponent } from './Components/create-student/create-student.component'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
