import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AppService } from '../app.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit { 

  clientData: any;

  isCough = false;
  isBreathing = false;
  isFever = false;
  isSymptoms = false;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getClient().subscribe( 
      response => {
        this.clientData = response;
      }, error => {
        console.log(error , 'GET error!!!')
    });
  }
  
  onSubmit(screeningForm: NgForm) {
    console.log(screeningForm.value);
    let newClient = { 
      id: screeningForm.value.id,
      fullname: screeningForm.value.fullname,
      phone: screeningForm.value.phone,
      cough: screeningForm.value.cough,
      breathing: screeningForm.value.breathing,
      symptoms: screeningForm.value.symptoms,
      fever: screeningForm.value.fever,
      symptom: screeningForm.value.symptom,
      contact: screeningForm.value.contact,
      contactCovid: screeningForm.value.contactCovid,
      travelled: screeningForm.value.travelled,
      appointment: screeningForm.value.appointment
    }

    this.appService.addClient(newClient).subscribe( 
      (data: any) => {
        console.log(data)
      }, (error: any) => {
        console.log(error, 'POST error!!!')
    });
  }
}
