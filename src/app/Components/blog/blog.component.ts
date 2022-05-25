import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor() {}

  a = [{ ab: 1 }];
  FAQ = [
    {
      id: 1,
      question: 'How Do I Search For a Pet?',
      answer:
        'Enter your location and select the gender of pet & click on search we will locate the pets near you.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 2,
      question: 'Is therer any charge for adoption?',
      answer: 'No, there is no charge its a free adoption service.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 3,
      question: 'Why Should I Foster a Pet',
      answer:
        'As a foster parent, you will be able to love, care for, and enjoy knowing different animals. And you will be doing a wonderful thing – giving these deserving animals a chance at a new life.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 2,
      question: 'What Will I Need To Do As A Foster Parent?',
      answer:
        "Foster homes are responsible for feeding, exercising, socialising, grooming, reinforcing basic obedience instructions, studying and evaluating overall behaviour and temperament, and, of course, providing patience, love, and security to the fostered cat or dog on a regular basis. It's important to remember that all of the animals are rescues, and their behaviour might be unpredictable. Prepare yourself for some initial adjustment challenges. Being in a new scenario can be stressful for both you and your pet. Wait patiently. We will offer advice and encouragement if the going gets tough.",
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'What If I Want To Travel?',
      answer:
        'If you are fostering and want to go away for a weekend or take a vacation, the foster cat or dog can be returned to the coordinator`s care while you are away. Just arrange it in advance, as soon as you know, and we’ll reserve a spot.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'How Do I Search For a Pet?',
      answer:
        'Enter your location and select the gender of pet & click on search we will locate the pets near you.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'How long does the adoption process take?',
      answer: 'The adoption process takes about 1-2 days in most cases.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'Can I request a particular breed?',
      answer: 'No.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'I’d Like To Foster. What Do I Do Next?',
      answer:
        'If you are interested in fostering, please complete and submit a volunteer application. You will need to complete a volunteer orientation and volunteer at the shelter before becoming a foster volunteer.',
      toggle: false,
      buttonName: '+',
    },
    {
      id: 1,
      question: 'What if it Doesn’t Work Out With My New Pet?',
      answer:
        'While we always recommend giving your new pet significant time to adjust to its new environment, if your new pet does not work out for any reason, you are able to come in for an exchange within 30 days of adoption. OC Animal Care does not offer refunds for returned pets. If you would like to return your pet after 30 days you will need follow the owner surrender process and pay all applicable owner surrender fees.',
      toggle: false,
      buttonName: '+',
    },
  ];

  show: boolean = false;
  buttonName: any = '+';
  toggle(id: number) {
    console.log(id);
    this.FAQ[id].toggle = !this.FAQ[id].toggle;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.FAQ[id].toggle) this.FAQ[id].buttonName = '-';
    else this.FAQ[id].buttonName = '+';
  }
}
