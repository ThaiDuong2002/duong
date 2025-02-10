import BaseEntity from "./base-entity";

class Contributor extends BaseEntity {
  private login!: string;
  private node_id!: string;
  private avatar_url!: string;
  private gravatar_id!: string;
  private url!: string;
  private html_url!: string;
  private followers_url!: string;
  private following_url!: string;
  private gists_url!: string;
  private starred_url!: string;
  private subscriptions_url!: string;
  private organizations_url!: string;
  private repos_url!: string;
  private events_url!: string;
  private received_events_url!: string;
  private type!: string;
  private user_view_type!: string;
  private site_admin!: boolean;
  private contributions!: number;

  /**
   * Retrieves the login name of the contributor.
   *
   * @returns {string} The login name.
   */
  getLogin(): string {
    return this.login;
  }

  /**
   * Sets the login name of the contributor.
   *
   * @param {string} login - The login name to set.
   */
  setLogin(login: string): void {
    this.login = login;
  }

  /**
   * Retrieves the node ID of the contributor.
   *
   * @returns {string} The node ID.
   */
  getNodeId(): string {
    return this.node_id;
  }

  /**
   * Sets the node ID of the contributor.
   *
   * @param {string} node_id - The node ID to set.
   */
  setNodeId(node_id: string): void {
    this.node_id = node_id;
  }

  /**
   * Retrieves the avatar URL of the contributor.
   *
   * @returns {string} The avatar URL.
   */
  getAvatarUrl(): string {
    return this.avatar_url;
  }

  /**
   * Sets the avatar URL of the contributor.
   *
   * @param {string} avatar_url - The avatar URL to set.
   */
  setAvatarUrl(avatar_url: string): void {
    this.avatar_url = avatar_url;
  }

  /**
   * Retrieves the Gravatar ID of the contributor.
   *
   * @returns {string} The Gravatar ID.
   */
  getGravatarId(): string {
    return this.gravatar_id;
  }

  /**
   * Sets the Gravatar ID of the contributor.
   *
   * @param {string} gravatar_id - The Gravatar ID to set.
   */
  setGravatarId(gravatar_id: string): void {
    this.gravatar_id = gravatar_id;
  }

  /**
   * Retrieves the API URL of the contributor.
   *
   * @returns {string} The API URL.
   */
  getUrl(): string {
    return this.url;
  }

  /**
   * Sets the API URL of the contributor.
   *
   * @param {string} url - The API URL to set.
   */
  setUrl(url: string): void {
    this.url = url;
  }

  /**
   * Retrieves the HTML URL of the contributor.
   *
   * @returns {string} The HTML URL.
   */
  getHtmlUrl(): string {
    return this.html_url;
  }

  /**
   * Sets the HTML URL of the contributor.
   *
   * @param {string} html_url - The HTML URL to set.
   */
  setHtmlUrl(html_url: string): void {
    this.html_url = html_url;
  }

  /**
   * Retrieves the followers URL of the contributor.
   *
   * @returns {string} The followers URL.
   */
  getFollowersUrl(): string {
    return this.followers_url;
  }

  /**
   * Sets the followers URL of the contributor.
   *
   * @param {string} followers_url - The followers URL to set.
   */
  setFollowersUrl(followers_url: string): void {
    this.followers_url = followers_url;
  }

  /**
   * Retrieves the following URL of the contributor.
   *
   * @returns {string} The following URL.
   */
  getFollowingUrl(): string {
    return this.following_url;
  }

  /**
   * Sets the following URL of the contributor.
   *
   * @param {string} following_url - The following URL to set.
   */
  setFollowingUrl(following_url: string): void {
    this.following_url = following_url;
  }

  /**
   * Retrieves the gists URL of the contributor.
   *
   * @returns {string} The gists URL.
   */
  getGistsUrl(): string {
    return this.gists_url;
  }

  /**
   * Sets the gists URL of the contributor.
   *
   * @param {string} gists_url - The gists URL to set.
   */
  setGistsUrl(gists_url: string): void {
    this.gists_url = gists_url;
  }

  /**
   * Retrieves the starred URL of the contributor.
   *
   * @returns {string} The starred URL.
   */
  getStarredUrl(): string {
    return this.starred_url;
  }

  /**
   * Sets the starred URL of the contributor.
   *
   * @param {string} starred_url - The starred URL to set.
   */
  setStarredUrl(starred_url: string): void {
    this.starred_url = starred_url;
  }

  /**
   * Retrieves the subscriptions URL of the contributor.
   *
   * @returns {string} The subscriptions URL.
   */
  getSubscriptionsUrl(): string {
    return this.subscriptions_url;
  }

  /**
   * Sets the subscriptions URL of the contributor.
   *
   * @param {string} subscriptions_url - The subscriptions URL to set.
   */
  setSubscriptionsUrl(subscriptions_url: string): void {
    this.subscriptions_url = subscriptions_url;
  }

  /**
   * Retrieves the organizations URL of the contributor.
   *
   * @returns {string} The organizations URL.
   */
  getOrganizationsUrl(): string {
    return this.organizations_url;
  }

  /**
   * Sets the organizations URL of the contributor.
   *
   * @param {string} organizations_url - The organizations URL to set.
   */
  setOrganizationsUrl(organizations_url: string): void {
    this.organizations_url = organizations_url;
  }

  /**
   * Retrieves the repositories URL of the contributor.
   *
   * @returns {string} The repositories URL.
   */
  getReposUrl(): string {
    return this.repos_url;
  }

  /**
   * Sets the repositories URL of the contributor.
   *
   * @param {string} repos_url - The repositories URL to set.
   */
  setReposUrl(repos_url: string): void {
    this.repos_url = repos_url;
  }

  /**
   * Retrieves the events URL of the contributor.
   *
   * @returns {string} The events URL.
   */
  getEventsUrl(): string {
    return this.events_url;
  }

  /**
   * Sets the events URL of the contributor.
   *
   * @param {string} events_url - The events URL to set.
   */
  setEventsUrl(events_url: string): void {
    this.events_url = events_url;
  }

  /**
   * Retrieves the received events URL of the contributor.
   *
   * @returns {string} The received events URL.
   */
  getReceivedEventsUrl(): string {
    return this.received_events_url;
  }

  /**
   * Sets the received events URL of the contributor.
   *
   * @param {string} received_events_url - The received events URL to set.
   */
  setReceivedEventsUrl(received_events_url: string): void {
    this.received_events_url = received_events_url;
  }

  /**
   * Retrieves the type of the contributor.
   *
   * @returns {string} The type of the contributor.
   */
  getType(): string {
    return this.type;
  }

  /**
   * Sets the type of the contributor.
   *
   * @param {string} type - The type to set.
   */
  setType(type: string): void {
    this.type = type;
  }

  /**
   * Retrieves the user view type for the contributor.
   *
   * @returns {string} The user view type.
   */
  getUserViewType(): string {
    return this.user_view_type;
  }

  /**
   * Sets the user view type for the contributor.
   *
   * @param {string} user_view_type - The view type to be set for the user.
   */
  setUserViewType(user_view_type: string): void {
    this.user_view_type = user_view_type;
  }

  /**
   * Retrieves whether the contributor is a site administrator or not.
   *
   * @returns {boolean} Whether the contributor is a site administrator.
   */
  isSiteAdmin(): boolean {
    return this.site_admin;
  }

  /**
   * Sets whether the contributor is a site administrator or not.
   *
   * @param {boolean} site_admin - Whether the contributor is a site administrator.
   */
  setSiteAdmin(site_admin: boolean): void {
    this.site_admin = site_admin;
  }

  /**
   * Gets the number of contributions of the contributor.
   * @returns {number} The number of contributions.
   */
  getContributions(): number {
    return this.contributions;
  }

  /**
   * Sets the number of contributions of the contributor.
   * @param {number} contributions - The number of contributions.
   */
  setContributions(contributions: number): void {
    this.contributions = contributions;
  }
}

export default Contributor;
