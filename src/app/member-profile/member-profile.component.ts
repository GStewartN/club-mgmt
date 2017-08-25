import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MemberService]
})

export class MemberProfileComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
        this.memberId = urlParameters['id'];
      });
      this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}