import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
currentTitle = 'Loans';

loans = [
    {
        "loanApplicationId": 1,
        "loanAmount": 10000.0,
        "userFirstName": "Testathan",
        "userLastName": "Testman",
        "userDOB": 981525600000,
        "userEmailAddress": "test@testing.test",
        "userAddress": {
            "id": 1,
            "city": "Test City",
            "state": "Iowa",
            "street": "2000 Test Avenue",
            "zipCode": "00000"
        },
        "socialSecurityNumber": 123123123,
        "motherMaidenName": "asd",
        "residenceOwnershipStatus": "RENT",
        "housingPayment": 1.0,
        "employmentStatus": "SELF_EMPLOYED",
        "grossAnnualIncome": 1.0,
        "approved": false,
        "decisionDate": null
    },
        {
        "loanApplicationId": 2,
        "loanAmount": 123423424.0,
        "userFirstName": "Testathan",
        "userLastName": "Testman",
        "userDOB": 981525600000,
        "userEmailAddress": "test@testing.test",
        "userAddress": {
            "id": 1,
            "city": "Test City",
            "state": "Iowa",
            "street": "2000 Test Avenue",
            "zipCode": "00000"
        },
        "socialSecurityNumber": 123123123,
        "motherMaidenName": "asd",
        "residenceOwnershipStatus": "RENT",
        "housingPayment": 1.0,
        "employmentStatus": "SELF_EMPLOYED",
        "grossAnnualIncome": 1.0,
        "approved": false,
        "decisionDate": null
    },
     {
        "loanApplicationId": 3,
        "loanAmount": 123423424.0,
        "userFirstName": "Testathan",
        "userLastName": "Testman",
        "userDOB": 981525600000,
        "userEmailAddress": "test@testing.test",
        "userAddress": {
            "id": 1,
            "city": "Test City",
            "state": "Iowa",
            "street": "2000 Test Avenue",
            "zipCode": "00000"
        },
        "socialSecurityNumber": 123123123,
        "motherMaidenName": "asd",
        "residenceOwnershipStatus": "RENT",
        "housingPayment": 1.0,
        "employmentStatus": "SELF_EMPLOYED",
        "grossAnnualIncome": 1.0,
        "approved": false,
        "decisionDate": null
    },
     {
        "loanApplicationId": 4,
        "loanAmount": 123423424.0,
        "userFirstName": "Testathan",
        "userLastName": "Testman",
        "userDOB": 981525600000,
        "userEmailAddress": "test@testing.test",
        "userAddress": {
            "id": 1,
            "city": "Test City",
            "state": "Iowa",
            "street": "2000 Test Avenue",
            "zipCode": "00000"
        },
        "socialSecurityNumber": 123123123,
        "motherMaidenName": "asd",
        "residenceOwnershipStatus": "RENT",
        "housingPayment": 1.0,
        "employmentStatus": "SELF_EMPLOYED",
        "grossAnnualIncome": 1.0,
        "approved": false,
        "decisionDate": null
    }
]


}
