import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dev-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFoundComponent {}