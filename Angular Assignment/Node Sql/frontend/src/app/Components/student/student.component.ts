import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
StudentArray : any[] = [];
isResultLoaded = false;
isUpdateFormActive =  false;

Name : string = "";
DOB : string = "";
Marks : string = "";
Id = "";
constructor(private http:HttpClient){
  this.getAllStudents();
}
ngOnInit():void{

}
getAllStudents()
{
  this.http.get("http://localhost:8085/api/student")
  .subscribe((resultData:any)=>{
    this.isResultLoaded = true;
    console.log(resultData.data);
    this.StudentArray = resultData.data;
  })
}


}
