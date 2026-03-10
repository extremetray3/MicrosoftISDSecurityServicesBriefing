---
title: "Operating Model"
layout: default
nav_order: 5
---

# Operating Model: Build‑Time to Run‑Time
{: .no_toc }

Agentic AI security is not only a technical problem. Programs stall when they do not define how AI delivery and security operate together.
{: .fs-5 .fw-300 }

<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## 3.1 Minimum viable governance (MVG) processes

The objective is not bureaucracy; it's scalable control. MVG typically includes:

- Agent intake & registration (ownership, classification, approval gates)

- Permission & tool review cadence (JIT, expiry, rotation)

- Change management for prompts/tools/policies/memory

- Exception handling and risk acceptance workflows

---

## 3.2 Agent‑aware SecOps

SecOps needs:

- Agent log ingestion and correlation into SOC tooling

- Detections mapped to agent threat scenarios

- Containment actions (disable/quarantine/revoke tokens)

- Evidence capture for compliance and post‑incident learning

---

## 3.3 COE Integration with Broader AI Factory

In many AI transformation programs, security cannot succeed as a "project-only" workstream. It needs an operational home that persists across use cases, teams, and releases. That home is typically an **AI Center of Excellence (AI COE)** (sometimes called an AI Factory operating model), which coordinates cross-functional decision-making, standards, platform practices, and scaled enablement across the AI portfolio.

In this context, AI security works best when it **plugs into the broader AI COE** — not necessarily through deep technical integration, but through shared governance, intake, controls, and operational processes.

### Operational integration

- **Shared intake and triage:** a consistent front door for new AI use cases, including risk-based routing (fast path vs. high-risk path).

- **Decision rights and gating:** clear criteria for when security review is required, what "good" looks like, and who can approve exceptions.

- **Standard patterns and guardrails:** reference architectures, approved tool catalogs, and security-by-default templates that reduce one-off reinvention.

- **Change management:** controlled changes for prompts, tools, policies, memory stores, retrieval sources, and model updates — aligned to release cadence.

- **Metrics and continuous improvement:** shared KPIs that balance risk reduction with delivery speed (e.g., time-to-approval, exception rates, control coverage, incident learnings).

### Building an AI Security COE

Whether an AI COE is being formed or already exists, a pragmatic approach to integration of AI Security COE functions is to define and operationalize the **minimum viable COE-like security capabilities** needed to scale AI safely across a portfolio. This is particularly valuable when customers are moving beyond a few isolated POCs into multiple concurrent AI initiatives across teams, data domains, and platforms.

### Typical outputs

- A lightweight **AI security operating model** (run-state ownership, escalation paths, decision forums).

- A **RACI** spanning AI delivery, platform, security, privacy/legal, data governance, and operations.

- An **intake / gating workflow** for AI initiatives, including risk-based "fast path" patterns.

- A small set of **standard engagement patterns** (low-risk vs. high-risk pathways; when to require deeper assessment).

- A **security evidence and reporting approach** that aligns to enterprise risk/compliance expectations (without slowing delivery).

- A **backlog integration model** that connects the AI COE roadmap to delivery team backlogs (so guardrails become implementable work, not slideware).

### Design principle

The AI Security COE should be scoped to **minimize overlap** with other delivery modules and with any existing enterprise COE functions. The goal is to provide the missing "glue" that makes AI security repeatable and scalable — so security is experienced as an **enabler of safe speed**, rather than a late-stage impediment.
