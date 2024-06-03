import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "qy-language",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div></div>
  `,
  styleUrl: "./language.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageComponent {}
