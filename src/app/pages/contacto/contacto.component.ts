import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redirectToEmail(): void {
    const email = 'vitrialvid@hotmail.com'; // Replace with your email address
    const subject = 'TEMA : PROFORMA'; // Optional email subject
    const body = 'Hola, me gustaría consultar sobre...'; // Optional email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  
}
