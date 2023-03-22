export interface Loan {
  loanApplicationId: number;
  loanAmount: number;
  userFirstName: string;
  userLastName: string;
  userDOB: number;
  userEmailAddress: string;
  userAddress: {
    id: number;
    city: string;
    state: string;
    street: string;
    zipCode: string;
  };
  socialSecurityNumber: number;
  motherMaidenName: string;
  residenceOwnershipStatus: string;
  housingPayment: number;
  employmentStatus: string;
  grossAnnualIncome: number;
  approved: boolean;
  decisionDate: number | null;
}