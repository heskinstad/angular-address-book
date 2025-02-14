import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class viewComponent {
  // contact: Contact new Contact;

  // constructor(private readonly contactService: ContactsService) {
  //   this.contacts = this.contactService.contacts;
  // }
}
