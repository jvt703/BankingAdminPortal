export default interface Account {
  id: Number;
  userId: Number;
  accountTypeName: String;
  accountTypeDescription: String;
  balance: Number;
  confirmation: Boolean;
  active: Boolean;
  pointsBalance: Number;
  accountName: String;
  createdDate: Number | String;
}