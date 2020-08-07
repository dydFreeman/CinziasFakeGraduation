import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../exams.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  public exams: any[] = [];
  displayedColumns: string[] = ['titolo', 'iscritto', 'convalidato', 'voto'];

  color: ThemePalette = 'accent';


  constructor(private examsService: ExamsService, private afsStore: AngularFirestore) { }

  toggle(event) {
    this.afsStore.collection("exams");
    this.afsStore.collection("exams").doc(event.id).update(event);
    console.log(this.exams, event);
  }

  ngOnInit(): void {
    this.afsStore.collection('exams').snapshotChanges().subscribe((data) => {
      this.exams = [];
      data.forEach((d) => {
        let exam: any = d.payload.doc.data();
        exam = {
          ...exam,
          id: d.payload.doc.id
        }
        this.exams.push(exam);
      })
      
    });
  }

  addExam() {
    this.examsService.addExams({
      voto: 25,
      iscritto: true,
      convalidato: false,
      titolo: "Cazzologia"
    })
  }

}

export class ExamModel {
  voto: number;
  iscritto: boolean;
  convalidato: boolean;
  titolo: string;
}
