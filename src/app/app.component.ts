import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Sensor_Cardiaco'; 
  showTemplate = false;
 

  toggleTemplate() {
    this.showTemplate = !this.showTemplate;
 }
 
}
