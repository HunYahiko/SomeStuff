import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  searchForm: FormGroup;

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  get album_name(): string { return this.searchForm.controls.album_name.value; }
  set album_name(value: string) { this.searchForm.controls.album_name.setValue(value); }

  ngOnInit() {
    this.searchForm = new FormGroup({
      album_name: new FormControl('')
    });
  }

  public searchAlbum() {
    this.searchEvent.emit(this.album_name);
  }

}
