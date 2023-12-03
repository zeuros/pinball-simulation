import {Mesh, MeshBasicMaterial, Shape, ShapeGeometry, SplineCurve, Vector2} from "three";
import { lines, vertices } from "../helper/utils";

export class FlipperTable {

  points: Vector2[];

  constructor(
    public tableShape = new Shape()
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
    ]),
    public geometry = new ShapeGeometry(tableShape, 50),
    public material = new MeshBasicMaterial({color: 0xC3F73A}),
    public mesh = new Mesh(geometry, material),

    // Physics
    public speed = 0,
    public direction = new Vector2(),
  ) {

    this.points = tableShape.extractPoints(1).shape;
    debugger

  }

}
