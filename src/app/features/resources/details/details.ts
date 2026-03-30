import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { WebResource, ResourceType } from '../../../shared/models/web-resource';
import { ResourceService } from '../../../shared/services/resource';

@Component({
  selector: 'dev-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {
  @Input() id!: string; 

  resource$!: Observable<WebResource | undefined>;
  private resourceService = inject(ResourceService);

  public ResourceType = ResourceType; 

  ngOnInit(): void {
    this.resource$ = this.resourceService.getById(this.id);
  }
}