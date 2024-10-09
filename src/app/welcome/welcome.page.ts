import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  loading: boolean = false;
  scrollTop: number = 0;
  isScrolling = false;
  showScrollIcon: boolean = true;

  @ViewChild('scrollTarget', { static: false }) private scrollTarget:
    | ElementRef
    | undefined;

  constructor() {}

  handleScrollStart() {
    this.isScrolling = true;
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    this.scrollTop = ev.detail.scrollTop;
    // console.log('scroll', JSON.stringify(ev.detail));
  }

  handleScrollEnd() {
    this.isScrolling = false;
  }

  ngOnInit() {}

  scrollToBottom() {
    if (this.scrollTarget) {
      this.scrollTarget.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });

      // Hide the scroll icon after scrolling to the bottom
      setTimeout(() => {
        this.showScrollIcon = false;
      }, 500);
    }
  }
}
