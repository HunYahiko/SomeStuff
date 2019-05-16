import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ShowAlbumsComponent } from './components/show-albums/show-albums.component';
import { ResponseSnackComponent } from './components/response-snack/response-snack.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ShowAlbumsComponent,
    ResponseSnackComponent,
    UpdateModalComponent,
    CreateAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [ResponseSnackComponent, UpdateModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
