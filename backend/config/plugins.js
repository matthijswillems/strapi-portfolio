module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "strapi-neon-tech-db-branches": {
    enabled: true,
    config: {
      neonApiKey:
        "b75wrppmr2gq6u8o70ixgz23cw47itn6iwx9gnnnsiwwp31lvxcm13ieip806uvx",
      neonProjectName: "strapi-portfolio",
      neonRole: "matthijswillems",
      gitBranch: env.GIT_BRANCH,
    },
  },
});
