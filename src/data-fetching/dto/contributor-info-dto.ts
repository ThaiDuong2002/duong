class ContributorInfoDto {
  private login: string;
  private avatar_url: string;
  private html_url: string;

  constructor() {
    this.login = "";
    this.avatar_url = "";
    this.html_url = "";
  }

  /**
   * Retrieves the login of the contributor.
   *
   * @returns {string} The login of the contributor.
   */
  public getLogin(): string {
    return this.login;
  }

  /**
   * Sets the login name for the contributor.
   *
   * @param {string} login - The login name to set.
   */
  public setLogin(login: string): void {
    this.login = login;
  }

  /**
   * Retrieves the avatar URL of the contributor.
   *
   * @returns {string} The avatar URL of the contributor.
   */
  public getAvatarUrl(): string {
    return this.avatar_url;
  }

  /**
   * Sets the avatar URL of the contributor.
   *
   * @param {string} avatar_url - The avatar URL to set.
   */
  public setAvatarUrl(avatar_url: string): void {
    this.avatar_url = avatar_url;
  }

  /**
   * Retrieves the HTML URL of the contributor.
   *
   * @returns {string} The HTML URL of the contributor.
   */
  public getHtmlUrl(): string {
    return this.html_url;
  }

  /**
   * Sets the HTML URL of the contributor.
   *
   * @param {string} html_url - The HTML URL to set.
   */
  public setHtmlUrl(html_url: string): void {
    this.html_url = html_url;
  }
}

export default ContributorInfoDto;
