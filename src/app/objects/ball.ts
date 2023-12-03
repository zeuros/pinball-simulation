import {Mesh, MeshBasicMaterial, SphereGeometry, Vector2} from "three";

export class Ball {

  // Physics
  radius: number;
  mass: number;
  speed: Vector2;

  // geometry
  geometry: SphereGeometry;
  material: MeshBasicMaterial;
  mesh: Mesh;

  constructor(radius = 0.3, speed = new Vector2(0, 0), color = 0x333333) {
    this.radius = radius;
    this.mass = Math.PI * this.radius * this.radius;
    this.speed = speed;
    this.geometry = new SphereGeometry(this.radius, 50, 50);
    this.material = new MeshBasicMaterial({color});
    this.mesh = new Mesh(this.geometry, this.material);
  }


  simulate(deltaT: number) {
    this.speed.y += 9.81 * deltaT;

    this.mesh.position.x -= this.speed.x * deltaT;
    this.mesh.position.y -= this.speed.y * deltaT;
  }

  handleObstacleCollision(vertices: [number, number][]) {
    // new ConvexGeometry().setFromPoints( vertices )
  }
}
