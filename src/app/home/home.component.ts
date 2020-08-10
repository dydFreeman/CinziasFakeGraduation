import { Component, OnInit } from '@angular/core';
import {ExamModel} from "../exams/exams.component";
import {ExamsService} from "../exams.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public exams: ExamModel[] = [];
  public slides;
  constructor(private examsService: ExamsService, private afsStore: AngularFirestore) {
   this.slides = [
     {image: '../assets/slide-home/1.jpg'},
     {image: '../assets/slide-home/2.jpg'},
     {image: '../assets/slide-home/3.jpg'},
     {image: '../assets/slide-home/4.jpg'},
     {image: '../assets/slide-home/5.jpg'}
    ];
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



}
