import { Injectable } from '@angular/core';
import { Contact } from "./models/contact"
import { CONTACTS } from "./data/contacts"

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }
}
