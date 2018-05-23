import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { JoinPipe } from '../../pipes/join-pipe';
import { EditFormPublicHouseComponent } from './public-house/edit-form-public-house/edit-form-public-house.component';
import { EditFormMagazineComponent } from './magazine/edit-form-magazine/edit-form-magazine.component';
import { EditFormBrochureComponent } from './brochure/edit-form-brochure/edit-form-brochure.component';
import { EditFormBookComponent } from './book/edit-form-book/edit-form-book.component';
import { EditFormAuthorComponent } from './author/edit-form-author/edit-form-author.component';
import { PublicHouseComponent } from './public-house/public-house.component';
import { MagazineComponent } from './magazine/magazine.component';
import { BrochureComponent } from './brochure/brochure.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { SharedModule } from '../../shared.module';







export const routes: Routes = [
  { path: 'authors', component: AuthorComponent },
  { path: 'books', component: BookComponent },
  { path: 'magazines', component: MagazineComponent },
  { path: 'brochures', component: BrochureComponent },
  { path: 'publichouses', component: PublicHouseComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule],
  exports: [RouterModule],
  declarations: [
    AuthorComponent,
    BookComponent,
    BrochureComponent,
    MagazineComponent,
    PublicHouseComponent,
    EditFormAuthorComponent,
    EditFormBookComponent,
    EditFormBrochureComponent,
    EditFormMagazineComponent,
    EditFormPublicHouseComponent,
    JoinPipe
  ]
})
export class LibraryModule {
}
