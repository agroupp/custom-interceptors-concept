import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

import { QuestionDialogData } from './question-dialog/question-dialog-data';
import { QuestionDialogResult } from './question-dialog/question-dialog-result';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  constructor(private readonly matDialog: MatDialog) {}

  openQuestionDialog(data: QuestionDialogData): Observable<QuestionDialogResult> {
    return this.matDialog.open<QuestionDialogComponent, QuestionDialogData, QuestionDialogResult>(
      QuestionDialogComponent, { data }
    ).afterClosed().pipe(filter(Boolean));
  }
}
