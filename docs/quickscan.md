---
title: QuickScan Assessment
layout: default
nav_order: 10
---

# <iconify-icon icon="fluent-emoji-flat:bar-chart" width="36" height="36" style="vertical-align: middle; margin-right: 0.3em;"></iconify-icon> AI Security Maturity — QuickScan
{: .no_toc }

An interactive maturity assessment aligned to the AI Security Briefing. Select each focus area, review the question, assign a maturity level, and capture discussion notes. All responses are saved locally in your browser.
{: .fs-5 .fw-300 }

---

<div id="qs-toolbar" class="qs-toolbar">
  <div class="qs-toolbar-row">
    <label class="qs-customer-label">
      <iconify-icon icon="fluent-emoji-flat:office-building" width="18" height="18"></iconify-icon>
      Customer:
      <input type="text" id="qs-customer-input" class="qs-customer-input" placeholder="Customer name…" />
    </label>
    <button class="notes-toolbar-btn notes-save-session-btn" onclick="QS.saveSession()">💾 Save Session</button>
    <button class="notes-toolbar-btn notes-load-session-btn" onclick="QS.loadSession()">📂 Load Session</button>
    <button class="notes-toolbar-btn notes-clear-btn" onclick="QS.newSession()">🔄 New</button>
    <button class="notes-toolbar-btn notes-export-btn" onclick="QS.exportMarkdown()">📋 Export</button>
  </div>
</div>

<div id="qs-progress" class="qs-progress-bar">
  <div class="qs-progress-stats">
    <span id="qs-progress-count">0 / 15 assessed</span>
    <span id="qs-progress-pct">0%</span>
  </div>
  <div class="qs-progress-track"><div id="qs-progress-fill" class="qs-progress-fill"></div></div>
</div>

<div id="qs-container"></div>

<script src="{{ '/assets/js/quickscan.js' | relative_url }}"></script>
