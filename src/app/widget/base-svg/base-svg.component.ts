import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

export enum QSvgType {
  directory_open = "directory_open",
  directory_close = "directory_close",
  file = "file"
}

@Component({
  selector: "qy-base-svg",
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (svgType) {
      @case (QSvgType.directory_open) {
        <svg t="1720710013943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21133" width="20" height="20">
          <path
            d="M350.72 20.288l44.352 43.776c13.056 12.992 30.72 20.288 49.152 20.288h465.152c38.592 0 69.888 31.36 69.888 69.952v720.064a104.96 104.96 0 0 1-104.896 104.96H104.896A104.96 104.96 0 0 1 0 874.304V69.952C0 31.296 31.36 0 69.952 0h231.552c18.432 0 36.096 7.296 49.28 20.288z"
            fill="#8A8A99"
            p-id="21134"
          ></path>
          <path
            d="M151.552 163.2h676.16c38.656 0 69.952 31.36 69.952 69.952v594.56c0 38.656-31.36 69.952-69.952 69.952H151.552c-38.592 0-69.952-31.36-69.952-69.952v-594.56c0-38.656 31.36-69.952 69.952-69.952z"
            fill="#FFFFFF"
            p-id="21135"
          ></path>
          <path
            d="M151.552 163.2h676.16c38.656 0 69.952 31.36 69.952 69.952v594.56c0 38.656-31.36 69.952-69.952 69.952H151.552c-38.592 0-69.952-31.36-69.952-69.952v-594.56c0-38.656 31.36-69.952 69.952-69.952z"
            fill="#FFFFFF"
            p-id="21136"
          ></path>
          <path
            d="M186.432 233.152h606.464c19.328 0 34.944 15.68 34.944 34.944v69.952a34.944 34.944 0 0 1-34.944 35.008H186.432a34.944 34.944 0 0 1-35.008-35.008V268.16c0-19.264 15.68-34.944 35.008-34.944z m0 209.856h606.464c19.328 0 34.944 15.616 34.944 34.944v69.952a34.944 34.944 0 0 1-34.944 35.008H186.432a34.944 34.944 0 0 1-35.008-35.008V477.952c0-19.328 15.68-34.944 35.008-34.944z"
            fill="#EBEBEB"
            p-id="21137"
          ></path>
          <path
            d="M116.544 603.84h837.568a69.952 69.952 0 0 1 68.928 81.408l-46.656 279.808a69.952 69.952 0 0 1-68.928 58.496H69.888A69.952 69.952 0 0 1 0.96 942.08l46.656-279.744a69.952 69.952 0 0 1 68.928-58.496z"
            fill="#90a7ff"
            p-id="21138"
            data-spm-anchor-id="a313x.search_index.0.i19.426c3a81HpQjWU"
            class="selected"
          ></path>
        </svg>
      }
      @case (QSvgType.directory_close) {
        <svg t="1720710328469" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="37027" width="20" height="20">
          <path
            d="M340.48 23.232l38.912 41.728c13.824 14.848 33.216 23.232 53.44 23.232h518.016c40.384 0 73.152 32.768 73.152 73.152v716.352A146.304 146.304 0 0 1 877.696 1024H146.304A146.304 146.304 0 0 1 0 877.696V73.152C0 32.768 32.768 0 73.152 0h213.888c20.224 0 39.616 8.448 53.44 23.232z"
            fill="#8A8A99"
            p-id="37028"
          ></path>
          <path
            d="M158.528 170.624h706.944c40.448 0 73.152 32.768 73.152 73.152v621.696c0 40.448-32.704 73.152-73.152 73.152H158.528a73.152 73.152 0 0 1-73.152-73.152V243.84c0-40.384 32.704-73.152 73.152-73.152z"
            fill="#FFFFFF"
            p-id="37029"
          ></path>
          <path
            d="M73.152 292.544h877.696c40.384 0 73.152 32.768 73.152 73.152v585.152c0 40.384-32.768 73.152-73.152 73.152H73.152A73.152 73.152 0 0 1 0 950.848V365.696c0-40.32 32.768-73.152 73.152-73.152z"
            fill="#B8B8CC"
            p-id="37030"
          ></path>
        </svg>
      }
      @case (QSvgType.file) {
        <svg t="1720711252800" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69008" width="20" height="20">
          <path
            d="M791.272727 1024H232.727273a186.181818 186.181818 0 0 1-186.181818-186.181818V186.181818a186.181818 186.181818 0 0 1 186.181818-186.181818h372.363636l372.363636 372.363636v465.454546a186.181818 186.181818 0 0 1-186.181818 186.181818z"
            fill="#88CCF5"
            p-id="69009"
          ></path>
          <path d="M977.454545 372.363636h-186.181818a186.181818 186.181818 0 0 1-186.181818-186.181818V0z" fill="#C6E9FF" p-id="69010"></path>
          <path d="M186.181818 279.272727l279.272727 0 0 93.090909-279.272727 0 0-93.090909Z" fill="#C6E9FF" p-id="69011"></path>
          <path d="M186.181818 558.545455l651.636364 0 0 93.090909-651.636364 0 0-93.090909Z" fill="#C6E9FF" p-id="69012"></path>
        </svg>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseSvgComponent {
  @Input() svgType = "file";

  QSvgType = QSvgType;
}