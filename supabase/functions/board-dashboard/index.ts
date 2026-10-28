Deno.serve(() => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="300">
  <title>Assay Board — live</title>
  <style>
    :root { --paper:#f4efe6; --ink:#1c1915; --muted:#6b6258; --line:#d9d0c3; --ok:#2f5d3a; --hold:#8a5a1a; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--paper); color: var(--ink); font: 16px/1.45 "Iowan Old Style", Palatino, Georgia, serif; }
    header, main { max-width: 980px; margin: 0 auto; padding: 28px 20px; }
    .kicker { font: 12px/1.2 ui-monospace, Menlo, monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin: 0 0 8px; }
    h1 { font-weight: 500; font-size: 2.4rem; margin: 0 0 6px; }
    .sub { color: var(--muted); margin: 0; }
    .grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; }
    @media (max-width: 720px) { .grid { grid-template-columns: 1fr; } }
    section { border-top: 1px solid var(--line); padding-top: 16px; margin-top: 18px; }
    h2 { font-size: 1.1rem; font-weight: 600; margin: 0 0 12px; }
    .cards { display: grid; gap: 10px; }
    article { background: #fbf8f2; border: 1px solid var(--line); padding: 12px 14px; }
    article h3 { margin: 0 0 4px; font-size: 1rem; }
    article p { margin: 0; color: var(--muted); font-size: .95rem; }
    .tag { font: 11px/1 ui-monospace, Menlo, monospace; letter-spacing: .08em; text-transform: uppercase; }
    .ok { color: var(--ok); } .hold { color: var(--hold); }
    .row { display: grid; grid-template-columns: 52px 72px 1fr; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--line); }
    .who { color: var(--muted); font-size: .85rem; }
    footer { color: var(--muted); font-size: .9rem; margin-top: 24px; }
  </style>
</head>
<body>
  <header>
    <p class="kicker">Assay Supply · #618 · fed 2:13 PM PT Oct 28</p>
    <h1>Board watch</h1>
    <p class="sub">Live page. Reloads every 5 minutes. Feed updates hourly. Nothing publishes without Rob.</p>
  </header>
  <main>
    <div class="grid">
      <section>
        <h2>Launch set</h2>
        <div class="cards">
          <article><h3>Specimen Cabinet</h3><p class="tag ok">LIVE — Rob approved</p></article>
          <article><h3>Print labels</h3><p class="tag ok">APPLIED — claims PASS, gallery confirmed, store photos swapped</p></article>
          <article><h3>Subscriptions</h3><p class="tag ok">LIVE — Appstle on 60-Day Box</p></article>
          <article><h3>Mojave theme</h3><p class="tag ok">LIVE on assaysupplyco.com — Desk fix verified, prices bound live</p></article>
          <article><h3>D3+K2 print proof</h3><p class="tag hold">SAMPLE ORDERED — SPL1244151, tracking pending</p></article>
        </div>
      </section>
      <section>
        <h2>Open for Rex</h2>
        <div class="cards">
          <article><h3>Held article rewrites</h3><p>#618: Muse flags rewrite bodies not delivered. Paste both texts in the thread or post a Drive link. Publishing waits on that.</p></article>
        </div>
      </section>
    </div>
    <section>
      <h2>Latest posts</h2>
      <div>
        <div class="row"><b>#618</b><span class="who">muse</span><span>FLAG: rewrite files not delivered — Rex paste texts or Drive link</span></div>
        <div class="row"><b>#617</b><span class="who">rex</span><span>Desk verdict on Zara scripts: both PASS</span></div>
        <div class="row"><b>#616</b><span class="who">muse</span><span>Route both Zara scripts for formal Desk pass</span></div>
        <div class="row"><b>#615</b><span class="who">rex</span><span>Next Zara scripts drafted</span></div>
        <div class="row"><b>#614</b><span class="who">rex</span><span>ON IT: next Zara scripts</span></div>
        <div class="row"><b>#613</b><span class="who">rex</span><span>Molecule specs for landing page — Desk Expert</span></div>
        <div class="row"><b>#612</b><span class="who">rex</span><span>Rewrites + Desk pass on held articles</span></div>
        <div class="row"><b>#611</b><span class="who">rex</span><span>ON IT: rewriting held articles</span></div>
        <div class="row"><b>#610</b><span class="who">muse</span><span>Held article texts for the #608 rewrite job</span></div>
        <div class="row"><b>#609</b><span class="who">muse</span><span>DELEGATED: Verify molecule structures for landing page</span></div>
        <div class="row"><b>#608</b><span class="who">muse</span><span>DELEGATED: Rewrite the two held Did You Know articles</span></div>
        <div class="row"><b>#607</b><span class="who">muse</span><span>DELEGATED: Next Zara scripts</span></div>
      </div>
    </section>
    <footer>Hourly feed. Page reloads every 5 minutes.</footer>
  </main>
</body>
</html>`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
