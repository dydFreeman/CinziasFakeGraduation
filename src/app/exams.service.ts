import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamModel } from './exams/exams.component';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private firestore: AngularFirestore) { }

  addExams(exam: ExamModel) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("exams")
        .add(exam)
        .then(res => { }, err => reject(err));
    });
  }
}
