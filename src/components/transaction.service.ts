import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransaction, IResponse } from './transaction';
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import Transactions from "../fixture/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  configUrl = 'assets/transaction.json';
  transactions: any = Transactions;

  constructor(
    private http: HttpClient
  ) {
    // this.http.get(this.configUrl).subscribe((res: any) => {
    //   this.transactions = res?.data || [];
    // })
  }

  getAllTransactions (): any {
    return of(this.transactions)
  }

  getTransactionById (id: string): any {
    const tx = this.transactions.find((tx: ITransaction) => tx.id === id)
    return of(tx)
  }

  saveTransactionById (id: string, newComment: string): any {
    const tx = this.transactions.find((tx: ITransaction) => tx.id === id)
    if(tx) {
      tx.comments = newComment
    }
    return of('Saved successfully')
  }
}