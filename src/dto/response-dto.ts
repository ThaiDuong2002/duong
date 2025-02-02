class ResponseDto<T> {
  private status: number;
  private message: string;
  private data: T;

  /**
   * Constructs a new instance of the ResponseDto.
   *
   * @param {number} status - The status of the response.
   * @param {string} message - The message of the response.
   * @param {T} data - The data of the response.
   */
  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  /**
   * Gets the status of the response.
   *
   * @returns {number} The status of the response.
   */
  public getStatus(): number {
    return this.status;
  }

  /**
   * Gets the message of the response.
   *
   * @returns {string} the message of the response
   */
  public getMessage(): string {
    return this.message;
  }

  /**
   * Retrieves the data of the response.
   *
   * @returns {T} the data of the response
   */
  public getData(): T {
    return this.data;
  }

  /**
   * Sets the status of the response.
   *
   * @param {number} status - The status to set.
   */
  public setStatus(status: number): void {
    this.status = status;
  }

  /**
   * Sets the message of the response.
   *
   * @param {string} message - The message to set.
   */
  public setMessage(message: string): void {
    this.message = message;
  }

  /**
   * Sets the data of the response.
   *
   * @param {T} data - The data to set.
   */
  public setData(data: T): void {
    this.data = data;
  }

  /**
   * Converts the ResponseDto object to a JSON string.
   *
   * @returns {string} A JSON string representation of the ResponseDto object,
   * containing the status, message, and data fields.
   */
  public toJson(): string {
    return JSON.stringify({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
}

export default ResponseDto;
