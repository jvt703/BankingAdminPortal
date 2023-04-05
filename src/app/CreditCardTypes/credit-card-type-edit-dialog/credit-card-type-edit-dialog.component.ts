import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditCardType, OutgoingCreditCardTypeDto } from 'src/app/Interfaces/creditCardType.model';
import { CreditCardTypeService } from 'src/app/Services/credit-card-type.service';

@Component({
  selector: 'app-credit-card-type-edit-dialog',
  templateUrl: './credit-card-type-edit-dialog.component.html',
  styleUrls: ['./credit-card-type-edit-dialog.component.css']
})
export class CreditCardTypeEditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditCardTypeService: CreditCardTypeService,
    public dialogRef: MatDialogRef<CreditCardTypeEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditCardType
  ) {
    this.form = this.fb.group({
      rewardsName: [data.rewardsName, Validators.required],
      interestRate: [data.interestRate, Validators.required],
      minimumPayment: [data.minimumPayment, Validators.required],
      creditLimit: [data.creditLimit, Validators.required]
    });
  }

  ngOnInit(): void {}

  save(): void {
    if (this.form.valid) {
      const updatedCreditCardType: OutgoingCreditCardTypeDto = this.form.value;
      this.creditCardTypeService
        .updateCreditCardType(this.data.id, updatedCreditCardType)
        .subscribe((result: CreditCardType) => {
          this.dialogRef.close(result);
        });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}