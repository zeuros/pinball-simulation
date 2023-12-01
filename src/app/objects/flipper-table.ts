import {Mesh, MeshBasicMaterial, Shape, ShapeGeometry, SplineCurve, Vector2} from "three";

export class FlipperTable {

  tableShape = new Shape()
    .setFromPoints([
      new Vector2(-5, -10),
      new Vector2(-5, 7),
      ...new SplineCurve([
        new Vector2(-5, 7),
        new Vector2(-4.5, 8.5),
        new Vector2(-3, 9.5),
        new Vector2(0, 10),
        new Vector2(3, 9.5),
        new Vector2(4.5, 8.5),
        new Vector2(5, 7),
      ]).getPoints(50),
      new Vector2(5, 7),
      new Vector2(5, -10),
    ]);

  geometry = new ShapeGeometry(this.tableShape, 50);
  material = new MeshBasicMaterial({color: 0xC3F73A});
  mesh = new Mesh(this.geometry, this.material);

  // Physics
  speed = 0;
  direction = new Vector2();


}
