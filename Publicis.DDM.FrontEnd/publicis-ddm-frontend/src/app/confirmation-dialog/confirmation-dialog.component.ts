import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
    private sanitizer: DomSanitizer
  ) { }

  title: string;
  innerHtml: SafeHtml;

  confirm(): void {
    this.dialogRef.close(true);
  }
  close(): void {
    this.dialogRef.close(false);
  }

  ngOnInit() {
    this.title = this.data.title;
    this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(this.data.innerHtml);
  }

}

class ConfirmationData {
  title: string;
  innerHtml: string;
}