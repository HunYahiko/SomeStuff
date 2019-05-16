import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Album} from '../../models/album.model';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UpdateModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Album) { }

  ngOnInit() {
    this.updateForm = new FormGroup({
      name: new FormControl(this.data.name, Validators.required),
      number_of_tracks: new FormControl(this.data.numberOfTracks, Validators.required),
      price: new FormControl(this.data.price, Validators.required),
      description: new FormControl(this.data.description, Validators.required)
    });
  }

  public onClose() {
    this.data.name = this.updateForm.controls.name.value;
    this.data.numberOfTracks = this.updateForm.controls.number_of_tracks.value;
    this.data.price = this.updateForm.controls.price.value;
    this.data.description = this.updateForm.controls.description.value;
    this.dialogRef.close(this.data);
  }

}
