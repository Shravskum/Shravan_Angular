import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ITransaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  imports: [CommonModule, MatListModule, MatButtonModule, FormsModule, RouterModule],
  standalone: true,
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  comment = '';
  transactionId = '';
  transaction: ITransaction = {
    id: '',
    date: '',
    comments: ''
  };

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.transactionId = params['id'];
      this.transactionService.getTransactionById(this.transactionId).subscribe((res: any) => {
        this.transaction = res;
        this.comment = res.comments;
      })
    });
  }

  navBack() {
    this.router.navigateByUrl('/');
  }

  saveComment() {
    this.transaction.comments = this.comment;
    this.navBack();
  }
}
