import { Component } from '@angular/core'

@Component({
    selector: 'notes-container',
    styles: [`
        .notes {
          padding-top: 50px;
        }
        .creator {
          margin-bottom: 40px; 
        }
    `],
    template: `
        <div class="row center-xs notes">
          <div class="col-xs-6 creator">
            <note-creator (createNote)="onCreateNote($event)"></note-creator>
          </div>
          <div class="notes col-xs-8">
            <div class="row between-xs">
              <note-card
                class="col-xs-4"
                [note]="note"
                *ngFor="let note of notes; let i = index"
                (checked)="onNoteChecked(i)"
              >
              </note-card>
            </div>
          </div>
        </div>
    `
})
export class Notes {
    private notes = [
        { title:'Homework', value:'finish homework', color:'lightblue' },
        { title:'Work', value:'Do angular page', color:'red' },
        { title:'Courses', value:'Learn angular', color:'yellow' } 
    ]

    private onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }

    private onCreateNote(note) {
        this.notes.push(note)
    }
}
