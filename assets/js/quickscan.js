// ===========================================
// QuickScan Assessment — Interactive Maturity Tool
// ===========================================
(function () {
  'use strict';

  var STORAGE_KEY = 'qs-assessment';
  var SESSION_PREFIX = 'qs-session-';
  var MATURITY_LEVELS = ['', 'Starting', 'Developing', 'Standardizing', 'Optimizing'];

  // Verbatim data from AISS_QuickScan — QuickScan B (60-min)
  var DATA = [
    {
      l1: 'Governance, Operating Model & COE',
      icon: 'fluent-emoji-flat:classical-building',
      items: [
        { l2: 'Governance Processes', q: 'Do you have a repeatable agent intake, triage, and approval workflow (including exception handling and separation of duties for high\u2011risk agents)?' },
        { l2: 'COE \u2013 Engagement Model', q: 'Do you use risk\u2011tiered engagement patterns (fast path vs deeper review) so security is consistently slotted into AI initiatives at the right level?' },
        { l2: 'Strategy & Scope', q: 'Do you classify agents by autonomy/risk and apply an oversight model (approval gates, monitoring depth, and evidence expectations) based on that tiering?' }
      ]
    },
    {
      l1: 'Agent Identity & Lifecycle Governance',
      icon: 'fluent-emoji-flat:identification-card',
      items: [
        { l2: 'Inventory & Registry', q: 'Do you maintain an enterprise agent registry with required fields (owner, purpose, autonomy tier, data sensitivity, tools, endpoints, runbooks) and enforce registration for production?' },
        { l2: 'Lifecycle Mgmt', q: 'Do you have standards and runbooks for provisioning, decommissioning, and orphan cleanup of agents (including revocation, retention, and attestations)?' }
      ]
    },
    {
      l1: 'Threat Modeling & Risk Engineering',
      icon: 'fluent-emoji-flat:shield',
      items: [
        { l2: 'Risk Management', q: 'Do you maintain an agent risk register that ties risks to controls, tests, owners, and evidence (not just a list of concerns)?' },
        { l2: 'Backlog Integration', q: 'Do threat model outcomes reliably translate into backlog items with clear acceptance criteria and named owners?' }
      ]
    },
    {
      l1: 'Control Engineering & Automation',
      icon: 'fluent-emoji-flat:hammer-and-wrench',
      items: [
        { l2: 'Baseline Controls', q: 'Do you enforce a baseline security configuration for the cloud/identity footprint supporting AI and agents (with managed exceptions)?' },
        { l2: 'Policy-as-Code', q: 'Do you manage key security policies as code with versioning, testing, approvals, and rollout/rollback (rather than manual configuration drift)?' }
      ]
    },
    {
      l1: 'Data Protection for Agentic AI',
      icon: 'fluent-emoji-flat:locked',
      items: [
        { l2: 'Data Inventory', q: 'Do you have an AI/agent data inventory that covers retrieval sources, memory/state stores, and outputs, including sensitivity and allowed uses?' },
        { l2: 'Retrieval & Provenance', q: 'Do you control retrieval sources using allowlists/provenance controls to reduce poisoning and unauthorized source drift in RAG and memory?' }
      ]
    },
    {
      l1: 'Observability, SecOps & Compliance Readiness',
      icon: 'fluent-emoji-flat:eyes',
      items: [
        { l2: 'Logging & Telemetry', q: 'Do you capture structured agent activity logs (plans, tool calls, retrieved context, actions, outcomes) with correlation IDs for investigations and auditability?' },
        { l2: 'Incident Response', q: 'Do you have agent-aware incident response playbooks that include containment actions, evidence capture, and communications?' }
      ]
    },
    {
      l1: 'Assurance, Testing & Red Teaming',
      icon: 'fluent-emoji-flat:test-tube',
      items: [
        { l2: 'Attack Simulation', q: 'Do you routinely test for prompt injection and tool abuse scenarios (inputs, retrieval, and tool chains) and validate mitigations?' },
        { l2: 'Privilege & Data Abuse', q: 'Do you test for privilege bridging, silent exfiltration, and write-back contamination scenarios and validate detections/controls?' }
      ]
    }
  ];

  // Flatten for easy indexing
  var TOTAL = 0;
  DATA.forEach(function (g) { TOTAL += g.items.length; });

  // ---- State ----
  var state = { customer: '', responses: {} };

  function responseKey(gi, ii) { return gi + '-' + ii; }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) state = JSON.parse(raw);
    } catch (e) { /* ignore */ }
  }

  function saveState() {
    state.customer = document.getElementById('qs-customer-input').value;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    updateProgress();
  }

  // ---- Progress ----
  function updateProgress() {
    var count = 0;
    for (var k in state.responses) {
      if (state.responses[k] && state.responses[k].maturity) count++;
    }
    var pct = Math.round((count / TOTAL) * 100);
    var countEl = document.getElementById('qs-progress-count');
    var pctEl = document.getElementById('qs-progress-pct');
    var fillEl = document.getElementById('qs-progress-fill');
    if (countEl) countEl.textContent = count + ' / ' + TOTAL + ' assessed';
    if (pctEl) pctEl.textContent = pct + '%';
    if (fillEl) fillEl.style.width = pct + '%';
  }

  // ---- Render ----
  function render() {
    var container = document.getElementById('qs-container');
    if (!container) return;
    container.innerHTML = '';

    DATA.forEach(function (group, gi) {
      // L1 section
      var section = document.createElement('div');
      section.className = 'qs-l1-section';

      var header = document.createElement('button');
      header.className = 'qs-l1-header';
      header.setAttribute('aria-expanded', 'true');
      header.innerHTML =
        '<span class="qs-l1-chevron">▾</span>' +
        '<iconify-icon icon="' + group.icon + '" width="24" height="24" style="vertical-align:middle"></iconify-icon> ' +
        '<span class="qs-l1-title">' + group.l1 + '</span>' +
        '<span class="qs-l1-badge">' + group.items.length + ' capabilities</span>';

      var body = document.createElement('div');
      body.className = 'qs-l1-body';

      header.addEventListener('click', (function (b, h) {
        return function () {
          var open = b.style.display !== 'none';
          b.style.display = open ? 'none' : '';
          h.setAttribute('aria-expanded', String(!open));
          h.querySelector('.qs-l1-chevron').textContent = open ? '▸' : '▾';
        };
      })(body, header));

      group.items.forEach(function (item, ii) {
        var key = responseKey(gi, ii);
        var resp = state.responses[key] || { maturity: '', notes: '' };

        var card = document.createElement('div');
        card.className = 'qs-card';
        if (resp.maturity) card.classList.add('qs-card--assessed');

        var maturityClass = resp.maturity ? ' qs-sel-' + resp.maturity.toLowerCase() : '';

        card.innerHTML =
          '<div class="qs-card-header">' +
            '<span class="qs-l2-label">' + item.l2 + '</span>' +
            '<select class="qs-maturity-select' + maturityClass + '" data-key="' + key + '">' +
              '<option value="">— Select Maturity —</option>' +
              '<option value="Starting"' + (resp.maturity === 'Starting' ? ' selected' : '') + '>Starting</option>' +
              '<option value="Developing"' + (resp.maturity === 'Developing' ? ' selected' : '') + '>Developing</option>' +
              '<option value="Standardizing"' + (resp.maturity === 'Standardizing' ? ' selected' : '') + '>Standardizing</option>' +
              '<option value="Optimizing"' + (resp.maturity === 'Optimizing' ? ' selected' : '') + '>Optimizing</option>' +
            '</select>' +
          '</div>' +
          '<p class="qs-question">' + item.q + '</p>' +
          '<textarea class="qs-notes" data-key="' + key + '" placeholder="Discussion notes…" rows="2">' + escapeHtml(resp.notes) + '</textarea>';

        body.appendChild(card);
      });

      section.appendChild(header);
      section.appendChild(body);
      container.appendChild(section);
    });

    // Wire up events via delegation
    container.addEventListener('change', function (e) {
      if (e.target.classList.contains('qs-maturity-select')) {
        var key = e.target.getAttribute('data-key');
        if (!state.responses[key]) state.responses[key] = { maturity: '', notes: '' };
        state.responses[key].maturity = e.target.value;
        // Update select color class
        e.target.className = 'qs-maturity-select' + (e.target.value ? ' qs-sel-' + e.target.value.toLowerCase() : '');
        // Toggle card assessed state
        var card = e.target.closest('.qs-card');
        if (card) card.classList.toggle('qs-card--assessed', !!e.target.value);
        saveState();
      }
    });

    container.addEventListener('input', function (e) {
      if (e.target.classList.contains('qs-notes')) {
        var key = e.target.getAttribute('data-key');
        if (!state.responses[key]) state.responses[key] = { maturity: '', notes: '' };
        state.responses[key].notes = e.target.value;
        saveState();
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ---- Session Management ----
  function saveSession() {
    saveState();
    var name = prompt('Session name:', state.customer || 'QuickScan ' + new Date().toLocaleDateString());
    if (!name) return;
    try {
      localStorage.setItem(SESSION_PREFIX + name, JSON.stringify(state));
      alert('Session "' + name + '" saved.');
    } catch (e) { alert('Save failed: ' + e.message); }
  }

  function loadSession() {
    var sessions = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k.indexOf(SESSION_PREFIX) === 0) sessions.push(k.substring(SESSION_PREFIX.length));
    }
    if (!sessions.length) { alert('No saved sessions found.'); return; }
    var choice = prompt('Available sessions:\n\n' + sessions.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n') + '\n\nEnter session name or number:');
    if (!choice) return;
    var name = choice;
    var idx = parseInt(choice, 10);
    if (!isNaN(idx) && idx >= 1 && idx <= sessions.length) name = sessions[idx - 1];
    var raw = localStorage.getItem(SESSION_PREFIX + name);
    if (!raw) { alert('Session "' + name + '" not found.'); return; }
    state = JSON.parse(raw);
    document.getElementById('qs-customer-input').value = state.customer || '';
    render();
    updateProgress();
  }

  function newSession() {
    if (!confirm('Start a new assessment? Current unsaved data will be lost.')) return;
    state = { customer: '', responses: {} };
    localStorage.removeItem(STORAGE_KEY);
    document.getElementById('qs-customer-input').value = '';
    render();
    updateProgress();
  }

  function exportMarkdown() {
    saveState();
    var lines = [];
    var customer = state.customer || 'Unknown';
    lines.push('# AI Security Maturity QuickScan — ' + customer);
    lines.push('');
    lines.push('**Date:** ' + new Date().toLocaleDateString());
    lines.push('');

    DATA.forEach(function (group, gi) {
      lines.push('## ' + group.l1);
      lines.push('');
      group.items.forEach(function (item, ii) {
        var key = responseKey(gi, ii);
        var resp = state.responses[key] || {};
        var mat = resp.maturity || '_Not assessed_';
        lines.push('### ' + item.l2);
        lines.push('');
        lines.push('**Question:** ' + item.q);
        lines.push('');
        lines.push('**Maturity:** ' + mat);
        lines.push('');
        if (resp.notes) {
          lines.push('**Notes:** ' + resp.notes);
          lines.push('');
        }
      });
    });

    // Summary table
    lines.push('---');
    lines.push('');
    lines.push('## Summary');
    lines.push('');
    lines.push('| L1 Focus Area | L2 Capability | Maturity |');
    lines.push('|:---|:---|:---|');
    DATA.forEach(function (group, gi) {
      group.items.forEach(function (item, ii) {
        var key = responseKey(gi, ii);
        var resp = state.responses[key] || {};
        lines.push('| ' + group.l1 + ' | ' + item.l2 + ' | ' + (resp.maturity || '—') + ' |');
      });
    });

    var md = lines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(md).then(function () {
        alert('Assessment exported to clipboard as Markdown.');
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = md;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('Assessment exported to clipboard as Markdown.');
    }
  }

  // ---- Init ----
  function init() {
    loadState();
    var custInput = document.getElementById('qs-customer-input');
    if (custInput) {
      custInput.value = state.customer || '';
      custInput.addEventListener('input', function () { saveState(); });
    }
    render();
    updateProgress();
  }

  // Public API for button onclick handlers
  window.QS = {
    saveSession: saveSession,
    loadSession: loadSession,
    newSession: newSession,
    exportMarkdown: exportMarkdown
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
