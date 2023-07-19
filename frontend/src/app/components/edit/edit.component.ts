import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from 'src/app/service/edit/edit.service';
import Influencer from 'src/interfaces/Influencer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  influencer!: Influencer;
  btnText = "Confirm"
  id!: number;
  name!: string;
  handle!: string;
  platform!: string;
  category!: string;
  subCount!: number;

  constructor(private getRoute: ActivatedRoute, private editService: EditService, private router: Router) {
    this.influencer = history.state?.influ || null
    this.name = this.influencer?.name || '';
    this.handle = this.influencer?.handle || '';
    this.platform = this.influencer?.platform || '';
    this.category = this.influencer?.category || '';
    this.subCount = this.influencer?.subCount || 0;

    getRoute.params.subscribe(params=> {
      this.id = params['id'];
    }); // getting the id from the URL
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')) this.router.navigate(['/'])
    if(localStorage.getItem('authorization') === "false") this.router.navigate(['/list'])
  } // to do: Proper token check and authorization check

  submitHandler(influencer: Influencer): void {
    influencer.id = this.id;
    this.editInflu(influencer);
    this.listNavigate();
  }

  listNavigate() { this.router.navigate(['/list']).then(() => window.location.reload()) }

  editInflu(influencer: Influencer): void {
    this.editService.edit(influencer).subscribe();
  }
}
