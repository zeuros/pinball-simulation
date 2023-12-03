import { BufferAttribute } from "three";

export const vertices = (buffer: BufferAttribute) => {
  var vertices: [number, number][] = [];

  for (let i = 0; i < buffer.array.length / 2; i++)
    vertices[i] = [buffer.array[i], buffer.array[i+1]];

  return vertices;
}


export const lines = (vertices: [number, number][]) => {

  var lines: [[number, number], [number, number]][] = [];

  for (let i = 0; i < vertices.length / 2; i++)
    lines[i] = [vertices[i], vertices[i+1]];

  return lines;
}
