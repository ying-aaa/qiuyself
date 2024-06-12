import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "qy-form",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>form works!</p>
  `,
  styleUrl: "./form.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {}
