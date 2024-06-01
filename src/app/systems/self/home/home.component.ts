import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "qy-home",
  standalone: true,
  template: `
    <p>home works!</p>
  `,
  styles: `
    :host {
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
