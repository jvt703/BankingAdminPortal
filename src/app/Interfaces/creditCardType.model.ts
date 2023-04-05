export interface CreditCardType {
  id: number;
  rewardsName: string;
  interestRate: number;
  minimumPayment: number;
  creditLimit: number;
}

export interface OutgoingCreditCardTypeDto {
  rewardsName: string;
  interestRate: number;
  minimumPayment: number;
  creditLimit: number;
}