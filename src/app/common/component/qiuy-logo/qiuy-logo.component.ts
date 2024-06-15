import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "qy-qiuy-logo",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="qiuy-logo">
      <img class="logo" src="assets/self/logo/logo.png" />
      <img class="text" src="assets/self/logo/qiuy.png" />
    </div>
  `,
  styleUrl: "./qiuy-logo.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QiuyLogoComponent {}
