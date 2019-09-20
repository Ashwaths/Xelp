import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  exports: []
})
export class LazyModule { }

