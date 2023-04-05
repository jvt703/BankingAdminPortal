import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditCardType } from 'src/app/Interfaces/creditCardType.model';
import { CreditCardTypeService } from 'src/app/Services/credit-card-type.service';
import { CreditCardTypeEditDialogComponent } from '../credit-card-type-edit-dialog/credit-card-type-edit-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-credit-card-types',
  templateUrl: './credit-card-types.component.html',
  styleUrls: ['./credit-card-types.component.css']
})
export class CreditCardTypesComponent implements OnInit {
  creditCardTypes: CreditCardType[] = [];
  displayedColumns: string[] = ['id', 'rewardsName', 'interestRate', 'minimumPayment', 'creditLimit', 'actions'];
  dataSource: MatTableDataSource<CreditCardType> = new MatTableDataSource(this.creditCardTypes);

  currentTitle: string = "Credit Card Types";

  constructor(
    private creditCardTypeService: CreditCardTypeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchCreditCardTypes();
  }
    
  fetchCreditCardTypes(): void {
    this.creditCardTypeService.getCreditCardTypes().subscribe((data: CreditCardType[]) => {
      this.creditCardTypes = data;
      this.dataSource = new MatTableDataSource(this.creditCardTypes);
      this.dataSource.sort = this.sort;
    });
  }

  openEditDialog(creditCardType: CreditCardType): void {
    const dialogRef = this.dialog.open(CreditCardTypeEditDialogComponent, {
      width: '500px',
      data: creditCardType
    });

    dialogRef.afterClosed().subscribe((result: CreditCardType) => {
      if (result) {
        this.fetchCreditCardTypes();
      }
    });
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}