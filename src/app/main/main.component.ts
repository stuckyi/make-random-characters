import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isModal: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openModal() {
    this.isModal = true;
  }
  closeModal() {
    this.isModal = false;
  }

  moveTo(targetPage: string) {
    const link = '/' + targetPage;

    setTimeout(() => {
      this.router.navigate([link]);
    }, 1000);
  }


}
