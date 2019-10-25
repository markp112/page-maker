import { Component, OnInit, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-color-slider",
  templateUrl: "./color-slider.component.html",
  styleUrls: ["./color-slider.component.scss"]
})

export class ColorSliderComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  
  @HostListener("window:mouseup", ["$event"])
  
  @Output()
  color: EventEmitter<string> = new EventEmitter();

  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private mousedown: boolean = false;
  private selectedHeight: number;

  draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext("2d");
    }
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;
    this.ctx.clearRect(0, 0, width, height);

    const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.17, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(0.34, "rgba(0, 255, 0, 1)");
    gradient.addColorStop(0.51, "rgba(0, 255, 255, 1)");
    gradient.addColorStop(0.68, "rgba(0, 0, 255, 1)");
    gradient.addColorStop(0.85, "rgba(255, 0, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 1)");
    this.ctx.beginPath();
    this.ctx.rect(0, 0, width, height);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.closePath();
    if (this.selectedHeight) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 5;
      this.ctx.rect(0, this.selectedHeight - 5, width, 10);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  emitColor(x: number, y: number) {
    const rgbaColor = this.getColorAtPosition(x, y);
    this.color.emit(rgbaColor);
  }

  getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    return (
      "rgba(" + imageData[0] + "," + imageData[1] + "," + imageData[2] + ",1)"
    );
  }

  onMouseDown(evt: MouseEvent) {
    this.mousedown = true;
    this.selectedHeight = evt.offsetY;
    this.draw();
    this.emitColor(evt.offsetX, evt.offsetY);
  }

  onMouseUp(evt: MouseEvent) {
    this.mousedown = false;
  }
  ngOnInit() {
    this.draw();
  }
}
