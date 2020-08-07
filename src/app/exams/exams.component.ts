import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../exams.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  public exams: ExamModel[] = [];
  displayedColumns: string[] = ['titolo', 'iscritto', 'convalidato', 'voto'];

  color: ThemePalette = 'accent';


  constructor(private examsService: ExamsService, private afsStore: AngularFirestore) { }

  ngOnInit(): void {
    this.afsStore.collectionGroup('exams').valueChanges().subscribe((data: ExamModel[]) => {
      console.log("EXAMS", data);
      this.exams = data;
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
