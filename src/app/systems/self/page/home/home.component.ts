import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { BaseCesiumComponent } from "@app/common/components/base-cesium/base-cesium.component";

@Component({
  selector: "qy-home",
  standalone: true,
  template: `
    <qy-base-cesium></qy-base-cesium>
    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button color="primary">Primary</button>
        <button mat-stroked-button color="accent">Accent</button>
        <button mat-stroked-button color="warn">Warn</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
        <button mat-flat-button disabled>Disabled</button>
        <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
            <mat-icon>more_vert</mat-icon>
          </button>
          <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
            <mat-icon>home</mat-icon>
          </button>
          <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
            <mat-icon>menu</mat-icon>
          </button>
          <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
  `,
  styles: `
    :host {
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BaseCesiumComponent]
})
export class HomeComponent {
  value = signal(1);
}
