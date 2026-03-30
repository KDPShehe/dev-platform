import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ResourceService } from '../../../shared/services/resource';
import { ResourceType, WebResource } from '../../../shared/models/web-resource';
import { forbiddenNameValidator } from '../../../shared/validators/validators';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './resource-form.html',
  styleUrls: ['./resource-form.css']
})
export class ResourceFormComponent {
  private fb = inject(FormBuilder);
  private resourceService = inject(ResourceService);
  private router = inject(Router);

  public resourceTypes = Object.values(ResourceType);

  public form = this.fb.nonNullable.group({
    title: ['', [
      Validators.required, 
      Validators.minLength(3), 
      forbiddenNameValidator(/test/i)
    ]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    price: [0, [Validators.required, Validators.min(0)]],
    type: [ResourceType.Template, [Validators.required]],
    imageUrl: ['', [
      Validators.required, 
      Validators.pattern(/^https?:\/\/.+/)
    ]]
  });

  get controls() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.valid) {
      const rawValue = this.form.getRawValue();
      
      const newResource: WebResource = {
        ...rawValue,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        isTrending: false,
        tags: []
      };

      this.resourceService.addItem(newResource);
      this.router.navigate(['/resources']);
    }
  }
}