import { NgIterable } from "@angular/core";

export class Client {
    constructor(
      public id: number = 0,
      public fullname: string,
      public phone: string,
      public cough: string,
      public breathing: string,
      public symptoms: string,
      public fever: string,
      public symptom: string,
      public contact: string,
      public contactCovid: string,
      public travelled: string,
      public appointment: string,
    ){}
  }