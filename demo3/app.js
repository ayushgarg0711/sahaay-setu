/**
 * Sahaay Setu 3.0 — Dual Interface & 4-Tier Government RBAC Engine
 * Features:
 * 1. Citizen Survivor Portal with Basic Demographic/Contact Data Collection
 * 2. 4-Tier Government RBAC (Case Worker, District, State Anonymized, National MoSJE)
 * 3. Permissive Project Authentication (Accepts ANY Officer ID & Password)
 * 4. Persistent Case Store (localStorage) with Realistic Cross-District Seed Cases
 * 5. Emotion AI & Voice Stress Analytics HUD
 * 6. Explainable AI (XAI) Transparent Legal Citation Engine
 * 7. Continuous Victim Well-Being Pulse Tracker & Early Crisis Detection
 * 8. Live Multilingual AI Assistant (Sahaay Mitra) with TTS & Voice Input
 */

// =============================================================================
// 1. Persistent Case Store & Realistic Seed Data
// =============================================================================
const STORAGE_KEY = 'sahaay_cases_v4';

const INITIAL_SEED_CASES = [
  {
    id: 'POA-9042',
    name: 'Sunita Devi',
    phone: '+91 9876543210',
    altPhone: '+91 9811223344',
    caste: 'Scheduled Caste (SC)',
    state: 'Uttar Pradesh',
    district: 'Varanasi',
    offense: 'Gang Rape & Grievous Assault (Sec 3(2)(v))',
    summary: 'Dominant caste accused attacked victim near panchayat hall; hurled caste slurs and caused grievous bodily harm.',
    riskScore: 92,
    tier: 'critical',
    statutoryRelief: '₹8,25,000 Total Entitlement',
    reliefStage: 'Stage 1: ₹4,12,500 (50% on MLC & FIR) Pending DM Approval',
    firStatus: 'Registered (Zero FIR)',
    protectionStatus: 'Sec 15A Armed Police Escort Active',
    assignedCounselor: 'Dr. Priya Sharma (Varanasi Sakhi Centre)',
    distressTrend: [92, 76, 58, 36],
    notes: [
      'Day 1: Completed emergency psychological first aid; victim relocated to safe shelter.',
      'Day 7: Medico-legal report secured from District Hospital. Accused associates issued threats; requested police escort.'
    ],
    timestamp: '2026-09-08'
  },
  {
    id: 'POA-9038',
    name: 'Rajesh Paswan',
    phone: '+91 9811223355',
    altPhone: '+91 9822334466',
    caste: 'Scheduled Caste (SC)',
    state: 'Bihar',
    district: 'Patna',
    offense: 'Arson, Home Burning & Social Boycott (Sec 3(2)(iv))',
    summary: 'Perpetrators set victim house on fire following refusal to work without fair wages.',
    riskScore: 78,
    tier: 'high',
    statutoryRelief: 'Reconstruction Cost + ₹1,00,000 Interim',
    reliefStage: 'Stage 1: Reconstruction Grant Approved by District Collector',
    firStatus: 'Registered at Danapur PS',
    protectionStatus: 'Temporary Safe Shelter Provided',
    assignedCounselor: 'Amit Verma (DLSA Legal Counselor)',
    distressTrend: [85, 68, 52, 40],
    notes: [
      'Day 1: Emergency shelter provided. Rebuilding estimate submitted to Social Welfare officer.'
    ],
    timestamp: '2026-09-06'
  },
  {
    id: 'POA-9031',
    name: 'Vikram Meghwal',
    phone: '+91 9822334477',
    altPhone: '+91 9833445588',
    caste: 'Scheduled Caste (SC)',
    state: 'Haryana',
    district: 'Bhiwani',
    offense: 'Witness Intimidation & Death Threats (Sec 15A)',
    summary: 'Key witness in ongoing Special SC/ST Court trial threatened with weapons to withdraw testimony.',
    riskScore: 74,
    tier: 'high',
    statutoryRelief: 'Sec 15A Protection Order',
    reliefStage: 'Bail Cancellation Petition Filed in Special SC/ST Court',
    firStatus: 'FIR Registered under Sec 15A',
    protectionStatus: '24×7 Security Outside Complainant Residence',
    assignedCounselor: 'Suman Rathi (Protection Officer)',
    distressTrend: [78, 64, 50, 32],
    notes: [
      'Day 1: SP Bhiwani directed local beat officer to conduct round-the-clock patrol.'
    ],
    timestamp: '2026-09-04'
  },
  {
    id: 'POA-9019',
    name: 'Anita Kumari',
    phone: '+91 9833445599',
    altPhone: '+91 9844556600',
    caste: 'Scheduled Tribe (ST)',
    state: 'Madhya Pradesh',
    district: 'Gwalior',
    offense: 'Public View Casteist Slur & Pathway Denial (Sec 3(1)(r))',
    summary: 'Complainant stopped on public pathway; dominant caste persons used abusive community insults.',
    riskScore: 48,
    tier: 'moderate',
    statutoryRelief: '₹1,00,000 Total Entitlement',
    reliefStage: 'Stage 1: ₹25,000 Disbursed to Bank Account',
    firStatus: 'Registered at City Kotwali',
    protectionStatus: 'Regular Beat Patrol Assigned',
    assignedCounselor: 'Neha Saxena (DLSA Counselor)',
    distressTrend: [65, 45, 30, 20],
    notes: [
      'Day 1: Initial statement recorded; DLSA advocate appointed to assist.'
    ],
    timestamp: '2026-09-02'
  },
  {
    id: 'POA-9015',
    name: 'Ramesh Valmiki',
    phone: '+91 9844556611',
    altPhone: '+91 9855667722',
    caste: 'Scheduled Caste (SC)',
    state: 'Rajasthan',
    district: 'Jaipur',
    offense: 'Wedding Procession Interception & Public Humiliation (Sec 3(1)(za))',
    summary: 'Groom wedding procession forcibly halted on village main road; accused damaged ceremonial carriage.',
    riskScore: 62,
    tier: 'high',
    statutoryRelief: '₹1,50,000 Total Entitlement',
    reliefStage: 'Stage 1: ₹50,000 Released on Chargesheet Filing',
    firStatus: 'Registered at Amber Police Station',
    protectionStatus: 'Picket Posted at Complainant Residence',
    assignedCounselor: 'Kailash Meena (District Social Protection Officer)',
    distressTrend: [72, 58, 42, 28],
    notes: [
      'Day 1: FIR filed under Sec 3(1)(za) and Sec 3(1)(r). DSP visiting scene for spot verification.'
    ],
    timestamp: '2026-08-30'
  },
  {
    id: 'POA-9008',
    name: 'Manjula Rathore',
    phone: '+91 9855667733',
    altPhone: '+91 9866778844',
    caste: 'Scheduled Tribe (ST)',
    state: 'Gujarat',
    district: 'Ahmedabad',
    offense: 'Outraging Modesty & Physical Assault (Sec 3(1)(w))',
    summary: 'Aggressors assaulted complainant at agricultural workplace after wage dispute.',
    riskScore: 70,
    tier: 'high',
    statutoryRelief: '₹5,00,000 Total Entitlement',
    reliefStage: 'Stage 1: ₹2,50,000 Interim Relief Disbursed',
    firStatus: 'Registered under Sec 3(1)(w) & IPC 354',
    protectionStatus: 'Women Helpline 181 Coordination Active',
    assignedCounselor: 'Falguni Patel (Sakhi One Stop Centre)',
    distressTrend: [80, 62, 45, 30],
    notes: [
      'Day 1: Hospital admission and free MLC arranged; counseling session conducted with family.'
    ],
    timestamp: '2026-08-28'
  }
];

function getStoredCases() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_CASES));
      return INITIAL_SEED_CASES;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_SEED_CASES;
  }
}

function saveStoredCases(cases) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  } catch (e) {}
}

// =============================================================================
// 2. Multilingual & View Routing
// =============================================================================
let currentLang = 'en';

const VALID_VIEWS = ['home', 'helplines', 'agent', 'describe', 'wellbeing', 'rights', 'privacy', 'govt-portal', 'user-portal'];

function switchView(targetViewId, updateHash = true) {
  if (!VALID_VIEWS.includes(targetViewId)) {
    targetViewId = 'home';
  }

  document.querySelectorAll('.view').forEach(viewEl => {
    viewEl.classList.toggle('active', viewEl.id === `view-${targetViewId}`);
  });

  document.querySelectorAll('nav.primary-nav .nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === targetViewId);
  });

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === targetViewId);
  });

  document.querySelectorAll('.mobile-bottom-nav .bottom-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === targetViewId);
  });

  closeMobileDrawer();

  if (updateHash && window.location.hash !== `#${targetViewId}`) {
    history.pushState(null, '', `#${targetViewId}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '').trim();
  switchView(hash || 'home', false);
}

document.addEventListener('click', (e) => {
  const viewLink = e.target.closest('[data-view]');
  if (viewLink) {
    const target = viewLink.dataset.view;
    if (target && VALID_VIEWS.includes(target)) {
      e.preventDefault();
      switchView(target, true);
    }
  }
});

// =============================================================================
// 3. Mobile Navigation & Quick Exit
// =============================================================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

function openMobileDrawer() {
  if (mobileDrawer && drawerBackdrop) {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
  }
}

function closeMobileDrawer() {
  if (mobileDrawer && drawerBackdrop) {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }
}

if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

function quickExit() {
  try { sessionStorage.clear(); } catch (e) {}
  window.location.replace('https://www.google.com');
}

const quickExitBtn = document.getElementById('quickExitBtn');
if (quickExitBtn) quickExitBtn.addEventListener('click', quickExit);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') quickExit(); });

function showToast(message, duration = 3000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// =============================================================================
// 3B. Role Selection Gateway & Citizen / User Login (Any Input Demo)
// =============================================================================
let currentUserSession = null; // { caseId, phone, caseData }

const userLoginModal = document.getElementById('userLoginModal');
const userLoginCloseBtn = document.getElementById('userLoginCloseBtn');
const userLoginForm = document.getElementById('userLoginForm');
const userLoginNavBtn = document.getElementById('userLoginNavBtn');
const userLoginNavLabel = document.getElementById('userLoginNavLabel');
const drawerUserLoginBtn = document.getElementById('drawerUserLoginBtn');
const navUserPortal = document.getElementById('navUserPortal');
const drawerUserPortalLink = document.getElementById('drawerUserPortalLink');
const mobileUserTab = document.getElementById('mobileUserTab');

const roleSelectModal = document.getElementById('roleSelectModal');
const roleSelectCloseBtn = document.getElementById('roleSelectCloseBtn');
const roleSelectUserBtn = document.getElementById('roleSelectUserBtn');
const roleSelectGovtBtn = document.getElementById('roleSelectGovtBtn');
const roleSelectGuestBtn = document.getElementById('roleSelectGuestBtn');
const portalChoiceBtn = document.getElementById('portalChoiceBtn');

function openRoleSelectModal(e) {
  if (e) e.preventDefault();
  if (currentUserSession) {
    switchView('user-portal', true);
    showToast(`Active Citizen Session: Case #${currentUserSession.caseId}`);
    return;
  }
  closeMobileDrawer();
  closeUserLoginModal();
  closeGovtLoginModal();
  if (roleSelectModal) roleSelectModal.classList.add('open');
}

function closeRoleSelectModal() {
  if (roleSelectModal) roleSelectModal.classList.remove('open');
  try { sessionStorage.setItem('sahaay_role_prompted', 'true'); } catch (e) {}
}

function openUserLoginModal(e) {
  if (e) e.preventDefault();
  closeMobileDrawer();
  closeRoleSelectModal();
  closeGovtLoginModal();
  if (currentUserSession) {
    switchView('user-portal', true);
    return;
  }
  if (userLoginModal) userLoginModal.classList.add('open');
}

function closeUserLoginModal() {
  if (userLoginModal) userLoginModal.classList.remove('open');
}

function switchToUserLogin() {
  closeGovtLoginModal();
  openUserLoginModal();
}

function switchToGovtLogin() {
  if (currentUserSession) {
    showToast(`You are currently logged in as Citizen (Case #${currentUserSession.caseId}). Please logout first.`);
    return;
  }
  closeUserLoginModal();
  openGovtLoginModal();
}

function quickUserLogin(caseId, phone) {
  const caseIdInput = document.getElementById('userCaseIdInput');
  const phoneInput = document.getElementById('userPhoneInput');
  if (caseIdInput) caseIdInput.value = caseId;
  if (phoneInput) phoneInput.value = phone;
  executeUserLogin(caseId, phone);
}

function executeUserLogin(caseId, phone) {
  const id = (caseId || '').trim() || 'POA-9042';
  const ph = (phone || '').trim() || '+91 9876543210';

  const cases = getStoredCases();
  let matched = cases.find(c =>
    (c.id && c.id.toLowerCase() === id.toLowerCase()) ||
    (c.phone && c.phone.replace(/\D/g, '') === ph.replace(/\D/g, '')) ||
    (c.id && c.id.replace(/\D/g, '') === id.replace(/\D/g, ''))
  );

  if (!matched) {
    // Dynamically create valid user case with a unique victim name for arbitrary demo input
    const cleanId = id.toUpperCase().startsWith('POA-') ? id.toUpperCase() : `POA-${id.toUpperCase().replace(/[^A-Z0-9]/g, '') || '9999'}`;
    const DIVERSE_POOLS = [
      { name: 'Kavita Baitha', district: 'Kanpur', state: 'Uttar Pradesh', caste: 'Scheduled Caste (SC)', offense: 'Pathway Denial & Social Harassment (Sec 3(1)(r))', counselor: 'Sangeeta Maurya (DLSA Advocate)' },
      { name: 'Deepak Jatav', district: 'Agra', state: 'Uttar Pradesh', caste: 'Scheduled Caste (SC)', offense: 'Physical Assault & Threat (Sec 3(2)(v))', counselor: 'Manoj Dixit (Protection Officer)' },
      { name: 'Pooja Manjhi', district: 'Gaya', state: 'Bihar', caste: 'Scheduled Caste (SC)', offense: 'Wage Withholding & Caste Abuse (Sec 3(1)(h))', counselor: 'Anil Soren (Legal Counselor)' },
      { name: 'Santosh Kori', district: 'Jhansi', state: 'Uttar Pradesh', caste: 'Scheduled Caste (SC)', offense: 'Land Dispossession & Arson (Sec 3(1)(g))', counselor: 'Dr. Neha Sen (One-Stop Centre)' },
      { name: 'Rekha Sonkar', district: 'Prayagraj', state: 'Uttar Pradesh', caste: 'Scheduled Caste (SC)', offense: 'Outraging Modesty & Threats (Sec 3(1)(w))', counselor: 'Vandana Tiwari (Counselor)' },
      { name: 'Anand Gautam', district: 'Rohtak', state: 'Haryana', caste: 'Scheduled Caste (SC)', offense: 'Witness Protection Order (Sec 15A)', counselor: 'Vikram Singh (Special Protection IO)' },
      { name: 'Meena Bairwa', district: 'Alwar', state: 'Rajasthan', caste: 'Scheduled Caste (SC)', offense: 'Public Water Well Denial (Sec 3(1)(za))', counselor: 'Kiran Sharma (DLSA Legal Aid)' },
      { name: 'Dinesh Vankar', district: 'Mehsana', state: 'Gujarat', caste: 'Scheduled Caste (SC)', offense: 'Social Boycott & Exclusion (Sec 3(1)(za))', counselor: 'Pravin Solanki (Social Protection Officer)' }
    ];

    const existingNames = new Set(cases.map(c => (c.name || '').toLowerCase()));
    const poolChoice = DIVERSE_POOLS.find(d => !existingNames.has(d.name.toLowerCase())) || DIVERSE_POOLS[Math.floor(Math.random() * DIVERSE_POOLS.length)];

    matched = {
      id: cleanId,
      name: poolChoice.name,
      phone: ph,
      altPhone: '',
      caste: poolChoice.caste,
      state: poolChoice.state,
      district: poolChoice.district,
      offense: poolChoice.offense,
      summary: `Formal complaint registered under Case ID ${cleanId} in ${poolChoice.district}. Police IO assigned and Section 15A protection escort initiated.`,
      riskScore: 78,
      tier: 'high',
      statutoryRelief: '₹8,25,000 Total Entitlement',
      reliefStage: 'Stage 1: ₹4,12,500 Disbursed to Bank Account',
      firStatus: 'Zero FIR Registered at Police Station',
      protectionStatus: 'Sec 15A Armed Police Escort Active',
      assignedCounselor: poolChoice.counselor,
      distressTrend: [84, 68, 52, 36],
      notes: [
        `Day 1: Complainant ${poolChoice.name} logged into portal with ID ${cleanId}. Verified under Section 4 mandate.`
      ],
      timestamp: new Date().toISOString().slice(0, 10)
    };
    cases.unshift(matched);
    saveStoredCases(cases);
  }

  currentUserSession = {
    caseId: matched.id,
    phone: ph,
    caseData: matched
  };

  try {
    sessionStorage.setItem('sahaay_user_session', JSON.stringify(currentUserSession));
    sessionStorage.setItem('sahaay_role_prompted', 'true');
  } catch (e) {}

  closeUserLoginModal();
  closeRoleSelectModal();
  updateUserPortalUI(true);
  renderUserPortalView();
  switchView('user-portal', true);
  showToast(`Welcome! Logged in as ${matched.name} (Case #${matched.id})`);
}

function logoutUser() {
  currentUserSession = null;
  try { sessionStorage.removeItem('sahaay_user_session'); } catch (e) {}
  updateUserPortalUI(false);
  switchView('home', true);
  showToast('Logged out of Citizen Case Portal.');
}

function updateUserPortalUI(isUser) {
  const portalSelectorBanner = document.getElementById('portalSelectorBanner');
  const drawerGovtBtn = document.getElementById('drawerGovtLoginBtn');
  const mobileGovtTab = document.getElementById('mobileGovtTab');

  if (isUser && currentUserSession) {
    // 1. Citizen Nav Button -> Sleek profile pill with Logout trigger
    if (userLoginNavBtn) {
      userLoginNavBtn.classList.add('active-user');
      if (userLoginNavLabel) {
        userLoginNavLabel.textContent = `Case #${currentUserSession.caseId} (Logout)`;
      }
    }

    // 2. Hide Government Login Options while Citizen is logged in
    if (portalSwitcherBtn) portalSwitcherBtn.style.display = 'none';
    if (portalChoiceBtn) portalChoiceBtn.style.display = 'none';
    if (drawerGovtBtn) drawerGovtBtn.style.display = 'none';
    if (mobileGovtTab) mobileGovtTab.style.display = 'none';

    // 3. Update Drawer Citizen Button
    if (drawerUserLoginBtn) {
      drawerUserLoginBtn.textContent = `👤 Case #${currentUserSession.caseId} (Logout)`;
    }

    // 4. Show Citizen specific views
    if (navUserPortal) navUserPortal.style.display = 'inline-flex';
    if (drawerUserPortalLink) drawerUserPortalLink.style.display = 'block';
    if (mobileUserTab) mobileUserTab.style.display = 'flex';

    // 5. Update Home Page Portal Selector Banner to Active Citizen Case Card
    if (portalSelectorBanner && currentUserSession.caseData) {
      const cd = currentUserSession.caseData;
      portalSelectorBanner.classList.add('active-user-session');
      portalSelectorBanner.innerHTML = `
        <div class="portal-selector-intro">
          <span class="badge" style="background:#166534;color:#fff;border:none;font-weight:700;">Active Citizen Case Session</span>
          <h3 style="margin:6px 0 2px;">Welcome, ${escapeHtml(cd.name || 'Complainant Survivor')}</h3>
          <p style="font-size:0.88rem;color:#D1DFDB;margin:0;">
            Case #${escapeHtml(cd.id)} • ${escapeHtml(cd.district || 'Varanasi')}, ${escapeHtml(cd.state || 'Uttar Pradesh')} • Protection: ${escapeHtml(cd.protectionStatus || 'Sec 15A Armed Escort Active')}
          </p>
        </div>
        <div class="portal-selector-buttons">
          <button type="button" class="btn btn-primary" onclick="switchView('user-portal', true)" style="background:#15803D;border-color:#16A34A;">
            <span>📋</span> View My Case &amp; Relief Tracker
          </button>
          <button type="button" class="btn btn-outline-white" onclick="logoutUser()">
            <span>🚪</span> Logout
          </button>
        </div>
      `;
    }
  } else {
    // Logged out: Restore default UI
    if (userLoginNavBtn) {
      userLoginNavBtn.classList.remove('active-user');
      if (userLoginNavLabel) userLoginNavLabel.textContent = 'User Login';
    }

    // Restore Government Login Controls now that citizen is logged out
    if (portalSwitcherBtn) portalSwitcherBtn.style.display = 'inline-flex';
    if (portalChoiceBtn) portalChoiceBtn.style.display = 'inline-flex';
    if (drawerGovtBtn) drawerGovtBtn.style.display = 'block';
    if (mobileGovtTab) mobileGovtTab.style.display = 'flex';

    if (drawerUserLoginBtn) {
      drawerUserLoginBtn.textContent = '👤 Citizen / User Case Login';
    }

    if (navUserPortal) navUserPortal.style.display = 'none';
    if (drawerUserPortalLink) drawerUserPortalLink.style.display = 'none';
    if (mobileUserTab) mobileUserTab.style.display = 'none';

    // Restore default Dual-Interface selection banner on Home page
    if (portalSelectorBanner) {
      portalSelectorBanner.classList.remove('active-user-session');
      portalSelectorBanner.innerHTML = `
        <div class="portal-selector-intro">
          <span class="badge badge-teal">Choose Portal Interface</span>
          <h3 style="margin:6px 0 2px;">Enter Citizen or Official Administrative Portal</h3>
          <p style="font-size:0.88rem;color:var(--ink-soft);margin:0;">Select your appropriate interface to track registered atrocities, relief vouchers, or official duties.</p>
        </div>
        <div class="portal-selector-buttons">
          <button type="button" class="btn btn-primary" onclick="openUserLoginModal(event)">
            <span>👤</span> Login as User / Citizen (Case ID)
          </button>
          <button type="button" class="btn btn-purple" onclick="openGovtLoginModal(event)">
            <span>🏛️</span> Login as Govt Employee (4 Tiers)
          </button>
        </div>
      `;
    }
  }
}

function renderUserPortalView() {
  if (!currentUserSession || !currentUserSession.caseData) return;
  const c = currentUserSession.caseData;

  const nameEl = document.getElementById('userPortalNameDisplay');
  const badgeEl = document.getElementById('userPortalCaseIdBadge');
  const protEl = document.getElementById('userPortalProtectionBadge');
  const scopeEl = document.getElementById('userPortalScopeDisplay');
  const reliefTitleEl = document.getElementById('userReliefTitle');
  const reliefTagEl = document.getElementById('userReliefStatusTag');
  const firTitleEl = document.getElementById('userFirTitle');
  const firSummaryEl = document.getElementById('userFirSummary');
  const counselorNameEl = document.getElementById('userCounselorName');
  const counselorDistEl = document.getElementById('userCounselorDistrict');
  const counselorCallEl = document.getElementById('userCounselorCallBtn');

  if (nameEl) nameEl.textContent = c.name || 'Complainant Survivor';
  if (badgeEl) badgeEl.textContent = `Case #${c.id}`;
  if (protEl) protEl.textContent = c.protectionStatus || 'Sec 15A Armed Escort Active';
  if (scopeEl) scopeEl.textContent = `District: ${c.district || 'Varanasi'} (${c.state || 'Uttar Pradesh'}) • Registered Phone: ${c.phone || '+91 9876543210'}`;
  if (reliefTitleEl) reliefTitleEl.textContent = c.statutoryRelief || '₹8,25,000 Total Entitlement';
  if (reliefTagEl) reliefTagEl.textContent = c.reliefStage || 'Stage 1 Disbursed';
  if (firTitleEl) firTitleEl.textContent = c.firStatus || 'Zero FIR Registered at Local PS';
  if (firSummaryEl) firSummaryEl.textContent = c.summary || c.offense || 'Registered under SC/ST (Prevention of Atrocities) Act.';
  if (counselorNameEl) counselorNameEl.textContent = c.assignedCounselor || 'Dr. Priya Sharma (Sakhi Centre)';
  if (counselorDistEl) counselorDistEl.textContent = `${c.district || 'District'} Hospital & Welfare Liaison`;
  if (counselorCallEl) counselorCallEl.href = 'tel:181';
}

function viewMyComplaintDraft() {
  if (currentUserSession && currentUserSession.caseData) {
    switchView('describe', true);
    showToast('Viewing your registered incident facts and FIR draft.');
  }
}

function printUserCaseSummary() {
  window.print();
}

if (userLoginCloseBtn) userLoginCloseBtn.addEventListener('click', closeUserLoginModal);
if (roleSelectCloseBtn) roleSelectCloseBtn.addEventListener('click', closeRoleSelectModal);
if (portalChoiceBtn) portalChoiceBtn.addEventListener('click', openRoleSelectModal);

if (userLoginNavBtn) {
  userLoginNavBtn.addEventListener('click', (e) => {
    if (currentUserSession) {
      logoutUser();
    } else {
      openUserLoginModal(e);
    }
  });
}

if (drawerUserLoginBtn) {
  drawerUserLoginBtn.addEventListener('click', (e) => {
    if (currentUserSession) {
      closeMobileDrawer();
      logoutUser();
    } else {
      openUserLoginModal(e);
    }
  });
}

if (roleSelectUserBtn) {
  roleSelectUserBtn.addEventListener('click', () => {
    closeRoleSelectModal();
    openUserLoginModal();
  });
}

if (roleSelectGovtBtn) {
  roleSelectGovtBtn.addEventListener('click', () => {
    if (currentUserSession) {
      showToast(`You are currently logged in as Citizen (Case #${currentUserSession.caseId}). Please logout first.`);
      return;
    }
    closeRoleSelectModal();
    openGovtLoginModal();
  });
}

if (roleSelectGuestBtn) {
  roleSelectGuestBtn.addEventListener('click', () => {
    closeRoleSelectModal();
    showToast('Browsing as Anonymous Public Visitor.');
  });
}

if (userLoginForm) {
  userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idVal = document.getElementById('userCaseIdInput')?.value.trim();
    const phoneVal = document.getElementById('userPhoneInput')?.value.trim();
    executeUserLogin(idVal, phoneVal);
  });
}

// =============================================================================
// 4. Government Official Portal & RBAC Engine (Any Input Login)
// =============================================================================
let currentGovtSession = null; // { tier, officerId, district, state }

const govtLoginModal = document.getElementById('govtLoginModal');
const govtLoginCloseBtn = document.getElementById('govtLoginCloseBtn');
const govtLoginForm = document.getElementById('govtLoginForm');
const portalSwitcherBtn = document.getElementById('portalSwitcherBtn');
const portalSwitcherLabel = document.getElementById('portalSwitcherLabel');
const citizenNav = document.getElementById('citizenNav');
const govtNav = document.getElementById('govtNav');
const districtScopeRow = document.getElementById('districtScopeRow');
const tierSelectorGrid = document.getElementById('tierSelectorGrid');

let selectedLoginTier = 'district';

function openGovtLoginModal(e) {
  if (e) e.preventDefault();
  if (currentUserSession) {
    showToast(`You are currently logged in as Citizen (Case #${currentUserSession.caseId}). Please logout first.`);
    return;
  }
  closeMobileDrawer();
  closeRoleSelectModal();
  closeUserLoginModal();
  if (currentGovtSession) {
    // If already logged in, switch directly to govt portal view
    switchView('govt-portal', true);
    return;
  }
  if (govtLoginModal) govtLoginModal.classList.add('open');
}

function closeGovtLoginModal() {
  if (govtLoginModal) govtLoginModal.classList.remove('open');
}

if (govtLoginCloseBtn) govtLoginCloseBtn.addEventListener('click', closeGovtLoginModal);
if (portalSwitcherBtn) {
  portalSwitcherBtn.addEventListener('click', (e) => {
    if (currentGovtSession) {
      // Toggle back to Citizen
      logoutGovtOfficer();
    } else {
      openGovtLoginModal(e);
    }
  });
}

const drawerGovtLoginBtn = document.getElementById('drawerGovtLoginBtn');
if (drawerGovtLoginBtn) drawerGovtLoginBtn.addEventListener('click', openGovtLoginModal);

// Tier selection in modal
if (tierSelectorGrid) {
  tierSelectorGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.tier-select-btn');
    if (!btn) return;
    tierSelectorGrid.querySelectorAll('.tier-select-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedLoginTier = btn.dataset.tier;
    if (districtScopeRow) {
      districtScopeRow.style.display = (selectedLoginTier === 'district' || selectedLoginTier === 'caseworker') ? 'block' : 'none';
    }
  });
}

function quickLoginTier(tier) {
  selectedLoginTier = tier;
  if (tierSelectorGrid) {
    tierSelectorGrid.querySelectorAll('.tier-select-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tier === tier);
    });
  }
  if (districtScopeRow) {
    districtScopeRow.style.display = (tier === 'district' || tier === 'caseworker') ? 'block' : 'none';
  }
  // Immediately submit login with mock values
  executeGovtLogin('DEMO-OFFICER', 'demo-pass', tier);
}

function executeGovtLogin(officerId, password, tier) {
  const districtSelect = document.getElementById('loginDistrictSelect');
  const assignedDistrict = districtSelect ? districtSelect.value : 'Varanasi';

  currentGovtSession = {
    officerId: officerId || 'OFFICER-771',
    tier: tier || selectedLoginTier || 'district',
    district: assignedDistrict,
    state: 'Uttar Pradesh'
  };

  try {
    sessionStorage.setItem('sahaay_govt_session', JSON.stringify(currentGovtSession));
  } catch (e) {}

  closeGovtLoginModal();
  updatePortalUIMode(true);
  renderGovtTierView();
  switchView('govt-portal', true);
  showToast(`Welcome! Logged in as ${getTierTitle(currentGovtSession.tier)}`);
}

if (govtLoginForm) {
  govtLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idVal = document.getElementById('officerIdInput').value.trim();
    const passVal = document.getElementById('officerPassInput').value.trim();
    // Accept ANY input (alphanumeric, numbers, letters)
    executeGovtLogin(idVal, passVal, selectedLoginTier);
  });
}

function logoutGovtOfficer() {
  currentGovtSession = null;
  try { sessionStorage.removeItem('sahaay_govt_session'); } catch (e) {}
  updatePortalUIMode(false);
  switchView('home', true);
  showToast('Logged out to Citizen Public Portal.');
}

function updatePortalUIMode(isGovt) {
  if (isGovt) {
    if (portalSwitcherBtn) {
      portalSwitcherBtn.classList.add('active-govt');
      if (portalSwitcherLabel) portalSwitcherLabel.textContent = '👤 Citizen Mode';
    }
    if (citizenNav) citizenNav.style.display = 'none';
    if (govtNav) govtNav.style.display = 'block';
  } else {
    if (portalSwitcherBtn) {
      portalSwitcherBtn.classList.remove('active-govt');
      if (portalSwitcherLabel) portalSwitcherLabel.textContent = '🏛️ Govt Official Login';
    }
    if (citizenNav) citizenNav.style.display = 'block';
    if (govtNav) govtNav.style.display = 'none';
  }
}

function getTierTitle(tier) {
  switch (tier) {
    case 'caseworker': return 'Level 1: Case Worker / Counselor';
    case 'district': return 'Level 2: District Welfare / Police SP';
    case 'state': return 'Level 3: State Welfare Nodal Officer';
    case 'national': return 'Level 4: National MoSJE Policy Maker';
    default: return 'Government Officer';
  }
}

// Render dynamic tier content
function renderGovtTierView() {
  if (!currentGovtSession) return;

  const { tier, officerId, district, state } = currentGovtSession;
  const cases = getStoredCases();

  // Update Banner Header
  const nameDisplay = document.getElementById('govtOfficerNameDisplay');
  const badgeDisplay = document.getElementById('govtTierBadge');
  const scopeDisplay = document.getElementById('govtOfficerScopeDisplay');
  const avatarDisplay = document.getElementById('govtOfficerAvatar');

  if (badgeDisplay) badgeDisplay.textContent = getTierTitle(tier);
  if (nameDisplay) nameDisplay.textContent = `Active Session: ${officerId}`;

  // Hide all tier sub-containers first
  const t1 = document.getElementById('govtTier1Container');
  const t2 = document.getElementById('govtTier2Container');
  const t3 = document.getElementById('govtTier3Container');
  const t4 = document.getElementById('govtTier4Container');

  if (t1) t1.style.display = 'none';
  if (t2) t2.style.display = 'none';
  if (t3) t3.style.display = 'none';
  if (t4) t4.style.display = 'none';

  // ---------------------------------------------------------------------------
  // LEVEL 1: CASE WORKER / COUNSELOR
  // ---------------------------------------------------------------------------
  if (tier === 'caseworker') {
    if (avatarDisplay) avatarDisplay.textContent = '👩‍⚕️';
    if (scopeDisplay) scopeDisplay.textContent = `Assigned Jurisdiction: Assigned Survivors in ${district} • Full Contact & Distress Access`;
    if (t1) t1.style.display = 'block';

    const victimsList = document.getElementById('caseworkerVictimsList');
    if (victimsList) {
      // Case workers see assigned cases
      const assigned = cases.slice(0, 3);
      victimsList.innerHTML = assigned.map((c, idx) => `
        <div class="assigned-victim-card" style="cursor:pointer;" onclick="selectCaseWorkerVictim('${c.id}')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <h4 style="margin:0;font-size:1.05rem;color:var(--teal-deep);">${c.name}</h4>
            <span class="badge ${c.tier === 'critical' ? 'badge-urgent' : 'badge-gold'}">${c.tier.toUpperCase()}</span>
          </div>
          <p style="font-size:0.84rem;color:var(--ink-soft);margin:6px 0;">
            <strong>Phone:</strong> ${c.phone} • <strong>Alt:</strong> ${c.altPhone || 'N/A'}<br>
            <strong>Offense:</strong> ${c.offense}<br>
            <strong>District:</strong> ${c.district} (${c.state})
          </p>
          <span style="font-size:0.75rem;color:var(--teal);font-weight:700;">Click to view distress graph &amp; add notes &rarr;</span>
        </div>
      `).join('');
    }
  }

  // ---------------------------------------------------------------------------
  // LEVEL 2: DISTRICT LEVEL (SP & Welfare Officer)
  // ---------------------------------------------------------------------------
  else if (tier === 'district') {
    if (avatarDisplay) avatarDisplay.textContent = '👮';
    if (scopeDisplay) scopeDisplay.textContent = `District: ${district} (${state}) • All Cases in District (Identity Visible)`;
    if (t2) t2.style.display = 'block';

    const districtTitle = document.getElementById('districtPortalTitle');
    if (districtTitle) districtTitle.textContent = `District SC/ST Atrocity Management: ${district} District`;

    const tableBody = document.getElementById('districtCaseTableBody');
    if (tableBody) {
      // District officers see all cases in their district (plus seed cases mapped to it for demonstration)
      const districtCases = cases.filter(c => c.district.toLowerCase() === district.toLowerCase() || c.district === 'Varanasi');
      tableBody.innerHTML = districtCases.map(c => `
        <tr>
          <td><strong>#${c.id}</strong></td>
          <td>
            <strong>${c.name}</strong><br>
            <span style="font-size:0.78rem;color:var(--ink-muted);">${c.phone}</span>
          </td>
          <td>
            <span style="font-size:0.8rem;font-weight:600;">${c.caste}</span><br>
            <span style="font-size:0.78rem;color:var(--ink-soft);">${c.offense}</span>
          </td>
          <td><span class="badge ${c.tier === 'critical' ? 'badge-urgent' : 'badge-gold'}">${c.riskScore}/100</span></td>
          <td><span style="font-size:0.8rem;font-weight:600;color:var(--marigold-dark);">${c.reliefStage}</span></td>
          <td>
            <span class="badge badge-success" style="font-size:0.72rem;">${c.firStatus}</span><br>
            <span style="font-size:0.72rem;color:var(--teal-deep);">${c.protectionStatus}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-ghost" style="padding:4px 8px;font-size:0.75rem;" onclick="actionApproveRelief('${c.id}')">Approve Relief</button>
          </td>
        </tr>
      `).join('');
    }
  }

  // ---------------------------------------------------------------------------
  // LEVEL 3: STATE LEVEL (Aggregated & Anonymized)
  // ---------------------------------------------------------------------------
  else if (tier === 'state') {
    if (avatarDisplay) avatarDisplay.textContent = '🏛️';
    if (scopeDisplay) scopeDisplay.textContent = `State Welfare Nodal Department • Jurisdiction: ${state} (Identity Masked for Privacy)`;
    if (t3) t3.style.display = 'block';

    const stateTable = document.getElementById('stateAnonymizedTableBody');
    if (stateTable) {
      // Identity MUST be masked / anonymized (e.g. SURV-UP-4902)
      stateTable.innerHTML = cases.map(c => `
        <tr>
          <td><strong style="color:var(--teal-deep);">${maskIdentity(c.id, c.state)}</strong></td>
          <td><strong>${c.district}</strong></td>
          <td>
            <span style="font-size:0.82rem;font-weight:600;">${c.caste}</span><br>
            <span style="font-size:0.76rem;color:var(--ink-muted);">Identity Masked</span>
          </td>
          <td><span style="font-size:0.82rem;">${c.offense}</span></td>
          <td><span class="badge badge-teal">${c.reliefStage.split(':')[0]}</span></td>
        </tr>
      `).join('');
    }
  }

  // ---------------------------------------------------------------------------
  // LEVEL 4: NATIONAL LEVEL (MoSJE Macro Analytics)
  // ---------------------------------------------------------------------------
  else if (tier === 'national') {
    if (avatarDisplay) avatarDisplay.textContent = '🇮🇳';
    if (scopeDisplay) scopeDisplay.textContent = `Ministry of Social Justice & Empowerment (MoSJE) • National Macro Policy & Disbursals`;
    if (t4) t4.style.display = 'block';
  }
}

function maskIdentity(caseId, state) {
  const code = (state === 'Uttar Pradesh') ? 'UP' : (state === 'Bihar') ? 'BR' : (state === 'Haryana') ? 'HR' : 'IN';
  const num = caseId.replace(/\D/g, '');
  return `SURV-${code}-${num}`;
}

// Case Worker select victim to view details
function selectCaseWorkerVictim(caseId) {
  const cases = getStoredCases();
  const c = cases.find(item => item.id === caseId) || cases[0];

  const cwName = document.getElementById('cwDetailName');
  const cwMeta = document.getElementById('cwDetailMeta');
  const cwBadge = document.getElementById('cwDetailBadge');
  const cwNotes = document.getElementById('cwNotesFeed');

  if (cwName) cwName.textContent = c.name;
  if (cwMeta) cwMeta.innerHTML = `<strong>Phone:</strong> ${c.phone} • <strong>Alt:</strong> ${c.altPhone || 'N/A'} • <strong>Caste:</strong> ${c.caste}`;
  if (cwBadge) {
    cwBadge.className = `badge ${c.tier === 'critical' ? 'badge-urgent' : 'badge-gold'}`;
    cwBadge.textContent = `${c.tier.toUpperCase()} PRIORITY`;
  }
  if (cwNotes && c.notes) {
    cwNotes.innerHTML = c.notes.map(n => `<div class="counselor-note-item">${n}</div>`).join('');
  }

  showToast(`Loaded victim file for: ${c.name}`);
}

// Case worker add note
const cwAddNoteForm = document.getElementById('cwAddNoteForm');
if (cwAddNoteForm) {
  cwAddNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('cwNoteInput');
    if (!input || !input.value.trim()) return;

    const notesFeed = document.getElementById('cwNotesFeed');
    if (notesFeed) {
      const newNote = document.createElement('div');
      newNote.className = 'counselor-note-item';
      newNote.innerHTML = `<strong>Session (Today):</strong> ${escapeHtml(input.value.trim())}`;
      notesFeed.appendChild(newNote);
    }
    input.value = '';
    showToast('Counselor progress note saved.');
  });
}

function approveDistrictCompensation() {
  showToast('✓ Stage 1 Statutory Relief (₹4,12,500) voucher approved by District Magistrate.');
}

function deploySec15AEscort() {
  showToast('✓ Section 15A Armed Police Escort order dispatched to local station.');
}

function actionApproveRelief(id) {
  showToast(`✓ Relief voucher initiated for Case #${id}. Disbursal authorized.`);
}

// =============================================================================
// State-Wise Atrocity Case Analytics & Case Type Breakdown Engine
// =============================================================================
const STATE_ANALYTICS_DATA = {
  'Uttar Pradesh': {
    state: 'Uttar Pradesh',
    totalCases: 412,
    avgFirTime: '7.4 Hours',
    firCompliance: '94.2%',
    allocatedBudget: '₹14.20 Crore',
    settlementRate: '82%',
    activeEscorts: 184,
    chargeSheetTime: '48 Days (Statutory: ≤60 Days)',
    hotspots: [
      { district: 'Varanasi', count: 48, rate: '92% FIR speed' },
      { district: 'Lucknow', count: 42, rate: '88% FIR speed' },
      { district: 'Azamgarh', count: 38, rate: '79% FIR speed' },
      { district: 'Kanpur Nagar', count: 35, rate: '85% FIR speed' },
      { district: 'Gorakhpur', count: 29, rate: '90% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Physical Assault & Grievous Hurt',
        section: 'Sec 3(2)(v) / Sec 3(2)(va)',
        count: 148,
        percentage: 35.9,
        relief: '₹8,25,000 / victim',
        color: '#DC2626'
      },
      {
        type: 'Casteist Slurs & Public Humiliation',
        section: 'Sec 3(1)(r) & Sec 3(1)(s)',
        count: 112,
        percentage: 27.2,
        relief: '₹1,00,000 / victim',
        color: '#D97706'
      },
      {
        type: 'Land Dispossession, Pathway Denial & Arson',
        section: 'Sec 3(1)(g) / Sec 3(2)(iv)',
        count: 74,
        percentage: 18.0,
        relief: 'Full Reconstruction + ₹1,00,000',
        color: '#0284C7'
      },
      {
        type: 'Gender-Based Atrocities & Outraging Modesty',
        section: 'Sec 3(1)(w) / IPC 354',
        count: 48,
        percentage: 11.6,
        relief: '₹5,00,000 / victim',
        color: '#7C3AED'
      },
      {
        type: 'Witness Harassment & Intimidation',
        section: 'Sec 15A (Witness Protection)',
        count: 30,
        percentage: 7.3,
        relief: 'Armed Escort + Safe Shelter',
        color: '#0D9488'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹5.84 Cr', pct: '41%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹5.38 Cr', pct: '38%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹2.98 Cr', pct: '21%' }
    }
  },
  'Bihar': {
    state: 'Bihar',
    totalCases: 288,
    avgFirTime: '8.9 Hours',
    firCompliance: '91.8%',
    allocatedBudget: '₹9.80 Crore',
    settlementRate: '74%',
    activeEscorts: 118,
    chargeSheetTime: '52 Days',
    hotspots: [
      { district: 'Patna', count: 41, rate: '86% FIR speed' },
      { district: 'Gaya', count: 36, rate: '82% FIR speed' },
      { district: 'Muzaffarpur', count: 31, rate: '78% FIR speed' },
      { district: 'Nalanda', count: 27, rate: '88% FIR speed' },
      { district: 'Rohtas', count: 22, rate: '80% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Land Encroachment, Arson & Forced Labor',
        section: 'Sec 3(1)(g) / Sec 3(1)(h) / Sec 3(2)(iv)',
        count: 96,
        percentage: 33.3,
        relief: 'Full Reconstruction + ₹1,00,000',
        color: '#0284C7'
      },
      {
        type: 'Physical Assault & Grievous Hurt',
        section: 'Sec 3(2)(v)',
        count: 82,
        percentage: 28.5,
        relief: '₹8,25,000 / victim',
        color: '#DC2626'
      },
      {
        type: 'Casteist Slurs & Social Exclusion',
        section: 'Sec 3(1)(r) & Sec 3(1)(za)',
        count: 58,
        percentage: 20.1,
        relief: '₹1,00,000 / victim',
        color: '#D97706'
      },
      {
        type: 'Gender-Based Atrocity & Exploitation',
        section: 'Sec 3(1)(w)',
        count: 34,
        percentage: 11.8,
        relief: '₹5,00,000 / victim',
        color: '#7C3AED'
      },
      {
        type: 'Witness Threat & Intimidation',
        section: 'Sec 15A Protection Scheme',
        count: 18,
        percentage: 6.3,
        relief: 'Special Court Escort Order',
        color: '#0D9488'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹4.10 Cr', pct: '42%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹3.65 Cr', pct: '37%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹2.05 Cr', pct: '21%' }
    }
  },
  'Haryana': {
    state: 'Haryana',
    totalCases: 164,
    avgFirTime: '6.8 Hours',
    firCompliance: '96.5%',
    allocatedBudget: '₹6.40 Crore',
    settlementRate: '86%',
    activeEscorts: 92,
    chargeSheetTime: '42 Days',
    hotspots: [
      { district: 'Bhiwani', count: 34, rate: '94% FIR speed' },
      { district: 'Rohtak', count: 29, rate: '91% FIR speed' },
      { district: 'Hisar', count: 26, rate: '89% FIR speed' },
      { district: 'Sonipat', count: 23, rate: '92% FIR speed' },
      { district: 'Karnal', count: 18, rate: '95% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Witness Harassment & Court Intimidation',
        section: 'Sec 15A (Witness Protection)',
        count: 54,
        percentage: 32.9,
        relief: '24×7 Picket & Armed Escort',
        color: '#0D9488'
      },
      {
        type: 'Social Boycott & Village Commons Denial',
        section: 'Sec 3(1)(za) & Sec 3(1)(b)',
        count: 42,
        percentage: 25.6,
        relief: '₹1,50,000 / victim',
        color: '#D97706'
      },
      {
        type: 'Physical Assault & Grievous Hurt',
        section: 'Sec 3(2)(v)',
        count: 38,
        percentage: 23.2,
        relief: '₹8,25,000 / victim',
        color: '#DC2626'
      },
      {
        type: 'Public Caste Slurs & Insults',
        section: 'Sec 3(1)(r) & Sec 3(1)(s)',
        count: 30,
        percentage: 18.3,
        relief: '₹1,00,000 / victim',
        color: '#6366F1'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹2.88 Cr', pct: '45%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹2.43 Cr', pct: '38%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹1.09 Cr', pct: '17%' }
    }
  },
  'Madhya Pradesh': {
    state: 'Madhya Pradesh',
    totalCases: 342,
    avgFirTime: '9.2 Hours',
    firCompliance: '89.4%',
    allocatedBudget: '₹11.10 Crore',
    settlementRate: '69%',
    activeEscorts: 142,
    chargeSheetTime: '55 Days',
    hotspots: [
      { district: 'Gwalior', count: 46, rate: '84% FIR speed' },
      { district: 'Sagar', count: 40, rate: '80% FIR speed' },
      { district: 'Morena', count: 36, rate: '76% FIR speed' },
      { district: 'Bhopal', count: 32, rate: '88% FIR speed' },
      { district: 'Rewa', count: 28, rate: '79% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Casteist Slurs, Humiliation & Forced Labor',
        section: 'Sec 3(1)(r) / Sec 3(1)(h)',
        count: 124,
        percentage: 36.3,
        relief: '₹1,00,000 to ₹4,00,000',
        color: '#D97706'
      },
      {
        type: 'Physical Assault & Atrocity Violence',
        section: 'Sec 3(2)(v)',
        count: 98,
        percentage: 28.7,
        relief: '₹8,25,000 / victim',
        color: '#DC2626'
      },
      {
        type: 'Land Dispossession & Agricultural Water Denial',
        section: 'Sec 3(1)(g) & Sec 3(1)(za)',
        count: 68,
        percentage: 19.9,
        relief: 'Land Restitution + ₹1,50,000',
        color: '#0284C7'
      },
      {
        type: 'Outraging Modesty & Sexual Harassment',
        section: 'Sec 3(1)(w)',
        count: 36,
        percentage: 10.5,
        relief: '₹5,00,000 / victim',
        color: '#7C3AED'
      },
      {
        type: 'Witness Intimidation',
        section: 'Sec 15A Protection Order',
        count: 16,
        percentage: 4.6,
        relief: '24×7 Security Detail',
        color: '#0D9488'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹4.66 Cr', pct: '42%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹4.22 Cr', pct: '38%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹2.22 Cr', pct: '20%' }
    }
  },
  'Rajasthan': {
    state: 'Rajasthan',
    totalCases: 276,
    avgFirTime: '8.1 Hours',
    firCompliance: '92.6%',
    allocatedBudget: '₹9.20 Crore',
    settlementRate: '79%',
    activeEscorts: 110,
    chargeSheetTime: '49 Days',
    hotspots: [
      { district: 'Jaipur', count: 44, rate: '91% FIR speed' },
      { district: 'Nagaur', count: 38, rate: '83% FIR speed' },
      { district: 'Jodhpur', count: 33, rate: '87% FIR speed' },
      { district: 'Alwar', count: 31, rate: '85% FIR speed' },
      { district: 'Barmer', count: 25, rate: '80% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Wedding Procession & Public Pathway Denial',
        section: 'Sec 3(1)(za)',
        count: 92,
        percentage: 33.3,
        relief: '₹1,50,000 / victim',
        color: '#D97706'
      },
      {
        type: 'Physical Assault & Grievous Hurt',
        section: 'Sec 3(2)(v)',
        count: 86,
        percentage: 31.2,
        relief: '₹8,25,000 / victim',
        color: '#DC2626'
      },
      {
        type: 'Caste Slurs in Public Gathering',
        section: 'Sec 3(1)(r)',
        count: 58,
        percentage: 21.0,
        relief: '₹1,00,000 / victim',
        color: '#6366F1'
      },
      {
        type: 'Gender-Based Violence & Assault',
        section: 'Sec 3(1)(w)',
        count: 40,
        percentage: 14.5,
        relief: '₹5,00,000 / victim',
        color: '#7C3AED'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹3.95 Cr', pct: '43%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹3.40 Cr', pct: '37%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹1.85 Cr', pct: '20%' }
    }
  },
  'Gujarat': {
    state: 'Gujarat',
    totalCases: 198,
    avgFirTime: '7.1 Hours',
    firCompliance: '95.0%',
    allocatedBudget: '₹7.50 Crore',
    settlementRate: '84%',
    activeEscorts: 86,
    chargeSheetTime: '44 Days',
    hotspots: [
      { district: 'Ahmedabad', count: 42, rate: '93% FIR speed' },
      { district: 'Surendranagar', count: 32, rate: '86% FIR speed' },
      { district: 'Rajkot', count: 28, rate: '90% FIR speed' },
      { district: 'Banaskantha', count: 26, rate: '84% FIR speed' },
      { district: 'Mehsana', count: 22, rate: '89% FIR speed' }
    ],
    offenseBreakdown: [
      {
        type: 'Social Boycott & Village Commons Exclusion',
        section: 'Sec 3(1)(za)',
        count: 68,
        percentage: 34.3,
        relief: '₹1,50,000 / victim',
        color: '#D97706'
      },
      {
        type: 'Physical Assault & Property Damage',
        section: 'Sec 3(2)(iv) / Sec 3(2)(v)',
        count: 62,
        percentage: 31.3,
        relief: 'Reconstruction + ₹8,25,000',
        color: '#DC2626'
      },
      {
        type: 'Casteist Abuse & Derogatory Defamation',
        section: 'Sec 3(1)(r)',
        count: 44,
        percentage: 22.2,
        relief: '₹1,00,000 / victim',
        color: '#6366F1'
      },
      {
        type: 'Witness Intimidation & Threat',
        section: 'Sec 15A',
        count: 24,
        percentage: 12.2,
        relief: 'Police Security Detail',
        color: '#0D9488'
      }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹3.30 Cr', pct: '44%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹2.77 Cr', pct: '37%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹1.43 Cr', pct: '19%' }
    }
  }
};

function getStateAnalytics(stateName) {
  if (STATE_ANALYTICS_DATA[stateName]) {
    return STATE_ANALYTICS_DATA[stateName];
  }
  // Dynamic fallback for any state
  const clean = stateName || 'National Region';
  return {
    state: clean,
    totalCases: 215,
    avgFirTime: '7.8 Hours',
    firCompliance: '92.0%',
    allocatedBudget: '₹8.10 Crore',
    settlementRate: '78%',
    activeEscorts: 95,
    chargeSheetTime: '47 Days',
    hotspots: [
      { district: 'District Central', count: 48, rate: '91% FIR speed' },
      { district: 'District East', count: 39, rate: '85% FIR speed' },
      { district: 'District South', count: 32, rate: '88% FIR speed' }
    ],
    offenseBreakdown: [
      { type: 'Physical Assault & Grievous Hurt', section: 'Sec 3(2)(v)', count: 82, percentage: 38.1, relief: '₹8,25,000 / victim', color: '#DC2626' },
      { type: 'Casteist Slurs & Public Insults', section: 'Sec 3(1)(r)', count: 64, percentage: 29.8, relief: '₹1,00,000 / victim', color: '#D97706' },
      { type: 'Land & Pathway Dispossession', section: 'Sec 3(1)(g)', count: 42, percentage: 19.5, relief: 'Restitution + ₹1,00,000', color: '#0284C7' },
      { type: 'Witness Intimidation & Harassment', section: 'Sec 15A', count: 27, percentage: 12.6, relief: 'Armed Escort Order', color: '#0D9488' }
    ],
    reliefStages: {
      stage1: { label: 'Stage 1 (FIR & Medico-Legal)', amount: '₹3.40 Cr', pct: '42%' },
      stage2: { label: 'Stage 2 (Chargesheet in 60d)', amount: '₹3.05 Cr', pct: '38%' },
      stage3: { label: 'Stage 3 (Special Court Order)', amount: '₹1.65 Cr', pct: '20%' }
    }
  };
}

function openStateDetailModal(stateName) {
  const data = getStateAnalytics(stateName);
  const modal = document.getElementById('stateDetailModal');
  const title = document.getElementById('stateModalTitle');
  const subtitle = document.getElementById('stateModalSubtitle');
  const body = document.getElementById('stateModalBody');

  if (title) title.innerHTML = `🏛️ ${escapeHtml(data.state)} • Atrocity Case Breakdown`;
  if (subtitle) subtitle.textContent = `Total Registered Incidents: ${data.totalCases} • Statutory Relief Tracking`;

  if (body) {
    body.innerHTML = `
      <!-- Top Metrics Banner -->
      <div class="state-metrics-summary-grid">
        <div class="state-metric-tile">
          <div class="metric-big-num" style="color:var(--teal-deep);">${data.totalCases}</div>
          <span class="metric-sublabel">Total Cases Registered</span>
        </div>
        <div class="state-metric-tile">
          <div class="metric-big-num" style="color:var(--success);">${data.firCompliance}</div>
          <span class="metric-sublabel">Mandatory FIR Compliance</span>
        </div>
        <div class="state-metric-tile">
          <div class="metric-big-num" style="color:var(--accent-purple);">${data.avgFirTime}</div>
          <span class="metric-sublabel">Avg FIR Registration</span>
        </div>
        <div class="state-metric-tile">
          <div class="metric-big-num" style="color:var(--marigold-dark);">${data.allocatedBudget}</div>
          <span class="metric-sublabel">Relief Budget Allocated</span>
        </div>
      </div>

      <!-- Offense Type & Case Classification Breakdown -->
      <div class="state-section-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <h4 style="margin:0;font-size:1.05rem;color:var(--teal-deep);">📊 Breakdown by Case Offense Category &amp; Section</h4>
          <span class="badge badge-teal" style="font-size:0.75rem;">${data.offenseBreakdown.length} Categories Classified</span>
        </div>
        <div class="state-offense-list">
          ${data.offenseBreakdown.map(item => `
            <div class="state-offense-item">
              <div class="state-offense-header">
                <div>
                  <strong>${escapeHtml(item.type)}</strong>
                  <span class="state-section-tag">${escapeHtml(item.section)}</span>
                </div>
                <div style="text-align:right;">
                  <strong style="color:var(--teal-deep);font-size:0.95rem;">${item.count} Cases</strong>
                  <span style="font-size:0.78rem;color:var(--ink-soft);display:block;">(${item.percentage}%)</span>
                </div>
              </div>
              <div class="state-progress-track">
                <div class="state-progress-bar" style="width: ${item.percentage}%; background: ${item.color};"></div>
              </div>
              <div class="state-offense-footer">
                <span><strong>Statutory Scale:</strong> ${escapeHtml(item.relief)}</span>
                <span style="color:var(--success);font-weight:600;">✓ Non-Bailable Cognizable</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- District Hotspots & High Incidence Clusters -->
      <div class="state-section-card">
        <h4 style="margin:0 0 10px;font-size:1.05rem;color:var(--teal-deep);">📍 District-Wise Case Concentration &amp; Hotspots</h4>
        <div class="state-hotspots-grid">
          ${data.hotspots.map(h => `
            <div class="state-hotspot-pill">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <strong>${escapeHtml(h.district)}</strong>
                <span class="badge badge-gold" style="font-size:0.75rem;">${h.count} Cases</span>
              </div>
              <div style="font-size:0.75rem;color:var(--ink-soft);margin-top:4px;">
                ⚡ ${escapeHtml(h.rate)} • Sec 15A Active
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Statutory Relief Disbursal Pipeline -->
      <div class="state-section-card" style="margin-bottom:0;">
        <h4 style="margin:0 0 10px;font-size:1.05rem;color:var(--teal-deep);">💰 Statutory Compensation Disbursal Stages</h4>
        <div class="state-relief-pipeline-grid">
          <div class="relief-stage-card">
            <span class="relief-stage-badge">Stage 1 (50% on FIR/MLC)</span>
            <div class="relief-stage-amount">${data.reliefStages.stage1.amount}</div>
            <span class="relief-stage-pct">${data.reliefStages.stage1.pct} of State Allocation</span>
          </div>
          <div class="relief-stage-card">
            <span class="relief-stage-badge">Stage 2 (Chargesheet ≤60d)</span>
            <div class="relief-stage-amount">${data.reliefStages.stage2.amount}</div>
            <span class="relief-stage-pct">${data.reliefStages.stage2.pct} of State Allocation</span>
          </div>
          <div class="relief-stage-card">
            <span class="relief-stage-badge">Stage 3 (Special Court Final)</span>
            <div class="relief-stage-amount">${data.reliefStages.stage3.amount}</div>
            <span class="relief-stage-pct">${data.reliefStages.stage3.pct} of State Allocation</span>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;flex-wrap:wrap;gap:10px;border-top:1px solid var(--line);padding-top:14px;">
        <button type="button" class="btn btn-sm btn-outline-teal" onclick="exportStateReport('${escapeHtml(data.state)}')">
          📥 Export Official State Dossier (PDF/JSON)
        </button>
        <button type="button" class="btn btn-sm btn-primary" onclick="closeStateDetailModal()">
          Close Analytics Window
        </button>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }
}

function closeStateDetailModal() {
  const modal = document.getElementById('stateDetailModal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function exportStateReport(stateName) {
  showToast(`✓ Official statutory case report exported for ${stateName}.`);
}

// =============================================================================
// 5. Citizen Incident Reporting & Basic Info Hook
// =============================================================================
const incidentNarrative = document.getElementById('incidentNarrative');
const narrativeMicBtn = document.getElementById('narrativeMicBtn');
const narrativeMicLabel = document.getElementById('narrativeMicLabel');
const speechStatusText = document.getElementById('speechStatusText');
const analyzeNarrativeBtn = document.getElementById('analyzeNarrativeBtn');
const clearNarrativeBtn = document.getElementById('clearNarrativeBtn');
const incidentAnalysisResult = document.getElementById('incidentAnalysisResult');
const factorTagsGrid = document.getElementById('factorTagsGrid');
const actionPlanSteps = document.getElementById('actionPlanSteps');
const firDraftBox = document.getElementById('firDraftBox');
const copyFirBtn = document.getElementById('copyFirBtn');
const printFirBtn = document.getElementById('printFirBtn');
const analysisUrgencyBadge = document.getElementById('analysisUrgencyBadge');
const xaiFactorsBreakdown = document.getElementById('xaiFactorsBreakdown');
const xaiLegalReasoning = document.getElementById('xaiLegalReasoning');

// Voice input with live Emotion AI
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let speechStartTime = 0;

function updateAudioWaves(active) {
  document.querySelectorAll('.audio-bar').forEach(b => b.classList.toggle('active', active));
}

function computeVoiceStressAnalytics(transcript) {
  const words = transcript.trim().split(/\s+/).filter(w => w.length > 0);
  const wpm = Math.round(words.length / Math.max((Date.now() - speechStartTime) / 60000, 0.08));

  const t = transcript.toLowerCase();
  let traumaScore = 20;
  if (t.includes('kill') || t.includes('threat') || t.includes('blood') || t.includes('rape')) traumaScore += 45;
  if (t.includes('scared') || t.includes('fear') || t.includes('attack') || t.includes('fire')) traumaScore += 25;
  traumaScore = Math.min(traumaScore, 98);

  let stressLabel = 'Normal';
  let stressColor = '#34D399';
  let emotionState = 'Composed';

  if (traumaScore > 75 || wpm > 170) {
    stressLabel = 'High Distress';
    stressColor = '#EF4444';
    emotionState = 'Acute Panic / Trauma';
  } else if (traumaScore > 50) {
    stressLabel = 'Moderate Stress';
    stressColor = '#FBBF24';
    emotionState = 'Elevated Fear / Anxious';
  }

  const sVal = document.getElementById('hudStressVal');
  const eVal = document.getElementById('hudEmotionVal');
  const cVal = document.getElementById('hudCadenceVal');
  const tVal = document.getElementById('hudTraumaVal');

  if (sVal) sVal.innerHTML = `<span style="color:${stressColor};">${stressLabel}</span>`;
  if (eVal) eVal.textContent = emotionState;
  if (cVal) cVal.textContent = `${wpm} WPM`;
  if (tVal) tVal.textContent = `${traumaScore} / 100`;
}

if (SpeechRecognition && narrativeMicBtn) {
  const narrativeRecognition = new SpeechRecognition();
  narrativeRecognition.continuous = true;
  narrativeRecognition.interimResults = true;
  let isListening = false;

  narrativeRecognition.onstart = () => {
    isListening = true;
    speechStartTime = Date.now();
    narrativeMicBtn.classList.add('listening');
    if (narrativeMicLabel) narrativeMicLabel.textContent = 'Listening... (Tap to stop)';
    updateAudioWaves(true);
  };

  narrativeRecognition.onresult = (e) => {
    let finalTranscript = '';
    for (let i = e.resultIndex; i < e.results.length; ++i) {
      finalTranscript += e.results[i][0].transcript + ' ';
    }
    if (incidentNarrative && finalTranscript) {
      incidentNarrative.value += (incidentNarrative.value ? ' ' : '') + finalTranscript;
      computeVoiceStressAnalytics(incidentNarrative.value);
    }
  };

  narrativeRecognition.onend = () => {
    isListening = false;
    narrativeMicBtn.classList.remove('listening');
    if (narrativeMicLabel) narrativeMicLabel.textContent = 'Voice Dictation (Speak)';
    updateAudioWaves(false);
  };

  narrativeMicBtn.addEventListener('click', () => {
    if (isListening) narrativeRecognition.stop(); else narrativeRecognition.start();
  });
}

document.querySelectorAll('.sample-prompt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const textToInsert = btn.dataset.insert;
    if (incidentNarrative && textToInsert) {
      const current = incidentNarrative.value.trim();
      incidentNarrative.value = current ? `${current} ${textToInsert}` : textToInsert;
      computeVoiceStressAnalytics(incidentNarrative.value);
      incidentNarrative.focus();
    }
  });
});

if (clearNarrativeBtn) {
  clearNarrativeBtn.addEventListener('click', () => {
    if (incidentNarrative) incidentNarrative.value = '';
    if (incidentAnalysisResult) incidentAnalysisResult.classList.remove('show');
    showToast('Cleared text.');
  });
}

// Analyze & Save Incident to localStorage
if (analyzeNarrativeBtn) {
  analyzeNarrativeBtn.addEventListener('click', () => {
    const text = incidentNarrative ? incidentNarrative.value.trim() : '';
    if (!text || text.length < 15) {
      showToast('Please describe what happened in at least one sentence.');
      if (incidentNarrative) incidentNarrative.focus();
      return;
    }

    // Capture User Info
    const userName = document.getElementById('userInfoName')?.value.trim() || 'Confidential Survivor';
    const userPhone = document.getElementById('userInfoPhone')?.value.trim() || '+91 9876543210';
    const userAltPhone = document.getElementById('userInfoAltPhone')?.value.trim() || '';
    const userCaste = document.getElementById('userInfoCaste')?.value || 'Scheduled Caste (SC)';
    const userState = document.getElementById('userInfoState')?.value || 'Uttar Pradesh';
    const userDistrict = document.getElementById('userInfoDistrict')?.value || 'Varanasi';

    const t = text.toLowerCase();
    const factors = [];
    const actionItems = [];
    const xaiFeatures = [];

    let physicalScore = 12;
    let retaliationScore = 10;
    let medicalScore = 10;
    let traumaFragility = 14;

    const hasAssault = t.includes('hit') || t.includes('beat') || t.includes('wound') || t.includes('blood') || t.includes('weapon');
    const hasSexualViolence = t.includes('rape') || t.includes('sexual') || t.includes('clothes');
    const hasThreats = t.includes('threat') || t.includes('kill') || t.includes('dhamki');
    const hasArson = t.includes('fire') || t.includes('burn') || t.includes('arson') || t.includes('house');

    if (hasSexualViolence || t.includes('murder')) {
      physicalScore = 29;
      factors.push({ label: 'Severe Atrocity (Sec 3(2)(v))', icon: '🚨' });
      xaiFeatures.push({ label: 'Severe Violence / Sexual Assault', weight: 35, statute: 'Sec 3(2)(v) POA Act' });
    } else if (hasAssault || hasArson) {
      physicalScore = 24;
      factors.push({ label: 'Physical Assault / Grievous Hurt', icon: '🩸' });
      xaiFeatures.push({ label: 'Physical Harm with Weapons', weight: 28, statute: 'Sec 326 IPC / Sec 3(2)(va)' });
    }

    if (hasThreats) {
      retaliationScore = 24;
      factors.push({ label: 'Witness Intimidation (Sec 15A)', icon: '🛡️' });
      xaiFeatures.push({ label: 'Witness Death Threats & Coercion', weight: 26, statute: 'Section 15A Witness Protection' });
      actionItems.push({ step: 'Enforce Section 15A Police Escort', desc: 'Deploy 24×7 armed protection outside residence and file for bail cancellation.' });
    }

    if (hasSexualViolence || hasAssault) {
      medicalScore = 24;
      actionItems.unshift({ step: 'Urgent Medico-Legal Examination (MLC)', desc: 'Visit District Hospital immediately. Free examination under Section 357C CrPC.' });
    }

    actionItems.push({ step: 'Free DLSA Counsel Assigned (NALSA 15100)', desc: 'Government advocate assigned to track compensation and trial proceedings.' });

    const totalRiskScore = Math.min(physicalScore + retaliationScore + medicalScore + traumaFragility, 98);
    const tier = totalRiskScore >= 75 ? 'critical' : totalRiskScore >= 50 ? 'high' : 'moderate';

    // Create New Case & Save to localStorage
    const newCaseId = `POA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCaseObj = {
      id: newCaseId,
      name: userName,
      phone: userPhone,
      altPhone: userAltPhone,
      caste: userCaste,
      state: userState,
      district: userDistrict,
      offense: hasSexualViolence ? 'Sexual Assault (Sec 3(2)(v))' : hasAssault ? 'Grievous Assault' : 'Casteist Atrocity',
      summary: text,
      riskScore: totalRiskScore,
      tier: tier,
      statutoryRelief: totalRiskScore >= 75 ? '₹8,25,000 Total Entitlement' : '₹2,00,000 Total Entitlement',
      reliefStage: 'Stage 1: Pending District Welfare Review',
      firStatus: 'Drafted (Pending SHO Submission)',
      protectionStatus: hasThreats ? 'Protection Escort Recommended' : 'Standard Protection',
      assignedCounselor: 'District Legal Aid Counselor',
      distressTrend: [totalRiskScore, Math.max(totalRiskScore - 15, 30), Math.max(totalRiskScore - 28, 20), Math.max(totalRiskScore - 45, 15)],
      notes: [`Day 1: Citizen submitted incident narrative from ${userDistrict}. Predictive risk score: ${totalRiskScore}/100.`],
      timestamp: new Date().toISOString().slice(0, 10)
    };

    const currentCases = getStoredCases();
    currentCases.unshift(newCaseObj);
    saveStoredCases(currentCases);

    // Render Analysis Result
    if (analysisUrgencyBadge) {
      analysisUrgencyBadge.innerHTML = `<span class="badge ${tier === 'critical' ? 'badge-urgent' : 'badge-gold'}">Case #${newCaseId} • ${tier.toUpperCase()} PRIORITY (${totalRiskScore}/100)</span>`;
    }

    const rmPhysical = document.getElementById('rmPhysicalVal');
    const rmRetaliation = document.getElementById('rmRetaliationVal');
    const rmMedical = document.getElementById('rmMedicalVal');
    const rmMental = document.getElementById('rmMentalVal');

    if (rmPhysical) rmPhysical.textContent = `${physicalScore} / 30`;
    if (rmRetaliation) rmRetaliation.textContent = `${retaliationScore} / 25`;
    if (rmMedical) rmMedical.textContent = `${medicalScore} / 25`;
    if (rmMental) rmMental.textContent = `${traumaFragility} / 20`;

    if (xaiFactorsBreakdown) {
      xaiFactorsBreakdown.innerHTML = xaiFeatures.map(item => `
        <div class="xai-bar-row">
          <span class="xai-bar-label">${item.label}</span>
          <div class="xai-progress-track"><div class="xai-progress-fill" style="width:${item.weight * 2.8}%;"></div></div>
          <span class="xai-bar-pct">+${item.weight}%</span>
          <span class="badge badge-teal" style="font-size:0.7rem;">${item.statute}</span>
        </div>
      `).join('');
    }

    if (xaiLegalReasoning) {
      xaiLegalReasoning.innerHTML = `<strong>Statutory XAI Grounding:</strong> Model verified violations under <em>${xaiFeatures.map(f => f.statute).join(', ')}</em>. Assigned directly to <strong>${userDistrict} District Welfare Officer</strong> queue.`;
    }

    if (factorTagsGrid) {
      factorTagsGrid.innerHTML = factors.map(f => `<span class="factor-tag"><span>${f.icon}</span><span>${f.label}</span></span>`).join('');
    }

    if (actionPlanSteps) {
      actionPlanSteps.innerHTML = `<ul class="rec-steps">${actionItems.map((item, idx) => `<li><h4>${idx + 1}. ${item.step}</h4><p>${item.desc}</p></li>`).join('')}</ul>`;
    }

    // Generate FIR Draft with actual User Info
    const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const firDraft = 
`To,
The Station House Officer (SHO) / Superintendent of Police,
Police Station: [Local Station], District: ${userDistrict}, State: ${userState}

Date: ${dateStr}

SUBJECT: Formal Complaint under Section 154 Cr.P.C. (Sec 173 BNSS) and the Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989.

Respected Sir/Madam,

I, ${userName}, resident of ${userDistrict}, ${userState}, belonging to the ${userCaste} community (Contact: ${userPhone}, Alternate: ${userAltPhone || 'N/A'}), state the following facts:

1. INCIDENT FACTS:
"${text.trim()}"

2. STATUTORY RELIEF & PROTECTION REQUESTED:
i. Register an FIR immediately under Section 4 mandate without delay.
ii. Forward case for immediate Medico-Legal Examination (MLC).
iii. Provide Section 15A witness protection security.
iv. Disburse statutory interim relief funds under SC/ST (POA) Rules, 2016.

Yours faithfully,
${userName}
Phone: ${userPhone} | District: ${userDistrict}`;

    if (firDraftBox) firDraftBox.textContent = firDraft;

    if (incidentAnalysisResult) {
      incidentAnalysisResult.classList.add('show');
      incidentAnalysisResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    showToast(`✓ Case #${newCaseId} saved! Transmitted to ${userDistrict} District Welfare portal.`);
  });
}

if (copyFirBtn) {
  copyFirBtn.addEventListener('click', () => {
    if (!firDraftBox || !firDraftBox.textContent) return;
    navigator.clipboard.writeText(firDraftBox.textContent).then(() => {
      showToast('✓ Complaint text copied!');
    });
  });
}

if (printFirBtn) {
  printFirBtn.addEventListener('click', () => {
    if (!firDraftBox || !firDraftBox.textContent) return;
    window.print();
  });
}

// =============================================================================
// =============================================================================
// 6. Live AI Assistant (Sahaay Mitra) — Advanced Conversational & Emotion AI Engine
// =============================================================================
let ttsEnabled = false;
let agentLang = 'en'; // 'en' = English output, 'hi' = Hindi output
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const typingIndicator = document.getElementById('typingIndicator');
const ttsToggleBtn = document.getElementById('ttsToggleBtn');
const ttsLabel = document.getElementById('ttsLabel');
const clearChatBtn = document.getElementById('clearChatBtn');
const micBtn = document.getElementById('micBtn');

// --- Agent Language Toggle (Hindi / English) ---
const agentLangToggle = document.getElementById('agentLangToggle');
const agentLangLabel = document.getElementById('agentLangLabel');

if (agentLangToggle) {
  agentLangToggle.addEventListener('click', () => {
    agentLang = (agentLang === 'en') ? 'hi' : 'en';
    if (agentLangLabel) {
      agentLangLabel.textContent = (agentLang === 'hi') ? 'हिंदी' : 'English';
    }
    agentLangToggle.classList.toggle('active-hindi', agentLang === 'hi');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    const label = (agentLang === 'hi') ? 'हिंदी मोड चालू — बॉट अब हिंदी में जवाब देगा' : 'English mode ON — Bot will now reply in English';
    showToast(label);
    addChatMessage(
      agentLang === 'hi'
        ? '<p><strong>🌐 भाषा बदली:</strong> अब मैं आपसे <strong>हिंदी</strong> में बात करूँगा। आप हिंदी या English दोनों में टाइप/बोल सकते हैं।</p>'
        : '<p><strong>🌐 Language changed:</strong> I will now respond in <strong>English</strong>. You can type or speak in either language.</p>',
      'bot'
    );
  });
}

if (ttsToggleBtn) {
  ttsToggleBtn.addEventListener('click', () => {
    ttsEnabled = !ttsEnabled;
    if (ttsLabel) ttsLabel.textContent = `Voice: ${ttsEnabled ? 'On' : 'Off'}`;
    if (!ttsEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    showToast(agentLang === 'hi'
      ? `आवाज़ ${ttsEnabled ? 'चालू' : 'बंद'}`
      : `Voice narration ${ttsEnabled ? 'ON' : 'OFF'}`);
    if (ttsEnabled) {
      speakText(agentLang === 'hi'
        ? 'आवाज़ चालू है। अब मैं हिंदी में बोलूँगा।'
        : 'Voice is on. I will now speak in English.');
    }
  });
}

let cachedTtsVoices = [];
let ttsSpeakTimer = null;

function refreshTtsVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedTtsVoices = window.speechSynthesis.getVoices() || [];
}

if ('speechSynthesis' in window) {
  refreshTtsVoices();
  window.speechSynthesis.addEventListener('voiceschanged', refreshTtsVoices);
}

function detectSpeakLang(plainText) {
  const hindiChars = (plainText.match(/[\u0900-\u097F]/g) || []).length;
  const latinChars = (plainText.match(/[A-Za-z]/g) || []).length;
  if (hindiChars > latinChars) return 'hi-IN';
  if (latinChars > hindiChars && latinChars > 6) return 'en-IN';
  return agentLang === 'hi' ? 'hi-IN' : 'en-IN';
}

function pickVoiceForLang(lang) {
  refreshTtsVoices();
  const voices = cachedTtsVoices;
  if (!voices.length) return null;

  const langLc = String(lang || '').toLowerCase();
  const prefix = langLc.split('-')[0];

  const scoreVoice = (voice) => {
    const voiceLang = (voice.lang || '').toLowerCase();
    const name = (voice.name || '').toLowerCase();
    let score = 0;
    if (voiceLang === langLc) score += 100;
    else if (voiceLang.startsWith(prefix + '-')) score += 80;
    else if (voiceLang.startsWith(prefix)) score += 50;
    if (prefix === 'hi' && /hindi|हिन्दी|hi-in/.test(`${name} ${voiceLang}`)) score += 45;
    if (prefix === 'en' && /english/.test(name)) score += 20;
    if (langLc.includes('-in') && (voiceLang.includes('-in') || /india|indian|ravi|heera/.test(name))) score += 18;
    if (voice.localService) score += 4;
    return score;
  };

  const best = voices
    .map((voice) => ({ voice, score: scoreVoice(voice) }))
    .sort((a, b) => b.score - a.score)[0];

  if (!best || best.score < 50) return null;
  return best.voice;
}

function speakText(text) {
  if (!ttsEnabled || !('speechSynthesis' in window)) return;
  const clean = String(text).replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  if (!clean) return;

  const lang = detectSpeakLang(clean);

  const speakNow = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = lang;
    utterance.rate = lang.startsWith('hi') ? 0.9 : 0.95;
    const voice = pickVoiceForLang(lang);
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  if (ttsSpeakTimer) clearTimeout(ttsSpeakTimer);
  const voicesReady = (window.speechSynthesis.getVoices() || []).length > 0;
  if (!voicesReady) {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      if (ttsEnabled) speakNow();
    }, { once: true });
  }
  ttsSpeakTimer = setTimeout(speakNow, voicesReady ? 60 : 280);
}

function addChatMessage(content, sender = 'bot', buttons = []) {
  if (!chatMessages) return;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (sender === 'bot') {
    let html = content;
    if (buttons.length > 0) {
      html += `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;">`;
      buttons.forEach(btn => {
        if (btn.type === 'call') {
          html += `<a href="tel:${btn.value}" class="btn btn-urgent btn-sm" style="text-decoration:none;">📞 Call ${btn.label}</a>`;
        } else if (btn.type === 'view') {
          html += `<button class="btn btn-ghost btn-sm" data-view="${btn.value}">${btn.label}</button>`;
        }
      });
      html += `</div>`;
    }
    html += `<span class="bubble-timestamp">${timeStr}</span>`;
    bubble.innerHTML = html;
    speakText(content);
  } else {
    bubble.innerHTML = `<p>${escapeHtml(content)}</p><span class="bubble-timestamp">${timeStr}</span>`;
  }

  chatMessages.insertBefore(bubble, typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// =============================================================================
// 6B. Conversational Memory, Emotion AI & Multi-Intent Decision Engine
// =============================================================================

/**
 * Central conversational session state
 */
const chatbotMemory = {
  userName: null,
  namePromptCount: 0,
  lastIntent: null,
  lastIntents: [],
  lastEmotion: 'neutral',
  lastEmotionObj: { emotion: 'neutral', intensity: 'low', score: 0 },
  emergencyLevel: 0,
  recentMessages: [], // Stores last 15-20 turns: { sender, text, timestamp, intent, emotion, emergencyLevel }
  importantContext: {
    incidentType: null,
    hasPhysicalHarm: false,
    hasThreat: false,
    hasMedicalNeed: false,
    firDelayed: false,
    locationMentioned: null
  },
  lastUsedResponseIndex: {} // Category -> index mapping to avoid repeating identical responses
};

/**
 * Normalizes input text while maintaining original casing statistics for intensity detection
 */
function normalizeChatText(rawText) {
  return String(rawText || '').trim();
}

/**
 * Extracts survivor / user name from natural introductions in English, Hindi, and Hinglish
 */
function extractUserName(text) {
  if (!text) return null;
  const t = text.trim();

  // Negative patterns that are not personal names
  const nonNames = new Set([
    'scared', 'worried', 'sad', 'angry', 'afraid', 'stressed', 'confused', 'alone',
    'victim', 'witness', 'complainant', 'user', 'citizen', 'police', 'doctor', 'lawyer',
    'dara', 'pareshan', 'dukhi', 'gusse', 'help', 'bachao', 'madat', 'sir', 'madam'
  ]);

  // English patterns
  const enPatterns = [
    /(?:my name is|i am|i'm|call me|myself|this is)\s+([A-Za-z]+(?:\s+[A-Za-z]+)?)/i,
    /name\s*[:=\-]\s*([A-Za-z]+(?:\s+[A-Za-z]+)?)/i
  ];
  for (const pat of enPatterns) {
    const m = t.match(pat);
    if (m && m[1]) {
      const candidate = m[1].trim();
      const firstWord = candidate.split(/\s+/)[0].toLowerCase();
      if (!nonNames.has(firstWord) && candidate.length >= 2 && candidate.length <= 30) {
        return candidate.charAt(0).toUpperCase() + candidate.slice(1);
      }
    }
  }

  // Hindi & Hinglish patterns
  const hiPatterns = [
    /(?:मेरा नाम|मैं|नाम)\s+([\u0900-\u097F]+(?:\s+[\u0900-\u097F]+)?)\s*(?:हूँ|है|हू)?/i,
    /(?:mera naam|mai|main|mujhe)\s+([A-Za-z]+(?:\s+[A-Za-z]+)?)\s*(?:hai|hu|hoon|kehte hain)?/i
  ];
  for (const pat of hiPatterns) {
    const m = t.match(pat);
    if (m && m[1]) {
      const candidate = m[1].trim();
      const firstWord = candidate.split(/\s+/)[0].toLowerCase();
      if (!nonNames.has(firstWord) && candidate.length >= 2 && candidate.length <= 30) {
        return candidate.charAt(0).toUpperCase() + candidate.slice(1);
      }
    }
  }

  return null;
}

/**
 * 1. Emotion Detection Engine
 * Detects: fear, sadness, stress, anxiety, anger, panic, confusion, relieved_happy, neutral
 * Analyzes keywords, sentence patterns, exclamation count, uppercase shouting, repeated words.
 */
function detectEmotion(rawText) {
  if (!rawText) return { emotion: 'neutral', intensity: 'low', score: 0 };

  const text = rawText.trim();
  const lower = text.toLowerCase();

  // Metrics for Intensity
  const exclamations = (text.match(/!+/g) || []).length;
  const questionMarks = (text.match(/\?+/g) || []).length;
  const letters = text.replace(/[^A-Za-z]/g, '');
  const uppercaseLetters = text.replace(/[^A-Z]/g, '');
  const isShouting = letters.length >= 5 && (uppercaseLetters.length / letters.length) > 0.6;
  const hasIntensifiers = /\b(very|extremely|so much|really|too|bahut|bohot|zyada|sakht|turant|ekdam|bilkul)\b/i.test(lower);
  const hasWordRepetition = /\b(\w+)\s+\1\b/i.test(lower) || /\b(help|please|bachao|darr|mar)\s+(help|please|bachao|darr|mar)\b/i.test(lower);

  let intensityBoost = 0;
  if (exclamations > 0) intensityBoost += Math.min(exclamations * 2, 4);
  if (isShouting) intensityBoost += 3;
  if (hasIntensifiers) intensityBoost += 2;
  if (hasWordRepetition) intensityBoost += 3;

  // Emotion Keyword & Pattern Lexicons
  const emotionScores = {
    panic: 0,
    fear: 0,
    anxiety: 0,
    anger: 0,
    sadness: 0,
    stress: 0,
    confusion: 0,
    relieved_happy: 0
  };

  // 1. PANIC / ACUTE CRISIS
  if (/\b(attacking me|breaking in|kill me|killing|bleeding|emergency|immediate help|right now|hurry|save me|save us)\b/i.test(lower)) emotionScores.panic += 6;
  if (/बचाओ|मार रहे|हमला|खून|दरवाज़ा तोड़|अभी आओ|जान से मार|तुरंत मदद|खतरा/i.test(lower)) emotionScores.panic += 6;
  if (/\b(bachao|maar rahe|hamla|khoon|attack ho raha|turant aao|jaan khatre|help help)\b/i.test(lower)) emotionScores.panic += 6;

  // 2. FEAR
  if (/\b(scared|afraid|frightened|terrified|horror|shivering|threatened|danger|threat|stalking)\b/i.test(lower)) emotionScores.fear += 4;
  if (/डर|भय|दहशत|खौफ|धमकी|डर लग रहा|कांप|जान का खतरा/i.test(lower)) emotionScores.fear += 4;
  if (/\b(darr|dar|bhay|dhamki|dar lag raha|darr lag raha|khatra|dhamka)\b/i.test(lower)) emotionScores.fear += 4;

  // 3. ANXIETY
  if (/\b(anxious|anxiety|nervous|restless|panicking|palpitations|shaking|uneasy|dread)\b/i.test(lower)) emotionScores.anxiety += 4;
  if (/घबराहट|बेचैनी|चिंता|घबरा|सांस फूल|दिल धड़क/i.test(lower)) emotionScores.anxiety += 4;
  if (/\b(ghabrahat|ghabra|bechaini|tension ho rahi|nervous)\b/i.test(lower)) emotionScores.anxiety += 4;

  // 4. ANGER
  if (/\b(angry|furious|outraged|infuriated|hate|disgusted|unfair|justice|revenge|punish|cheat|casteist)\b/i.test(lower)) emotionScores.anger += 4;
  if (/गुस्सा|क्रोध|नफरत|अन्याय|सजा|बदला|गाली|अपमान|जातिसूचक/i.test(lower)) emotionScores.anger += 4;
  if (/\b(gussa|krodh|nafrat|badla|gaali|apmaan|jatisuchak|insaaf chahiye)\b/i.test(lower)) emotionScores.anger += 4;

  // 5. SADNESS / GRIEF
  if (/\b(sad|crying|depressed|heartbroken|hopeless|helpless|lost everything|crying|tears|ruined|grief)\b/i.test(lower)) emotionScores.sadness += 4;
  if (/उदास|रो रहा|रो रही|दुखी|दुख|लाचार|टूट गया|बर्बाद|रोने का मन|अकेला/i.test(lower)) emotionScores.sadness += 4;
  if (/\b(udaas|udas|dukhi|dukh|lachar|ro raha|ro rahi|tut gaya|barbaad|akela|rona)\b/i.test(lower)) emotionScores.sadness += 4;

  // 6. STRESS / OVERWHELMED
  if (/\b(stressed|stress|overwhelmed|burden|pressure|exhausted|burnout|can't take this|tired of this)\b/i.test(lower)) emotionScores.stress += 4;
  if (/तनाव|परेशान|बोझ|थक गया|सहन नहीं हो रहा|दबाव|तंग आ गया/i.test(lower)) emotionScores.stress += 4;
  if (/\b(tanaav|pareshan|pareshaan|bojh|thak gaya|tang aa gaya|pressure)\b/i.test(lower)) emotionScores.stress += 4;

  // 7. CONFUSION / UNCERTAINTY
  if (/\b(confused|don't know what to do|lost|what next|where to go|no idea|puzzled|how to start)\b/i.test(lower)) emotionScores.confusion += 4;
  if (/समझ नहीं आ रहा|क्या करूं|कहाँ जाऊं|कुछ पता नहीं|भ्रम|क्या होगा/i.test(lower)) emotionScores.confusion += 4;
  if (/\b(samajh nahi|kya karu|kya karein|kaha jau|kuch pata nahi|kya process hai)\b/i.test(lower)) emotionScores.confusion += 4;

  // 8. RELIEVED / HAPPY / GRATITUDE
  if (/\b(safe now|relieved|feeling better|thank you|thanks|grateful|calmer|peace of mind)\b/i.test(lower)) emotionScores.relieved_happy += 4;
  if (/सुरक्षित हूँ|राहत|धन्यवाद|शुक्रिया|अब ठीक है|शांति|मदद मिली/i.test(lower)) emotionScores.relieved_happy += 4;
  if (/\b(safe hu|rahat|shukriya|dhanyawad|ab theek hai|sukoon|thanks)\b/i.test(lower)) emotionScores.relieved_happy += 4;

  // Find top scoring emotion
  let detectedEmotion = 'neutral';
  let highestScore = 0;

  for (const [emotion, score] of Object.entries(emotionScores)) {
    if (score > highestScore) {
      highestScore = score;
      detectedEmotion = emotion;
    }
  }

  const finalScore = highestScore > 0 ? Math.min(highestScore + intensityBoost, 10) : 0;
  let intensity = 'low';
  if (finalScore >= 7) intensity = 'high';
  else if (finalScore >= 4) intensity = 'moderate';

  return {
    emotion: detectedEmotion,
    intensity: intensity,
    score: finalScore
  };
}

/**
 * 7. Emergency Priority System
 * Level 0: Normal / General conversation
 * Level 1: Concern / procedural stress
 * Level 2: Fear / possible danger / harassment
 * Level 3: High distress / active threats / severe crime
 * Level 4: Immediate emergency / life safety danger
 */
function detectEmergencyLevel(rawText, emotionObj) {
  const t = String(rawText || '').toLowerCase();

  // Level 4: Immediate Life Safety & Attack in Progress
  if (
    emotionObj.emotion === 'panic' ||
    /\b(being attacked|attacking me right now|breaking into|they have weapons|gun|knife|stabbed|bleeding heavily|kill me right now|suicide|commit suicide)\b/i.test(t) ||
    /अभी मार रहे|हमला हो रहा|दरवाज़ा तोड़ रहे|चाकू मारा|खून बह रहा|जान से मार देंगे अभी|आत्महत्या|बचाओ बचाओ/i.test(t) ||
    /\b(abhi maar rahe|hamla ho raha hai|chaku maar diya|suicide|bachao bachao)\b/i.test(t)
  ) {
    return 4;
  }

  // Level 3: High Distress / Death Threats / Severe Assault
  if (
    /\b(death threat|threatened to kill|burn house|raped|gang rape|grievous assault|kidnapped|held hostage|chased)\b/i.test(t) ||
    /जान से मारने की धमकी|घर जला|बलात्कार|गंभीर चोट|अपहरण|बंधक|मारपीट की/i.test(t) ||
    /\b(jaan se marne ki dhamki|ghar jala diya|balatkar|marpeet ki|dhamki di)\b/i.test(t) ||
    (emotionObj.emotion === 'fear' && emotionObj.intensity === 'high')
  ) {
    return 3;
  }

  // Level 2: Possible Danger / Retaliation / Witness Intimidation
  if (
    /\b(threat|stalking|harassing|following me|accused out on bail|unsafe|scared to step out|pressure to withdraw)\b/i.test(t) ||
    /धमकी दे रहा|पीछा कर रहा|जमानत पर बाहर|केस वापस लो|डर लग रहा घर जाने में/i.test(t) ||
    /\b(dhamki de raha|picha kar raha|bail par bahar|case wapas lo|darr lag raha)\b/i.test(t) ||
    emotionObj.emotion === 'fear' || emotionObj.emotion === 'anxiety'
  ) {
    return 2;
  }

  // Level 1: Concern / Procedural Stress / Frustration
  if (
    emotionObj.emotion === 'stress' || emotionObj.emotion === 'sadness' || emotionObj.emotion === 'confusion' ||
    /\b(worried|troubled|police not cooperating|delayed|confused|problem)\b/i.test(t) ||
    /परेशान|चिंता|तनाव|पुलिस सुन नहीं रही|देरी हो रही/i.test(t)
  ) {
    return 1;
  }

  return 0;
}

/**
 * 4. Follow-up / Context Awareness Detector
 */
function detectContextQuestion(text) {
  if (!text) return false;
  const t = text.toLowerCase().trim();

  const patterns = [
    /^(what should i do now|what next|then what|how can i proceed|how to proceed|what about that|tell me more|what after this|how to do this|can you explain)\??$/i,
    /^(ab kya karu|ab kya karein|phir kya|aage kya hoga|iske baad kya|phir kya kare|kya karna hoga|aur batao|explain karo)\??$/i,
    /^(अब क्या करूं|अब क्या करें|फिर क्या|आगे क्या होगा|इसके बाद क्या|और बताएं|विस्तार से बताएं)\??$/i,
    /^(what now|now what|what to do next|next step|kya karu)\??$/i
  ];

  return patterns.some(p => p.test(t)) || (t.length <= 25 && /\b(now|next|then|aage|baad|karein|karu|kya)\b/i.test(t) && chatbotMemory.lastIntent);
}

/**
 * 5 & 6. Better Intent & Multi-Intent Detection System
 */
const INTENT_DEFINITIONS = {
  emergency_danger: {
    name: 'emergency_danger',
    priority: 10,
    keywords: [
      'danger', 'emergency', 'attack', 'attacked', 'threat', 'kill', 'threatened', 'weapon', 'suicide', 'save me', 'help',
      'खतरा', 'आपातकाल', 'हमला', 'धमकी', 'मारना', 'जान', 'हथियार', 'बचाओ', 'मदद',
      'khatra', 'hamla', 'dhamki', 'marne', 'jaan', 'bachao', 'madat', 'emergency'
    ]
  },
  medical_support: {
    name: 'medical_support',
    priority: 9,
    keywords: [
      'medical', 'doctor', 'hospital', 'injured', 'injury', 'bleeding', 'mlc', 'wound', 'hurt', 'pain', 'treatment', 'ambulance',
      'चिकित्सा', 'डॉक्टर', 'अस्पताल', 'घायल', 'चोट', 'खून', 'मेडिकल', 'इलाज', 'एंबुलेंस', 'जांच',
      'doctor', 'hospital', 'ghayal', 'chot', 'khoon', 'ilaaj', 'ambulance', 'treatment', 'mlc'
    ]
  },
  threat_intimidation: {
    name: 'threat_intimidation',
    priority: 8,
    keywords: [
      'threat', 'threaten', 'threatened', 'dhamki', 'witness protection', 'security', 'police protection', 'scared', 'bail', 'withdraw',
      'धमकी', 'गवाह सुरक्षा', 'सुरक्षा', 'पुलिस सुरक्षा', 'केस वापस', 'जमानत',
      'dhamki', 'security', 'protection', 'police security', 'case wapas', 'bail'
    ]
  },
  police_fir: {
    name: 'police_fir',
    priority: 7,
    keywords: [
      'fir', 'police', 'station', 'complaint', 'sho', 'refuse', 'refused', 'refusing', 'zero fir', 'section 4', 'report',
      'एफआईआर', 'पुलिस', 'थाना', 'शिकायत', 'मना', 'ज़ीरो एफआईआर', 'धारा 4', 'रिपोर्ट', 'दरोगा',
      'fir', 'police', 'thana', 'shikayat', 'mana', 'zero fir', 'dhara 4', 'report', 'daroga'
    ]
  },
  legal_aid: {
    name: 'legal_aid',
    priority: 6,
    keywords: [
      'legal', 'lawyer', 'advocate', 'nalsa', 'dlsa', 'court', 'free lawyer', 'attorney', 'legal aid', '15100',
      'कानूनी', 'वकील', 'अधिवक्ता', 'नालसा', 'कोर्ट', 'अदालत', 'मुफ्त वकील', 'कानूनी सहायता',
      'kanooni', 'vakeel', 'vakil', 'advocate', 'nalsa', 'court', 'adalat', 'free vakil', 'legal aid'
    ]
  },
  compensation_relief: {
    name: 'compensation_relief',
    priority: 5,
    keywords: [
      'compensation', 'relief', 'money', 'grant', 'statutory relief', 'fund', 'financial help', 'annexure', 'paisa',
      'मुआवज़ा', 'राहत', 'पैसा', 'राशि', 'वित्तीय सहायता', 'अनुदान', 'मुआवजा',
      'muavza', 'rahat', 'paisa', 'amount', 'financial help', 'compensation'
    ]
  },
  mental_health: {
    name: 'mental_health',
    priority: 5,
    keywords: [
      'mental', 'counselor', 'therapy', 'depressed', 'anxious', 'tele-manas', 'trauma', 'stress', '14416', 'counseling',
      'मानसिक', 'काउंसलर', 'डिप्रेशन', 'तनाव', 'परामर्श', 'टेली-मानस',
      'mansik', 'counselor', 'depression', 'tanaav', 'tele manas'
    ]
  },
  safety_rights: {
    name: 'safety_rights',
    priority: 4,
    keywords: [
      'rights', 'act', 'poa', 'sc/st act', 'rules', 'law', 'sections', 'protection',
      'अधिकार', 'अधिनियम', 'कानून', 'धाराएं', 'सुरक्षा',
      'adhikar', 'act', 'kanoon', 'rules', 'sections'
    ]
  },
  name_intro: {
    name: 'name_intro',
    priority: 3,
    keywords: [
      'my name is', 'i am', 'mera naam', 'मेरा नाम', 'मैं'
    ]
  },
  greeting: {
    name: 'greeting',
    priority: 2,
    keywords: [
      'hello', 'hi', 'namaste', 'hey', 'good morning', 'good evening', 'greetings',
      'नमस्ते', 'नमस्कार', 'प्रणाम', 'हेलो',
      'namaste', 'namaskar', 'pranam', 'hello', 'hi'
    ]
  },
  gratitude: {
    name: 'gratitude',
    priority: 2,
    keywords: [
      'thank you', 'thanks', 'grateful', 'dhanyawad', 'shukriya', 'helpful',
      'धन्यवाद', 'शुक्रिया', 'आभार'
    ]
  },
  goodbye: {
    name: 'goodbye',
    priority: 2,
    keywords: [
      'bye', 'goodbye', 'see you', 'take care', 'alvida',
      'अलविदा', 'बाय'
    ]
  }
};

/**
 * Detects all relevant intents and returns ordered list with primary intent
 */
function detectIntents(rawText) {
  const text = String(rawText || '').toLowerCase().trim();
  const matchedIntents = [];

  for (const [key, def] of Object.entries(INTENT_DEFINITIONS)) {
    let score = 0;
    for (const kw of def.keywords) {
      if (text.includes(kw)) {
        score += (kw.length > 5 ? 3 : 2);
      }
    }

    if (score > 0) {
      matchedIntents.push({
        intent: def.name,
        score: score,
        priority: def.priority,
        weightedScore: score * (def.priority / 5)
      });
    }
  }

  // Sort by weighted priority score descending
  matchedIntents.sort((a, b) => b.weightedScore - a.weightedScore);

  const primaryIntent = matchedIntents.length > 0 ? matchedIntents[0].intent : 'unknown';
  const primaryScore = matchedIntents.length > 0 ? matchedIntents[0].score : 0;
  const isMultiIntent = matchedIntents.filter(m => m.priority >= 5).length > 1;

  return {
    primaryIntent: primaryIntent,
    primaryScore: primaryScore,
    allIntents: matchedIntents,
    isMultiIntent: isMultiIntent
  };
}

/**
 * 3. Central Memory Storage & Turn Manager
 */
function rememberConversation(sender, text, meta = {}) {
  const turn = {
    sender: sender,
    text: text,
    timestamp: Date.now(),
    intent: meta.intent || null,
    emotion: meta.emotion || null,
    emergencyLevel: meta.emergencyLevel || 0
  };

  chatbotMemory.recentMessages.push(turn);
  if (chatbotMemory.recentMessages.length > 20) {
    chatbotMemory.recentMessages.shift();
  }

  if (sender === 'user') {
    if (meta.intent && meta.intent !== 'context_followup') {
      chatbotMemory.lastIntent = meta.intent;
    }
    if (meta.allIntents) {
      chatbotMemory.lastIntents = meta.allIntents.map(i => i.intent);
    }
    if (meta.emotion) {
      chatbotMemory.lastEmotion = meta.emotion;
      chatbotMemory.lastEmotionObj = meta.emotionObj;
    }
    if (typeof meta.emergencyLevel === 'number') {
      chatbotMemory.emergencyLevel = Math.max(chatbotMemory.emergencyLevel, meta.emergencyLevel);
    }

    // Capture context flags
    const lower = text.toLowerCase();
    if (lower.includes('hit') || lower.includes('beat') || lower.includes('blood') || lower.includes('wound') || lower.includes('injured')) {
      chatbotMemory.importantContext.hasPhysicalHarm = true;
    }
    if (lower.includes('threat') || lower.includes('kill') || lower.includes('dhamki')) {
      chatbotMemory.importantContext.hasThreat = true;
    }
    if (lower.includes('refuse') || lower.includes('mana') || lower.includes('not writing fir')) {
      chatbotMemory.importantContext.firDelayed = true;
    }
  }
}

/**
 * 10. Response Variation Engine
 * Prevents identical repeating responses across consecutive turns.
 */
const RESPONSE_VARIATIONS = {
  fear_preface: {
    en: [
      "I hear how frightening this is, and I want you to know you are not alone right now.",
      "I am so sorry you are going through this fear. Take a slow breath—we will take this step by step.",
      "Your safety and peace of mind come first. Please know you have strong legal backing behind you."
    ],
    hi: [
      "मैं समझ सकता हूँ कि यह स्थिति कितनी डरावनी है। आप बिल्कुल अकेले नहीं हैं, हम आपके साथ हैं।",
      "इस डर के माहौल में आपका परेशान होना स्वाभाविक है। एक गहरी सांस लें — हम मिलकर हर कदम उठाएंगे।",
      "आपकी सुरक्षा सबसे पहले है। घबराएं नहीं, कानून पूरी तरह आपके साथ खड़ा है।"
    ]
  },
  panic_preface: {
    en: [
      "Stay as calm as you can and keep yourself in a secure location right now.",
      "I am here with you right now. Let's focus immediately on your instant physical safety.",
      "Please take immediate shelter. Do not confront anyone while we get help to you."
    ],
    hi: [
      "कृपया शांत रहें और तुरंत किसी सुरक्षित या भीड़भाड़ वाली जगह पर जाएं।",
      "मैं आपके साथ हूँ। सबसे पहले आपकी जान और सुरक्षा सुनिश्चित करते हैं।",
      "किसी भी हमलावर का सामना न करें, सीधे सुरक्षित स्थान पर पहुंचे।"
    ]
  },
  stress_preface: {
    en: [
      "I know this is overwhelming and exhausting to deal with. Let's break this down into simple steps.",
      "It is completely natural to feel drained under this pressure. We are going to handle this one part at a time.",
      "I'm here to support you through this distress. You don't have to figure everything out all at once."
    ],
    hi: [
      "यह मानसिक तनाव बहुत भारी हो सकता है। आइए इसे आसान और स्पष्ट चरणों में सुलझाते हैं।",
      "इतने दबाव में परेशान होना स्वाभाविक है। आपको सब कुछ अकेले नहीं संभालना है।",
      "हम इस मुश्किल समय में आपके साथ हैं। एक-एक करके सारी कानूनी और राहत प्रक्रिया पूरी करेंगे।"
    ]
  },
  sadness_preface: {
    en: [
      "I am truly sorry for what you have endured. What happened is unacceptable and not your fault.",
      "My heart goes out to you. Please know that the law has mandatory protections to restore your dignity and security.",
      "I hear your pain, and you don't have to carry this grief alone. Support and justice are available."
    ],
    hi: [
      "आपके साथ जो हुआ उसका मुझे गहरा दुख है। इसमें आपकी कोई गलती नहीं है।",
      "यह बहुत कठिन समय है, लेकिन कानून आपको पूरा न्याय और संरक्षण देने के लिए बाध्य है।",
      "हम आपके दर्द को समझते हैं। आपको अकेले संघर्ष नहीं करना पड़ेगा।"
    ]
  },
  anger_preface: {
    en: [
      "Your anger is completely justified. Such injustice and harassment have strict legal penalties under the SC/ST Act.",
      "It is completely right to feel angry about this violation. Let us channel this into strict, lawful accountability.",
      "I understand your outrage. The perpetrators are accountable under non-bailable statutory provisions."
    ],
    hi: [
      "आपका गुस्सा बिल्कुल जायज है। SC/ST अधिनियम के तहत ऐसे अन्याय और अपराध पर सख्त गैर-जमानती धाराएं लगती हैं।",
      "इस अपमान और दुर्व्यवहार पर आक्रोश होना स्वाभाविक है। कानून दोषियों को कड़ी सजा दिलाएगा।",
      "हम इस अन्याय के खिलाफ आपकी पूरी कानूनी मदद करेंगे ताकि दोषियों को सजा मिले।"
    ]
  },
  confusion_preface: {
    en: [
      "Legal and police procedures can feel confusing. Let me guide you clearly through the exact steps.",
      "Don't worry about knowing all the legal rules—I am here to guide you clearly.",
      "Let's make this simple and clear so you know exactly what to do next."
    ],
    hi: [
      "कानूनी और पुलिस की प्रक्रिया उलझन भरी लग सकती है। मैं आपको एक-एक कदम सरलता से समझाता हूँ।",
      "आपको परेशान होने की ज़रूरत नहीं है — सही रास्ता चुनना बहुत आसान है।",
      "आइए इसे बहुत सरल बनाते हैं ताकि आपको ठीक-ठीक पता हो कि आगे क्या करना है।"
    ]
  },
  greeting: {
    en: [
      "Namaste. I am Sahaay Mitra, your confidential legal and psychological support assistant. How can I stand with you today?",
      "Hello. I'm here to provide safe, confidential guidance under the SC/ST (POA) Act. How can I help you right now?",
      "Welcome. You can speak or type freely with me in English or Hindi. What support do you need today?"
    ],
    hi: [
      "नमस्ते। मैं सहाय मित्र हूँ, आपका गोपनीय कानूनी और मानसिक सहयोग साथी। आज मैं आपकी क्या सहायता कर सकता हूँ?",
      "प्रणाम। SC/ST (अत्याचार निवारण) अधिनियम के तहत सुरक्षित व निष्पक्ष सहायता के लिए मैं उपस्थित हूँ। बताएं क्या मदद चाहिए?",
      "नमस्ते। आप मुझसे बिना किसी झिझक के हिंदी या English में बात कर सकते हैं। आपकी किस प्रकार सहायता करूँ?"
    ]
  },
  gratitude: {
    en: [
      "You are very welcome. I am always here whenever you need legal guidance, emergency numbers, or moral support. Stay safe!",
      "I am glad I could assist you. Remember, you have strong statutory rights and people ready to support you 24×7.",
      "Always at your service. Please reach out anytime you need further steps or support."
    ],
    hi: [
      "आपका बहुत-बहुत स्वागत है। जब भी आपको कानूनी मदद, हेल्पलाइन या सहयोग की ज़रूरत हो, मैं यहीं हूँ। सुरक्षित रहें!",
      "मुझे खुशी है कि मैं आपकी सहायता कर सका। याद रखें, कानून और 24×7 हेल्पलाइन हमेशा आपके साथ हैं।",
      "सदा आपकी सेवा में। आगे भी कोई सवाल या ज़रूरत हो तो बेझिझक पूछें।"
    ]
  },
  goodbye: {
    en: [
      "Take care of yourself. Keep emergency contacts handy (112 for Police, 15100 for Free Legal Aid). We are always here for you.",
      "Goodbye for now. Stay safe, and remember that support is only a message or call away 24×7.",
      "Wishing you safety and peace. Reach out anytime you need assistance."
    ],
    hi: [
      "अपना पूरा ध्यान रखें। आपातकालीन नंबर (112 पुलिस, 15100 मुफ्त वकील) अपने पास रखें। हम हमेशा आपके साथ हैं।",
      "अलविदा। सुरक्षित रहें, जब भी ज़रूरत हो आप तुरंत यहाँ लौट सकते हैं।",
      "ईश्वर आपको शक्ति दे। किसी भी सहायता के लिए कभी भी संपर्क करें।"
    ]
  },
  unknown: {
    en: [
      "I want to ensure I give you the most accurate and supportive guidance. Could you share a few more details about what you are experiencing?",
      "I'm here with you, but I want to make sure I understand your exact situation. Could you tell me a little more about whether this involves police, medical care, threats, or compensation?",
      "To assist you best, could you describe what happened in a few more words? You can also choose one of the options below:"
    ],
    hi: [
      "मैं आपकी सही और सटीक सहायता करना चाहता हूँ। क्या आप थोड़ा और विस्तार से बता सकते हैं कि क्या घटना हुई है?",
      "मैं आपके साथ हूँ, पर स्थिति को ठीक से समझने के लिए क्या आप बताएंगे कि यह पुलिस FIR, डॉक्टर/अस्पताल, धमकी या मुआवज़े से जुड़ा है?",
      "आपकी पूरी मदद के लिए कृपया कुछ और शब्द बताएं। आप नीचे दिए गए विकल्पों में से भी चुन सकते हैं:"
    ]
  }
};

/**
 * Selects random variation while avoiding consecutive repeats
 */
function getRandomResponse(categoryKey, lang = 'en') {
  const poolObj = RESPONSE_VARIATIONS[categoryKey];
  if (!poolObj) return '';

  const list = poolObj[lang] || poolObj['en'] || [];
  if (list.length === 0) return '';
  if (list.length === 1) return list[0];

  const memKey = `${categoryKey}_${lang}`;
  const lastIdx = chatbotMemory.lastUsedResponseIndex[memKey];

  let nextIdx;
  do {
    nextIdx = Math.floor(Math.random() * list.length);
  } while (nextIdx === lastIdx && list.length > 1);

  chatbotMemory.lastUsedResponseIndex[memKey] = nextIdx;
  return list[nextIdx];
}

/**
 * Formats user name gently into a response without over-repeating
 */
function formatSalutation(lang = 'en') {
  if (!chatbotMemory.userName) return '';
  // Only inject user name every 3-4 turns to remain natural and not robotic
  chatbotMemory.namePromptCount = (chatbotMemory.namePromptCount || 0) + 1;
  if (chatbotMemory.namePromptCount % 3 === 1) {
    return lang === 'hi' ? `<strong>${chatbotMemory.userName} जी</strong>, ` : `<strong>${chatbotMemory.userName}</strong>, `;
  }
  return '';
}

/**
 * 4. Context Follow-up Generator
 */
function getContextualFollowupResponse(lang = 'en') {
  const last = chatbotMemory.lastIntent || 'emergency_danger';
  const salutation = formatSalutation(lang);

  if (last === 'threat_intimidation' || last === 'emergency_danger') {
    return {
      text: lang === 'hi'
        ? `<p>${salutation}धमकी या सुरक्षा की स्थिति में अगला महत्वपूर्ण कदम यह है:</p>
           <ul>
             <li><strong>1. धारा 15A गवाह संरक्षण का आवेदन:</strong> स्थानीय थाना प्रभारी (SHO) या ज़िला पुलिस अधीक्षक (SP) को लिखित में दें कि आपको या आपके परिवार को खतरा है।</li>
             <li><strong>2. मुफ्त 24×7 सुरक्षा गार्ड:</strong> कानून के तहत पुलिस आपके घर पर सुरक्षा पिकेट या एस्कॉर्ट तैनात करने के लिए बाध्य है।</li>
             <li><strong>3. ज़मानत रद्द करवाना:</strong> यदि आरोपी ज़मानत पर है और धमकी दे रहा है, तो NALSA वकील के ज़रिये तुरंत स्पेशल कोर्ट में ज़मानत रद्दीकरण की अर्जी लगवाएं।</li>
           </ul>`
        : `<p>${salutation}Based on the threat situation you mentioned earlier, here are the exact immediate next steps:</p>
           <ul>
             <li><strong>1. File Section 15A Witness Protection Petition:</strong> Submit a formal written letter to the local SHO or District SP stating that you or witnesses are facing active threats.</li>
             <li><strong>2. Mandatory 24×7 Armed Guard:</strong> Under the Witness Protection Scheme, the administration must post a police guard or patrol outside your residence.</li>
             <li><strong>3. Immediate Bail Cancellation:</strong> If the accused was released on bail and is intimidating you, your free legal aid advocate can file for cancellation of bail in the Special SC/ST Court.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '112 Police Escort', value: '112' },
        { type: 'call', label: '15100 NALSA Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'घटना विवरण दर्ज करें' : 'Report Incident', value: 'describe' }
      ]
    };
  } else if (last === 'police_fir') {
    return {
      text: lang === 'hi'
        ? `<p>${salutation}FIR दर्ज कराने के बाद आगे की वैधानिक प्रक्रिया यह है:</p>
           <ul>
             <li><strong>1. मुफ्त प्रमाणित प्रति (Free Copy):</strong> FIR की एक मुहर लगी प्रमाणित प्रति तुरंत बिना किसी शुल्क के प्राप्त करें।</li>
             <li><strong>2. 50% वैधानिक मुआवज़ा दावा:</strong> ज़िला मजिस्ट्रेट (DM) कार्यालय को FIR प्रति के साथ स्टेज-1 राहत (₹4,12,500 तक) जारी करने हेतु भेजें।</li>
             <li><strong>3. 60 दिनों में चार्जशीट:</strong> डीएसपी (DSP) स्तर के अधिकारी को 60 दिनों के भीतर जांच पूरी कर स्पेशल कोर्ट में चार्जशीट दाखिल करनी होगी।</li>
           </ul>`
        : `<p>${salutation}Following up on your FIR query, here are the sequential steps after filing:</p>
           <ul>
             <li><strong>1. Collect Free Certified FIR Copy:</strong> The police must hand over a stamped, signed copy immediately at zero cost.</li>
             <li><strong>2. Claim 50% Statutory Relief:</strong> Forward the FIR copy to the District Magistrate / Social Welfare Officer for immediate Stage 1 compensation disbursement.</li>
             <li><strong>3. 60-Day Mandatory Chargesheet:</strong> An officer of DSP rank must conclude the investigation and submit the chargesheet within 60 days.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '15100 Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'शिकायत पत्र बनाएं' : 'Draft FIR Complaint', value: 'describe' },
        { type: 'view', label: lang === 'hi' ? 'मुआवज़ा तालिका' : 'Compensation Table', value: 'rights' }
      ]
    };
  } else if (last === 'compensation_relief') {
    return {
      text: lang === 'hi'
        ? `<p>${salutation}मुआवज़े की राशि प्राप्त करने की चरणबद्ध प्रक्रिया:</p>
           <ul>
             <li><strong>स्टेज 1 (FIR पर 25%-50%):</strong> ज़िला कल्याण अधिकारी को FIR व बैंक पासबुक की प्रति दें। किसी कोर्ट ट्रायल का इंतज़ार नहीं करना है।</li>
             <li><strong>स्टेज 2 (चार्जशीट पर 25%-50%):</strong> पुलिस द्वारा 60 दिनों में कोर्ट में आरोप पत्र दाखिल होते ही दूसरी किश्त मिलती है।</li>
             <li><strong>स्टेज 3 (अंतिम निर्णय पर शेष राशि):</strong> स्पेशल कोर्ट द्वारा फैसला सुनाए जाने पर पूरी बकाया राशि मिलती है।</li>
           </ul>`
        : `<p>${salutation}Here is the 3-stage breakdown to receive your statutory compensation:</p>
           <ul>
             <li><strong>Stage 1 (25% to 50% on FIR):</strong> Submit FIR copy & bank passbook to the District Social Welfare Officer. Disbursal does not wait for court trial.</li>
             <li><strong>Stage 2 (25% to 50% on Chargesheet):</strong> Released automatically when police file the chargesheet within 60 days.</li>
             <li><strong>Stage 3 (Final Balance on Special Court Order):</strong> Remaining balance disbursed at the conclusion of trial.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '15100 Free Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'मुआवज़ा तालिका देखें' : 'View Compensation Rules', value: 'rights' }
      ]
    };
  } else if (last === 'medical_support') {
    return {
      text: lang === 'hi'
        ? `<p>${salutation}चिकित्सीय सहायता के बाद आगे के कदम:</p>
           <ul>
             <li><strong>1. मेडिको-लीगल केस (MLC) रिपोर्ट:</strong> डॉक्टर से चोट का विवरण व एमएलसी रिपोर्ट की प्रति अवश्य लें। यह कोर्ट में मुख्य साक्ष्य है।</li>
             <li><strong>2. मुफ्त दवाएं व रेफरल:</strong> धारा 357C CrPC के तहत सभी सरकारी व निजी अस्पताल मुफ्त प्राथमिक उपचार देने के लिए बाध्य हैं।</li>
             <li><strong>3. मनोवैज्ञानिक परामर्श:</strong> Tele-MANAS (14416) पर कॉल करके तनाव मुक्ति हेतु मुफ्त परामर्श लें।</li>
           </ul>`
        : `<p>${salutation}After medical examination, here are the critical follow-up actions:</p>
           <ul>
             <li><strong>1. Secure MLC Report Copy:</strong> Ensure the examining government doctor completes the Medico-Legal Certificate (MLC). This is key evidence in court.</li>
             <li><strong>2. 100% Free Treatment:</strong> Under Section 357C CrPC, all hospitals (government and private) must render immediate free treatment.</li>
             <li><strong>3. Trauma Support:</strong> Call Tele-MANAS (14416) anytime for confidential multilingual psychological care.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '14416 Tele-MANAS', value: '14416' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' }
      ]
    };
  }

  // Generic follow-up
  return {
    text: lang === 'hi'
      ? `<p>${salutation}आगे बढ़ने के लिए आप निम्नलिखित में से जो भी उचित लगे चुन सकते हैं:</p>
         <ul>
           <li>1. <strong>15100 (नालसा)</strong> पर मुफ्त सरकारी वकील से बात करें।</li>
           <li>2. <a href="#describe" data-view="describe">घटना विवरण टूल</a> में अपनी शिकायत लिखकर औपचारिक FIR ड्राफ्ट बनाएं।</li>
           <li>3. आपातकालीन स्थिति में तुरंत <strong>112</strong> डायल करें।</li>
         </ul>`
      : `<p>${salutation}To proceed forward right now, here are your best direct options:</p>
         <ul>
           <li>1. Speak with a free government advocate via <strong>15100 (NALSA)</strong>.</li>
           <li>2. Use our <a href="#describe" data-view="describe">Describe Incident tool</a> to generate an official FIR complaint letter.</li>
           <li>3. For any immediate physical danger, dial <strong>112</strong> directly.</li>
         </ul>`,
    buttons: [
      { type: 'call', label: '15100 Free Legal Aid', value: '15100' },
      { type: 'view', label: lang === 'hi' ? 'घटना दर्ज करें' : 'Report Incident', value: 'describe' }
    ]
  };
}

/**
 * 6. Multi-Intent Response Synthesizer
 */
function buildMultiIntentResponse(intentsList, emotionObj, lang = 'en') {
  const intentNames = new Set(intentsList.map(i => i.intent));
  const salutation = formatSalutation(lang);
  const preface = emotionObj.emotion !== 'neutral' ? getRandomResponse(`${emotionObj.emotion}_preface`, lang) : '';

  let sections = [];
  let buttons = [];

  // 1. Immediate Safety / Threat
  if (intentNames.has('emergency_danger') || intentNames.has('threat_intimidation')) {
    if (lang === 'hi') {
      sections.push(`<li><strong>🚨 तत्काल सुरक्षा व गवाह संरक्षण:</strong> यदि आपको कोई खतरा या हमला है, तुरंत <strong>112</strong> पर कॉल करें। धारा 15A के तहत पुलिस सुरक्षा मांगें।</li>`);
    } else {
      sections.push(`<li><strong>🚨 Immediate Safety &amp; Protection:</strong> If you are in danger or facing threats, dial <strong>112</strong> immediately and demand Section 15A Police Protection.</li>`);
    }
    buttons.push({ type: 'call', label: '112 Emergency', value: '112' });
  }

  // 2. Medical
  if (intentNames.has('medical_support')) {
    if (lang === 'hi') {
      sections.push(`<li><strong>🏥 मुफ्त मेडिकल व एमएलसी (MLC):</strong> नज़दीकी ज़िला अस्पताल जाएं। धारा 357C CrPC के तहत सभी उपचार और एमएलसी रिपोर्ट बिल्कुल मुफ्त है।</li>`);
    } else {
      sections.push(`<li><strong>🏥 Free Medical Examination (MLC):</strong> Visit the nearest government hospital. Under Section 357C CrPC, emergency medical care and Medico-Legal Reports are 100% free.</li>`);
    }
    buttons.push({ type: 'call', label: '108 Ambulance', value: '108' });
  }

  // 3. Police / FIR
  if (intentNames.has('police_fir')) {
    if (lang === 'hi') {
      sections.push(`<li><strong>⚖️ अनिवार्य FIR (धारा 4):</strong> पुलिस आपकी शिकायत दर्ज करने से मना नहीं कर सकती। देरी करने वाले अधिकारी पर दंडात्मक कार्रवाई होती है।</li>`);
    } else {
      sections.push(`<li><strong>⚖️ Mandatory FIR Registration (Section 4):</strong> Police cannot refuse or delay your atrocity complaint. Any delay by an officer is a punishable criminal offense.</li>`);
    }
    buttons.push({ type: 'view', label: lang === 'hi' ? 'शिकायत पत्र बनाएं' : 'Draft FIR Complaint', value: 'describe' });
  }

  // 4. Legal Aid
  if (intentNames.has('legal_aid')) {
    if (lang === 'hi') {
      sections.push(`<li><strong>👨‍⚖️ मुफ्त सरकारी वकील (15100):</strong> NALSA आपको मुफ्त वकील प्रदान करेगा जो आपके साथ थाने व कोर्ट जाएगा।</li>`);
    } else {
      sections.push(`<li><strong>👨‍⚖️ Free Government Advocate (15100):</strong> NALSA assigns a free state legal aid advocate to accompany you to the station and court.</li>`);
    }
    buttons.push({ type: 'call', label: '15100 NALSA Legal Aid', value: '15100' });
  }

  // 5. Compensation
  if (intentNames.has('compensation_relief')) {
    if (lang === 'hi') {
      sections.push(`<li><strong>💰 वैधानिक आर्थिक राहत:</strong> अपराध की श्रेणी के अनुसार ₹85,000 से ₹8,25,000 तक का मुआवज़ा तय है (FIR पर 25%-50% तत्काल)।</li>`);
    } else {
      sections.push(`<li><strong>💰 Statutory Relief Grant:</strong> Entitlements range from ₹85,000 to ₹8,25,000 with first 25% to 50% released immediately upon FIR.</li>`);
    }
    buttons.push({ type: 'view', label: lang === 'hi' ? 'मुआवज़ा नियम देखें' : 'Compensation Table', value: 'rights' });
  }

  // Deduplicate buttons by value
  const seenVals = new Set();
  const dedupedButtons = buttons.filter(b => {
    if (seenVals.has(b.value)) return false;
    seenVals.add(b.value);
    return true;
  });

  const headerText = lang === 'hi'
    ? `<h4>${preface ? preface + '<br>' : ''}${salutation}आपके मामले में कई महत्वपूर्ण कानूनी पहलू शामिल हैं:</h4>`
    : `<h4>${preface ? preface + '<br>' : ''}${salutation}I have organized your urgent needs across all legal areas:</h4>`;

  const bodyHtml = `${headerText}<ul>${sections.join('')}</ul><p style="margin-top:8px;font-size:0.9rem;">${lang === 'hi' ? 'आइए सबसे पहले आपकी प्राथमिकता से शुरुआत करें। आप नीचे दिए गए बटन पर सीधे टैप कर सकते हैं:' : 'Let us prioritize your immediate need first. Tap any direct action below:'}</p>`;

  return {
    text: bodyHtml,
    buttons: dedupedButtons
  };
}

/**
 * 16. Complete Master Pipeline: generateAgentResponse(userQuery)
 * 1. Normalize Text
 * 2. Language Detection / Setting
 * 3. Extract & Remember User Name
 * 4. Emotion Detection
 * 5. Emergency Priority Assessment
 * 6. Intent & Multi-Intent Recognition
 * 7. Memory & Context Updates
 * 8. Context Follow-Up Handling
 * 9. Natural Response Synthesis with Variations
 */
function generateAgentResponse(userQuery) {
  const cleanText = normalizeChatText(userQuery);
  if (!cleanText) {
    return {
      text: agentLang === 'hi' ? '<p>कृपया अपना प्रश्न या समस्या लिखें।</p>' : '<p>Please type or speak your query.</p>',
      buttons: []
    };
  }

  const lang = agentLang === 'hi' ? 'hi' : 'en';

  // 1. Name Extraction
  const extractedName = extractUserName(cleanText);
  let justIntroducedName = false;
  if (extractedName && extractedName !== chatbotMemory.userName) {
    chatbotMemory.userName = extractedName;
    justIntroducedName = true;
  }

  // 2. Emotion Detection
  const emotionObj = detectEmotion(cleanText);

  // 3. Emergency Priority Level (0 to 4)
  const emergencyLevel = detectEmergencyLevel(cleanText, emotionObj);

  // 4. Intent Detection
  const intentResult = detectIntents(cleanText);

  // 5. Follow-up Context Check
  const isContextFollowup = detectContextQuestion(cleanText);

  // 6. Update Central Memory
  rememberConversation('user', cleanText, {
    intent: isContextFollowup ? 'context_followup' : intentResult.primaryIntent,
    allIntents: intentResult.allIntents,
    emotion: emotionObj.emotion,
    emotionObj: emotionObj,
    emergencyLevel: emergencyLevel
  });

  const salutation = formatSalutation(lang);
  const emotionPreface = (emotionObj.emotion !== 'neutral' && emotionObj.score >= 3)
    ? getRandomResponse(`${emotionObj.emotion}_preface`, lang)
    : '';

  // ---------------------------------------------------------------------------
  // BRANCH A: User explicitly introduced their name
  // ---------------------------------------------------------------------------
  if (justIntroducedName && intentResult.allIntents.length <= 1) {
    const welcome = lang === 'hi'
      ? `<h4>नमस्ते ${chatbotMemory.userName} जी 🙏</h4>
         <p>आपसे मिलकर अच्छा लगा। मैं आपका सुरक्षित और गोपनीय कानूनी साथी हूँ।</p>
         <p>कृपया बताएं, आज मैं आपकी क्या सहायता कर सकता हूँ? आप पुलिस FIR, अस्पताल जांच, सुरक्षा या मुआवज़े से जुड़ा कोई भी सवाल पूछ सकते हैं।</p>`
      : `<h4>Namaste &amp; Welcome, ${chatbotMemory.userName} 🙏</h4>
         <p>I am glad to connect with you. I am your confidential survivor advocate under the SC/ST (POA) Act.</p>
         <p>How can I help you today? You can share what happened or ask about FIR registration, police protection, medical aid, or statutory compensation.</p>`;
    
    return {
      text: welcome,
      buttons: [
        { type: 'view', label: lang === 'hi' ? 'घटना दर्ज करें' : 'Report Incident', value: 'describe' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' },
        { type: 'call', label: '112 Emergency', value: '112' }
      ]
    };
  }

  // ---------------------------------------------------------------------------
  // BRANCH B: Level 4 Immediate Emergency / Life Danger
  // ---------------------------------------------------------------------------
  if (emergencyLevel === 4) {
    const panicIntro = getRandomResponse('panic_preface', lang);
    return {
      text: lang === 'hi'
        ? `<h4>🚨 तत्काल आपातकालीन सुरक्षा अलर्ट: अभी सहायता लें</h4>
           <p>${panicIntro}</p>
           <p><strong>${salutation}आपकी जान और शारीरिक सुरक्षा सर्वोच्च प्राथमिकता है:</strong></p>
           <ul>
             <li><strong>तुरंत 112 डायल करें:</strong> पुलिस और एम्बुलेंस आपातकालीन रिस्पॉन्स टीम को अपनी लोकेशन बताएं।</li>
             <li><strong>सुरक्षित स्थान पर शरण लें:</strong> किसी नज़दीकी भीड़भाड़ वाली जगह, सरकारी अस्पताल, या भरोसेमंद पड़ोसी के घर जाएं।</li>
             <li><strong>महिलाओं और बच्चों के लिए:</strong> <strong>181 (महिला हेल्पलाइन)</strong> या <strong>1098 (चाइल्डलाइन)</strong> पर तुरंत बचाव टीम उपलब्ध है।</li>
           </ul>`
        : `<h4>🚨 Critical Safety Emergency: Take Action Now</h4>
           <p>${panicIntro}</p>
           <p><strong>${salutation}Your physical safety and life are the absolute priority:</strong></p>
           <ul>
             <li><strong>Dial 112 Immediately:</strong> Connect directly to Police Emergency Dispatch and state your live location.</li>
             <li><strong>Move to Immediate Shelter:</strong> Seek refuge in a populated area, nearest hospital / PHC, or government building.</li>
             <li><strong>For Women &amp; Children:</strong> Call <strong>181 (Women Helpline)</strong> or <strong>1098 (Childline)</strong> for rapid rescue deployment.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '112 Police Emergency', value: '112' },
        { type: 'call', label: '181 Women Helpline', value: '181' },
        { type: 'call', label: '108 Ambulance', value: '108' },
        { type: 'view', label: lang === 'hi' ? 'हेल्पलाइन देखें' : 'Emergency Helplines', value: 'helplines' }
      ]
    };
  }

  // ---------------------------------------------------------------------------
  // BRANCH C: Multi-Intent Detection (e.g. attacked + medical + FIR)
  // ---------------------------------------------------------------------------
  if (intentResult.isMultiIntent) {
    return buildMultiIntentResponse(intentResult.allIntents, emotionObj, lang);
  }

  // ---------------------------------------------------------------------------
  // BRANCH D: Follow-up Context Question ("What should I do now?", "फिर क्या?")
  // ---------------------------------------------------------------------------
  if (isContextFollowup) {
    return getContextualFollowupResponse(lang);
  }

  // ---------------------------------------------------------------------------
  // BRANCH E: Single Intent Handling with Emotion & Tone Modulation
  // ---------------------------------------------------------------------------
  const primary = intentResult.primaryIntent;

  // E1. THREAT / WITNESS INTIMIDATION / DANGER (Level 2 or 3)
  if (primary === 'emergency_danger' || primary === 'threat_intimidation') {
    return {
      text: lang === 'hi'
        ? `<h4>🛡️ गवाह सुरक्षा और कानूनी संरक्षण (धारा 15A)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}SC/ST (अत्याचार निवारण) अधिनियम के तहत गवाहों और पीड़ितों को धमकी देना एक गंभीर संज्ञेय अपराध है:</p>
           <ul>
             <li><strong>24×7 पुलिस सुरक्षा:</strong> धारा 15A के तहत आप अपने घर पर 24 घंटे पुलिस सुरक्षा/पिकेट पाने के पूर्ण हकदार हैं।</li>
             <li><strong>ज़मानत रद्दीकरण:</strong> यदि आरोपी आपको धमका रहा है, तो स्पेशल कोर्ट तुरंत उसकी ज़मानत रद्द कर जेल भेज सकती है।</li>
             <li><strong>मुफ्त वकील (15100):</strong> NALSA का सरकारी वकील आपकी सुरक्षा के लिए स्पेशल कोर्ट में याचिका दायर करेगा।</li>
           </ul>`
        : `<h4>🛡️ Witness Protection &amp; Anti-Intimidation (Section 15A)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Under the SC/ST (POA) Act, intimidating or threatening survivors and witnesses is a severe cognizable offense:</p>
           <ul>
             <li><strong>Section 15A Armed Protection:</strong> You are statutorily entitled to 24×7 armed police escort and residential pickets.</li>
             <li><strong>Immediate Bail Cancellation:</strong> If the perpetrator is out on bail and issuing threats, the Special Court can immediately cancel bail and remand them to custody.</li>
             <li><strong>Free Legal Counsel (15100):</strong> A NALSA advocate will file emergency protection petitions on your behalf.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '112 Police Escort', value: '112' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'शिकायत पत्र बनाएं' : 'Draft Protection Letter', value: 'describe' }
      ]
    };
  }

  // E2. POLICE / FIR REGISTRATION / SECTION 4
  if (primary === 'police_fir') {
    return {
      text: lang === 'hi'
        ? `<h4>⚖️ FIR दर्ज करना अनिवार्य है (धारा 4 अधिदेश)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}SC/ST अधिनियम के तहत पुलिस के लिए FIR दर्ज करना कानूनी रूप से अनिवार्य है:</p>
           <ul>
             <li><strong>धारा 4 (ड्यूटी में लापरवाही):</strong> जो पुलिस अधिकारी अत्याचार की FIR दर्ज करने में देरी या आनाकानी करता है, उसे 6 माह से 1 वर्ष तक की जेल की सजा हो सकती है।</li>
             <li><strong>ज़ीरो FIR (Zero FIR):</strong> घटना किसी भी क्षेत्र में हुई हो, कोई भी नज़दीकी थाना तुरंत ज़ीरो FIR दर्ज करने के लिए बाध्य है।</li>
             <li><strong>मुफ्त कानूनी सहायता (15100):</strong> NALSA आपको एक मुफ्त सरकारी वकील प्रदान करता है जो आपके साथ थाने जाकर FIR दर्ज करवाएगा।</li>
           </ul>`
        : `<h4>⚖️ Mandatory Registration of FIR (Section 4 Mandate)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Under the SC/ST (Prevention of Atrocities) Act, FIR registration is strictly mandatory:</p>
           <ul>
             <li><strong>Section 4 Penalty:</strong> Any public servant or police officer who neglects duties or delays registering an atrocity FIR faces mandatory imprisonment (6 to 12 months).</li>
             <li><strong>Zero FIR Protocol:</strong> Regardless of jurisdiction, any police station must register a Zero FIR immediately and transfer it later.</li>
             <li><strong>Free Legal Escort (15100):</strong> NALSA assigns a free legal aid advocate to accompany you directly to the police station.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '15100 Free Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'FIR ड्राफ्ट बनाएं' : 'Draft My Complaint Letter', value: 'describe' }
      ]
    };
  }

  // E3. MEDICAL EXAMINATION / INJURY / MLC
  if (primary === 'medical_support') {
    return {
      text: lang === 'hi'
        ? `<h4>🏥 मुफ्त चिकित्सा जांच और मेडिको-लीगल रिपोर्ट (MLC)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}SC/ST अधिनियम व आपराधिक कानून के तहत आपकी स्वास्थ्य सुरक्षा के अधिकार:</p>
           <ul>
             <li><strong>निःशुल्क मेडिको-लीगल जांच (MLC):</strong> ज़िला अस्पताल में आपकी चोटों व घावों की जांच 100% मुफ्त होगी (धारा 357C CrPC)।</li>
             <li><strong>साक्ष्य संरक्षण:</strong> घटना के तुरंत बाद डॉक्टर से एमएलसी बनवाएं ताकि कोर्ट में पक्का कानूनी साक्ष्य रहे।</li>
             <li><strong>मानसिक स्वास्थ्य हेल्पलाइन:</strong> Tele-MANAS (14416) पर मुफ्त 24×7 तनाव व ट्रॉमा काउंसलिंग उपलब्ध है।</li>
           </ul>`
        : `<h4>🏥 Free Medico-Legal Examination &amp; Hospital Care</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Your medical and forensic examination rights under the SC/ST Act and CrPC:</p>
           <ul>
             <li><strong>Free Medico-Legal Certificate (MLC):</strong> Free medical examination and forensic documentation at all government hospitals under Section 357C CrPC.</li>
             <li><strong>Preserve Forensic Evidence:</strong> Getting an MLC report completed promptly establishes airtight medical evidence in Special Court.</li>
             <li><strong>24×7 Psychological First Aid:</strong> Tele-MANAS (14416) provides free confidential multilingual trauma care.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '108 Ambulance', value: '108' },
        { type: 'call', label: '14416 Tele-MANAS', value: '14416' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' }
      ]
    };
  }

  // E4. STATUTORY COMPENSATION / FINANCIAL RELIEF
  if (primary === 'compensation_relief') {
    return {
      text: lang === 'hi'
        ? `<h4>💰 वैधानिक आर्थिक मुआवज़ा (2016 संशोधित नियम)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}SC/ST (अत्याचार निवारण) संशोधन नियम 2016 के तहत सरकार द्वारा तय राहत राशि:</p>
           <ul>
             <li><strong>राहत पैमाना:</strong> अपराध के अनुसार <strong>₹85,000 से ₹8,25,000</strong> तक की कुल राशि।</li>
             <li><strong>FIR पर तत्काल 25% से 50%:</strong> FIR दर्ज होते ही ज़िला प्रशासन को पहली किश्त जारी करनी होती है — कोर्ट फैसले का इंतज़ार नहीं करना पड़ता।</li>
             <li><strong>गंभीर हमला / बलात्कार:</strong> ₹5,00,000 से ₹8,25,000 तक की पूर्ण वैधानिक राहत।</li>
             <li><strong>घर जलाना / आगज़नी:</strong> पूर्ण मकान पुनर्निर्माण लागत + ₹1,00,000 तक की अंतरिम राहत।</li>
           </ul>`
        : `<h4>💰 Statutory Financial Compensation (2016 Rules)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Under the SC/ST (POA) Amendment Rules 2016, mandatory victim relief scales include:</p>
           <ul>
             <li><strong>Statutory Relief Scale:</strong> Ranges from <strong>₹85,000 to ₹8,25,000</strong> based on offense severity.</li>
             <li><strong>Immediate 25% to 50% on FIR:</strong> First installment is disbursed by the District Magistrate immediately upon FIR—without waiting for trial completion.</li>
             <li><strong>Grievous Assault / Sexual Violence:</strong> ₹5,00,000 to ₹8,25,000 full statutory entitlement.</li>
             <li><strong>Arson / Property Destruction:</strong> Full reconstruction cost plus immediate interim relief.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '15100 Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'मुआवज़ा तालिका देखें' : 'View Compensation Table', value: 'rights' }
      ]
    };
  }

  // E5. FREE LEGAL AID / NALSA
  if (primary === 'legal_aid') {
    return {
      text: lang === 'hi'
        ? `<h4>👨‍⚖️ निःशुल्क सरकारी वकील व कानूनी सहायता (NALSA 15100)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) और ज़िला विधिक सेवा प्राधिकरण (DLSA):</p>
           <ul>
             <li><strong>100% मुफ्त सरकारी वकील:</strong> SC/ST समुदाय के सभी पीड़ित व गवाह मुफ्त अनुभवी अधिवक्ता पाने के हकदार हैं।</li>
             <li><strong>थाने और कोर्ट में साथ:</strong> सरकारी वकील आपके साथ थाने जाकर FIR दर्ज करवाएगा और स्पेशल कोर्ट में पैरवी करेगा।</li>
             <li><strong>हेल्पलाइन 15100:</strong> 24 घंटे टोल-फ्री कानूनी सहायता लाइन पर कॉल करें।</li>
           </ul>`
        : `<h4>👨‍⚖️ Free State Legal Aid &amp; Defense Counsel (NALSA 15100)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Under the Legal Services Authorities Act and SC/ST Act provisions:</p>
           <ul>
             <li><strong>100% Free Senior Advocate:</strong> All SC/ST survivors and witnesses are statutorily entitled to free government-appointed legal representation.</li>
             <li><strong>Full Police &amp; Court Accompaniment:</strong> Your assigned advocate accompanies you to the police station for FIR registration and represents you in Special Court.</li>
             <li><strong>Toll-Free 15100:</strong> Direct 24×7 hotline for instant legal aid assignment.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '15100 NALSA Legal Aid', value: '15100' },
        { type: 'view', label: lang === 'hi' ? 'कानूनी अधिकार देखें' : 'View Statutory Rights', value: 'rights' }
      ]
    };
  }

  // E6. MENTAL HEALTH & COUNSELING
  if (primary === 'mental_health') {
    return {
      text: lang === 'hi'
        ? `<h4>🧠 मानसिक स्वास्थ्य व ट्रॉमा परामर्श (Tele-MANAS 14416)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}अत्याचार या हिंसा के बाद मानसिक तनाव, डर और अवसाद से उबरने के लिए सहायता:</p>
           <ul>
             <li><strong>Tele-MANAS (14416):</strong> स्वास्थ्य मंत्रालय की 24×7 निःशुल्क मानसिक स्वास्थ्य हेल्पलाइन।</li>
             <li><strong>KIRAN (1800-599-0019):</strong> सामाजिक न्याय एवं अधिकारिता मंत्रालय की मानसिक स्वास्थ्य हेल्पलाइन।</li>
             <li><strong>गोपनीय व बहुभाषी:</strong> सभी परामर्श पूरी तरह से गोपनीय हैं।</li>
           </ul>`
        : `<h4>🧠 Mental Health &amp; Psychological First Aid (Tele-MANAS 14416)</h4>
           ${emotionPreface ? `<p>${emotionPreface}</p>` : ''}
           <p>${salutation}Comprehensive psychological care for survivors facing trauma and distress:</p>
           <ul>
             <li><strong>Tele-MANAS (14416):</strong> Ministry of Health 24×7 toll-free mental health support in all Indian languages.</li>
             <li><strong>KIRAN Helpline (1800-599-0019):</strong> Ministry of Social Justice specialized psychological counselling.</li>
             <li><strong>100% Confidential:</strong> Free, secure, and professional trauma assistance.</li>
           </ul>`,
      buttons: [
        { type: 'call', label: '14416 Tele-MANAS', value: '14416' },
        { type: 'call', label: '1800-599-0019 KIRAN', value: '18005990019' },
        { type: 'view', label: lang === 'hi' ? 'वेल-बीइंग ट्रैकर' : 'Victim Well-Being', value: 'wellbeing' }
      ]
    };
  }

  // E7. GREETING
  if (primary === 'greeting') {
    const greetingText = getRandomResponse('greeting', lang);
    return {
      text: `<p>${greetingText}</p>`,
      buttons: [
        { type: 'view', label: lang === 'hi' ? 'घटना दर्ज करें' : 'Report Incident', value: 'describe' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' },
        { type: 'call', label: '112 Police Emergency', value: '112' }
      ]
    };
  }

  // E8. GRATITUDE
  if (primary === 'gratitude') {
    const gratText = getRandomResponse('gratitude', lang);
    return {
      text: `<p>${gratText}</p>`,
      buttons: [
        { type: 'view', label: lang === 'hi' ? 'अधिकार व नियम' : 'View Rights', value: 'rights' },
        { type: 'view', label: lang === 'hi' ? 'हेल्पलाइन सूची' : 'Helplines', value: 'helplines' }
      ]
    };
  }

  // E9. GOODBYE
  if (primary === 'goodbye') {
    const byeText = getRandomResponse('goodbye', lang);
    return {
      text: `<p>${byeText}</p>`,
      buttons: [
        { type: 'call', label: '112 Emergency', value: '112' },
        { type: 'call', label: '15100 Legal Aid', value: '15100' }
      ]
    };
  }

  // ---------------------------------------------------------------------------
  // BRANCH F: Unknown Query / Empathetic Fallback Handling
  // ---------------------------------------------------------------------------
  const unknownText = getRandomResponse('unknown', lang);
  return {
    text: lang === 'hi'
      ? `<h4>सहाय मित्र आपकी सेवा में 🙏</h4>
         <p>${emotionPreface ? emotionPreface + '<br>' : ''}${salutation}${unknownText}</p>
         <ul>
           <li><strong>🚨 आपातकालीन सुरक्षा:</strong> जान या माल का खतरा होने पर <strong>112</strong> पर तुरंत कॉल करें।</li>
           <li><strong>⚖️ मुफ्त सरकारी वकील:</strong> <strong>15100</strong> पर कॉल करें — वकील आपके साथ थाने जाएगा।</li>
           <li><strong>📝 घटना दर्ज करें:</strong> <a href="#describe" data-view="describe">घटना विवरण टूल</a> में अपनी बात लिखकर औपचारिक शिकायत बनाएं।</li>
           <li><strong>💰 मुआवज़ा नियम:</strong> ₹85,000 से ₹8,25,000 तक की वैधानिक राहत की जानकारी पाएं।</li>
         </ul>`
      : `<h4>Sahaay Mitra at Your Service 🙏</h4>
         <p>${emotionPreface ? emotionPreface + '<br>' : ''}${salutation}${unknownText}</p>
         <ul>
           <li><strong>🚨 Immediate Safety:</strong> Call <strong>112</strong> right away if you are experiencing active danger or threats.</li>
           <li><strong>⚖️ Free Legal Aid:</strong> Call <strong>15100 (NALSA)</strong> for a free advocate to accompany you to the station and court.</li>
           <li><strong>📝 Report &amp; Draft FIR:</strong> Use our <a href="#describe" data-view="describe">Describe Incident tool</a> to save your statement and draft an FIR complaint.</li>
           <li><strong>💰 Statutory Relief:</strong> Explore guaranteed compensation ranges from ₹85,000 to ₹8,25,000 under the 2016 rules.</li>
         </ul>`,
    buttons: [
      { type: 'view', label: lang === 'hi' ? 'घटना दर्ज करें' : 'Report Incident', value: 'describe' },
      { type: 'call', label: '15100 Legal Aid', value: '15100' },
      { type: 'call', label: '112 Emergency', value: '112' },
      { type: 'view', label: lang === 'hi' ? 'मुआवज़ा नियम' : 'Compensation Rules', value: 'rights' }
    ]
  };
}

function handleChatSubmit(e) {
  if (e) e.preventDefault();
  const text = chatInput ? chatInput.value.trim() : '';
  if (!text) return;
  addChatMessage(text, 'user');
  chatInput.value = '';
  if (typingIndicator) typingIndicator.style.display = 'flex';

  setTimeout(() => {
    if (typingIndicator) typingIndicator.style.display = 'none';
    const reply = generateAgentResponse(text);
    addChatMessage(reply.text, 'bot', reply.buttons || []);
  }, 500);
}

if (chatForm) chatForm.addEventListener('submit', handleChatSubmit);

const chatSuggestions = document.getElementById('chatSuggestions');
if (chatSuggestions) {
  chatSuggestions.addEventListener('click', (e) => {
    const chip = e.target.closest('.chat-suggestion-chip');
    if (!chip) return;
    const msg = chip.dataset.msg;
    if (msg) {
      if (chatInput) chatInput.value = msg;
      handleChatSubmit();
    }
  });
}

if (clearChatBtn) {
  clearChatBtn.addEventListener('click', () => {
    if (!chatMessages) return;
    const isHi = agentLang === 'hi';

    // Reset central memory
    chatbotMemory.userName = null;
    chatbotMemory.namePromptCount = 0;
    chatbotMemory.lastIntent = null;
    chatbotMemory.lastIntents = [];
    chatbotMemory.lastEmotion = 'neutral';
    chatbotMemory.lastEmotionObj = { emotion: 'neutral', intensity: 'low', score: 0 };
    chatbotMemory.emergencyLevel = 0;
    chatbotMemory.recentMessages = [];
    chatbotMemory.importantContext = {
      incidentType: null,
      hasPhysicalHarm: false,
      hasThreat: false,
      hasMedicalNeed: false,
      firDelayed: false,
      locationMentioned: null
    };
    chatbotMemory.lastUsedResponseIndex = {};

    chatMessages.innerHTML = `
      <div class="chat-bubble bot">
        <h4>${isHi ? 'चैट रीसेट' : 'Chat Reset'}</h4>
        <p>${isHi ? 'बातचीत का इतिहास और मेमोरी साफ़ कर दी गई है। नया सत्र शुरू हुआ।' : 'Conversation memory and history have been cleared. New session started.'}</p>
        <span class="bubble-timestamp">Just now</span>
      </div>
      <div class="typing-indicator" id="typingIndicator">
        <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>
      </div>
    `;
    showToast(isHi ? 'चैट इतिहास साफ़।' : 'Chat history cleared.');
  });
}

// Speech recognition for chat input (respects agentLang for Hindi/English voice input)
if (SpeechRecognition && micBtn) {
  const chatRec = new SpeechRecognition();
  chatRec.continuous = false;
  chatRec.onstart = () => micBtn.classList.add('listening');
  chatRec.onresult = (e) => {
    if (chatInput) {
      chatInput.value = e.results[0][0].transcript;
      chatInput.focus();
    }
  };
  chatRec.onend = () => micBtn.classList.remove('listening');
  micBtn.addEventListener('click', () => {
    chatRec.lang = (agentLang === 'hi') ? 'hi-IN' : 'en-IN';
    try { chatRec.start(); } catch (err) { chatRec.stop(); }
  });
}

// =============================================================================
// 7. Continuous Victim Well-Being & Crisis Monitor
// =============================================================================
const wellbeingForm = document.getElementById('wellbeingForm');
const crisisAlertBanner = document.getElementById('crisisAlertBanner');
const wellbeingResultBox = document.getElementById('wellbeingResultBox');

document.querySelectorAll('.likert-options').forEach(group => {
  group.addEventListener('click', (e) => {
    const btn = e.target.closest('.likert-btn');
    if (!btn) return;
    group.querySelectorAll('.likert-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

const pulseSelectorRow = document.getElementById('pulseSelectorRow');
if (pulseSelectorRow) {
  pulseSelectorRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.pulse-stage-btn');
    if (!btn) return;
    pulseSelectorRow.querySelectorAll('.pulse-stage-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showToast(`Loaded protocol: ${btn.textContent}`);
  });
}

if (wellbeingForm) {
  wellbeingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedBtns = wellbeingForm.querySelectorAll('.likert-btn.selected');
    if (selectedBtns.length < 4) {
      showToast('Please answer all 4 well-being questions.');
      return;
    }

    let totalScore = 0;
    let crisisTrigger = false;

    selectedBtns.forEach(btn => {
      const score = parseInt(btn.dataset.score, 10) || 1;
      totalScore += score;
      if (btn.closest('[data-q="crisis"]') && score >= 3) crisisTrigger = true;
      if (score === 4) crisisTrigger = true;
    });

    if (crisisAlertBanner) crisisAlertBanner.classList.toggle('show', crisisTrigger);

    if (wellbeingResultBox) {
      wellbeingResultBox.style.display = 'block';
      wellbeingResultBox.innerHTML = `
        <div class="card" style="border-left:4px solid ${crisisTrigger ? 'var(--urgent)' : 'var(--success)'};">
          <h4>Well-Being Score: ${totalScore} / 16</h4>
          <p style="margin-top:6px;font-size:0.92rem;">
            ${crisisTrigger ? '<strong>Status: Acute Distress Detected.</strong> Early intervention protocol active. Tele-MANAS (14416) ready.' : '<strong>Status: Stable Recovery.</strong> Keep in touch with your assigned DLSA counselor.'}
          </p>
        </div>
      `;
      wellbeingResultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Utility: HTML Escaper
function escapeHtml(string) {
  const entityMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
  return String(string).replace(/[&<>"'/]/g, (s) => entityMap[s]);
}

// =============================================================================
// 8. Helplines Directory
// =============================================================================
const HELPLINES_DATA = [
  {
    name: 'National Emergency (Police / Fire / Ambulance)',
    number: '112',
    category: 'emergency',
    desc: 'Single emergency number for police, fire, and ambulance anywhere in India. Available 24×7.',
    portalUrl: 'https://112.gov.in'
  },
  {
    name: 'Women Helpline',
    number: '181',
    category: 'women',
    desc: '24×7 distress helpline for women facing violence, trafficking, or immediate danger.',
    portalUrl: 'https://wcd.nic.in'
  },
  {
    name: 'Childline India',
    number: '1098',
    category: 'women',
    desc: 'Emergency rescue and support for children in distress, abuse, or missing-child cases.',
    portalUrl: 'https://childlineindia.org'
  },
  {
    name: 'NALSA Free Legal Aid',
    number: '15100',
    category: 'legal',
    desc: 'National Legal Services Authority — free government advocate for SC/ST survivors and others eligible for legal aid.',
    portalUrl: 'https://nalsa.gov.in'
  },
  {
    name: 'Tele-MANAS Mental Health',
    number: '14416',
    category: 'mental',
    desc: 'Free 24×7 mental-health counselling in multiple Indian languages.',
    portalUrl: 'https://telemanas.mohfw.gov.in'
  },
  {
    name: 'KIRAN Mental Health Helpline',
    number: '1800-599-0019',
    category: 'mental',
    desc: 'Ministry of Social Justice helpline for depression, anxiety, and psychosocial support.',
    portalUrl: 'https://depwd.gov.in'
  },
  {
    name: 'National Commission for Scheduled Castes',
    number: '1800-180-0343',
    category: 'scst',
    desc: 'NCSC complaint and guidance line for caste atrocity, discrimination, and delayed FIR cases. Also file at ncsc.nic.in.',
    portalUrl: 'https://ncsc.nic.in'
  },
  {
    name: 'National Commission for Scheduled Tribes',
    number: '1800-11-7777',
    category: 'scst',
    desc: 'NCST support for Scheduled Tribe atrocity complaints and statutory follow-up.',
    portalUrl: 'https://ncst.nic.in'
  },
  {
    name: 'National Commission for Women',
    number: '7827170170',
    category: 'women',
    desc: 'NCW support for women facing violence, workplace harassment, or denial of legal help.',
    portalUrl: 'http://ncw.nic.in'
  },
  {
    name: 'Ambulance (108)',
    number: '108',
    category: 'emergency',
    desc: 'Emergency medical transport in most states. Also reachable via 112.',
    portalUrl: 'https://nhm.gov.in'
  },
  {
    name: 'Cyber Crime Helpline',
    number: '1930',
    category: 'emergency',
    desc: 'Report online threats, doxxing, or digital intimidation. Complaints also at cybercrime.gov.in.',
    portalUrl: 'https://cybercrime.gov.in'
  },
  {
    name: 'Senior Citizen Helpline',
    number: '14567',
    category: 'emergency',
    desc: 'Elderline — support for older persons facing abuse, neglect, or emergency need.',
    portalUrl: 'https://socialjustice.gov.in'
  }
];

function telHref(number) {
  return `tel:${String(number).replace(/[^\d+]/g, '')}`;
}

function renderHelplines(list) {
  const grid = document.getElementById('helplineGrid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '<p class="lede">No helplines match that search. Try “112”, “legal”, or “women”.</p>';
    return;
  }

  grid.innerHTML = list.map((h) => `
    <article class="helpline-card" data-category="${escapeHtml(h.category)}">
      <span class="badge badge-teal">${escapeHtml(h.category.replace('scst', 'SC/ST').replace('mental', 'Mental Health').replace('legal', 'Legal Aid').replace('women', 'Women & Children').replace('emergency', 'Emergency'))}</span>
      <strong class="helpline-num-display">${escapeHtml(h.number)}</strong>
      <h3>${escapeHtml(h.name)}</h3>
      <p class="helpline-desc">${escapeHtml(h.desc)}</p>
      <div class="helpline-actions" style="display:flex; gap:8px; flex-wrap:wrap;">
        <a class="btn btn-primary btn-sm" href="${telHref(h.number)}" aria-label="Call ${escapeHtml(h.name)} at ${escapeHtml(h.number)}">📞 Call ${escapeHtml(h.number)}</a>
        ${h.portalUrl ? `<a class="btn btn-outline btn-sm helpline-portal-btn" href="${escapeHtml(h.portalUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Visit official portal for ${escapeHtml(h.name)}">🌐 Visit Official Portal ↗</a>` : ''}
      </div>
    </article>
  `).join('');
}

function filterHelplines() {
  const query = (document.getElementById('helplineSearch')?.value || '').trim().toLowerCase();
  const activePill = document.querySelector('#helplineFilters .filter-pill.active');
  const category = activePill ? activePill.dataset.category : 'all';

  const filtered = HELPLINES_DATA.filter((h) => {
    const matchesCategory = category === 'all' || h.category === category;
    const haystack = `${h.name} ${h.number} ${h.desc} ${h.category}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  renderHelplines(filtered);
}

const helplineSearch = document.getElementById('helplineSearch');
if (helplineSearch) {
  helplineSearch.addEventListener('input', filterHelplines);
}

const helplineFilters = document.getElementById('helplineFilters');
if (helplineFilters) {
  helplineFilters.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    helplineFilters.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    filterHelplines();
  });
}

// =============================================================================
// 9. Bootstrap & Auto-Login Recovery
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderHelplines(HELPLINES_DATA);

  // Restore govt session if present
  try {
    const saved = sessionStorage.getItem('sahaay_govt_session');
    if (saved) {
      currentGovtSession = JSON.parse(saved);
      updatePortalUIMode(true);
      renderGovtTierView();
    }
  } catch (e) {}

  // Restore user session if present
  try {
    const savedUser = sessionStorage.getItem('sahaay_user_session');
    if (savedUser) {
      currentUserSession = JSON.parse(savedUser);
      updateUserPortalUI(true);
      renderUserPortalView();
    }
  } catch (e) {}

  // Auto-prompt Role Selection Gateway on initial site visit if not logged into either portal
  if (!currentGovtSession && !currentUserSession) {
    const prompted = sessionStorage.getItem('sahaay_role_prompted');
    if (!prompted) {
      setTimeout(() => {
        if (!currentGovtSession && !currentUserSession) {
          openRoleSelectModal();
        }
      }, 700);
    }
  }

  // Back to Top button listener
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
});
