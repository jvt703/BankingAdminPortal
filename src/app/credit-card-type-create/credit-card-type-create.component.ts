import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CreditCardType from '../Interfaces/creditCardType.model';
import { CreditCardTypeService } from '../Services/credit-card-type.service';

@Component({
  selector: 'app-credit-card-type-create',
  templateUrl: './credit-card-type-create.component.html',
  styleUrls: ['./credit-card-type-create.component.css']
})
export class CreditCardTypeCreateComponent implements OnInit{

  creditCardTypeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private creditCardTypeService: CreditCardTypeService) { }

  ngOnInit(): void {
    this.creditCardTypeForm = this.formBuilder.group({
      rewardsName: ['', Validators.required],
      interestRate: ['', Validators.required],
      minimumPayment: ['', Validators.required],
      creditLimit: ['', Validators.required]
    });
  }

  onSubmit() {
    const newCreditCardType: CreditCardType = {
      rewardsName: this.creditCardTypeForm.value.rewardsName,
      interestRate: this.creditCardTypeForm.value.interestRate,
      minimumPayment: this.creditCardTypeForm.value.minimumPayment,
      creditLimit: this.creditCardTypeForm.value.creditLimit
    };
    this.creditCardTypeService.createCreditCardType(newCreditCardType).subscribe();
    this.creditCardTypeForm.reset();
  }
}