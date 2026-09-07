import React, { useState, useCallback } from 'react';
import { addons, types, useChannel } from 'storybook/manager-api';
import { AddonPanel } from 'storybook/internal/components';
import { ADDON_ID, PANEL_ID, EVENT_UPDATE } from './constants.js';

// ── Color resolution ──────────────────────────────────────────────────────────

const COLOR_RE = /^(#|rgb|hsl|oklch|color\(|transparent|currentColor)/i;

function isColorValue(value) {
  if (!value) return false;
  return COLOR_RE.test(value.trim());
}

// ── Token row ─────────────────────────────────────────────────────────────────

function TokenRow({ name, value }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [name]);

  return (
    <tr style={styles.row}>
      <td style={styles.cell}>
        <span style={styles.varName}>{name}</span>
        <button onClick={copy} style={styles.copyBtn} title="Copy name">
          {copied ? '✓' : '⎘'}
        </button>
      </td>
      <td style={styles.cell}>
        <code style={styles.valueCode}>{value || '—'}</code>
      </td>
      <td style={{ ...styles.cell, width: 48 }}>
        {isColorValue(value) && (
          <span
            style={{
              display: 'inline-block',
              width: 20,
              height: 20,
              background: value,
              borderRadius: 4,
              border: '1px solid rgba(0,0,0,.12)',
              verticalAlign: 'middle',
            }}
          />
        )}
      </td>
    </tr>
  );
}

// ── Panel ─────────────────────────────────────────────────────────────────────

function TokenPanel() {
  const [data, setData] = useState({ prefix: null, groups: {} });
  const [activeGroup, setActiveGroup] = useState(null);

  useChannel({
    [EVENT_UPDATE]: (payload) => {
      setData(payload);
      const firstGroup = Object.keys(payload.groups)[0] ?? null;
      setActiveGroup((prev) => {
        // keep current tab if it still exists
        return prev && payload.groups[prev] ? prev : firstGroup;
      });
    },
  });

  const groupNames = Object.keys(data.groups);
  const current = activeGroup ?? groupNames[0];
  const tokens = current ? (data.groups[current] ?? []) : [];

  // ── No prefix configured ──
  if (!data.prefix) {
    return (
      <div style={styles.empty}>
        Добавьте в параметры сторис:
        <br />
        <code style={styles.hint}>
          {'parameters: { designTokens: { prefix: \'--p-button\' } }'}
        </code>
      </div>
    );
  }

  // ── No tokens found ──
  if (groupNames.length === 0) {
    return (
      <div style={styles.empty}>
        CSS-переменные с префиксом <code style={styles.hint}>{data.prefix}</code> не найдены.
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', fontSize: 13, height: '100%', overflow: 'auto' }}>
      {/* Group tabs */}
      <div style={styles.tabs}>
        {groupNames.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            style={{
              ...styles.tab,
              ...(g === current ? styles.tabActive : {}),
            }}
          >
            {g}
            <span style={styles.tabCount}>{data.groups[g].length}</span>
          </button>
        ))}
      </div>

      {/* Token table */}
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Value</th>
              <th style={styles.th}>Preview</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(({ name, value }) => (
              <TokenRow key={name} name={name} value={value} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = {
  empty: {
    padding: 24,
    color: '#666',
    lineHeight: 1.8,
  },
  hint: {
    background: '#f5f5f5',
    padding: '2px 6px',
    borderRadius: 3,
    fontSize: 12,
    fontFamily: 'monospace',
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    padding: '0 8px',
    background: '#fafafa',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '8px 12px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 400,
    color: '#555',
    whiteSpace: 'nowrap',
  },
  tabActive: {
    borderBottomColor: '#0066cc',
    color: '#0066cc',
    fontWeight: 600,
  },
  tabCount: {
    background: '#e8e8e8',
    borderRadius: 10,
    padding: '1px 6px',
    fontSize: 11,
    color: '#666',
  },
  tableWrap: {
    padding: '0 16px 16px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  th: {
    textAlign: 'left',
    padding: '10px 8px 8px 0',
    fontWeight: 500,
    color: '#888',
    fontSize: 12,
    borderBottom: '1px solid #eee',
  },
  row: {
    borderBottom: '1px solid #f0f0f0',
  },
  cell: {
    padding: '7px 8px 7px 0',
    verticalAlign: 'middle',
  },
  varName: {
    fontFamily: 'monospace',
    fontSize: 12,
    wordBreak: 'break-all',
  },
  copyBtn: {
    marginLeft: 6,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
    color: '#aaa',
    padding: '0 2px',
    verticalAlign: 'middle',
  },
  valueCode: {
    background: '#f5f5f5',
    padding: '2px 6px',
    borderRadius: 3,
    fontSize: 11,
    fontFamily: 'monospace',
    wordBreak: 'break-all',
  },
};

// ── Registration ──────────────────────────────────────────────────────────────

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Design Tokens',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active }) => (
      <AddonPanel active={active}>
        <TokenPanel />
      </AddonPanel>
    ),
  });
});
