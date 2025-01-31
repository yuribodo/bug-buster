const config = {
  appName: "Bug Busters",
  appDescription:
    "Bug Busters is a platform to improve your code.",
  domainName:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bugbusters.io",
};

export default config;
