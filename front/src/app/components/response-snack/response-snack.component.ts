import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-response-snack',
  templateUrl: './response-snack.component.html',
  styleUrls: ['./response-snack.component.css']
})
export class ResponseSnackComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public message: string) { }

  ngOnInit() {
  }

}
