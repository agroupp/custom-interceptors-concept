import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { QuestionDialogData } from './question-dialog-data';
import { QuestionDialogResult, QuestionDialogReaction } from './question-dialog-result';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: QuestionDialogData,
    private readonly dialogRef: MatDialogRef<QuestionDialogComponent, QuestionDialogResult>
  ) { }

  ngOnInit(): void {
  }

  close(result: QuestionDialogReaction): void {
    this.dialogRef.close({ result });
  }
}
