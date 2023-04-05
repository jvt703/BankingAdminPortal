import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OutgoingCreditCardTypeDto } from '../../Interfaces/creditCardType.model';
import { CreditCardTypeService } from '../../Services/credit-card-type.service';

@Component({
  selector: 'app-credit-card-type-create',
  templateUrl: './credit-card-type-create.component.html',
  styleUrls: ['./credit-card-type-create.component.css']
})
export class CreditCardTypeCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditCardTypeService: CreditCardTypeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      rewardsName: ['', Validators.required],
      interestRate: ['', Validators.required],
      minimumPayment: ['', Validators.required],
      creditLimit: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createCreditCardType(): void {
    if (this.form.valid) {
      const newCreditCardType: OutgoingCreditCardTypeDto = this.form.value;
      this.creditCardTypeService.createCreditCardType(newCreditCardType).subscribe(() => {
        this.router.navigate(['/credit-card-types']); // Adjust this path to the correct route
      });
    }
  }
}