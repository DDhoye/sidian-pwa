import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  registrationForm: FormGroup;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;

  constructor(
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.registrationForm = this.fb.group(
      {
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)], // Move all sync validators here
        ],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      },
      { validator: this.checkEmails }
    );
  }

  ngOnInit() {
    const recaptchaContainer = document.getElementById('recaptcha-container');
    if (recaptchaContainer) {
      recaptchaContainer.innerHTML = ''; // Clear any existing content
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            // Handle reCAPTCHA response here
          },
          'expired-callback': () => {
            // Handle reCAPTCHA expiration here
          },
        }
      );
    }
  }

  //custom validator to check if emails match
  checkEmails(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;

    return email === confirmEmail ? null : { notSame: true };
  }

  //Function to handle form submission
  // async onSubmit() {
  //   if (this.registrationForm.valid) {
  //     const formValues = this.registrationForm.value;
  //     console.log('Form Submitted: ', formValues);
  //   }
  // }
  async onSubmit() {
    if (this.registrationForm.valid) {
      const phoneNumber = `+${this.registrationForm.value.phoneNumber}`;
      try {
        if (!this.recaptchaVerifier) {
          throw new Error('reCAPTCHA verifier is not initialized');
        }

        const appVerifier = this.recaptchaVerifier;
        console.log('Attempting to send OTP to:', phoneNumber);
        const confirmationResult = await this.afAuth.signInWithPhoneNumber(
          phoneNumber,
          appVerifier
        );
        console.log('OTP sent, confirmationResult:', confirmationResult);
        // Store confirmationResult to use in the OTP verification component
        localStorage.setItem(
          'confirmationResult',
          JSON.stringify(confirmationResult)
        );
        this.router.navigate(['/otp']); // Navigate to OTP verification page
      } catch (error) {
        console.log('Error sending OTP: ');
      }
    }
  }
}
