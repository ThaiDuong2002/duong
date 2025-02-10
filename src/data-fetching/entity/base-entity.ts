class BaseEntity {
  private readonly id!: number;
  private readonly createdAt!: Date;
  private readonly updatedAt!: Date;

  /**
   * Gets the id of the entity.
   * @returns {number} The id of the entity.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Gets the creation date of the entity.
   * @returns {Date} The date when the entity was created.
   */
  public getCreatedAt(): Date {
    return this.createdAt;
  }

  /**
   * Gets the last update date of the entity.
   * @returns {Date} The date when the entity was last updated.
   */
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
}

export default BaseEntity;
