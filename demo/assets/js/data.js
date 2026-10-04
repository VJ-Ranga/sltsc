const photoData = {
  hero1: { id: 'photo-1758270705290-62b6294dd044', alt: "Smiling diverse students gathered around a laptop in a university lecture hall" },
  hero2: { id: 'photo-1758270704925-fa59d93119c1', alt: "Teacher lecturing a bright classroom of attentive students" },
  hero3: { id: 'photo-1758270705657-f28eec1a5694', alt: "Group of smiling students taking a selfie together in a classroom" },
  hero4: { id: 'photo-1675664532976-1dcb15ce5ece', alt: "Young woman working on a laptop outdoors on a sunny day" },
  online_class1: { id: 'photo-1758611971587-ddc6656822d9', alt: "Man with headphones working on a laptop" },
  online_class2: { id: 'photo-1758874384722-ab97b4c9af89', alt: "Smiling young woman with headphones studying on a laptop" },
  online_class3: { id: 'photo-1759984782076-2909625b0aa8', alt: "Woman with headphones attending an online class at her desk by a window" },
  online_class4: { id: 'photo-1758612214848-04e700d192ce', alt: "Young woman with headphones using a laptop on a sofa at home" },
  online_class5: { id: 'photo-1606770347238-77fcfd29906c', alt: "Laptop on a desk showing a video conference grid of participants" },
  students1: { id: 'photo-1758270705518-b61b40527e76', alt: "Group of diverse students collaborating around a laptop in a lecture hall" },
  students2: { id: 'photo-1758270704763-22072a90d3b6', alt: "Students talking and laughing together in a lecture hall" },
  students3: { id: 'photo-1778489769184-45868633c527', alt: "Two students at computers, one pointing at the screen while helping the other" },
  students4: { id: 'photo-1758270704524-596810e891b5', alt: "Smiling young woman with friends studying together at a table" },
  students5: { id: 'photo-1653503425441-9d975e51ce91', alt: "Man and woman discussing work on a laptop outdoors" },
  networking1: { id: 'photo-1785682117028-6fcf2c0b515b', alt: "Technician in a hi-vis vest working on a server rack" },
  networking2: { id: 'photo-1785682117346-4b114502e9b8', alt: "Technician with a handheld device working on a server rack" },
  networking3: { id: 'photo-1691435828932-911a7801adfb', alt: "Blue network cables plugged into a switch with glowing lights" },
  networking4: { id: 'photo-1594915440248-1e419eba6611', alt: "Fiber optic cables connected to a network switch in a server rack" },
  networking5: { id: 'photo-1544197150-b99a580bb7a8', alt: "Patch panel with white network cables in a rack" },
  cybersecurity1: { id: 'photo-1763128516808-785e80c1dd68', alt: "Analyst seated in front of dark monitors showing code and terminal windows" },
  cybersecurity2: { id: 'photo-1708807472445-d33589e6b090', alt: "Person watching a wall of monitoring screens in a control room" },
  cybersecurity3: { id: 'photo-1549692520-acc6669e2f0c', alt: "Developer reviewing code on two screens in a dark workspace" },
  cybersecurity4: { id: 'photo-1714846201700-35b42d937158', alt: "Terminal window displaying network configuration commands" },
  cybersecurity5: { id: 'photo-1759661881353-5b9cc55e1cf4', alt: "Dark screen displaying lines of code" },
  coding1: { id: 'photo-1498050108023-c5249f4df085', alt: "Laptop with code on screen on a bright desk" },
  coding2: { id: 'photo-1618477388954-7852f32655ec', alt: "Hands typing code on a laptop beside a plant and mug" },
  coding3: { id: 'photo-1534665482403-a909d0d97c67', alt: "Man programming on a laptop at a desk" },
  coding4: { id: 'photo-1551434678-e076c223a692', alt: "Man working at a laptop in a bright office" },
  coding5: { id: 'photo-1531482615713-2afd69097998', alt: "Two colleagues working together on a laptop in an office" },
  instructor1: { id: 'photo-1758270704021-361c165d68fd', alt: "Teacher asking a question to students in a classroom" },
  instructor2: { id: 'photo-1789533508524-91f0f17bd6d7', alt: "Instructor teaching a group of students with a digital screen behind him" },
  instructor3: { id: 'photo-1784869054223-62729f8bea67', alt: "Woman instructor presenting to a classroom of students" },
  instructor4: { id: 'photo-1766867257943-0665537fb2dd', alt: "Woman in a green dress presenting at a projector screen" },
  graduation1: { id: 'photo-1762438135827-428acc0e8941', alt: "Smiling graduate in a yellow stole and gown holding a medal" },
  graduation2: { id: 'photo-1612214495858-4f32b96155a7', alt: "Smiling graduate in cap and gown holding a diploma scroll" },
  graduation3: { id: 'photo-1577036421869-7c8d388d2123', alt: "Graduate in a teal gown blowing confetti" },
  portraits1: { id: 'photo-1757744705465-ea08b0ddc38a', alt: "Smiling young man in a navy sweater" },
  portraits2: { id: 'photo-1767607740661-05e668190cdc', alt: "Young woman smiling at the camera" },
  portraits3: { id: 'photo-1781674432861-741d7b20709b', alt: "Smiling young woman in a teal top outdoors" },
  portraits4: { id: 'photo-1761125135368-f13b3a427631', alt: "Smiling woman in a red outfit with traditional jewelry" },
  portraits5: { id: 'photo-1728141123512-87c415cecc9d', alt: "Smiling young woman with long dark hair in a plaid shirt" },
  portraits6: { id: 'photo-1787724779241-cb5c250ed70b', alt: "Bearded man with glasses in a dark blazer" },
  portraits7: { id: 'photo-1761435756843-0ca5f4ff1d59', alt: "Smiling young man in a blue shirt" },
  portraits8: { id: 'photo-1599256621730-535171e28e50', alt: "Bearded man with a confident expression looking at camera" },
  events1: { id: 'photo-1762968274962-20c12e6e8ecd', alt: "Speaker on stage at a tech conference before a large audience" },
  events2: { id: 'photo-1762968269894-1d7e1ce8894e', alt: "Speaker presenting on stage at a tech event with colorful lighting" },
  events3: { id: 'photo-1591115765373-5207764f72e7', alt: "Workshop audience seated at tables in a brick-walled event space" },
  events4: { id: 'photo-1637073849563-5b0ac780ec34', alt: "Attendees at a workshop raising hands in front of a screen" },
  abstract1: { id: 'photo-1733723586975-9aaae6983459', alt: "Curved blue fins forming a rhythmic abstract pattern" },
  abstract2: { id: 'photo-1655635643486-a17bc48771ff', alt: "Abstract blue and pink 3D cubes on a white background" },
  abstract3: { id: 'photo-1758073519996-6d3c63b4922c', alt: "Abstract blue dotted wave pattern on a dark background" },
};
const photo = (key, size = 'banner') => {
  const p = photoData[key];
  if (!p) throw new Error('Unknown photo key: ' + key);
  const sizes = { banner: 'w=1920&q=80', card: 'w=800&h=600&fit=crop&q=75', portrait: 'w=600&h=600&fit=crop&crop=faces&q=75', square: 'w=800&h=800&fit=crop&q=75' };
  return { id: p.id, alt: p.alt, key, url: `https://images.unsplash.com/${p.id}?auto=format&${sizes[size] || sizes.banner}` };
};
const images = { hero: photo('hero1'), online: photo('online_class1'), students: photo('students1'), network: photo('networking1'), cyber: photo('cybersecurity1'), code: photo('coding1'), instructor: photo('instructor1'), event: photo('events1'), events: photo('events1'), portrait2: photo('portraits2'), portrait3: photo('portraits3'), portrait4: photo('portraits4') };
window.photoData = photoData;
window.photo = photo;
window.SLTSC = {
  config: { name: 'SLTSC Academy', phone: '071 800 0849', whatsapp: '94718000849', email: 'yasirunirmalaherath@gmail.com', emailLabel: 'to be confirmed: academy email', socials: { facebook: '#', instagram: '#', youtube: '#' }, netacad: true },
  images,
  schools: [
    { id:'networking', name:'Networking & Infrastructure', short:'Networks', description:'Build the infrastructure that keeps people and businesses connected.', image:photo('networking1') },
    { id:'cybersecurity', name:'Cybersecurity', short:'Security', description:'Learn to think defensively, investigate signals, and protect systems.', image:photo('cybersecurity1') },
    { id:'software', name:'Software & Web Development', short:'Software', description:'Turn ideas into useful digital products through code and craft.', image:photo('coding1') },
    { id:'data', name:'Data, Cloud & AI', short:'Future school', description:'A future-facing pathway for data literacy, cloud, and AI foundations.', image:photo('online_class1'), future:true }
  ],
  programs: [
    {id:'ccna',title:'CCNA 200-301 v2 (New Syllabus)',school:'networking',level:'Cisco Networking Academy course',duration:'8 months',mode:'Mode and schedule to be confirmed',fee:'LKR 31,500 · instalments available',intake:'Next batch: to be announced',image:photo('networking2'),badge:'Official Cisco Networking Academy course'},
    {id:'networking-foundations',title:'Networking Foundations',school:'networking',level:'Foundation short course',duration:'6 weeks',mode:'Live online + replay',fee:'Demo fee',intake:'Demo intake',image:photo('networking3')},
    {id:'network-automation',title:'Network Automation with Python',school:'networking',level:'Advanced short course',duration:'8 weeks',mode:'Live online + projects',fee:'Demo fee',intake:'Demo intake',image:photo('networking4')},
    {id:'cyber-foundations',title:'Cybersecurity Foundations',school:'cybersecurity',level:'Foundation short course',duration:'6 weeks',mode:'Live online + labs',fee:'Demo fee',intake:'Demo intake',image:photo('cybersecurity2')},
    {id:'cyberops',title:'CyberOps Associate Preparation',school:'cybersecurity',level:'Professional certificate',duration:'12 weeks',mode:'Live online + labs',fee:'Demo fee',intake:'Demo intake',image:photo('cybersecurity3')},
    {id:'ethical-hacking',title:'Ethical Hacking Essentials',school:'cybersecurity',level:'Professional certificate',duration:'10 weeks',mode:'Controlled practice labs',fee:'Demo fee',intake:'Demo intake',image:photo('cybersecurity4')},
    {id:'web-foundations',title:'Web Development Foundations',school:'software',level:'Foundation short course',duration:'8 weeks',mode:'Live online + portfolio',fee:'Demo fee',intake:'Demo intake',image:photo('coding2')},
    {id:'python',title:'Programming Basics with Python',school:'software',level:'Foundation certificate',duration:'8 weeks',mode:'Live online + exercises',fee:'Demo fee',intake:'Demo intake',image:photo('coding3')},
    {id:'frontend-react',title:'Front-end Web Development',school:'software',level:'Professional certificate',duration:'12 weeks',mode:'Live online + portfolio',fee:'Demo fee',intake:'Demo intake',image:photo('coding4')},
    {id:'cloud-data',title:'Cloud & Data Foundations',school:'data',level:'Future school',duration:'8 weeks',mode:'Demo info',fee:'Demo fee',intake:'Future',image:photo('abstract1')},
    {id:'applied-ai',title:'Applied AI for IT Learners',school:'data',level:'Future school',duration:'8 weeks',mode:'Demo info',fee:'Demo fee',intake:'Future',image:photo('abstract2')}
  ],
  faculty:[{name:'Yasiru Nirmala Herath',role:'Founder & Lead Instructor',school:'all',image:photo('instructor1'),badge:'Demo photo',confirmed:true},{name:'Programme Mentor',role:'Networking & Infrastructure',school:'networking',image:photo('portraits1'),badge:'Demo faculty'},{name:'Security Mentor',role:'Cybersecurity',school:'cybersecurity',image:photo('portraits3'),badge:'Demo faculty'},{name:'Development Mentor',role:'Software & Web',school:'software',image:photo('portraits4'),badge:'Demo faculty'}],
  testimonials:[{quote:'The learning journey shown here is a demo story awaiting client-approved learner evidence.',name:'Demo learner one',role:'Networking pathway · Demo info',image:photo('portraits5')},{quote:'A practical, guided route into technology starts with knowing your next step.',name:'Demo learner two',role:'Software pathway · Demo info',image:photo('portraits6')},{quote:'Clear practice makes a new technical subject feel possible.',name:'Demo learner three',role:'Cybersecurity pathway · Demo info',image:photo('portraits7')},{quote:'A supportive cohort gives every question somewhere to go.',name:'Demo learner four',role:'Online learner · Demo info',image:photo('portraits8')}],
  news:[{title:'How to choose your first path into IT',category:'Learning paths',date:'Demo date',image:photo('coding5')},{title:'Why practical labs matter in online learning',category:'Online learning',date:'Demo date',image:photo('online_class2')},{title:'What to expect from a live cohort',category:'Student experience',date:'Demo date',image:photo('students2')}],
  events:[{title:'Online academy orientation',date:'Demo date',type:'Orientation',image:photo('events2')},{title:'Network lab walkthrough',date:'Demo date',type:'Workshop',image:photo('events3')},{title:'Cybersecurity pathway Q&A',date:'Demo date',type:'Live session',image:photo('events4')}],
  stats:[{value:15,suffix:'+',label:'Years teaching'},{value:2011,suffix:'',label:'NetAcad trainer since'},{value:4,suffix:'',label:'Learning schools'},{value:2,suffix:'× CCNP',label:'CCNP credentials'}],
  photoAssignments: Object.keys(photoData).map(key => photo(key))
};
