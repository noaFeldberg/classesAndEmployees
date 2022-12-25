import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateClassDialogComponent } from '../dialogs/create-class-dialog/create-class-dialog.component';
import * as ClassActions from '../store/actions/class.actions'
import { ClassData } from '../store/models/class.model';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent {
  @Input() company;
  @Input() classes;

  constructor(private dialog: MatDialog, private store: Store<AppState>) {
  }

  addClass() {
    this.dialog.open(CreateClassDialogComponent,{
      panelClass: ['custom-modalbox'],
      height: '350px', 
      width: '100px',
      data:{
        saveCallback: (name: string) => {
          const id = Math.floor(Math.random() * 100);
          this.store.dispatch(new ClassActions.AddClass({name: name, id: id, company: this.company}))
        }
      }
    });
  }

  removeItem(classData: ClassData) {
    this.store.dispatch(new ClassActions.RemoveClass(classData.id))
  }
}
