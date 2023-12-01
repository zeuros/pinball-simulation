import {Mesh, MeshBasicMaterial, SphereGeometry, Vector2, Vector3} from "three";

export class Ball {

  geometry = new SphereGeometry(.2, 50, 50);
  material = new MeshBasicMaterial({color: 0x333333});
  mesh = new Mesh(this.geometry, this.material);

  // Physics
  speed = 0;
  direction = new Vector2();

}
