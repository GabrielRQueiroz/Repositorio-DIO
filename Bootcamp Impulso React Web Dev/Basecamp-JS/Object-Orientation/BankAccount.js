class BankAccount {

   constructor(agency, number, type) {
      this.agency = agency;
      this.number = number;
      this.type = type;
      this._balance = 0; // Underline is important because "balance" will be used in the getter and the setter.
   }

   get balance() {

      return this._balance;
   }

   set balance(value) {

      this._balance = value;
   }

   draft(value) {

      if(value > this._balance) {
         return 'Operation declined'
      }
      this._balance = this._balance - value;

      return this._balance;
   }

   deposit(value) {
      this._balance = this._balance + value;

      return this._balance;
   }

}

class CurrentAccount extends BankAccount {

   constructor(agency, number, creditCard) {
      super(agency, number);
      this.type = 'current';
      this._creditCard = creditCard;
   }

   get creditCard() {
      return this._creditCard;
   }

   set creditCard(value) {
      this._creditCard = value;
   }

}

class SavingsAccount extends BankAccount {

   constructor(agency, number) {
      super(agency, number);
      this.type = 'savings';
   }
}

class UniversityAccount extends BankAccount {

   constructor(agency, number) {
      super(agency, number);
      this.type = 'university';
   }

   draft(value) {
      if (value > 500) {
         return "Operation declined";
      }

      this._balance = this._balance - value;
   } 
}
