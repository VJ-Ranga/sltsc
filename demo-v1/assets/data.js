window.SLTSC_DATA = {
  site: { name: 'SLTSC Academy', shortName: 'SLTSC', phone: '071 8 000 849', phoneLink: 'tel:+94718000849', whatsapp: '94718000849', email: 'hello@sltsc.academy', location: 'Sri Lanka', whatsappText: 'Hi SLTSC Academy, I would like to learn more about the learning routes.' },
  instructor: { name: 'Yasiru Nirmala Herath', role: 'Instructor-led networking & cybersecurity learning', bio: 'A clear, practice-first learning environment for people building their next technical capability.', credentials: ['Instructor-led sessions', 'Guided lab practice', 'Exam-aware learning'], photoPending: true },
  startingPoints: [
    { id: 'new', label: 'New to IT', note: 'I am building the fundamentals.', recommendation: 'Start with the foundation route, then progress into CCNA 200-301 preparation.', nodes: ['foundation', 'ccna'], focus: 'Foundations → CCNA' },
    { id: 'some', label: 'Some IT', note: 'I understand the basics and want structure.', recommendation: 'Use the CCNA route as your core and add a practical specialist branch when ready.', nodes: ['ccna', 'cyber'], focus: 'CCNA → Cybersecurity' },
    { id: 'working', label: 'Working IT', note: 'I want a focused next step.', recommendation: 'Begin at CCNA level and choose a professional or automation branch around your role.', nodes: ['ccna', 'professional', 'automation'], focus: 'CCNA → Professional / Automation' }
  ],
  nodes: [
    { id: 'foundation', eyebrow: '01 / FOUNDATION', title: 'Build the base', text: 'Core networking and computing concepts for a confident start.', type: 'core' },
    { id: 'ccna', eyebrow: '02 / ASSOCIATE', title: 'CCNA 200-301', text: 'Instructor-led preparation for the Cisco CCNA (200-301) exam.', type: 'core' },
    { id: 'professional', eyebrow: '03 / PROFESSIONAL', title: 'Go deeper', text: 'Build toward professional networking skills when the route is right for you.', type: 'branch' },
    { id: 'cyber', eyebrow: 'BRANCH / SECURITY', title: 'Secure the route', text: 'Translate networking fundamentals into security-focused practice.', type: 'branch' },
    { id: 'automation', eyebrow: 'BRANCH / AUTOMATION', title: 'Automate the route', text: 'Explore Python and network automation after your networking base.', type: 'branch' }
  ],
  courses: [
    { id: 'ccst-networking', group: 'Foundation', title: 'CCST Networking', exam: '100-150', level: 'Entry', duration: '8 weeks · 64 h', mode: 'Weekend · Online + Lab', fee: 'LKR 48,000', sample: true, goals: ['new', 'some'], description: 'Build the vocabulary and practical habits that make networking easier to learn.', prerequisite: null, next: ['ccna'] },
    { id: 'ccna', group: 'Associate', title: 'CCNA 200-301 preparation', exam: '200-301', level: 'Associate', duration: '12 weeks · 120 h', mode: 'Weekend · Online + Lab', fee: 'LKR 85,000', sample: true, goals: ['new', 'some', 'working'], description: 'A structured, hands-on route through the knowledge behind the CCNA exam.', prerequisite: 'ccst-networking', next: ['cybersecurity','automation'] },
    { id: 'cybersecurity', group: 'Specialist', title: 'Cybersecurity foundations', exam: 'SC-900', level: 'Intermediate', duration: '10 weeks · 80 h', mode: 'Weekday · Online + Lab', fee: 'LKR 72,000', sample: true, goals: ['some', 'working'], description: 'Turn networking fundamentals into a clearer, security-focused practice.', prerequisite: 'ccna', next: ['secure-network'] },
    { id: 'automation', group: 'Specialist', title: 'Network automation & Python', exam: '200-901', level: 'Intermediate', duration: '8 weeks · 64 h', mode: 'Weekend · Online + Lab', fee: 'LKR 68,000', sample: true, goals: ['working'], description: 'Connect network thinking with Python, APIs and repeatable configuration.', prerequisite: 'ccna', next: [] },
    { id: 'network-support', group: 'Career route', title: 'Network support essentials', exam: 'LAB-NS01', level: 'Entry', duration: '6 weeks · 48 h', mode: 'Weekday evening · Online', fee: 'LKR 42,000', sample: true, goals: ['new', 'working'], description: 'A focused route for troubleshooting, service desk and junior NOC fundamentals.' },
    { id: 'secure-network', group: 'Specialist', title: 'Secure network operations', exam: 'SEC-NET01', level: 'Advanced', duration: '10 weeks · 80 h', mode: 'Weekend · Online + Lab', fee: 'LKR 92,000', sample: true, goals: ['working'], description: 'Practise defensive thinking across access, segmentation and incident scenarios.' }
  ],
  labs: [
    { icon: 'fa-diagram-project', label: 'MAP', title: 'Read a network', text: 'Trace how devices, switching and routing fit together.' },
    { icon: 'fa-screwdriver-wrench', label: 'CONFIGURE', title: 'Configure with intent', text: 'Work through guided configuration tasks and explain the result.' },
    { icon: 'fa-shield-halved', label: 'SECURE', title: 'Spot the risk', text: 'Use a network-first lens to understand security decisions.' }
  ],
  intakes: [
    { course: 'CCNA 200-301 preparation', start: '2027-01-18', date: '18 Jan 2027', schedule: 'Sat + Sun · 9:00–14:00', mode: 'Online + guided lab', seats: '12 places', seatsAvailable: 12, seatsCapacity: 20, fee: 'LKR 85,000', sample: true },
    { course: 'Foundation route', start: '2027-02-01', date: '01 Feb 2027', schedule: 'Tue + Thu · 19:00–21:00', mode: 'Online evening', seats: '15 places', seatsAvailable: 15, seatsCapacity: 20, fee: 'LKR 48,000', sample: true }
  ],
  testimonials: [
    { quote: 'The route made the next step feel manageable. I knew what to practise each week.', name: 'Sample learner', detail: 'Replace with real student quote', avatar: 'SL', tag: 'CCNA route' },
    { quote: 'The lab-first rhythm helped me connect the theory to a network I could actually explain.', name: 'Sample learner', detail: 'Replace with real student quote', avatar: 'SL', tag: 'Foundation route' },
    { quote: 'I could ask a practical question and leave with a clear, useful answer.', name: 'Sample learner', detail: 'Replace with real student quote', avatar: 'SL', tag: 'Working IT learner' }
  ],
  outcomes: ['Understand how networks connect and communicate', 'Practise structured troubleshooting', 'Build a route toward junior network or security work', 'Make a better-informed next learning decision'],
  faqs: [
    ['Do I need previous networking experience?', 'No fixed claim is being made yet. The starting-point selector is guidance: new learners can begin with foundations, while learners with some IT experience may review the CCNA route.'],
    ['Does tuition include the Cisco exam voucher?', 'The exam voucher is separate from tuition. Exam arrangements and current details should be confirmed before enrolment.'],
    ['Is SLTSC affiliated with Cisco?', 'That status is not confirmed. SLTSC is presented here as an independent training provider preparing learners for the Cisco CCNA (200-301) exam.'],
    ['Can I study while working?', 'Working-learner options are part of the planned route. Current evening, weekend and online availability must be confirmed for each intake.']
  ]
};

// Page-ready sample fields are kept in the shared data layer so templates stay reusable.
window.SLTSC_DATA.courses.forEach((c, i) => {
  c.overview = c.description + ' This sample route combines clear instruction with guided practice and a visible next step.';
  c.prerequisites = i === 0 ? 'No prior networking experience is required; basic computer literacy is helpful.' : 'Basic IT literacy and comfort with technical terms; review the preceding route where noted.';
  c.outcomes = ['Explain the core concepts in this route', 'Work through a guided troubleshooting scenario', 'Document a practical result you can discuss', 'Choose a sensible next learning hop'];
  c.modules = ['Orientation and foundations', 'Core concepts', 'Configuration practice', 'Troubleshooting patterns', 'Security and good practice', 'Capstone route check'].map((title, n) => ({ title, labs: n % 2 ? 2 : 3 }));
  c.installment = `Sample plan: 40% to reserve, then 2 monthly instalments. Confirm the final plan with SLTSC.`;
  c.nextIntake = i % 2 ? '01 Feb 2027 · sample' : '18 Jan 2027 · sample';
  c.faq = [['Is the exam included?', 'No. The exam is taken separately at Pearson VUE and the voucher is not included in tuition.'], ['Can I study while working?', 'Ask about the current weekday, weekend and online options for this course.']];
});
