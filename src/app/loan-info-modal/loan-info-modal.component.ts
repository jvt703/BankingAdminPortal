import { Component, Input, OnInit, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loan-info-modal',
  templateUrl: './loan-info-modal.component.html',
  styleUrls: ['./loan-info-modal.component.css']
})
export class LoanInfoModalComponent implements OnInit {

@Input() loanData: any;

loanForm: FormGroup;

constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<LoanInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loanData = data.loanData;
    this.loanForm = this.initializeForm();}

ngOnInit(): void {
    
  }


 initializeForm(): FormGroup {
    return this.fb.group({
      loanAmount: [this.loanData.loanAmount, Validators.required],
      userFirstName: [this.loanData.userFirstName, Validators.required],
      userLastName: [this.loanData.userLastName, Validators.required],
      emailAddress: [this.loanData.userEmailAddress, Validators.required],
      dateOfBirth: [this.loanData.userDOB, Validators.required],
      userStreet: [this.loanData.userAddress.street, Validators.required],
      userCity: [this.loanData.userAddress.city, Validators.required],
      userState: [this.loanData.userAddress.state, Validators.required],

    });
  }

  onSubmit() {
   this.dialogRef.close();
  }

}
