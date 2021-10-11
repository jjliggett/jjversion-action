import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';

try { 
  console.log("Starting version parsing.");
  const payload = JSON.stringify(context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  const versionJson = getInput('version');
  console.log(`${versionJson}`);
  const versionData = JSON.parse(versionJson);
  setOutput("major", versionData.Major);
  setOutput("minor", versionData.Minor);
  setOutput("patch", versionData.Patch);
  setOutput("majorMinorPatch", versionData.MajorMinorPatch);
  setOutput("sha", versionData.Sha);
  setOutput("shortSha", versionData.ShortSha);
} catch (error) {
  setFailed(error.message);
}
