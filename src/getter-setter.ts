{
    //getter and setter function
  
    class BankAccount {
      public readonly id: number;
      public name: string;
      // private _balance: number;
      protected _balance: number;
  
      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }
  
      set addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
  
      get getBallance() {
        return this._balance;
      }
    }
  
  
    const nurllahrAccount = new BankAccount(44213, "Nurullah", 200);
  
     nurllahrAccount.addDeposit = 50;
    const myBalance = nurllahrAccount.getBallance;
    console.log(myBalance);
  
    //
  }
  