import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../exams.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  constructor(private examsService: ExamsService, private afsStore: AngularFirestore) { }

  ngOnInit(): void {
    this.afsStore.collectionGroup('exams').valueChanges().subscribe((data) => {
      console.log("EXAMS", data);
    })
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

export  class ExamModel {
  voto: number;
  iscritto: boolean;
  convalidato: boolean;
  titolo: string;
}
