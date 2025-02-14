import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [ListComponent, AddComponent, ViewComponent],
})
export class ContactsModule {}
