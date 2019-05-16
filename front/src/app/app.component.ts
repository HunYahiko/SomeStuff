import {Component, OnInit} from '@angular/core';
import {AlbumService} from './services/album.service';
import {DataService} from './services/data.service';
import {Album} from './models/album.model';
import {MatSnackBar} from '@angular/material';
import {ResponseSnackComponent} from './components/response-snack/response-snack.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  albums: Album[];
  isVisible: boolean;

  constructor(private albumService: AlbumService,
              private albumsData: DataService,
              private responseSnack: MatSnackBar) {}

  ngOnInit(): void {
    this.albumsData.currentAlbumArray.subscribe(albums => this.albums = albums);
  }

  public async searchAlbum($event) {
    const albumName = $event;
    if (albumName === '') {
      await this.albumService.getAllAlbums().toPromise()
        .then(albums => {
          this.albumsData.updateAlbumArray(albums);
          console.log(JSON.stringify(this.albums));
        })
        .catch(error => {
          this.responseSnack.openFromComponent(ResponseSnackComponent, {
            data: error,
            duration: 4000
          });
        });
    } else {
      await this.albumService.getAlbumByName(albumName).toPromise()
        .then(album => {
          this.albumsData.updateAlbumArray([album]);
          console.log(JSON.stringify(this.albums));
      })
        .catch(error => {
          this.responseSnack.openFromComponent(ResponseSnackComponent, {
            data: error,
            duration: 4000
          });
        });
    }
  }

  public updateDeleteError($event) {
    this.responseSnack.openFromComponent(ResponseSnackComponent, {
      data: $event,
      duration: 4000
    });
  }

  public toggleCreateComponent() {
    this.isVisible = !this.isVisible;
  }
}
