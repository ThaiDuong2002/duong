class BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  /**
   * Initializes a new instance of the BaseEntity class.
   * @param {number} id The id of the entity.
   * @param {Date} createdAt The date and time the entity was created.
   * @param {Date} updatedAt The date and time the entity was updated.
   */
  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Gets the id of the entity.
   * @returns {number} The id of the entity.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Sets the id of the entity.
   * @param {number} id The id to set.
   */
  public setId(id: number): void {
    this.id = id;
  }

  /**
   * Gets the creation date of the entity.
   * @returns {Date} The date when the entity was created.
   */
  public getCreatedAt(): Date {
    return this.createdAt;
  }

  /**
   * Sets the creation date of the entity.
   * @param {Date} createdAt The date to set.
   */
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  /**
   * Gets the last update date of the entity.
   * @returns {Date} The date when the entity was last updated.
   */
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  /**
   * Sets the last update date of the entity.
   * @param {Date} updatedAt The date to set.
   */
  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

export default BaseEntity;
