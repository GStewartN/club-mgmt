import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, type: string, aboutMe: string, memberFor: number) {
    var newMember = new Member(name, age, type, aboutMe, memberFor);
    this.memberService.addMember(newMember);
  }

}
