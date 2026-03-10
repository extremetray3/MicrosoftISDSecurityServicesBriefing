---
title: "Securing GenAI on Azure — Fundamentals"
layout: default
nav_order: 3
---

# Securing Generative AI on Azure — Fundamentals (Baseline)
{: .no_toc }

Establishing a baseline for securing generative AI solutions — these remain widely deployed and are the foundation that agentic systems build upon.
{: .fs-5 .fw-300 }

<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## 1.1 The top security risks

Establishing a baseline for generative AI security — these solutions remain widely deployed and are the foundation agentic systems build upon.

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

---

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

---

## 1.2.1 How frameworks have evolved (2022 to 2026)

From policy intent and baseline controls to AI-specific standards and audit-shaped evidence requirements.
{: .fs-5 .fw-300 }

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

---

## 1.3 Practical approaches to addressing AI Security

Security patterns that have surfaced in recent Generative AI customer initiatives. Each customer scenario is different, patterns overlap, and other functions are involved as well.
{: .fs-5 .fw-300 }

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

---

## 1.4 Looking back as we move forward

Many best practices shared above started to become clearer as GenAI moved from experimentation into early production (roughly the 2024/2025 time frame), but they were not always consistently applied — especially when teams viewed security as an impediment rather than an enabler.

The predictable result is that solutions that looked successful in POCs later required **costly redesign** to meet enterprise security, risk, and compliance expectations for production scale.

That dynamic becomes even more pronounced as organizations shift from content generation to agentic systems that can plan, act, and interact with enterprise tools and systems of record.
