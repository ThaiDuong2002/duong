class ErrorResponseDto {
  private message: string;
  private documentation_url: string;
  private status: number;

  /**
   * Constructor for ErrorResponseDto
   *
   * @param {string} message - The error message
   * @param {string} documentation_url - The documentation URL
   * @param {number} status - The status
   */
  constructor(status: number, message: string, documentation_url: string) {
    this.message = message;
    this.documentation_url = documentation_url;
    this.status = status;
  }

  /**
   * Retrieves the error message.
   *
   * @returns {string} The error message.
   */
  public getMessage(): string {
    return this.message;
  }

  /**
   * Retrieves the documentation URL.
   *
   * @returns {string} The documentation URL.
   */
  public getDocumentationUrl(): string {
    return this.documentation_url;
  }

  /**
   * Retrieves the status.
   *
   * @returns {number} The status.
   */
  public getStatus(): number {
    return this.status;
  }

  /**
   * Sets the error message.
   *
   * @param {string} message - The error message to set.
   */
  public setMessage(message: string): void {
    this.message = message;
  }

  /**
   * Sets the documentation URL.
   *
   * @param {string} documentation_url - The documentation URL to set.
   */
  public setDocumentationUrl(documentation_url: string): void {
    this.documentation_url = documentation_url;
  }

  /**
   * Sets the status.
   *
   * @param {number} status - The status to set.
   */
  public setStatus(status: number): void {
    this.status = status;
  }

  /**
   * Converts the ErrorResponseDto object to a JSON string.
   *
   * @returns {string} A JSON string representation of the ErrorResponseDto object,
   * containing the message, documentation_url, and status fields.
   */
  public toJson(): string {
    return JSON.stringify({
      message: this.message,
      documentation_url: this.documentation_url,
      status: this.status,
    });
  }
}

export default ErrorResponseDto;
