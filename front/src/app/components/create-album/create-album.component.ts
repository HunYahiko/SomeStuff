import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../models/album.model';
import {MatSnackBar} from '@angular/material';
import {ResponseSnackComponent} from '../response-snack/response-snack.component';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumCreatorForm: FormGroup;

  constructor(private albumService: AlbumService,
              private responseSnack: MatSnackBar) { }

  ngOnInit() {
    this.albumCreatorForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number_of_tracks: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  public async createNewAlbum() {
    const newAlbum: Album = new Album();
    newAlbum.name = this.albumCreatorForm.controls.name.value;
    newAlbum.numberOfTracks = this.albumCreatorForm.controls.number_of_tracks.value;
    newAlbum.price = this.albumCreatorForm.controls.price.value;
    newAlbum.description = this.albumCreatorForm.controls.description.value;

    await this.albumService.createAlbum(newAlbum).toPromise()
      .then(() => {
        this.responseSnack.openFromComponent(ResponseSnackComponent, {
          data: 'Successfully created the new album!',
          duration: 3000
        });
      })
      .catch(error => {
        this.responseSnack.openFromComponent(ResponseSnackComponent, {
          data: error,
          duration: 5000
        });
      });
  }

}
