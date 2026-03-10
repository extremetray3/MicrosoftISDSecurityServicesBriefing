---
title: "Securing Agentic AI"
layout: default
nav_order: 4
---

# <iconify-icon icon="fluent-emoji-flat:robot" width="36" height="36" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> Securing Agentic AI
{: .no_toc }

<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## <iconify-icon icon="fluent-emoji-flat:high-voltage" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> 2.1 Why Agentic AI Changes the Security Model

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

---

## <iconify-icon icon="fluent-emoji-flat:world-map" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> 2.2 The New Risk Landscape

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

---

## <iconify-icon icon="fluent-emoji-flat:bullseye" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> 2.3 What "Good" Looks Like

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

---

## <iconify-icon icon="fluent-emoji-flat:building-construction" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> 2.4 Control Primitives That Matter

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

Agents are "insiders" by design — they often have legitimate access. That makes behavior analytics important:

- Baseline normal tool usage and access patterns

- Detect unusual tool sequences, off‑hours access, data spikes

- Detect repeated prompt injection patterns or retrieval anomalies

### Action‑time gates for high‑risk actions

Where the impact is irreversible (financial movement, production change, privileged admin action), implement:

- Approval workflows

- "Dry run" diffs

- Step‑up authentication / additional human verification

- Time‑boxed execution windows

---

## <iconify-icon icon="fluent-emoji-flat:link" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> References
{: .references }

> - [The Real-World Attacks Behind OWASP Agentic AI Top 10](https://www.bleepingcomputer.com/news/security/the-real-world-attacks-behind-owasp-agentic-ai-top-10/)
> - [EU AI Act — Article 73](https://artificialintelligenceact.eu/article/73/)
> - [EU AI Act — Article 73 (AI Act Service Desk)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-73)
