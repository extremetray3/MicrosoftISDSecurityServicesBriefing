---
title: "Appendix"
layout: default
nav_order: 9
---

# Appendix — Microsoft AI and Security Technology Mapping
{: .no_toc }

{: .note }
> This appendix is illustrative and should be tailored to each customer's architecture, maturity, and licensing posture.

<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## How to use this appendix

Microsoft's approach to AI security increasingly treats agents as first-class enterprise entities — requiring identity, governance, data protection, monitoring, and response capabilities that extend familiar Zero Trust and security operations patterns into the AI domain.

The mapping below illustrates how Microsoft platforms and security products can be combined (including select Preview capabilities) to implement the control themes described in this briefing.

{: .note }
> Ownership varies by organization; the "Typical Owner" column is meant to clarify how these capabilities are usually operated across AI engineering, platform teams, security/compliance, and COE functions.

## Key capabilities referenced

- GenAI Platform & App Baseline Security
- Agent Identity & Lifecycle Governance
- Tool / API Permission Bounding & Safe Tooling
- Data Security (Prompt / RAG / Output / Write-back)
- Observability, Logging & Evidence (Auditability)
- Threat Detection, Investigation & Response (SecOps)
- DevSecOps, Controls-as-Code & Change Management
- COE / AI Factory Integration, Governance & Reporting
- Assurance, Testing & Red Teaming

---

## Technology Mapping

<table class="tech-mapping-table">
<colgroup>
  <col style="width: 18%;">
  <col style="width: 4%;">
  <col style="width: 38%;">
  <col style="width: 27%;">
  <col style="width: 13%;">
</colgroup>
<thead>
<tr>
  <th>Product / Service</th>
  <th></th>
  <th>Controls, Monitors, Integrates with, and/or Reports on</th>
  <th>Functional Capability Mapping</th>
  <th>Typical Owner (AI Eng / Platform / Security / COE)</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Microsoft Agent 365 (Preview)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:robot" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Control-plane visibility and governance of agent fleets</li>
      <li>Registry/posture and cross-stack integration signals</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Agent Identity &amp; Lifecycle Governance</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
      <li>Observability, Logging &amp; Evidence</li>
    </ul>
  </td>
  <td>COE + Security</td>
</tr>
<tr>
  <td>Microsoft Entra Agent ID (Preview)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:identification-card" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Identity constructs and governance patterns for agents</li>
      <li>Supports policy-based control and lifecycle direction</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Agent Identity &amp; Lifecycle Governance</li>
      <li>Tool / API Permission Bounding &amp; Safe Tooling</li>
    </ul>
  </td>
  <td>Platform + Security</td>
</tr>
<tr>
  <td>Microsoft Entra ID (Identity &amp; Access)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:key" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Authentication/authorization, conditional access patterns, identity controls for AI apps and tools</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>GenAI Platform &amp; App Baseline Security</li>
      <li>Agent Identity &amp; Lifecycle Governance</li>
    </ul>
  </td>
  <td>Platform (IAM) + Security</td>
</tr>
<tr>
  <td>Entra ID Governance (access reviews / entitlement patterns)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:clipboard" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Access reviews, approvals, entitlement workflows (where used)</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Agent Identity &amp; Lifecycle Governance</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>Security (IAM Gov) + COE</td>
</tr>
<tr>
  <td>Managed Identities / workload identity patterns (Azure)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:locked" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Reduces secrets-in-code</li>
      <li>Improves credential lifecycle for workloads and toolchains</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Tool / API Permission Bounding &amp; Safe Tooling</li>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
    </ul>
  </td>
  <td>Platform + AI Eng</td>
</tr>
<tr>
  <td>Azure OpenAI Service</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:brain" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Enterprise model endpoints with Azure security boundaries</li>
      <li>Integrates with logging/network/identity controls</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>GenAI Platform &amp; App Baseline Security</li>
      <li>Observability, Logging &amp; Evidence</li>
    </ul>
  </td>
  <td>Platform + AI Eng</td>
</tr>
<tr>
  <td>Azure AI Foundry (incl. evaluation tooling; Preview where applicable)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:factory" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Standardizes build/evaluate/release patterns</li>
      <li>Supports repeatable evaluation and governance workflows</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
      <li>Assurance, Testing &amp; Red Teaming</li>
    </ul>
  </td>
  <td>AI Eng + COE</td>
</tr>
<tr>
  <td>Azure AI Search</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:magnifying-glass-tilted-right" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Retrieval (RAG) enablement</li>
      <li>Supports controlled retrieval architectures and least-privilege access patterns</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Data Security (Prompt / RAG / Output / Write-back)</li>
      <li>Tool / API Permission Bounding &amp; Safe Tooling</li>
    </ul>
  </td>
  <td>AI Eng + Platform</td>
</tr>
<tr>
  <td>Azure API Management</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:electric-plug" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Auth, throttling, policy enforcement, governance for AI-facing APIs and tool APIs</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Tool / API Permission Bounding &amp; Safe Tooling</li>
      <li>GenAI Platform &amp; App Baseline Security</li>
    </ul>
  </td>
  <td>Platform + Security</td>
</tr>
<tr>
  <td>Azure Key Vault</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:locked-with-key" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Secrets/keys/certs lifecycle</li>
      <li>Supports secure toolchain and runtime access</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>GenAI Platform &amp; App Baseline Security</li>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
    </ul>
  </td>
  <td>Platform</td>
</tr>
<tr>
  <td>Azure Private Link / VNet Integration</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:link" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Private connectivity patterns that reduce public exposure of AI endpoints and dependencies</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>GenAI Platform &amp; App Baseline Security</li>
    </ul>
  </td>
  <td>Platform</td>
</tr>
<tr>
  <td>Azure Policy (Policy-as-Code)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:scroll" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Guardrails for Azure configurations</li>
      <li>Prevents drift and enforces baselines</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
      <li>GenAI Platform &amp; App Baseline Security</li>
    </ul>
  </td>
  <td>Platform + Security</td>
</tr>
<tr>
  <td>Azure Resource Graph / tagging &amp; inventory patterns</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:card-file-box" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Asset discovery, inventory hygiene, governance reporting patterns across AI environments</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
      <li>Observability, Logging &amp; Evidence</li>
    </ul>
  </td>
  <td>Platform + COE</td>
</tr>
<tr>
  <td>Microsoft Defender for Cloud</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:shield" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Cloud posture management + threat protection signals for Azure resources supporting AI workloads</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>GenAI Platform &amp; App Baseline Security</li>
      <li>Threat Detection, Investigation &amp; Response</li>
    </ul>
  </td>
  <td>Security + Platform</td>
</tr>
<tr>
  <td>Defender Portal "Cloud Security Dashboard" (Preview, where applicable)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:chart-increasing" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Consolidated posture/threat view</li>
      <li>Reporting and prioritization</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
      <li>GenAI Platform &amp; App Baseline Security</li>
    </ul>
  </td>
  <td>Security + COE</td>
</tr>
<tr>
  <td>Microsoft Defender XDR</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:crossed-swords" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Unified investigation across endpoint/identity/email/collab/cloud signals</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Threat Detection, Investigation &amp; Response</li>
      <li>Observability, Logging &amp; Evidence</li>
    </ul>
  </td>
  <td>Security (SecOps)</td>
</tr>
<tr>
  <td>Microsoft Sentinel</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:satellite-antenna" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>SIEM/SOAR correlation, detections, playbooks</li>
      <li>Ingestion of AI app/agent telemetry</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Threat Detection, Investigation &amp; Response</li>
      <li>Observability, Logging &amp; Evidence</li>
    </ul>
  </td>
  <td>Security (SecOps)</td>
</tr>
<tr>
  <td>Azure Monitor + Log Analytics</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:bar-chart" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Collection/analysis of application and infrastructure telemetry</li>
      <li>Structured logging pipelines</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Observability, Logging &amp; Evidence</li>
      <li>Threat Detection, Investigation &amp; Response</li>
    </ul>
  </td>
  <td>Platform + Security</td>
</tr>
<tr>
  <td>Microsoft Security Copilot</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:sparkles" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Accelerates triage/investigation/reporting/tasking</li>
      <li>SOC scaling and exec summaries</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Threat Detection, Investigation &amp; Response</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>Security (SecOps) + COE</td>
</tr>
<tr>
  <td>Microsoft Purview Information Protection (labels)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:label" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Classification/labeling for sensitive data</li>
      <li>Handling expectations for AI-relevant data</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Data Security (Prompt / RAG / Output / Write-back)</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>Security (Data Gov/Compliance) + COE</td>
</tr>
<tr>
  <td>Microsoft Purview DLP</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:no-entry" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Reduces leakage risk across prompts/outputs/sharing surfaces</li>
      <li>Policy enforcement</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Data Security (Prompt / RAG / Output / Write-back)</li>
    </ul>
  </td>
  <td>Security (Compliance)</td>
</tr>
<tr>
  <td>Microsoft Purview Data Security Investigations (Preview, where applicable)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:detective" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Investigation workflows and analytic views for data security signals</li>
      <li>Evidence support</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Observability, Logging &amp; Evidence</li>
      <li>Threat Detection, Investigation &amp; Response</li>
    </ul>
  </td>
  <td>Security (Compliance/SecOps)</td>
</tr>
<tr>
  <td>Microsoft Purview Insider Risk Management</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:warning" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Detects risky behaviors and policy violations intersecting AI workflows</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Data Security (Prompt / RAG / Output / Write-back)</li>
      <li>Threat Detection, Investigation &amp; Response</li>
    </ul>
  </td>
  <td>Security (Insider Risk)</td>
</tr>
<tr>
  <td>Microsoft Defender for Cloud Apps (CASB)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:cloud" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Visibility/control over SaaS usage</li>
      <li>Policies for risky apps and data movement</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Data Security (Prompt / RAG / Output / Write-back)</li>
      <li>GenAI Platform &amp; App Baseline Security</li>
    </ul>
  </td>
  <td>Security</td>
</tr>
<tr>
  <td>Microsoft Defender for Identity (where applicable)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:bust-in-silhouette" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Identity threat detection and investigations</li>
      <li>Credential abuse patterns</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Threat Detection, Investigation &amp; Response</li>
      <li>Agent Identity &amp; Lifecycle Governance</li>
    </ul>
  </td>
  <td>Security (SecOps)</td>
</tr>
<tr>
  <td>GitHub Advanced Security</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="simple-icons:github" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Code scanning, secret scanning, dependency risk detection</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
    </ul>
  </td>
  <td>AI Eng + Security (AppSec)</td>
</tr>
<tr>
  <td>Azure DevOps</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:gear" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Release gating and secure pipelines for AI app components and infrastructure</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>AI Eng + Platform</td>
</tr>
<tr>
  <td>Microsoft Defender for DevOps (where used)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:hammer-and-wrench" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Security signals across code-to-cloud pipeline and posture</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>DevSecOps, Controls-as-Code &amp; Change Management</li>
      <li>Threat Detection, Investigation &amp; Response</li>
    </ul>
  </td>
  <td>Security (AppSec) + AI Eng</td>
</tr>
<tr>
  <td>Power BI / Fabric (where used)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:gem-stone" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Governance dashboards for KPIs, posture trends, exceptions, progress</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>COE</td>
</tr>
<tr>
  <td>Microsoft Teams + Planner (operational tooling)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:speech-balloon" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Operationalizes governance decisions into tasks and tracked outcomes</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>COE</td>
</tr>
<tr>
  <td>Copilot Studio (where applicable)</td>
  <td style="text-align:center; vertical-align:middle;"><iconify-icon icon="fluent-emoji-flat:artist-palette" width="28" height="28"></iconify-icon></td>
  <td>
    <ul>
      <li>Low-/medium-code agent creation</li>
      <li>Reinforces need for governance, inventory, and policy alignment</li>
    </ul>
  </td>
  <td>
    <ul>
      <li>Agent Identity &amp; Lifecycle Governance</li>
      <li>COE / AI Factory Integration, Governance &amp; Reporting</li>
    </ul>
  </td>
  <td>COE + AI Eng</td>
</tr>
</tbody>
</table>
