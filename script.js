
  /*
   * POLYTECHNIC PORTAL — SINGLE FILE
   * Everything you need is below. Just update the COLLEGES array.
   * ------------------------------------------------------------------
   * ✅ How to use:
   * 1) Save this file as index.html and open in your browser.
   * 2) Update the sample data in COLLEGES (search for // DATA: COLLEGES).
   * 3) No build steps, no libraries. Works offline.
   */

  // =============== UTILITIES ===============
  const $ = (q, el=document) => el.querySelector(q);
  const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));
  const rupee = n => '₹' + Intl.NumberFormat('en-IN').format(Math.round(n||0));
  const pct = n => (n??0) + '%';
  const by = k => (a,b)=> (a[k] > b[k]) ? 1 : (a[k] < b[k]) ? -1 : 0;
  const sum = arr => arr.reduce((a,b)=>a+b,0);

  // =============== DATA: COLLEGES (Sample) ===============
  // TODO: Replace with real data. Add/duplicate objects below.
  const COLLEGES = [
    {
      id: 'gp-delhi',
      name: 'Government Polytechnic Delhi',
      type: 'Government',
      city: 'New Delhi', state: 'Delhi',
      fees: 12000, // per year
      placementRate: 78, // %
      avgPackageLPA: 3.2,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 9500, exam: 'Delhi CET 2024' },
        { name: 'ECE', seats: 60, cutoffRank: 12500, exam: 'Delhi CET 2024' },
        { name: 'ME', seats: 60, cutoffRank: 18000, exam: 'Delhi CET 2024' },
      ],
      howToReach: {
        nearestMetro: 'Rajiv Chowk (Blue/Yellow)',
        nearestRail: 'New Delhi Jn (NDLS) ~5 km',
        nearestAirport: 'IGI Airport ~18 km',
        map: 'https://maps.google.com/?q=Government+Polytechnic+Delhi'
      },
      website: '#',
    },
    {
      id: 'govt-poly-pune',
      name: 'Government Polytechnic Pune',
      type: 'Government',
      city: 'Pune', state: 'Maharashtra',
      fees: 8000, placementRate: 82, avgPackageLPA: 3.8,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 7000, exam: 'MHT CET (Poly) 2024' },
        { name: 'IT', seats: 60, cutoffRank: 7800, exam: 'MHT CET (Poly) 2024' },
        { name: 'EE', seats: 60, cutoffRank: 12000, exam: 'MHT CET (Poly) 2024' },
      ],
      howToReach: {
        nearestMetro: 'PCMC Metro',
        nearestRail: 'Pune Jn (PUNE) ~6 km',
        nearestAirport: 'Pune Intl ~12 km',
        map: 'https://maps.google.com/?q=Government+Polytechnic+Pune'
      },
      website: '#',
    },
    {
      id: 'private-blr',
      name: 'City Polytechnic Bengaluru',
      type: 'Private',
      city: 'Bengaluru', state: 'Karnataka',
      fees: 45000, placementRate: 74, avgPackageLPA: 2.8,
      courses: [
        { name: 'CSE', seats: 120, cutoffRank: 15000, exam: 'DCET / Mgmt' },
        { name: 'AI & ML', seats: 60, cutoffRank: 14000, exam: 'DCET / Mgmt' },
        { name: 'ECE', seats: 60, cutoffRank: 18500, exam: 'DCET / Mgmt' },
      ],
      howToReach: {
        nearestMetro: 'Majestic (Nadaprabhu Kempegowda)',
        nearestRail: 'KSR Bengaluru (SBC) ~3 km',
        nearestAirport: 'BLR ~35 km',
        map: 'https://maps.google.com/?q=Bengaluru+Polytechnic'
      },
      website: '#',
    },
    {
      id: 'govt-lucknow',
      name: 'Government Polytechnic Lucknow',
      type: 'Government', city: 'Lucknow', state: 'Uttar Pradesh',
      fees: 10000, placementRate: 70, avgPackageLPA: 2.6,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 11000, exam: 'JEECUP 2024' },
        { name: 'Civil', seats: 60, cutoffRank: 15000, exam: 'JEECUP 2024' },
      ],
      howToReach: {
        nearestMetro: 'Charbagh',
        nearestRail: 'Lucknow Jn (LJN) ~2 km',
        nearestAirport: 'LKO ~12 km',
        map: 'https://maps.google.com/?q=Government+Polytechnic+Lucknow'
      },
      website: '#',
    },
    {
      id: 'private-noida',
      name: 'Sunrise Polytechnic Noida',
      type: 'Private', city: 'Noida', state: 'Uttar Pradesh',
      fees: 60000, placementRate: 85, avgPackageLPA: 4.2,
      courses: [
        { name: 'CSE', seats: 120, cutoffRank: 9000, exam: 'JEECUP / Mgmt' },
        { name: 'IT', seats: 60, cutoffRank: 10500, exam: 'JEECUP / Mgmt' },
      ],
      howToReach: {
        nearestMetro: 'Noida Sec‑62',
        nearestRail: 'Anand Vihar ~12 km',
        nearestAirport: 'DEL ~30 km',
        map: 'https://maps.google.com/?q=Sunrise+Polytechnic+Noida'
      },
      website: '#',
    },
    {
      id: 'govt-chennai',
      name: 'Central Polytechnic College, Chennai',
      type: 'Government', city: 'Chennai', state: 'Tamil Nadu',
      fees: 6000, placementRate: 76, avgPackageLPA: 3.0,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 8000, exam: 'TN Diploma Admissions' },
        { name: 'ECE', seats: 60, cutoffRank: 11000, exam: 'TN Diploma Admissions' },
      ],
      howToReach: {
        nearestMetro: 'Alandur',
        nearestRail: 'Chennai Egmore (MS) ~10 km',
        nearestAirport: 'MAA ~7 km',
        map: 'https://maps.google.com/?q=Central+Polytechnic+College+Chennai'
      },
      website: '#',
    },
    {
      id: 'private-kolkata',
      name: 'Eastern Institute of Polytechnic, Kolkata',
      type: 'Private', city: 'Kolkata', state: 'West Bengal',
      fees: 38000, placementRate: 68, avgPackageLPA: 2.4,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 17500, exam: 'JEXPO / Mgmt' },
        { name: 'EE', seats: 60, cutoffRank: 21000, exam: 'JEXPO / Mgmt' },
      ],
      howToReach: {
        nearestMetro: 'Sealdah Metro',
        nearestRail: 'Sealdah (SDAH) ~2 km',
        nearestAirport: 'CCU ~13 km',
        map: 'https://maps.google.com/?q=Kolkata+Polytechnic'
      },
      website: '#',
    },
    {
      id: 'govt-jaipur',
      name: 'Government Polytechnic Jaipur',
      type: 'Government', city: 'Jaipur', state: 'Rajasthan',
      fees: 9000, placementRate: 72, avgPackageLPA: 2.7,
      courses: [
        { name: 'CSE', seats: 60, cutoffRank: 11500, exam: 'Rajasthan Diploma Admissions' },
        { name: 'ME', seats: 60, cutoffRank: 16000, exam: 'Rajasthan Diploma Admissions' },
      ],
      howToReach: {
        nearestMetro: 'Mansarovar',
        nearestRail: 'Jaipur Jn (JP) ~5 km',
        nearestAirport: 'JAI ~10 km',
        map: 'https://maps.google.com/?q=Government+Polytechnic+Jaipur'
      },
      website: '#',
    },
  ];

  // =============== STATE (App) ===============
  let filtered = [...COLLEGES];
  let onlyTop = false;
  const compare = new Set();

  // =============== INIT ===============
  window.addEventListener('DOMContentLoaded', () => {
    $('#year').textContent = new Date().getFullYear();

    // Populate filters
    fillStateAndCourseFilters();

    // Bind controls
    $('#q').addEventListener('input', applyFiltersSort);
    $('#type').addEventListener('change', applyFiltersSort);
    $('#state').addEventListener('change', applyFiltersSort);
    $('#course').addEventListener('change', applyFiltersSort);
    $('#feesMax').addEventListener('input', () => { $('#feesLabel').textContent = rupee($('#feesMax').value); applyFiltersSort(); });
    $('#placeMin').addEventListener('input', () => { $('#placeLabel').textContent = pct($('#placeMin').value); applyFiltersSort(); });
    $('#sort').addEventListener('change', applyFiltersSort);

    $('#reset').addEventListener('click', () => { resetFilters(); render(); });
    $('#topToggle').addEventListener('click', () => { onlyTop = !onlyTop; applyFiltersSort(); $('#topToggle').classList.toggle('btn-primary', onlyTop); });

    $('#openCompare').addEventListener('click', () => openCompareModal());
    $('#clearCompare').addEventListener('click', () => { compare.clear(); renderCompareBar(); });

    // Notices
    initNotices();
    $('#noticeForm').addEventListener('submit', onAddNotice);
    $('#seedNotices').addEventListener('click', seedNotices);

    // Theme toggle
    $('#darkToggle').addEventListener('click', toggleTheme);

    // First render
    $('#feesLabel').textContent = rupee($('#feesMax').value);
    $('#placeLabel').textContent = pct($('#placeMin').value);
    render();
  });

  function resetFilters(){
    $('#q').value = '';
    $('#type').value = '';
    $('#state').value = '';
    $('#course').value = '';
    $('#feesMax').value = 150000; $('#feesLabel').textContent = rupee(150000);
    $('#placeMin').value = 0; $('#placeLabel').textContent = pct(0);
    onlyTop = false; $('#topToggle').classList.remove('btn-primary');
  }

  function fillStateAndCourseFilters(){
    const states = [...new Set(COLLEGES.map(c=>c.state))].sort();
    const stateSel = $('#state');
    states.forEach(s=>{ const o=document.createElement('option'); o.value=o.textContent=s; stateSel.appendChild(o); });

    const courses = [...new Set(COLLEGES.flatMap(c=>c.courses.map(x=>x.name)))].sort();
    const courseSel = $('#course');
    courses.forEach(s=>{ const o=document.createElement('option'); o.value=o.textContent=s; courseSel.appendChild(o); });
  }

  function applyFiltersSort(){
    const q = $('#q').value.trim().toLowerCase();
    const type = $('#type').value;
    const state = $('#state').value;
    const course = $('#course').value;
    const feesMax = +$('#feesMax').value;
    const placeMin = +$('#placeMin').value;

    filtered = COLLEGES.filter(c => {
      const text = (c.name + ' ' + c.city + ' ' + c.state + ' ' + c.type + ' ' + c.courses.map(x=>x.name).join(' ')).toLowerCase();
      if (q && !text.includes(q)) return false;
      if (type && c.type !== type) return false;
      if (state && c.state !== state) return false;
      if (course && !c.courses.some(x=>x.name===course)) return false;
      if (c.fees > feesMax) return false;
      if ((c.placementRate||0) < placeMin) return false;
      if (onlyTop && (c.placementRate||0) < 70) return false;
      return true;
    });

    const sort = $('#sort').value;
    if (sort === 'rank') filtered.sort((a,b)=> (b.placementRate||0) - (a.placementRate||0));
    else if (sort === 'feesAsc') filtered.sort((a,b)=> (a.fees||0) - (b.fees||0));
    else if (sort === 'feesDesc') filtered.sort((a,b)=> (b.fees||0) - (a.fees||0));
    else if (sort === 'cutoff') filtered.sort((a,b)=> topCSECutoff(a) - topCSECutoff(b));
    else if (sort === 'name') filtered.sort(by('name'));

    render();
  }

  function topCSECutoff(c){
    const cse = c.courses.find(x=>/^(cse|cs|computer)/i.test(x.name));
    return cse ? (cse.cutoffRank||999999) : 999999;
  }

  function render(){
    const grid = $('#grid');
    grid.innerHTML = '';
    $('#count').textContent = `${filtered.length} result${filtered.length!==1?'s':''}`;

    filtered.forEach(c => {
      const totalSeats = sum(c.courses.map(x=>x.seats||0));
      const toughest = c.courses.slice().sort((a,b)=> (a.cutoffRank||999999) - (b.cutoffRank||999999))[0];
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
          <div>
            <h3>${c.name}</h3>
            <div class="meta">
              <span class="badge">${c.type}</span>
              <span class="badge">${c.city}, ${c.state}</span>
              ${toughest?`<span class="badge">Toughest: ${toughest.name} • Rank ${toughest.cutoffRank.toLocaleString('en-IN')}</span>`:''}
            </div>
          </div>
          <button class="btn btn-ghost" title="Add to compare" onclick="toggleCompare('${c.id}')">⇄</button>
        </div>
        <div class="stats">
          <div class="stat"><div><strong>${rupee(c.fees)}</strong></div><small>Fees / year</small></div>
          <div class="stat"><div><strong>${pct(c.placementRate||0)}</strong></div><small>Placement</small></div>
          <div class="stat"><div><strong>${(c.avgPackageLPA||0).toFixed(1)} LPA</strong></div><small>Avg Package</small></div>
          <div class="stat"><div><strong>${totalSeats}</strong></div><small>Total Seats</small></div>
        </div>
        <div class="actions">
          <button class="btn btn-primary" onclick="openDetails('${c.id}')">Details</button>
          <a class="btn btn-ghost" href="${c.howToReach?.map||'#'}" target="_blank" rel="noopener">Map</a>
          ${c.website && c.website!=='#' ? `<a class=\"btn btn-ghost\" href=\"${c.website}\" target=\"_blank\">Website</a>`: ''}
        </div>
      `;
      grid.appendChild(card);
    });

    renderCompareBar();
  }

  function openDetails(id){
    const c = COLLEGES.find(x=>x.id===id);
    if(!c) return;
    $('#mTitle').textContent = c.name;

    const courseRows = c.courses.map(x=> `
      <tr><td>${x.name}</td><td>${x.seats||'-'}</td><td>${x.exam||'-'}</td><td>${x.cutoffRank?x.cutoffRank.toLocaleString('en-IN'):'-'}</td></tr>
    `).join('');

    $('#mBody').innerHTML = `
      <div>
        <div class="meta" style="margin-bottom:8px">
          <span class="badge">${c.type}</span>
          <span class="badge">${c.city}, ${c.state}</span>
        </div>
        <table class="table">
          <thead><tr><th>Course</th><th>Seats</th><th>Exam</th><th>Last Year Cutoff (Rank)</th></tr></thead>
          <tbody>${courseRows}</tbody>
        </table>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px">
          <div class="pill">Fees / year: <strong style="margin-left:6px">${rupee(c.fees)}</strong></div>
          <div class="pill">Placement: <strong style="margin-left:6px">${pct(c.placementRate||0)}</strong></div>
          <div class="pill">Avg Package: <strong style="margin-left:6px">${(c.avgPackageLPA||0).toFixed(1)} LPA</strong></div>
        </div>
      </div>
      <div>
        <div class="card">
          <h4 style="margin:0 0 6px 0">How to reach</h4>
          <ul style="margin:0 0 10px 18px;color:#cbd5e1">
            ${c.howToReach?.nearestMetro?`<li><b>Metro:</b> ${c.howToReach.nearestMetro}</li>`:''}
            ${c.howToReach?.nearestRail?`<li><b>Rail:</b> ${c.howToReach.nearestRail}</li>`:''}
            ${c.howToReach?.nearestAirport?`<li><b>Airport:</b> ${c.howToReach.nearestAirport}</li>`:''}
          </ul>
          <a class="btn btn-primary" href="${c.howToReach?.map||'#'}" target="_blank" rel="noopener">Open Map</a>
        </div>
        <div class="card">
          <h4 style="margin:0 0 6px 0">Quick Actions</h4>
          <button class="btn btn-ghost" onclick="toggleCompare('${c.id}')">Add/Remove Compare</button>
          ${c.website && c.website!=='#' ? `<a class=\"btn btn-ghost\" href=\"${c.website}\" target=\"_blank\">Visit Website</a>`: '<span class="pill">No website listed</span>'}
        </div>
      </div>
    `;

    $('#detailsModal').showModal();
  }
  function closeModal(){ $('#detailsModal').close(); }

  // =============== COMPARE ===============
  function toggleCompare(id){
    if(compare.has(id)) compare.delete(id); else compare.add(id);
    renderCompareBar();
  }
  function renderCompareBar(){
    const bar = $('#compareBar');
    const list = $('#compareList');
    list.innerHTML = '';
    compare.forEach(id=>{
      const c = COLLEGES.find(x=>x.id===id);
      if(!c) return; const tag = document.createElement('span');
      tag.className='pill'; tag.textContent = c.name; list.appendChild(tag);
    });
    bar.style.display = compare.size ? 'flex' : 'none';
  }
  function openCompareModal(){
    const items = [...compare].map(id=>COLLEGES.find(x=>x.id===id)).filter(Boolean);
    if(!items.length){ alert('Select colleges using the ⇄ button on cards.'); return; }
    const headers = ['Name','Type','Location','Fees/yr','Placement %','Avg LPA','CSE Cutoff'];
    const rows = items.map(c=> `
      <tr>
        <td>${c.name}</td>
        <td>${c.type}</td>
        <td>${c.city}, ${c.state}</td>
        <td>${rupee(c.fees)}</td>
        <td>${pct(c.placementRate||0)}</td>
        <td>${(c.avgPackageLPA||0).toFixed(1)}</td>
        <td>${topCSECutoff(c)===999999?'-':topCSECutoff(c).toLocaleString('en-IN')}</td>
      </tr>
    `).join('');

    $('#compareBody').innerHTML = `
      <div style="min-width:700px">
        <table class="table">
          <thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
    $('#compareModal').showModal();
  }

  // =============== NOTICES (localStorage) ===============
  const NKEY = 'poly_portal_notices_v1';
  function initNotices(){
    const stored = JSON.parse(localStorage.getItem(NKEY)||'[]');
    renderNotices(stored);
  }
  function onAddNotice(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const item = { title: data.title.trim(), link: (data.link||'').trim(), date: data.date || new Date().toISOString().slice(0,10) };
    const list = JSON.parse(localStorage.getItem(NKEY)||'[]');
    list.unshift(item);
    localStorage.setItem(NKEY, JSON.stringify(list));
    e.target.reset();
    renderNotices(list);
  }
  function renderNotices(list){
    const box = $('#noticeList'); box.innerHTML = '';
    if(!list.length){ box.innerHTML = '<div class="notice">No notices yet. Add one using the form above.</div>'; return; }
    list.forEach(n=>{
      const d = document.createElement('div'); d.className='notice';
      d.innerHTML = `
        <h5>${n.title}</h5>
        <div style="display:flex;gap:8px;align-items:center;color:#cbd5e1">
          <span class="pill">${n.date}</span>
          ${n.link?`<a class="pill" target="_blank" rel="noopener" href="${n.link}">Open link</a>`:''}
        </div>
      `;
      box.appendChild(d);
    });
  }
  function seedNotices(){
    const samples = [
      { title:'State Counselling Round‑1 starts', link:'#', date: new Date().toISOString().slice(0,10) },
      { title:'Document Verification helpdesk opened (Mon‑Sat, 10am‑5pm)', link:'#', date: new Date(Date.now()+86400000).toISOString().slice(0,10) },
      { title:'Last date to lock choices', link:'#', date: new Date(Date.now()+3*86400000).toISOString().slice(0,10) },
    ];
    localStorage.setItem(NKEY, JSON.stringify(samples));
    renderNotices(samples);
  }

  // =============== THEME ===============
  function toggleTheme(){
    // Simple invert theme (dark/light) by swapping palette.
    const isLight = document.body.dataset.theme === 'light';
    if(isLight){ document.body.dataset.theme=''; restoreDark(); }
    else { document.body.dataset.theme='light'; applyLight(); }
  }
  function applyLight(){
    document.documentElement.style.setProperty('--bg','#f5f7fb');
    document.documentElement.style.setProperty('--panel','#ffffff');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--text','#0b1226');
    document.documentElement.style.setProperty('--muted','#475569');
    document.documentElement.style.setProperty('--shadow','0 8px 24px rgba(0,0,0,.08)');
  }
  function restoreDark(){
    document.documentElement.style.setProperty('--bg','#0f172a');
    document.documentElement.style.setProperty('--panel','#0b1226');
    document.documentElement.style.setProperty('--card','#111a33');
    document.documentElement.style.setProperty('--text','#e6e9f2');
    document.documentElement.style.setProperty('--muted','#a8b0c5');
    document.documentElement.style.setProperty('--shadow','0 10px 30px rgba(0,0,0,.35)');
  }

  // expose for inline handlers
  window.openDetails = openDetails;
  window.closeModal = closeModal;
  window.toggleCompare = toggleCompare;
  window.openCompareModal = openCompareModal;