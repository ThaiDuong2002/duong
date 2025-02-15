const owner = [
  {
    id: 0,
    name: "ThaiDuong2002",
  },
  {
    id: 1,
    name: "bhtoan2204",
  },
  {
    id: 2,
    name: "buiquangthanhcode",
  },
  {
    id: 3,
    name: "minhtringuyen31",
  },
];

const repositories = [
  {
    id: 0,
    name: "portfolio",
  },
  {
    id: 1,
    name: "fam-fund-web",
  },
  {
    id: 2,
    name: "family-backend",
  },
  {
    id: 3,
    name: "family-frontend-mobile",
  },
  {
    id: 4,
    name: "famfund-frontend-web-admin",
  },
  {
    id: 5,
    name: "Paint_WindowsApp",
  },
  {
    id: 6,
    name: "MyShop_WindowsApp",
  },
  {
    id: 7,
    name: "Ads-Management",
  },

  {
    id: 8,
    name: "20KTPM1-Car-Booking-System",
  },
  {
    id: 9,
    name: "mobile_app_20KTPM01",
  },
  {
    id: 10,
    name: "20KTPM1_Online_Academy_Project",
  },
  {
    id: 11,
    name: "NMCNPM",
  },
  {
    id: 12,
    name: "Chat-Application",
  },
  {
    id: 13,
    name: "Video-Sharing",
  },
];

const apiContributors = (owner: string, repo: string) =>
  `https://api.github.com/repos/${owner}/${repo}/contributors`;

const githubUrl = (owner: string, repo: string) =>
  `https://github.com/${owner}/${repo}`;

export { owner, repositories, apiContributors, githubUrl };
