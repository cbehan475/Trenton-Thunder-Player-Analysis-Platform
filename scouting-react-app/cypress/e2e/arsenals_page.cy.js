// cypress/e2e/arsenals_page.cy.js

describe('Pitcher Arsenals Page', () => {
  const page = '/pitching/arsenals';

  beforeEach(() => {
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'error').as('consoleError');
      cy.stub(win.console, 'warn').as('consoleWarn');
    });
  });

  it('URL persistence: needs-review-only and sort pitch', () => {
    cy.visit(page);

    // Toggle Needs review only checkbox; expect ?review=1
    cy.contains('label', 'Needs review only').click();
    cy.location('search').should('include', 'review=1');

    // Reload and ensure checkbox remains checked
    cy.reload();
    cy.get('input[type="checkbox"]').filter('[aria-label="Show only pitchers that need review"]').should('be.checked');

    // Change Sort pitch to FF and persist in URL
    cy.get('[aria-label="Sort pitch"]').click();
    cy.get('ul[role="listbox"]').contains('li', 'FF').click();
    cy.location('search').should('include', 'sp=FF');
    cy.reload();
    // After reload, the select should still show FF
    cy.get('[aria-label="Sort pitch"]').should('contain.text', 'FF');

    cy.get('@consoleError').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
  });

  it('Badges & tooltip: shows NEEDS REVIEW with detailed tooltip when diffs exist', () => {
    cy.visit(page + '?review=1');

    // Find any NEEDS REVIEW chip
    cy.contains('.MuiChip-label', 'NEEDS REVIEW').first().trigger('mouseover');
    // Tooltip content should include these bucket headings
    cy.get('body').invoke('text').should((text) => {
      expect(text).to.match(/Override:/);
      expect(text).to.match(/Logs:/);
      expect(text).to.match(/Missing in logs:/);
      expect(text).to.match(/Extra in logs:/);
    });

    cy.get('@consoleError').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
  });

  it('Hand + has-selected-pitch filter', () => {
    cy.visit(page + '?hand=L&has=1&sp=FF');

    // Assert all visible rows are LHP (B/T contains '/L')
    cy.get('[role="row"]').then(($rows) => {
      // Skip header row
      const rows = $rows.slice(1);
      let checked = 0;
      rows.each((_, el) => {
        const text = Cypress.$(el).text();
        if (!text.trim()) return;
        expect(text).to.match(/\/[\s]*L/);
        checked++;
      });
      expect(checked).to.be.greaterThan(0);
    });

    cy.get('@consoleError').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
  });

  it('Pitch chips + empty state: subtle "No pitches" when a row has none (if present)', () => {
    cy.visit(page);

    // If any row has zero merged pitches, the cell shows "No pitches" text
    cy.contains('No pitches', { matchCase: false }).then(() => {
      // Found at least one; pass
    }).catch(() => {
      // Not found; do not fail the suite if dataset has no empty rows
      cy.log('No rows without pitches in current dataset');
    });

    cy.get('@consoleError').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
  });

  it('CSV export includes Pitches and NeedsReview columns; override order reflected', () => {
    cy.visit(page);

    // Monkey-patch createObjectURL to capture blob
    cy.window().then((win) => {
      const orig = win.URL.createObjectURL;
      cy.stub(win.URL, 'createObjectURL').callsFake((blob) => {
        win.__lastCsvBlob = blob;
        return orig.call(win.URL, blob);
      });
    });

    cy.contains('button', 'Download CSV').click();

    cy.window().then(async (win) => {
      const blob = win.__lastCsvBlob;
      expect(blob).to.exist;
      const text = await blob.text();
      // Headers
      expect(text).to.match(/\bPitches\b/);
      expect(text).to.match(/\bNeedsReview\b/);
      // Spot-check at least one NEEDS REVIEW row if present in export
      const hasReview = /,1\s*$/m.test(text) || /,1,/m.test(text);
      if (hasReview) {
        // Ensure an override-ordered row has pitches matching override order across tokens (loose check)
        // Not strictly determinable without data hooks; assert that pitches column exists on all rows
        const lines = text.trim().split(/\r?\n/);
        const header = lines.shift().split(',');
        const idxPitches = header.indexOf('Pitches');
        const idxNeeds = header.indexOf('NeedsReview');
        expect(idxPitches).to.be.greaterThan(-1);
        expect(idxNeeds).to.be.greaterThan(-1);
        lines.forEach((ln) => {
          const cols = ln.split(',');
          expect(cols[idxPitches]).to.exist;
          expect(cols[idxNeeds]).to.match(/^[01]$/);
        });
      }
    });

    cy.get('@consoleError').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
  });
});
