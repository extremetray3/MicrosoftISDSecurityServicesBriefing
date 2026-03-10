**Briefing (Shareable with Customers under NDA)**

**Todd Ray 2 January 2026**

**Version:** v1\
**Audience:** CISO/CIO/CTO, AI Transformation Leaders, Security Architecture, Platform Engineering, SecOps\
**Purpose:**

- Highlight the latest thinking on securing Generative and Agentic AI enterprise platforms and applications.

- Prescribe alternative progression pathways to achieve safe Frontier usage of the latest AI technology from Microsoft.

# Executive Summary

## Overview

### The Shift from Generative to Agentic AI

Enterprises are rapidly evolving from ***AI that generates*** to ***AI that acts***: autonomous agents that plan, call tools, retrieve data, write back to systems of record, and delegate to other agents. This shift changes the security problem from foundational GenAI security to **workforce governance for digital workers** that operate at machine speed, at scale, and across many systems at once.

The core challenge now extends from whether an AI model can produce a harmful answer to whether an agent can **take a harmful action** (or chain of actions) and whether the organization can prove it remained in control.

### Key Questions Organizations Must Answer

- What agents exist in production, who owns them, and how is their lifecycle managed?

- Are agents being built on the right platform(s), for the right reasons, and by the right people?

- What can each agent do (tools, permissions, write‑backs), and under what conditions?

- What did an agent do, why did it do it, and what evidence exists?

- Can we detect abnormal agent behavior and respond quickly (disable/quarantine/revoke)?

### Briefing Scope

This briefing covers:

- Generative AI security fundamentals
- Why agentic AI changes the security model
- The most important new risks and failure modes
- Practical control primitives available today and in the near future
- How Microsoft ISD Security can help customers embarking on this journey

@@note: Not intended as a technical deep dive. See Appendix for Microsoft AI Security Technology Mapping.

@@note: <https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392>
@@note: <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

# Securing Generative AI on Azure --- Fundamentals (Baseline)

@@subtitle: Establishing a baseline for securing generative AI solutions -- these remain widely deployed and are the foundation that agentic systems build upon.
## 1.1 The top security risks

@@subtitle: Establishing a baseline for generative AI security -- these solutions remain widely deployed and are the foundation agentic systems build upon.

### Data exposure and leakage

Sensitive data entering prompts, being retrieved into context, or emitted in outputs (including accidental cross-tenant or cross-user exposure when access boundaries are weak).

### Prompt injection and context manipulation

Adversarial instructions hidden in user prompts or retrieved content (especially in RAG patterns) that steer the model toward unsafe behavior, policy bypass, or disclosure.

### Insecure integration patterns

Overly-permissive APIs, weak authN/authZ, secrets in code, overly broad service principals, or missing network controls around the AI app and its dependencies.

### RAG poisoning and provenance risk

Untrusted or tampered sources feeding retrieval systems, leading to incorrect, malicious, or policy-violating outputs.

### Operational blind spots

Insufficient logging of prompts/context, lack of traceability for "why did it say that?" and limited monitoring for abuse, exfiltration patterns, or policy drift.

### Compliance and risk misalignment

AI teams move fast; governance, documentation, and control evidence lag behind, creating friction later when security/risk teams must sign off for production use.
## 1.2 Key control themes and frameworks

### Overview

Enterprise programs have converged on several control themes and frameworks (partial listing).

### Control themes

- Risk management backbone (acceptable use, oversight, accountability)

- Application and cloud security baseline (identity, network, secrets, secure SDLC)

- GenAI-specific checklist for common failure modes (prompt injection, data leakage, RAG integrity, output handling)

- Operational evidence model (logging, monitoring, incident response, audit readiness)

### Frameworks and standards

- CIS Critical Security Controls (CIS Controls)

- EU AI Act

- ISO/IEC 20000, 27001, 27035, 23894 (IT/Security/AI risk management)

- ISO/IEC 42001 (AI Management System / AIMS)

- NIST AI Risk Management Framework (NIST AI RMF)

- NIST Cybersecurity Framework (NIST CSF)

### Key takeaway

Ensuring a consistent vocabulary for risk, a repeatable control approach, and defensible evidence for production readiness requires deep understanding of the platform and application architecture.
## 1.2.1 How frameworks have evolved (2022 to 2026)

@@subtitle: From policy intent and baseline controls to AI-specific standards and audit-shaped evidence requirements.

### 2022/2023

Most organizations anchored secure AI using existing security and risk frameworks (e.g., enterprise risk management, secure SDLC, cloud security baselines, privacy and data governance) plus early responsible AI principles and emerging AI guidance. The focus was often on policy intent (what we should do) and baseline controls (how we secure the platform and data around an AI app).

### 2026

The landscape is shifting to be more concrete and more audit-shaped. Several AI-specific standards and practitioner playbooks have become prominent enough that customers increasingly expect explicit alignment, not just good practices. In particular:

### NIST AI RMF

Has emerged as a widely recognized, AI-specific risk management backbone (practical, flexible, and maps well to how enterprises actually govern and deliver technology).

### ISO AI standards

Have increased in visibility for organizations that want a certifiable or audit-ready management-system approach to AI governance and risk.

### Practitioner security taxonomies

For GenAI (and now agentic patterns) have matured, giving security teams and builders a shared checklist of common failure modes.

### Regulatory expectations

Have sharpened, increasing the importance of traceability, oversight, and evidence, especially as AI moves from experimentation into production and higher-impact use.

### OWASP Top 10 for Agentic AI

OWASP has published a Top 10 specifically oriented to agentic applications, reflecting the community's view that autonomy introduces new, high-impact risk categories. Organizations should plan early for reporting workflows and evidence in jurisdictions with defined incident reporting timelines.
## 1.3 Practical approaches to addressing AI Security

@@subtitle: Security patterns that have surfaced in recent Generative AI customer initiatives. Each customer scenario is different, patterns overlap, and other functions are involved as well.

### AI security foundations and governance

Establishing the baseline: define the AI use case(s), data flows, trust boundaries, compliance drivers, and the minimum set of security requirements for production readiness. Backlog prioritization and sequencing plan(s).

### Threat Modeling

Modeling the end-to-end AI application pattern (including prompt inputs, retrieval sources, system prompts, model endpoints, and downstream dependencies). Identifying the most likely attack paths (prompt injection, data exposure, compromised sources) and translate mitigations into actionable backlog items.

### Security Controls Enablement

Implementing and/or hardening the security baseline around the AI workload: identity and access controls, secrets management, network boundaries, secure configuration, policy enforcement, and secure SDLC guardrails.

### Data Security

Classifying and protecting AI-relevant data sources; apply labeling and access governance; define DLP and output-handling policies; and establish provenance expectations for retrieval sources to reduce poisoning and leakage risk.

### Security Testing / Red Team Support

Validating that controls and mitigations actually function as designed. Focus on the realistic failure modes (prompt injection, retrieval manipulation, jailbreak patterns, unsafe data access, and insecure integrations) and ensure findings land as concrete remediation actions.

### SecOps Integration

Establish operational visibility: logging and telemetry for prompts, retrieval, policy outcomes, and application events; monitoring for anomalous usage patterns; and detection/response workflows that allow security teams to support production safely.
## 1.4 Looking back as we move forward

Many best practices shared above started to become clearer as GenAI moved from experimentation into early production (roughly the 2024/2025 time frame), but they were not always consistently applied---especially when teams viewed security as an impediment rather than an enabler.

The predictable result is that solutions that looked successful in POCs later required **costly redesign** to meet enterprise security, risk, and compliance expectations for production scale.

That dynamic becomes even more pronounced as organizations shift from content generation to agentic systems that can plan, act, and interact with enterprise tools and systems of record.

# Securing Agentic AI

## 2.1 Why Agentic AI Changes the Security Model

### From "answers" to "actions"

"Classic" generative AI solutions primarily **generate content**. Agentic systems, by design, **perform work**:

- They **plan** multi‑step tasks

- They select and invoke **tools** (APIs, RPA, databases, workflows)

- They operate with **state and memory** (what happened before influences what happens next)

- They often **delegate** to other agents or components to complete goals

This means small weaknesses can cascade: a prompt injection or compromised retrieval source is no longer "just" a bad response; it can become a sequence of high‑impact actions like credential misuse, data exfiltration, policy changes, or corruption of a system of record.

### Autonomy scales both value and risk

Autonomy is what makes agents valuable: they reduce cycle time, increase throughput, and make AI transformation real. But autonomy also changes the compliance and governance expectation: oversight must scale with autonomy level, and evidence must exist to show control was maintained.

### The new governance problem: "agent sprawl"

Most organizations already struggle with non‑human identities, shadow automation, and unmanaged service principals. Agents accelerate this. Without purposeful controls, organizations get:

- Agents created in many places by many teams

- Privileges inherited from developers, pipelines, or broad service principals

- "Orphaned" agents that no one owns

- Inconsistent logging and missing evidence trails

This is why agent security is best understood as **governance + identity + observability + operations**, not as a narrow application security sub‑topic.

@@note: <https://www.bleepingcomputer.com/news/security/the-real-world-attacks-behind-owasp-agentic-ai-top-10/>
@@note: <https://artificialintelligenceact.eu/article/73/>

## The New Risk Landscape

There are many possible threat taxonomies. The most useful executive view is to group risks into a few practical buckets that map directly to controls and operating model decisions.

### Identity & privilege risks (agents as non‑human principals)

- Agents operate with credentials and tokens; broad scopes create "excessive agency."

- Agents can become "super users" through transitive tool permissions.

- Orphaned agents persist long after their original business case disappears.

**What failure looks like:** the organization cannot confidently answer who owns an agent, what it can access, or whether it's still needed.

### Integrity & manipulation risks (goal hijack, tool misuse, supply chain)

Agentic systems ingest untrusted data (web, email, documents, tickets, wikis) and can be influenced through:

- Indirect prompt injection via retrieved content

- Tool misuse and unsafe chaining

- Memory/context poisoning

- Compromised connectors, plugins, or orchestration components

**What failure looks like:** an agent follows attacker‑embedded instructions and performs legitimate actions for illegitimate purposes.

### Transparency & auditability gaps (the "black box workforce" problem)

Leadership will be asked: "Can you prove what happened?" This requires:

- Evidence of what context was used

- What plan was produced

- What tools were invoked

- What actions occurred and what outputs were generated

- Why the agent made the decision it made (at least at an operational level)

**What failure looks like:** the organization cannot reconstruct events or demonstrate control, increasing regulatory, legal, and operational risk.

### Operational & compliance risk (incident response and reporting timelines)

As AI systems move into high‑impact domains, organizations will need to respond quickly and with evidence. For example, the EU AI Act includes **serious incident reporting requirements** with a standard 15‑day window, and shorter timelines for severe cases.

**What failure looks like:** inability to detect incidents quickly, contain agents, and produce timely evidence for reporting and remediation.

@@note: <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-73>

## 2.3 What "Good" Looks Like

### Desired outcomes (North Star)

A practical AI Security (and governance) target state can be expressed as the following outcomes:

#### Know what agents exist

- A registry and ownership model for production agents

- Classification (autonomy, data sensitivity, criticality)

#### Ensure agents are built with clear ownership, and platform fit

- Platform/architecture selection aligned to risk and criticality

- Named build/run ownership and change controls

- Standard intake and gating (fast path vs. high-risk)

- Alignment to AI COE standards and reusable patterns

#### Control what agents can do

- Strong identity + least privilege

- Tool permission bounding

- Policy gates for high‑risk actions

#### See what agents did and why

- Structured activity logs and correlation

- Auditability across plan → tool call → action → result

#### Respond and improve continuously

- Agent‑aware detections and containment

- Change management for prompts/tools/policies/memory

- Lifecycle hygiene and continuous control improvement

### Foundational design principles (practical guardrails)

These principles help translate "secure agentic AI" into implementable architecture and operations:

- **Least Agency:** Give agents only the autonomy needed, not the autonomy available.

- **Agent Zero Trust:** Treat each agent as a first‑class principal with explicit authentication/authorization.

- **Observable‑by‑default:** Log plans, tool calls, context, actions, and outcomes with correlation IDs.

- **Action‑time controls:** Gate irreversible or high‑risk actions with policy and human approval.

- **Trust boundaries for multi‑agent systems:** Explicit delegation contracts and role isolation.

- **Compliance aligned to autonomy:** Oversight and evidence scale with autonomy level.

- **Secure agent supply chain:** Validate provenance of models, tools, plugins, connectors.

## 2.4 Control Primitives That Matter

Many organizations jump to "monitoring" or "red teaming" first. In practice, durable security starts with a small number of control primitives that create enterprise leverage.

### Agent inventory, ownership, and lifecycle governance

**Goal:** prevent agent sprawl and orphaned non‑human identities.

Minimum controls:

- Agent registry (what exists, who owns it, where it runs)

- Ownership and escalation paths

- Autonomy classification (low/medium/high) and required oversight per class

- Decommissioning criteria and periodic review cadence

Industry direction is moving toward **dedicated identity constructs for agents** and centralized visibility into agent identities across build platforms.

### Identity and access governance for agents

**Goal:** prevent excessive agency and transitive privilege escalation.

Controls:

- First‑class non‑human identities for agents

- Just‑in‑time access for sensitive tools

- Narrow tool scopes and time‑bound permissions

- Regular permission attestation and automated orphan detection

### Tool permission bounding (the "blast radius" control)

Agentic incidents often become severe because agents can call powerful tools with broad access. Tool bounding includes:

- A "safe tool catalog"

- Contracted inputs/outputs (schemas, allowlists)

- Write‑back governance (where can an agent commit changes?)

- Separation of duties for high‑impact tools

### Data controls designed for agent behavior

Traditional DLP is necessary but insufficient. Agentic systems need:

- Output inspection and enforcement **before** delivery (humans or systems)

- Provenance controls for retrieval sources (reduce poisoning risk)

- Write‑back restrictions to prevent contamination of systems of record

- Egress anomaly detection for silent exfiltration patterns

### Observability and structured activity logging

"Log everything" isn't a strategy. What matters is **structured** activity logging that supports correlation and evidence:

- Plan/goal context

- Tool calls and parameters

- Retrieved context sources

- Actions taken

- Outputs produced

- Outcome status and errors

- Correlation IDs that tie events together

### Non‑human behavior analytics and detections

Agents are "insiders" by design --- they often have legitimate access. That makes behavior analytics important:

- Baseline normal tool usage and access patterns

- Detect unusual tool sequences, off‑hours access, data spikes

- Detect repeated prompt injection patterns or retrieval anomalies

### Action‑time gates for high‑risk actions

Where the impact is irreversible (financial movement, production change, privileged admin action), implement:

- Approval workflows

- "Dry run" diffs

- Step‑up authentication / additional human verification

- Time‑boxed execution windows

# Operating Model: Build‑Time to Run‑Time

Agentic AI security is not only a technical problem. Programs stall when they do not define how AI delivery and security operate together.

## 3.1 Minimum viable governance (MVG) processes

The objective is not bureaucracy; it's scalable control. MVG typically includes:

- Agent intake & registration (ownership, classification, approval gates)

- Permission & tool review cadence (JIT, expiry, rotation)

- Change management for prompts/tools/policies/memory

- Exception handling and risk acceptance workflows

## 3.2 Agent‑aware SecOps

SecOps needs:

- Agent log ingestion and correlation into SOC tooling

- Detections mapped to agent threat scenarios

- Containment actions (disable/quarantine/revoke tokens)

- Evidence capture for compliance and post‑incident learning

## 3.3 COE Integration with Broader AI Factory

In many AI transformation programs, security cannot succeed as a "project-only" workstream. It needs an operational home that persists across use cases, teams, and releases. That home is typically an **AI Center of Excellence (AI COE)** (sometimes called an AI Factory operating model), which coordinates cross-functional decision-making, standards, platform practices, and scaled enablement across the AI portfolio.

In this context, AI security works best when it **plugs into the broader AI COE**---not necessarily through deep technical integration, but through shared governance, intake, controls, and operational processes.

**Operational integration**

- **Shared intake and triage:** a consistent front door for new AI use cases, including risk-based routing (fast path vs. high-risk path).

- **Decision rights and gating:** clear criteria for when security review is required, what "good" looks like, and who can approve exceptions.

- **Standard patterns and guardrails:** reference architectures, approved tool catalogs, and security-by-default templates that reduce one-off reinvention.

- **Change management:** controlled changes for prompts, tools, policies, memory stores, retrieval sources, and model updates---aligned to release cadence.

- **Metrics and continuous improvement:** shared KPIs that balance risk reduction with delivery speed (e.g., time-to-approval, exception rates, control coverage, incident learnings).

**Building an AI Security COE**

Whether an AI COE is being formed or already exists, a pragmatic approach to integration of AI Security COE functions is to define and operationalize the **minimum viable COE-like security capabilities** needed to scale AI safely across a portfolio. This is particularly valuable when customers are moving beyond a few isolated POCs into multiple concurrent AI initiatives across teams, data domains, and platforms.

**Typical outputs**

- A lightweight **AI security operating model** (run-state ownership, escalation paths, decision forums).

- A **RACI** spanning AI delivery, platform, security, privacy/legal, data governance, and operations.

- An **intake / gating workflow** for AI initiatives, including risk-based "fast path" patterns.

- A small set of **standard engagement patterns** (low-risk vs. high-risk pathways; when to require deeper assessment).

- A **security evidence and reporting approach** that aligns to enterprise risk/compliance expectations (without slowing delivery).

- A **backlog integration model** that connects the AI COE roadmap to delivery team backlogs (so guardrails become implementable work, not slideware).

**Design principle**

The AI Security COE should be scoped to **minimize overlap** with other delivery modules and with any existing enterprise COE functions. The goal is to provide the missing "glue" that makes AI security repeatable and scalable---so security is experienced as an **enabler of safe speed**, rather than a late-stage impediment.

# Implementation Roadmap

This high-level AI Security Services "roadmap" is designed to fit into broader AI transformation programs (not compete with them), noting that these (mostly) aren't sequential "point-in-time" activities, rather ongoing workstreams.

Partial listing - refer to other materials for in-depth exploration:

## Phase 0 -- Activation

- Envisioning, gap analysis, detailed assessment, planning

- Road mapping

- Planning, scoping

- Budgeting

## Phase 1 -- Establish AI Security Governance Program

- AI security requirements and architecture base-lining

- Operating model (RACI/decision rights)

- Intake & gating (fast path/high-risk path)

- Measurement cadence

- Other AI Security COE functions

- AI COE integration

## Phase 2 -- Establish Identity Foundations

- Inventory, ownership, classification

- Non‑human identity lifecycle controls

- Tool permission bounding and safe catalogs

## Phase 3 -- Model Risks and Design Secure Patterns

- Threat modeling for delegation boundaries, memory/state, tool chains

- Secure architecture patterns for multi‑agent systems

- Secure supply chain posture for models/tools/connectors

## Phase 4 -- Implement Priority Controls

- Output DLP and data provenance controls

- Write‑back governance

- Policy‑as‑code and consistent enforcement patterns

## Phase 5 -- Operationalize Observability and SecOps

- Structured agent activity logging schema + dashboards

- Non‑human behavior analytics and detections

- Containment actions and incident workflows

## Phase 6 -- Assurance and Continuous Improvement

- Targeted offensive testing / "model assessment" where appropriate

- Maturity progression and continuous control tuning

- Audit readiness and evidence generation improvements

# Enabling your AI Security Services Journey with Microsoft ISD Security

## Introduction

Most organizations want to transform their business into a Frontier organization quickly, enabled by Microsoft AI platforms and security solutions. The challenge is understanding the emerging set of security considerations and control mechanisms along the way while investing in the business opportunity, often bringing together disparate parts of the organization (and numerous outside parties) in the process.

## Getting Started

To get you started on this journey, Microsoft ISD Security Services can help you:

- Better understand the AI security imperative, the Microsoft AI Security Framework, and Microsoft products and services focused in this area.

- Define a high priority set of AI security focus areas that can be targeted for early-stage improvement.

- Define a roadmap for improvement aligned to business priorities and risk, providing a pathway that sequences improvements while supporting ongoing AI development.

- Implement AI security capabilities in lockstep with other AI disciplines, including (but not limited to) data science and engineering, application development, ITSM and change management.

From a progression perspective, organizations can begin in the early stages by establishing an understanding of the technical underpinnings, a vision and strategy, and then later into deeper-level planning and implementation.

Importantly, organizations that are further along in their AI security knowledge and/or planning can fast forward to Implementation, as appropriate.

## Early-stage Envisioning

Best for: early programs and leadership alignment.

- **Leadership team briefing** on AI security, new risks associated with Agentic AI, and security controls and monitoring with Microsoft security solutions.

- **High-level assessment** to identify highest‑leverage gaps.

## Deeper-level Assessment

Best for: organizations wanting to assess current state for capability domains with the AI security superset relative to industry best practices and goals to hit within specified time frames.

- Facilitate **structured workshop(s)** across high priority focus areas.

- Produce an "**AI Security Pathway**" that sequences improvements by dependency and value.

- Align the pathway to delivery increments that can be executed without slowing down AI teams.

## Implementation Delivery

Best for: organizations ready to execute.

Implementation can be modular, typically spanning:

- Foundations (governance + operating model + AI security COE functions)

- Threat modeling and secure design patterns

- Controls enablement (identity, policy‑as‑code, data security)

- Logging/monitoring/detection and SOC readiness

- Assurance activities where appropriate

**Important:** These pathways are designed to integrate with broader Microsoft solution areas involved in AI transformation (Data & AI platforming, application modernization, and security operations) rather than operate as a standalone security "side quest."

# Conclusion

## Summary

Organizations are moving quickly from AI that generates content to AI that can plan and act across enterprise systems. This shift expands the blast radius of small weaknesses and raises the bar for governance, identity, observability, and operational readiness. Teams that treat security as a late-stage checklist often find that successful POCs require costly redesign to satisfy real production requirements - especially as autonomy and tool use increase.

The path forward is straightforward: establish a secure baseline for generative AI, adopt agent-ready control primitives (inventory, least privilege, tool bounding, structured logging, action-time gates), and operationalize these controls through a build-to-run operating model that integrates with broader AI transformation efforts.

With a staged approach with Microsoft ISD Security services - starting with establishing a vision and actionable roadmap, followed by more (optional) in-depth planning and then and progressing to durable implementation---organizations can scale AI adoption with confidence and keep pace with innovation without losing control.

# Appendix -- Microsoft AI and Security Technology Mapping

Note: This appendix is illustrative and should be tailored to each customer's architecture, maturity, and licensing posture.

**How to use this appendix**

Microsoft's approach to AI security increasingly treats agents as first-class enterprise entities---requiring identity, governance, data protection, monitoring, and response capabilities that extend familiar Zero Trust and security operations patterns into the AI domain.

The mapping below illustrates how Microsoft platforms and security products can be combined (including select Preview capabilities) to implement the control themes described in this briefing.

**Note:** Ownership varies by organization; the "Typical Owner" column is meant to clarify how these capabilities are usually operated across AI engineering, platform teams, security/compliance, and COE functions.

Key capabilities referenced

- GenAI Platform & App Baseline Security

- Agent Identity & Lifecycle Governance

- Tool / API Permission Bounding & Safe Tooling

- Data Security (Prompt / RAG / Output / Write-back)

- Observability, Logging & Evidence (Auditability)

- Threat Detection, Investigation & Response (SecOps)

- DevSecOps, Controls-as-Code & Change Management

- COE / AI Factory Integration, Governance & Reporting

- Assurance, Testing & Red Teaming

<table>
<thead>
<tr>
  <th>Product / Service</th>
  <th>Controls, Monitors, Integrates with, and/or Reports on</th>
  <th>Functional Capability Mapping</th>
  <th>Typical Owner (AI Eng / Platform / Security / COE)</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Microsoft Agent 365 (Preview)</td>
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
  <td>Defender Portal &ldquo;Cloud Security Dashboard&rdquo; (Preview, where applicable)</td>
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

