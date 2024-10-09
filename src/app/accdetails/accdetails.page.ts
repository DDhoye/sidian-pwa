import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accdetails',
  templateUrl: './accdetails.page.html',
  styleUrls: ['./accdetails.page.scss'],
})
export class AccdetailsPage implements OnInit {
  accountPreferencesForm: FormGroup;
  occupationalDetailsForm: FormGroup;

  showAccountPreferences = false;
  showOccupationalDetails = false;

  branches: string[] = ['Kilimani', 'Bururburu', 'Ruaka', 'Westlands', 'Thika'];
  countries: string[] = ['Kenya', 'Uganda', 'Rwanda', 'Tanzania'];

  constructor(private fb: FormBuilder) {
    this.accountPreferencesForm = this.fb.group({
      preferredBranch: [''],
      countryOfResidence: [''],
      town: [''],
      residentialArea: [''],
      rmCode: [''],
    });

    this.occupationalDetailsForm = this.fb.group({
      employer: [''],
      occupation: [''],
      experience: [''],
    });
  }

  ngOnInit() {}

  toggleDropdown(section: string) {
    if (section === 'accountPreferences') {
      this.showAccountPreferences = !this.showAccountPreferences;
    } else if (section === 'occupationalDetails') {
      this.showOccupationalDetails = !this.showOccupationalDetails;
    }
  }
}
