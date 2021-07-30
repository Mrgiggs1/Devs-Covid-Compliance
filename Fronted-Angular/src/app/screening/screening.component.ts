import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { AppService } from '../app.service';

export class Client {
  constructor(
    public client_id: number,
    public client_status: string,
    public client_fullname: string
  ){}
}

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {

  client: Client[] = [];
  ngForm = {}
  isCough = false;
  isBreathing = false;
  isFever = false;
  isSymptoms = false;

  constructor(public appService: AppService) { }
  

  ngOnInit(): void {
    this.appService.getClient().subscribe( 
      response => {
        this.client = response;
      }, error => {
        console.log('error!!!')
    });
  }
  
  onSubmit(f: NgForm) {
   
}}
