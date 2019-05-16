import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Album} from '../../models/album.model';
import {MatDialog} from '@angular/material';
import {AlbumService} from '../../services/album.service';
import {UpdateModalComponent} from '../update-modal/update-modal.component';

@Component({
  selector: 'app-show-albums',
  templateUrl: './show-albums.component.html',
  styleUrls: ['./show-albums.component.css']
})
export class ShowAlbumsComponent implements OnInit {

  albums: Album[];
  displayedColumns: string[] = ['id', 'name', 'number_of_tracks', 'price', 'description', 'update', 'delete'];

  @Output() errorEvent = new EventEmitter<string>();

  constructor(private albumsData: DataService,
              private updateModal: MatDialog,
              private albumService: AlbumService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.albumsData.currentAlbumArray.subscribe(albums => this.albums = albums);
  }

  public updateAlbum(album: Album, id: number) {
    let beforeUpdate: Album;
    beforeUpdate = JSON.parse(JSON.stringify(album));

    const modalRef = this.updateModal.open(UpdateModalComponent, {
      data: album
    });

    modalRef.afterClosed().subscribe(() => {
      if (JSON.stringify(beforeUpdate) !== JSON.stringify(album)) {
        this.albumService.updateAlbum(album.id, album).toPromise()
          .then(() => this.albumsData.updateAlbumArray(this.albums))
          .catch(error => {
            album = JSON.parse(JSON.stringify(beforeUpdate));
            this.errorEvent.emit(error);
          });
      }
    });
  }

  public deleteAlbum(album: Album, index: number) {
    this.albumService.deleteAlbum(album.id).toPromise()
      .then(() => {
        console.log(JSON.stringify(this.albums[index]));
        this.albums.splice(index, 1);
        this.albumsData.updateAlbumArray(Object.assign([], this.albums));
        this.cd.detectChanges();
      })
      .catch(error => {
        this.errorEvent.emit(error);
      });
  }

}
