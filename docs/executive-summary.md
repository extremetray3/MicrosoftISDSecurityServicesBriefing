---
title: Executive Summary
layout: default
nav_order: 2
---

# <iconify-icon icon="fluent-emoji-flat:memo" width="36" height="36" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> Executive Summary
{: .no_toc }

<details open markdown="block">
  <summary>Table of contents</summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## <iconify-icon icon="fluent-emoji-flat:telescope" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> Overview

### The Shift from Generative to Agentic AI

<figure class="slide-figure">
  <img src="{{ site.baseurl }}/assets/images/slides/slide2.png" alt="What is an agent — architecture showing LLM, tools, memory, and input/output flow" class="slide-img">
  <figcaption>Agent architecture: LLM core with tools, memory, and orchestration (Microsoft AI Security Master Deck)</figcaption>
</figure>

Enterprises are rapidly evolving from ***AI that generates*** to ***AI that acts***: autonomous agents that plan, call tools, retrieve data, write back to systems of record, and delegate to other agents. This shift changes the security problem from foundational GenAI security to **workforce governance for digital workers** that operate at machine speed, at scale, and across many systems at once.

The core challenge now extends from whether an AI model can produce a harmful answer to whether an agent can **take a harmful action** (or chain of actions) and whether the organization can prove it remained in control.

### Key Questions Organizations Must Answer
{: .mb-2 }

<div class="key-questions" markdown="0">
<div class="kq-card">
  <span class="kq-icon"><iconify-icon icon="fluent-emoji-flat:magnifying-glass-tilted-right" width="24" height="24"></iconify-icon></span>
  <span class="kq-text">What agents exist in production, who owns them, and how is their lifecycle managed?</span>
</div>
<div class="kq-card">
  <span class="kq-icon"><iconify-icon icon="fluent-emoji-flat:building-construction" width="24" height="24"></iconify-icon></span>
  <span class="kq-text">Are agents being built on the right platform(s), for the right reasons, and by the right people?</span>
</div>
<div class="kq-card">
  <span class="kq-icon"><iconify-icon icon="fluent-emoji-flat:wrench" width="24" height="24"></iconify-icon></span>
  <span class="kq-text">What can each agent do (tools, permissions, write‑backs), and under what conditions?</span>
</div>
<div class="kq-card">
  <span class="kq-icon"><iconify-icon icon="fluent-emoji-flat:detective" width="24" height="24"></iconify-icon></span>
  <span class="kq-text">What did an agent do, why did it do it, and what evidence exists?</span>
</div>
<div class="kq-card">
  <span class="kq-icon"><iconify-icon icon="fluent-emoji-flat:police-car-light" width="24" height="24"></iconify-icon></span>
  <span class="kq-text">Can we detect abnormal agent behavior and respond quickly (disable/quarantine/revoke)?</span>
</div>
</div>

### Briefing Scope

This briefing covers:

- <iconify-icon icon="fluent-emoji-flat:locked" width="18" height="18" style="vertical-align: middle;"></iconify-icon> Generative AI security fundamentals
- <iconify-icon icon="fluent-emoji-flat:robot" width="18" height="18" style="vertical-align: middle;"></iconify-icon> Why agentic AI changes the security model
- <iconify-icon icon="fluent-emoji-flat:warning" width="18" height="18" style="vertical-align: middle;"></iconify-icon> The most important new risks and failure modes
- <iconify-icon icon="fluent-emoji-flat:hammer-and-wrench" width="18" height="18" style="vertical-align: middle;"></iconify-icon> Practical control primitives available today and in the near future
- <iconify-icon icon="fluent-emoji-flat:rocket" width="18" height="18" style="vertical-align: middle;"></iconify-icon> How Microsoft ISD Security can help customers embarking on this journey

---

## <iconify-icon icon="fluent-emoji-flat:link" width="28" height="28" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> References
{: .references }

> - Not intended as a technical deep dive. See [Appendix]({{ site.baseurl }}/docs/appendix) for Microsoft AI Security Technology Mapping.
> - [Announcing Microsoft Entra Agent ID — Secure and Manage Your AI Agents](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392)
> - [OWASP Top 10 for Agentic Applications for 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
