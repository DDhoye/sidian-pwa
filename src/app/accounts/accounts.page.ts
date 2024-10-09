import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Current } from '../interface/current.interface';
import { currentAcc } from '../data/current';
import { Business } from '../interface/business.interface';
import { business } from '../data/business';
import { Savings } from '../interface/savings.interface';
import { savings } from '../data/savings';
import { IonContent, ScrollDetail } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  loading: boolean = false;
  scrollTop: number = 0;
  isScrolling = false;
  showScrollIcon: boolean = true;

  @ViewChild(IonContent, { static: false }) private content:
    | IonContent
    | undefined;

  currentaccdata: Current[] = [];
  savingsaccdata: Savings[] = [];
  businessaccdata: Business[] = [];

  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.currentaccdata = [...currentAcc];
    this.savingsaccdata = [...savings];
    this.businessaccdata = [...business];
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    this.scrollTop = ev.detail.scrollTop;
  }

  scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(500); // Smooth scroll with 500ms duration

      // Hide the scroll icon after scrolling to the bottom
      setTimeout(() => {
        this.showScrollIcon = false;
      }, 500);
    }
  }
  selectAccount(accountType: string) {
    const userId = '1';
    this.firestore
      .collection('users')
      .doc(userId)
      .set({ selectedAccount: accountType }, { merge: true })
      .then(() => {
        this.router.navigate(['/contact']);
      })
      .catch((error) => {
        console.error('Error storing account selection: ', error);
      });
  }
}
