// @ts-check

const config = {
  endpoint: "https://cosmos-pedro20191351.documents.azure.com:443/",
  key: "a3PtJCQwcc6BvgimCvMDmQSvCFMUiWScfIfORjQibiiTWRzO5To5NMw7avyThupHRSpaGlTQs0DTACDbXjwwCQ==",
  databaseId: "pecas_auto",
  containerId: "filtros",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
