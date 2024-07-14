import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cmp-add-edit',
  templateUrl: './cmp-add-edit.component.html',
  styleUrl: './cmp-add-edit.component.scss'
})
export class CmpAddEditComponent {
  empForm: FormGroup;

  Type: string[] = [
    'Yoga',
    'Swimmimg',
    'Running',
    'Cycling',
  ];

  constructor(private _fb:FormBuilder, private _userService:UserService, private _dialogRef:MatDialogRef<CmpAddEditComponent>) {
    this.empForm = this._fb.group({
      Name: ['', Validators.required],
      Workout: ['', Validators.required],
      Time: ['', Validators.required],
    })
  }

  onFormSubmit(){
    if (this.empForm.valid) {
      const data = {...this.empForm.value};
      this._userService.addUser(this.empForm.value).subscribe({
        next: (val:any) => {
          alert('Employee added succesfully');
          this._dialogRef.close(true);
        },
        error: (err:any) => {
          console.error(err);
            
        },
      })
    }
  }

}
