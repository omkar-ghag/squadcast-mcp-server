import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import initOAuthTools from "./oauth";
import initTeamsTools from "./teams";
import initSchedulesTools from "./schedules";
import initIncidentsTools from "./incidents";
import initStatusPagesTools from "./statusPages";
import initUtilsTools from "./utils";
import initEscalationPolicyTools from "./escalationPolicy";
import initServiceTools from "./services";
import initSquadsTools from "./squads";

const initTools = (server: McpServer) => {
  initOAuthTools(server);
  initTeamsTools(server);
  initSchedulesTools(server);
  initIncidentsTools(server);
  initStatusPagesTools(server);
  initUtilsTools(server);
  initEscalationPolicyTools(server);
  initServiceTools(server);
  initSquadsTools(server);
};

export default initTools;
