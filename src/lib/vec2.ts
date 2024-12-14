import type { Vec2 as KAPLAYVec2, Mat4 } from "kaplay";
import { Vec2 as PlanckVec2, Vec2Value } from "planck";

/**
 * A 2D vector class that extends Planck's Vec2
 *
 * @export
 * @class Vec2
 * @extends {PlanckVec2}
 * @experimental
 */
export class Vec2 extends PlanckVec2 {
  /**
   * Creates an empty vector (0, 0)
   *
   * @static
   */
  public static ZERO = new Vec2(0, 0);
  /**
   * Creates a vector with components (1, 1)
   *
   * @static
   */
  public static ONE = new Vec2(1, 1);
  /**
   * Creates a vector with components (-1, 0)
   *
   * @static
   */
  public static LEFT = new Vec2(-1, 0);
  /**
   * Creates a vector with components (1, 0)
   *
   * @static
   */
  public static RIGHT = new Vec2(1, 0);
  /**
   * Creates a vector with components (0, -1)
   *
   * @static
   */
  public static UP = new Vec2(0, -1);
  /**
   * Creates a vector with components (0, 1)
   *
   * @static
   */
  public static DOWN = new Vec2(0, 1);

  /**
   * Creates a vector from an angle in radians
   *
   * @static
   * @param {number} angle The angle in radians
   * @return {Vec2} The vector created from the angle
   */
  public static fromAngle(angle: number): Vec2 {
    return new Vec2(Math.cos(angle), Math.sin(angle));
  }

  /**
   * Creates a vector from an array of two numbers
   *
   * @static
   * @param {[number, number]} array The array of two numbers
   * @return {Vec2} The vector created from the array
   */
  public static fromArray(array: [number, number]): Vec2 {
    return new Vec2(array[0], array[1]);
  }

  /**
   * Calculates the interpolation between two vectors
   *
   * @static
   * @param {Vec2} src The source vector
   * @param {Vec2} dst The destination vector
   * @param {number} t The interpolation factor (0-1)
   * @param {Vec2} out The output vector
   * @return {Vec2}
   */
  public static lerp(src: Vec2, dst: Vec2, t: number, out: Vec2): Vec2 {
    out.x = src.x + (dst.x - src.x) * t;
    out.y = src.y + (dst.y - src.y) * t;

    return out;
  }

  /**
   * Calculates the spherical linear interpolation between two vectors
   *
   * @static
   * @param {Vec2} src The source vector
   * @param {Vec2} dst
   * @param {number} t
   * @param {Vec2} out
   * @return {Vec2}
   */
  public static slerp(src: Vec2, dst: Vec2, t: number, out: Vec2): Vec2 {
    const cos = Vec2.dot(src, dst);
    const sin = Vec2.cross(src, dst);
    const angle = Math.atan2(sin, cos);
    const t1 = Math.sin((1 - t) * angle);
    const t2 = Math.sin(t * angle);
    const invSin = 1 / sin;

    out.x = (src.x * t1 + dst.x * t2) * invSin;
    out.y = (src.y * t1 + dst.y * t2) * invSin;

    return out;
  }

  /**
   * Returns a unit vector (normalized vector) of the source vector
   *
   * @static
   * @param {Vec2} src The source vector
   * @return {Vec2} The normalized vector
   */
  public static unit(src: Vec2): Vec2 {
    const vec = src.clone();

    vec.normalize();

    return vec;
  }

  /**
   * Returns a clone of the source vector
   *
   * @static
   * @param {Vec2} src The source vector
   * @return {Vec2} The cloned vector
   */
  public static clone(src: Vec2): Vec2 {
    return new Vec2(src.x, src.y);
  }

  /**
   * Returns the angle of the source vector in radians
   *
   * @static
   * @param {Vec2} src The source vector
   * @return {number}
   * @memberof Vec2
   */
  public static toAngle(src: Vec2): number {
    return Math.atan2(src.y, src.x);
  }

  public constructor(x: number, y: number);
  public constructor(obj: Vec2Value);
  public constructor();
  public constructor(...args: [number, number] | [Vec2Value] | []) {
    if (args.length === 2) {
      super(args[0], args[1]);

      return;
    }
    if (args.length === 1) {
      super(args[0]);

      return;
    }

    super();
  }

  /**
   * Returns a clone of this vector
   *
   * @return {Vec2} The cloned vector
   */
  public clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  /**
   * Scales the vector by a scalar value
   *
   * @param {number} scalar The scalar value to scale the vector by
   * @return {Vec2} this
   */
  public scale(scalar: number): Vec2 {
    return this.mul(scalar) as Vec2;
  }

  /**
   * Returns the distance between the two vectors
   *
   * @param {Vec2} other The other vector to calculate the distance from
   * @return {number} The distance between the two vectors
   */
  public dist(other: Vec2): number {
    return Vec2.distance(this, other);
  }

  /**
   * Returns the squared distance between the two vectors
   *
   * @param {Vec2} other The other vector to calculate the distance from
   * @return {number} The squared distance between the two vectors
   */
  public sdist(other: Vec2): number {
    return Vec2.distanceSquared(this, other);
  }

  /**
   * Returns the length of the vector
   *
   * @return {number} The length of the vector
   */
  public len(): number {
    return this.length();
  }

  /**
   * Returns the squared length of the vector
   *
   * @return {number} The squared length of the vector
   */
  public slen(): number {
    return this.lengthSquared();
  }

  /**
   * Normalizes the vector to a unit length
   *
   * @return {Vec2} this
   */
  public unit(): Vec2 {
    this.normalize();

    return this;
  }

  /**
   * Returns the perpendicular vector to this one
   *
   * @return {Vec2}
   */
  public normal(): Vec2 {
    return new Vec2(-this.y, this.x);
  }

  /**
   * Returns the reflection of a vector with a normal
   *
   * @param {Vec2} normal The normal vector to reflect off of
   * @return {Vec2} The reflected vector
   */
  public reflect(normal: Vec2): Vec2 {
    const vec = this.clone();

    return vec.sub(normal.scale(2 * vec.dot(normal))) as Vec2;
  }

  /**
   * Returns the projection of this vector onto another vector
   *
   * @param {Vec2} on The vector to project onto
   * @return {Vec2} The projection of this vector onto the given vector
   */
  public project(on: Vec2): Vec2 {
    const vec = on.clone();

    return vec.scale(on.dot(this) / on.len());
  }

  /**
   * Returns the rejection of this vector from another vector
   *
   * @param {Vec2} on The vector to reject from
   * @return {Vec2} The rejection of this vector from the given vector
   */
  public reject(on: Vec2): Vec2 {
    const vec = this.clone();

    return vec.sub(vec.project(on)) as Vec2;
  }

  /**
   * Returns the dot product of this vector and another vector
   *
   * @param {Vec2} other The vector to calculate the dot product with
   * @return {number}
   */
  public dot(other: Vec2): number {
    return Vec2.dot(this, other);
  }

  /**
   * Returns the cross product of this vector and another vector
   *
   * @param {Vec2} other The vector to calculate the cross product with
   * @return {number}
   */
  public cross(other: Vec2): number {
    return Vec2.cross(this, other);
  }

  /**
   * Returns the angle of this vector and another vector in radians
   *
   * @param {Vec2} other The vector to calculate the angle with
   * @return {number}
   */
  public angle(other: Vec2): number {
    return Math.atan2(this.y - other.y, this.x - other.x);
  }

  /**
   * Returns the angle between two vectors in radians
   *
   * @param {Vec2} other
   * @return {number}
   */
  public angleBetween(other: Vec2): number {
    return Math.atan2(this.cross(other), this.dot(other));
  }

  /**
   * Returns the linear interpolation between this vector and another vector
   *
   * @param {Vec2} dest The destination vector
   * @param {number} t The interpolation factor (between 0 and 1)
   * @return {Vec2} The interpolated vector
   */
  public lerp(dest: Vec2, t: number): Vec2 {
    return Vec2.lerp(this, dest, t, new Vec2());
  }

  /**
   * Returns the spherical linear interpolation between this vector and another vector
   *
   * @param {Vec2} dest The destination vector
   * @param {number} t The interpolation factor (between 0 and 1)
   * @return {Vec2} The interpolated vector
   */
  public slerp(dest: Vec2, t: number): Vec2 {
    return Vec2.slerp(this, dest, t, new Vec2());
  }

  /**
   * Returns true if the vector components are zero, false otherwise
   *
   * @return {boolean}
   */
  public isZero(): boolean {
    return this.x === 0 && this.y === 0;
  }

  /**
   * Fixes the vector components to a fixed number of decimal places
   *
   * @param {number} n The number of decimal places to fix
   * @return {Vec2} this
   */
  public toFixed(n: number): Vec2 {
    this.x = Number(this.x.toFixed(n));
    this.y = Number(this.y.toFixed(n));

    return this;
  }

  /**
   * Multiplies the vector by Mat4
   *
   * @param {Mat4} m The Mat4 to multiply with
   * @return {Vec2} this
   */
  public transform(m: Mat4): Vec2 {
    const transform = m.multVec2(this as unknown as KAPLAYVec2);

    this.x = transform.x;
    this.y = transform.y;

    return this;
  }

  /**
   * Compares two Vec2 objects for equality
   *
   * @param {Vec2} other The other Vec2 object
   * @return {boolean}
   */
  public eq(other: Vec2): boolean {
    return Vec2.areEqual(this, other);
  }

  /**
   * Converts the Vec2 object to a string
   *
   * @return {string}
   */
  public toString(): string {
    return `Vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
  }

  /**
   * Converts the Vec2 object to an array
   *
   * @return {[number, number]}
   */
  public toArray(): [number, number] {
    return [this.x, this.y];
  }
}
