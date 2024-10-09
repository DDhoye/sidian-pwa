import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.page.html',
  styleUrls: ['./identification.page.scss'],
})
export class IdentificationPage implements OnInit {
  constructor(public photoService: PhotoService) {}

  ngOnInit() {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
