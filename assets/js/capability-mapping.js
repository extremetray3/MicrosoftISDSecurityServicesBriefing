// =============================================================
// AI Products, Services, and Capability Mapping — Dot-Matrix
// Toggle between Capabilities (default) and Owners views
// =============================================================
(function () {
  'use strict';

  // ── Column labels ──────────────────────────────────────────
  var OWNERS = [
    'COE',
    'Security',
    'Security (IAM Gov)',
    'Security (SecOps)',
    'Platform',
    'Platform (IAM)',
    'AI Eng',
    'Security (Data Gov)',
    'Security (Compliance)',
    'Security (Comp/SecOps)',
    'Security (Insider Risk)',
    'Security (AppSec)'
  ];

  var CAPS = [
    'GenAI Platform & App Baseline',
    'Agent Identity & Lifecycle',
    'Tool / API Permission Bounding',
    'Data Security',
    'Observability & Logging',
    'Threat Detection & Response',
    'DevSecOps & Controls-as-Code',
    'COE / AI Factory Integration',
    'Assurance & Red Teaming'
  ];

  // ── Product data ──────────────────────────────────────────
  // Each entry: [name, description, ownerIndices[], capIndices[], learnUrl]
  var DATA = [
    ['Microsoft Agent 365 (Preview)', 'Control-plane visibility and governance of agent fleets \u2022 Registry/posture and cross-stack integration signals', [0, 1], [1, 7, 4], 'https://learn.microsoft.com/microsoft-365-copilot/extensibility/agents-are-apps'],
    ['Microsoft Entra Agent ID (Preview)', 'Identity constructs and governance patterns for agents \u2022 Supports policy-based control and lifecycle direction', [4, 1], [1, 2], 'https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview'],
    ['Microsoft Entra ID (Identity & Access)', 'Authentication/authorization, conditional access patterns, identity controls for AI apps and tools', [5, 1], [0, 1], 'https://learn.microsoft.com/entra/fundamentals/whatis'],
    ['Entra ID Governance (access reviews / entitlement patterns)', 'Access reviews, approvals, entitlement workflows (where used)', [2, 0], [1, 7], 'https://learn.microsoft.com/entra/id-governance/identity-governance-overview'],
    ['Managed Identities / workload identity patterns (Azure)', 'Reduces secrets-in-code \u2022 Improves credential lifecycle for workloads and toolchains', [4, 6], [2, 6], 'https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview'],
    ['Azure OpenAI Service', 'Enterprise model endpoints with Azure security boundaries \u2022 Integrates with logging/network/identity controls', [4, 6], [0, 4], 'https://learn.microsoft.com/azure/ai-services/openai/overview'],
    ['Azure AI Foundry (incl. evaluation tooling)', 'Standardizes build/evaluate/release patterns \u2022 Supports repeatable evaluation and governance workflows', [6, 0], [6, 8], 'https://learn.microsoft.com/azure/ai-studio/what-is-ai-studio'],
    ['Azure AI Search', 'Retrieval (RAG) enablement \u2022 Supports controlled retrieval architectures and least-privilege access patterns', [6, 4], [3, 2], 'https://learn.microsoft.com/azure/search/search-what-is-azure-search'],
    ['Azure API Management', 'Auth, throttling, policy enforcement, governance for AI-facing APIs and tool APIs', [4, 1], [2, 0], 'https://learn.microsoft.com/azure/api-management/api-management-key-concepts'],
    ['Azure Key Vault', 'Secrets/keys/certs lifecycle \u2022 Supports secure toolchain and runtime access', [4], [0, 6], 'https://learn.microsoft.com/azure/key-vault/general/overview'],
    ['Azure Private Link / VNet Integration', 'Private connectivity patterns that reduce public exposure of AI endpoints and dependencies', [4], [0], 'https://learn.microsoft.com/azure/private-link/private-link-overview'],
    ['Azure Policy (Policy-as-Code)', 'Guardrails for Azure configurations \u2022 Prevents drift and enforces baselines', [4, 1], [6, 0], 'https://learn.microsoft.com/azure/governance/policy/overview'],
    ['Azure Resource Graph / tagging & inventory', 'Asset discovery, inventory hygiene, governance reporting patterns across AI environments', [4, 0], [7, 4], 'https://learn.microsoft.com/azure/governance/resource-graph/overview'],
    ['Microsoft Defender for Cloud', 'Cloud posture management + threat protection signals for Azure resources supporting AI workloads', [1, 4], [0, 5], 'https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction'],
    ['Defender Portal "Cloud Security Dashboard"', 'Consolidated posture/threat view \u2022 Reporting and prioritization', [1, 0], [7, 0], 'https://learn.microsoft.com/defender-xdr/microsoft-365-defender-portal'],
    ['Microsoft Defender XDR', 'Unified investigation across endpoint/identity/email/collab/cloud signals', [3], [5, 4], 'https://learn.microsoft.com/defender-xdr/microsoft-365-defender'],
    ['Microsoft Sentinel', 'SIEM/SOAR correlation, detections, playbooks \u2022 Ingestion of AI app/agent telemetry', [3], [5, 4], 'https://learn.microsoft.com/azure/sentinel/overview'],
    ['Azure Monitor + Log Analytics', 'Collection/analysis of application and infrastructure telemetry \u2022 Structured logging pipelines', [4, 1], [4, 5], 'https://learn.microsoft.com/azure/azure-monitor/overview'],
    ['Microsoft Security Copilot', 'Accelerates triage/investigation/reporting/tasking \u2022 SOC scaling and exec summaries', [3, 0], [5, 7], 'https://learn.microsoft.com/security-copilot/microsoft-security-copilot'],
    ['Microsoft Purview Information Protection', 'Classification/labeling for sensitive data \u2022 Handling expectations for AI-relevant data', [7, 0], [3, 7], 'https://learn.microsoft.com/purview/information-protection'],
    ['Microsoft Purview DLP', 'Reduces leakage risk across prompts/outputs/sharing surfaces \u2022 Policy enforcement', [8], [3], 'https://learn.microsoft.com/purview/dlp-learn-about-dlp'],
    ['Microsoft Purview Data Security Investigations', 'Investigation workflows and analytic views for data security signals \u2022 Evidence support', [9], [4, 5], 'https://learn.microsoft.com/purview/data-security-posture-management-overview'],
    ['Microsoft Purview Insider Risk Management', 'Detects risky behaviors and policy violations intersecting AI workflows', [10], [3, 5], 'https://learn.microsoft.com/purview/insider-risk-management'],
    ['Microsoft Defender for Cloud Apps (CASB)', 'Visibility/control over SaaS usage \u2022 Policies for risky apps and data movement', [1], [3, 0], 'https://learn.microsoft.com/defender-cloud-apps/what-is-defender-for-cloud-apps'],
    ['Microsoft Defender for Identity', 'Identity threat detection and investigations \u2022 Credential abuse patterns', [3], [5, 1], 'https://learn.microsoft.com/defender-for-identity/what-is'],
    ['GitHub Advanced Security', 'Code scanning, secret scanning, dependency risk detection', [6, 11], [6], 'https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security'],
    ['Azure DevOps', 'Release gating and secure pipelines for AI app components and infrastructure', [6, 4], [6, 7], 'https://learn.microsoft.com/azure/devops/user-guide/what-is-azure-devops'],
    ['Microsoft Defender for DevOps', 'Security signals across code-to-cloud pipeline and posture', [11, 6], [6, 5], 'https://learn.microsoft.com/azure/defender-for-cloud/defender-for-devops-introduction'],
    ['Power BI / Fabric (where used)', 'Governance dashboards for KPIs, posture trends, exceptions, progress', [0], [7], 'https://learn.microsoft.com/fabric/get-started/microsoft-fabric-overview'],
    ['Microsoft Teams + Planner (operational)', 'Operationalizes governance decisions into tasks and tracked outcomes', [0], [7], 'https://learn.microsoft.com/microsoftteams/teams-overview'],
    ['Copilot Studio (where applicable)', 'Low-/medium-code agent creation \u2022 Reinforces need for governance, inventory, and policy alignment', [0, 6], [1, 7], 'https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-what-is-copilot-studio']
  ];

  // ── Helpers ────────────────────────────────────────────────
  function el(tag, cls, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) {
      for (var k in attrs) {
        if (k === 'text') e.textContent = attrs[k];
        else if (k === 'html') e.innerHTML = attrs[k];
        else e.setAttribute(k, attrs[k]);
      }
    }
    return e;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── Build ──────────────────────────────────────────────────
  function buildMatrix() {
    var root = document.getElementById('cm-matrix-root');
    if (!root) return;

    var activeView = 'caps'; // 'caps' or 'owners'
    var sortCol = -1;        // -1 = product, 0..N = dot column index
    var sortAsc = true;
    var filterText = '';

    // ── Toolbar ──
    var toolbar = el('div', 'cm-toolbar');

    var btnCaps = el('button', 'cm-view-btn cm-view-btn--active', { text: 'Capability Themes' });
    var btnOwners = el('button', 'cm-view-btn', { text: 'Typical Owners' });

    var filterWrap = el('span', 'cm-filter-wrap');
    var filterIcon = el('span', 'cm-filter-icon', { html: '&#x1F50D;' });
    var filterInput = el('input', 'cm-filter-input');
    filterInput.setAttribute('type', 'text');
    filterInput.setAttribute('placeholder', 'Filter products\u2026');
    filterInput.setAttribute('aria-label', 'Filter products');
    filterWrap.appendChild(filterIcon);
    filterWrap.appendChild(filterInput);

    var btnExport = el('button', 'cm-view-btn cm-export-btn', { text: '\u2B07 Export Selected' });

    var tipSpan = el('span', 'cm-toolbar-tip', { html: '<span class="cm-flip-icon">&#x21C5;</span> Click card to flip &nbsp;|&nbsp; Click header to sort' });

    toolbar.appendChild(btnCaps);
    toolbar.appendChild(btnOwners);
    toolbar.appendChild(filterWrap);
    toolbar.appendChild(btnExport);
    toolbar.appendChild(tipSpan);
    root.appendChild(toolbar);

    // ── Scroll wrapper ──
    var wrap = el('div', 'cm-table-wrap');

    // ── Selection state — separate per view, all selected by default ──
    var selected = { caps: {}, owners: {} };
    for (var si = 0; si < DATA.length; si++) {
      selected.caps[DATA[si][0]] = true;
      selected.owners[DATA[si][0]] = true;
    }

    // ── Sort & filter helpers ──
    function getFilteredSorted() {
      var dataIdx = activeView === 'caps' ? 3 : 2;
      var rows = [];
      for (var i = 0; i < DATA.length; i++) rows.push(DATA[i]);

      // filter
      if (filterText) {
        var ft = filterText.toLowerCase();
        rows = rows.filter(function (r) { return r[0].toLowerCase().indexOf(ft) !== -1; });
      }

      // sort
      rows.sort(function (a, b) {
        if (sortCol === -1) {
          // sort by product name
          var cmp = a[0].toLowerCase().localeCompare(b[0].toLowerCase());
          return sortAsc ? cmp : -cmp;
        }
        // sort by dot presence in column sortCol
        var aHas = a[dataIdx].indexOf(sortCol) !== -1 ? 1 : 0;
        var bHas = b[dataIdx].indexOf(sortCol) !== -1 ? 1 : 0;
        if (aHas !== bHas) return sortAsc ? bHas - aHas : aHas - bHas; // dots first when asc
        // secondary: alpha
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
      });

      return rows;
    }

    // ── Notes storage (per product, survives re-render) ──
    var notes = {};

    function renderTable() {
      wrap.innerHTML = '';
      var cols = activeView === 'caps' ? CAPS : OWNERS;
      var dotClass = activeView === 'caps' ? 'cm-dot-cap' : 'cm-dot-owner';
      var dataIdx = activeView === 'caps' ? 3 : 2;
      var sel = selected[activeView];
      var colCount = cols.length;
      // select(30) + product(180) + dots(colCount*84) + notes(170) + learn(44)
      var tblWidth = 30 + 180 + colCount * 84 + 170 + 44;

      var table = el('table', 'cm-matrix');
      table.style.width = tblWidth + 'px';

      // colgroup
      var cg = el('colgroup');
      cg.appendChild(el('col', 'cm-cg-select'));
      cg.appendChild(el('col', 'cm-cg-product'));
      for (var ci = 0; ci < colCount; ci++) cg.appendChild(el('col', 'cm-cg-dot'));
      cg.appendChild(el('col', 'cm-cg-notes'));
      cg.appendChild(el('col', 'cm-cg-learn'));
      table.appendChild(cg);

      // thead
      var thead = el('thead');

      // group header row
      var ghRow = el('tr', 'cm-group-header-row');

      // Select-all checkbox header
      var ghSel = el('th', 'cm-gh cm-gh-select', { rowspan: '2' });
      var selAll = el('input', 'cm-select-all');
      selAll.setAttribute('type', 'checkbox');
      selAll.setAttribute('title', 'Select / deselect all');
      var allChecked = true;
      for (var ak = 0; ak < DATA.length; ak++) { if (!sel[DATA[ak][0]]) { allChecked = false; break; } }
      selAll.checked = allChecked;
      selAll.addEventListener('change', function () {
        var v = selAll.checked;
        for (var sk = 0; sk < DATA.length; sk++) sel[DATA[sk][0]] = v;
        renderTable();
      });
      ghSel.appendChild(selAll);
      ghRow.appendChild(ghSel);

      var ghProduct = el('th', 'cm-gh cm-gh-product cm-sortable', { rowspan: '2' });
      ghProduct.innerHTML = 'Product / Service ' + sortArrow(-1);
      ghProduct.addEventListener('click', function () { toggleSort(-1); });
      ghRow.appendChild(ghProduct);

      var ghLabel = activeView === 'caps' ? 'Capability Themes' : 'Typical Owners';
      var ghClass = activeView === 'caps' ? 'cm-gh cm-gh-cap' : 'cm-gh cm-gh-owner';
      var ghSpanEl = el('th', ghClass, { colspan: String(colCount) });
      ghSpanEl.innerHTML = escHtml(ghLabel) + ' <span class="cm-sort-hint">\u2195 click any column to sort</span>';
      ghRow.appendChild(ghSpanEl);

      // Notes + Learn header
      var ghNotes = el('th', 'cm-gh cm-gh-extra', { rowspan: '2', text: 'Notes' });
      ghRow.appendChild(ghNotes);
      var ghLearn = el('th', 'cm-gh cm-gh-extra', { rowspan: '2', text: 'Learn' });
      ghRow.appendChild(ghLearn);

      thead.appendChild(ghRow);

      // column label row
      var lrow = el('tr');
      for (var li = 0; li < colCount; li++) {
        var thClass = activeView === 'caps' ? 'cm-th-rot cm-th-cap cm-sortable' : 'cm-th-rot cm-th-owner cm-sortable';
        var th = el('th', thClass);
        th.setAttribute('title', cols[li] + ' (click to sort)');
        th.style.zIndex = colCount - li;
        var label = el('span', 'cm-th-label');
        label.innerHTML = escHtml(cols[li]) + ' ' + sortArrow(li);
        th.appendChild(label);
        th.addEventListener('click', (function (idx) {
          return function () { toggleSort(idx); };
        })(li));
        lrow.appendChild(th);
      }
      thead.appendChild(lrow);
      table.appendChild(thead);

      // tbody
      var tbody = el('tbody');
      var rows = getFilteredSorted();
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        var tr = el('tr');

        // select checkbox
        var tdSel = el('td', 'cm-td-select');
        var cb = el('input', 'cm-row-checkbox');
        cb.setAttribute('type', 'checkbox');
        cb.checked = !!sel[row[0]];
        cb.addEventListener('change', (function (name, checkbox) {
          return function () { sel[name] = checkbox.checked; };
        })(row[0], cb));
        tdSel.appendChild(cb);
        tr.appendChild(tdSel);

        // product flip card
        var tdp = el('td', 'cm-td-product');
        var card = el('div', 'cm-flip-card');
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Click to flip: ' + row[0]);

        var inner = el('div', 'cm-flip-inner');
        var front = el('div', 'cm-flip-front', { html: '<span class="cm-flip-name">' + escHtml(row[0]) + '</span>' });
        var back = el('div', 'cm-flip-back', { html: '<span class="cm-flip-desc">' + escHtml(row[1]) + '</span>' });
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        card.addEventListener('click', (function (c) {
          return function () { c.classList.toggle('flipped'); };
        })(card));
        card.addEventListener('keydown', (function (c) {
          return function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.classList.toggle('flipped'); }
          };
        })(card));

        tdp.appendChild(card);
        tr.appendChild(tdp);

        // dot cells
        var indices = row[dataIdx];
        for (var dj = 0; dj < colCount; dj++) {
          var td = el('td', 'cm-td-dot');
          if (indices.indexOf(dj) !== -1) {
            td.classList.add('cm-td-dot--filled');
            td.appendChild(el('span', 'cm-dot ' + dotClass));
          }
          tr.appendChild(td);
        }

        // notes cell
        var tdNotes = el('td', 'cm-td-notes');
        var noteInput = el('textarea', 'cm-notes-input');
        noteInput.setAttribute('placeholder', 'Add note\u2026');
        noteInput.setAttribute('rows', '2');
        var noteKey = row[0];
        noteInput.value = notes[noteKey] || '';
        noteInput.addEventListener('input', (function (key, inp) {
          return function () { notes[key] = inp.value; };
        })(noteKey, noteInput));
        tdNotes.appendChild(noteInput);
        tr.appendChild(tdNotes);

        // learn cell
        var tdLearn = el('td', 'cm-td-learn');
        if (row[4]) {
          var link = el('a', 'cm-learn-link');
          link.setAttribute('href', row[4]);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener');
          link.setAttribute('title', 'Microsoft Learn');
          link.textContent = '\uD83D\uDCD6';
          tdLearn.appendChild(link);
        }
        tr.appendChild(tdLearn);

        tbody.appendChild(tr);
      }

      // no-results row
      if (rows.length === 0) {
        var emptyTr = el('tr');
        var emptyTd = el('td', 'cm-empty-msg', { text: 'No matching products', colspan: String(colCount + 4) });
        emptyTr.appendChild(emptyTd);
        tbody.appendChild(emptyTr);
      }

      table.appendChild(tbody);
      wrap.appendChild(table);
    }

    // ── Export selected rows as CSV ──
    function exportSelected() {
      var cols = activeView === 'caps' ? CAPS : OWNERS;
      var dataIdx = activeView === 'caps' ? 3 : 2;
      var sel = selected[activeView];

      var header = ['Product / Service'];
      for (var h = 0; h < cols.length; h++) header.push(cols[h]);
      header.push('Notes');
      header.push('Learn URL');

      var csvRows = [header.map(csvCell).join(',')];
      for (var i = 0; i < DATA.length; i++) {
        var row = DATA[i];
        if (!sel[row[0]]) continue;
        var line = [row[0]];
        for (var c = 0; c < cols.length; c++) {
          line.push(row[dataIdx].indexOf(c) !== -1 ? 'X' : '');
        }
        line.push(notes[row[0]] || '');
        line.push(row[4] || '');
        csvRows.push(line.map(csvCell).join(','));
      }

      var blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'ai-capability-mapping-' + activeView + '.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function csvCell(val) {
      val = String(val);
      if (val.indexOf(',') !== -1 || val.indexOf('"') !== -1 || val.indexOf('\n') !== -1) {
        return '"' + val.replace(/"/g, '""') + '"';
      }
      return val;
    }

    function sortArrow(colIdx) {
      if (sortCol !== colIdx) return '<span class="cm-sort-arrow cm-sort-none">\u2195</span>';
      return sortAsc
        ? '<span class="cm-sort-arrow cm-sort-active">\u2191</span>'
        : '<span class="cm-sort-arrow cm-sort-active">\u2193</span>';
    }

    function toggleSort(colIdx) {
      if (sortCol === colIdx) {
        sortAsc = !sortAsc;
      } else {
        sortCol = colIdx;
        sortAsc = true;
      }
      renderTable();
    }

    renderTable();
    root.appendChild(wrap);

    // ── Event handlers ──
    function setView(view) {
      activeView = view;
      sortCol = -1; sortAsc = true; // reset sort on view switch
      btnCaps.classList.toggle('cm-view-btn--active', view === 'caps');
      btnOwners.classList.toggle('cm-view-btn--active', view === 'owners');
      renderTable();
    }

    btnCaps.addEventListener('click', function () { setView('caps'); });
    btnOwners.addEventListener('click', function () { setView('owners'); });
    btnExport.addEventListener('click', exportSelected);

    filterInput.addEventListener('input', function () {
      filterText = filterInput.value;
      renderTable();
    });
  }

  // ── Init ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMatrix);
  } else {
    buildMatrix();
  }
})();
