class UnauthorizedException extends Error {
  public documentationUrl: string;

  constructor(message: string, documentationUrl: string) {
    super(message);
    this.documentationUrl = documentationUrl;
  }
}

export default UnauthorizedException;
