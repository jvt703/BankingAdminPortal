import { Component, ViewChild } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { User } from "../Interfaces/user.interface";

let ELEMENT_DATA: User[] = [];

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.css"],
})
export class UserHomeComponent {
  currentTitle = 'Users';
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "action",
  ];
  dataSource = new MatTableDataSource<any>();
  isLoading = true;
  pageNumber: number = 1;
  VOForm: FormGroup = {} as FormGroup;
  isEditableNew: boolean = true;
  private apiURL: string = "http://localhost:8080/user";

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    // this.user = {} as User;
    http
      .get<User[]>(this.apiURL)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((userList) => {
        // console.log(userList);
        ELEMENT_DATA = userList as User[];
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
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(`Backend returned code ${error.status}`));
  }

  createTable(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([]),
    });

    this.VOForm = this.fb.group({
      VORows: this.fb.array(
        ELEMENT_DATA.map((val) =>
          this.fb.group({
            id: new FormControl(val.id),
            firstname: new FormControl(val.firstname),
            lastname: new FormControl(val.lastname),
            email: new FormControl(val.email),
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
    // this.dataSource.paginator = this.paginator;

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

    // this.onPaginateChange(this.paginator, this.paginatorList);

    // this.paginator.page.subscribe(() => {
    //   this.onPaginateChange(this.paginator, this.paginatorList);
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddNewRow() {
    // this.getBasicDetails();
    const control = this.VOForm.get("VORows") as FormArray;
    control.insert(0, this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls);
  }

  EditSVO(VOFormElement: any, i: any) {
    // VOFormElement.get('VORows').at(i).get('name').disabled(false)
    VOFormElement.get("VORows").at(i).get("isEditable").patchValue(false);
  }

  private saveUser: User = {} as User;
  SaveVO(VOFormElement: any, i: any) {
    VOFormElement.get("VORows").at(i).get("isEditable").patchValue(true);
    this.saveUser = VOFormElement.get("VORows").at(i).value;
    // console.log(this.saveUser);
    this.http
      .put<User>(this.apiURL, this.saveUser)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((user) => {
        // console.log(user);
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
      position: new FormControl(234),
      name: new FormControl(""),
      weight: new FormControl(""),
      symbol: new FormControl(""),
      action: new FormControl("newRecord"),
      isEditable: new FormControl(false),
      isNewRow: new FormControl(true),
    });
  }
}
