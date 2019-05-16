import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Album} from '../models/album.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  rootUrl: string;

  constructor(private httpService: HttpClient) {
    this.rootUrl = 'http://localhost:8080/albums';
  }

  public static handleError(error: HttpErrorResponse) {
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Possible network error';
      console.error('Http Request Error: ', error.message);
    } else {
      if (error.status === 404) {
        errorMessage = 'Album/Albums were not found!';
      } else {
        errorMessage = 'Internal Server Error';
      }
      console.error('Http Request Error: ', error.message);
    }
    return throwError(errorMessage);
  }

  public getAllAlbums(): Observable<Album[]> {
    return this.httpService.get<Album[]>(this.rootUrl).pipe(
      map(albums => albums.map(data => new Album().deserialize(data)))
    );
  }

  public getAlbumByName(name: string): Observable<Album> {
    const params = new HttpParams()
      .set('name', name);

    return this.httpService.get<Album>(this.rootUrl, { params }).pipe(
      map(album => new Album().deserialize(album)),
      catchError(error => AlbumService.handleError(error))
    );
  }

  public createAlbum(album: Album): Observable<Album> {
    return this.httpService.post<Album>(this.rootUrl, album).pipe(
      map(createdAlbum => new Album().deserialize(createdAlbum)),
      catchError(error => AlbumService.handleError(error))
    );
  }

  public updateAlbum(id: number, album: Album): Observable<string> {
    return this.httpService.put<string>(this.rootUrl + '/' + id, album).pipe(
      map(responseBody => responseBody),
      catchError(error => AlbumService.handleError(error))
    );
  }

  public deleteAlbum(id: number): Observable<string> {
    return this.httpService.delete<string>(this.rootUrl + '/' + id).pipe(
      map(responseBody => responseBody),
      catchError(error => AlbumService.handleError(error))
    );
  }
}
