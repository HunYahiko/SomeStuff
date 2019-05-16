import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Album} from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private albumSource = new BehaviorSubject<Album[]>([]);
  currentAlbumArray = this.albumSource.asObservable();

  constructor() { }

  public updateAlbumArray(albums: Album[]) {
    this.albumSource.next(albums);
  }

}
