import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {
  BufferGeometry,
  Clock,
  Color,
  Line,
  LineBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Ball} from './objects/ball';
import {FlipperTable} from "./objects/flipper-table";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  private scene = new Scene();
  private camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  private renderer!: WebGLRenderer;
  private ball = new Ball();
  private flipperTable = new FlipperTable();
  private line!: Line;
  private i = 0;
  private controls!: OrbitControls;
  private clock = new Clock();

  private get canvas() {
    return this.canvasRef.nativeElement;
  }

  private static buildLine = () => {
    return new Line(
      new BufferGeometry().setFromPoints([
        new Vector3(-.06, .02, 0),
        new Vector3(.2, .1, .5),
        new Vector3(.1, .4, .8),
      ]),
      new LineBasicMaterial({color: 0x0000ff})
    );
  };

  ngAfterViewInit() {
    this.createScene();
    this.clock.start();
    this.animate();
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene = () => {
    // Objects
    this.line = AppComponent.buildLine();

    // Scene
    this.scene.background = new Color(0xd4d4d8);
    this.scene.add(this.flipperTable.mesh);
    this.scene.add(this.ball.mesh);
    // this.scene.add(this.line);

    // Renderer
    this.renderer = new WebGLRenderer({canvas: this.canvas, antialias: true});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // Camera
    this.camera.position.z = 20;

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
  };

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);

    this.controls.update();

    const delta = this.clock.getDelta();
    this.ball.speed = this.ball.speed + (9.81 * delta);
    this.ball.mesh.position.y -= this.ball.speed * delta;
  };

}
