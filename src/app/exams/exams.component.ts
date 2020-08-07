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

  public exams: ExamModel[] = [];
  displayedColumns: string[] = ['titolo', 'iscritto', 'convalidato', 'voto', 'ord'];

  color: ThemePalette = 'accent';


  constructor(private examsService: ExamsService, private afsStore: AngularFirestore) { }

  toggle(event) {
    this.afsStore.collection("exams");
    this.afsStore.collection("exams").doc(event.id).update(event);

    this.afsStore.collection("exams",ref => ref.orderBy('ord', 'asc'));

    console.log(this.exams, event);
  }

  ngOnInit(): void {
    this.afsStore.collection('exams', ref => ref.orderBy('ord', 'asc')).snapshotChanges().subscribe((data) => {
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

  checkCondition() {
    var invalidExam = this.exams.find(exams => exams.convalidato == false);
    return invalidExam;
  }

}

export class ExamModel {
  voto: number;
  iscritto: boolean;
  convalidato: boolean;
  titolo: string;
  id: string;
  ord: number;
}
