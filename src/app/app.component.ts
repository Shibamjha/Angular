import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CmpAddEditComponent } from './cmp-add-edit/cmp-add-edit.component';
import { UserService } from './services/user.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'HealthCare_Management_System';

  displayedColumns: string[] = ['id', 'Name', 'Workout', 'Time'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: any[] = [];
  constructor(private _dialog:MatDialog, private _userService:UserService) {}

  ngOnInit(): void {
      this.getUserList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getUserList();
        }
      },
    });
  }

  getUserList(){
    this._userService.getUserList().subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
          console.log(err);
      },
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
export class ToolbarOverviewExample {}