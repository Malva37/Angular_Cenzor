import { Component, OnInit, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() title: string = 'Bad words';
  myBadWords: string;

  badWordsArray: Array<string> = ['Java', 'Tottenham'];
  cenzorArray: Array<string>;
  inputField: string;
  cenzorInput: string;
  empty: boolean = true;
  emptyCenzor: boolean = true;
  placeholderInputField: boolean = true;
  placeholderInputFieldCenzor: boolean = true;
  inputFieldCenzor: string;
  check: boolean = true;



  constructor() { }

  ngOnInit() {
    this.getBadWords()
  }


  addBadWords(inputField: string): void {
    if (this.inputField) {
      this.badWordsArray.push(inputField);
      this.inputField = '';
      this.empty = true;
      this.placeholderInputField = true;
    } else {
      this.empty = false;
      this.placeholderInputField = false;
    }
    this.getBadWords()
  }

  getBadWords(): void {
      this.myBadWords = this.badWordsArray.join(', ')
  }

  resetFields() {
    this.badWordsArray = [];
    this.inputField = '';
    this.cenzorInput = '';
    this.cenzorArray = [];
    this.placeholderInputFieldCenzor = true;
    this.placeholderInputField = true;
    this.empty = true;
    this.emptyCenzor = true;
    this.myBadWords = ''
  }
  getCenzorWords(inputFieldCenzor: string): Array<string> {
    if (this.inputFieldCenzor) {
      this.emptyCenzor = true;
      this.placeholderInputFieldCenzor = true;
      this.cenzorArray = inputFieldCenzor.split(' ');
      this.checkWords();
      return this.cenzorArray;
    } else {
      this.emptyCenzor = false;
      this.placeholderInputFieldCenzor = false;
    }
  }

  checkWords(): void {
    for (let i = 0; i < this.cenzorArray.length; i++) {
      this.check = this.badWordsArray.some(value => value == this.cenzorArray[i]);
      if (this.check) {
        this.cenzorArray[i] = '*'.repeat(this.cenzorArray[i].length);
      }
      this.cenzorInput = this.cenzorArray.join(' ');
    }

  }













}




