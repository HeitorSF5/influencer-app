import { Component } from '@angular/core';
import Influencer from 'src/interfaces/Influencer';
import { ListService } from 'src/app/service/list/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  influencerList!: Array<Influencer>;
  filteredInflu!: Influencer[];
  isAdmin!: boolean;

  constructor (private listInfluService: ListService, private router: Router) {}

  ngOnInit() {
    if(!localStorage.getItem('token')) this.router.navigate(['/'])
    this.getAllInflu();
    this.isAdmin = localStorage.getItem('authorization') == "true"
    console.log('comparison Admin:', this.isAdmin)
    console.log('is admin in storage: ', localStorage.getItem('authorization'))
  } // to do: Proper token check

  setFilter(filtInflu: Influencer[]) {
    this.filteredInflu = filtInflu;
    // to do: Keep more than one filter active at a time
  }

  editNavigate(influ: Influencer): void {
    this.router.navigate(['/list', influ.id], {state: {influ}})
  }

  getAllInflu(): void {
    this.listInfluService.getAll().subscribe((influList) => {
      this.influencerList = influList
      this.filteredInflu = influList;
    });
    // to do: save into localstorage then reload
    // to do: pagination for this request
  }

  deleteInflu(id: number): void {
    this.listInfluService.delete(id).subscribe();
    location.reload();
    // to do: delete from localstorage then reload
  }
}
