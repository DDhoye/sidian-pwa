import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccdetailsPage } from './accdetails.page';

describe('AccdetailsPage', () => {
  let component: AccdetailsPage;
  let fixture: ComponentFixture<AccdetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
