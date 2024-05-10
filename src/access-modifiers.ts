{
  // Access modifiers public, readonly, private, protected

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

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBallance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const nurllahrAccount = new BankAccount(44213, "Nurullah", 200);

  const myBalance = nurllahrAccount.getBallance();
  console.log(myBalance);

  //
}
