import { Component, ViewChild } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { Transaction } from "../Interfaces/transaction.interface";

let ELEMENT_DATA: Transaction[] = [];

@Component({
  selector: 'app-transaction-home',
  templateUrl: './transaction-home.component.html',
  styleUrls: ['./transaction-home.component.css']
})
export class TransactionHomeComponent {
  currentTitle = 'Transactions';
  displayedColumns: string[] = [
    "sourceAccount",
    "destinationAccount",
    "date",
    "amount",
    "action",
  ];
  dataSource = new MatTableDataSource<any>();
  isLoading = true;
  pageNumber: number = 1;
  VOForm: FormGroup = {} as FormGroup;
  isEditableNew: boolean = true;
  sourceAccount = new FormControl('', []);
  destinationAccount = new FormControl('', []);
  date = new FormControl('', []);
  amount = new FormControl('', []);
  private apiURL: string = "http://localhost:8080/transaction";

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    http
      .get<Transaction[]>(this.apiURL)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((transactionList) => {
        // console.log(transactionList);
        ELEMENT_DATA = transactionList as Transaction[];
        this.createTable();
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a transaction-facing error message.
    return throwError(() => new Error(`Backend returned code ${error.status}`));
  }

  searchTransaction(): void {
    let concatURL = this.apiURL + '?';
    this.http
      .get<Transaction[]>(concatURL)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((transactionList) => {
        ELEMENT_DATA = transactionList as Transaction[];
        this.createTable();
      });
  }

  createTable(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([]),
    });

    this.VOForm = this.fb.group({
      VORows: this.fb.array(
        ELEMENT_DATA.map((val) =>
          this.fb.group({
            sourceAccount: new FormControl(val.sourceAccount),
            destinationAccount: new FormControl(val.destinationAccount),
            date: new FormControl(val.date),
            amount: new FormControl(val.amount),
            action: new FormControl("existingRecord"),
            isEditable: new FormControl(true),
            isNewRow: new FormControl(false),
          })
        )
      ),
    });
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(
      (this.VOForm.get("VORows") as FormArray).controls
    );

    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    };
  }

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  goToPage() {
    this.paginator.pageIndex = this.pageNumber - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length,
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginatorList = document.getElementsByClassName(
      "mat-paginator-range-label"
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddNewRow() {
    const control = this.VOForm.get("VORows") as FormArray;
    control.insert(0, this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls);
  }

  EditSVO(VOFormElement: any, i: any) {
    VOFormElement.get("VORows").at(i).get("isEditable").patchValue(false);
  }

  private saveTransaction: Transaction = {} as Transaction;
  SaveVO(VOFormElement: any, i: any) {
    VOFormElement.get("VORows").at(i).get("isEditable").patchValue(true);
    this.saveTransaction = VOFormElement.get("VORows").at(i).value;
    this.http
      .put<Transaction>(this.apiURL, this.saveTransaction)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((transaction) => {
      });
  }

  CancelSVO(VOFormElement: any, i: any) {
    VOFormElement.get("VORows").at(i).get("isEditable").patchValue(true);
  }

  paginatorList: HTMLCollectionOf<Element> = {} as HTMLCollectionOf<Element>;
  idx: number = 0;
  onPaginateChange(paginator: MatPaginator, list: HTMLCollectionOf<Element>) {
    setTimeout(
      (idx: number) => {
        let from = paginator.pageSize * paginator.pageIndex + 1;

        let to =
          paginator.length < paginator.pageSize * (paginator.pageIndex + 1)
            ? paginator.length
            : paginator.pageSize * (paginator.pageIndex + 1);

        let toFrom = paginator.length == 0 ? 0 : `${from} - ${to}`;
        let pageNumber =
          paginator.length == 0
            ? `0 of 0`
            : `${paginator.pageIndex + 1} of ${paginator.getNumberOfPages()}`;
        let rows = `Page ${pageNumber} (${toFrom} of ${paginator.length})`;

        if (list.length >= 1) list[0].innerHTML = rows;
      },
      0,
      paginator.pageIndex
    );
  }

  initiateVOForm(): FormGroup {
    return this.fb.group({
      sourceAccount: new FormControl(234),
      destinationAccount: new FormControl(""),
      date: new FormControl(""),
      amount: new FormControl(""),
      action: new FormControl("newRecord"),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }
}
