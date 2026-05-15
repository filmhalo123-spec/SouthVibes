// ══════════════════════════════════════════════════════════════
//  SouthVibes — main.js
// ══════════════════════════════════════════════════════════════

// --- Data Structures ---
const DESTINATIONS = [
    { name: { TH: 'ภูเก็ต',        EN: 'Phuket'      }, image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=400&auto=format&fit=crop' },
    { name: { TH: 'กระบี่',        EN: 'Krabi'       }, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=400&auto=format&fit=crop' },
    { name: { TH: 'สงขลา',        EN: 'Songkhla'    }, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&auto=format&fit=crop' },
    { name: { TH: 'สตูล',         EN: 'Satun'       }, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400&auto=format&fit=crop' },
    { name: { TH: 'สุราษฎร์ธานี', EN: 'Surat Thani' }, image: 'https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=400&auto=format&fit=crop' },
];

const EDITORIAL_GUIDES = [
    {
        id: 1,
        tag:    { TH: 'คู่มือสำคัญ',   EN: 'ESSENTIAL GUIDE' },
        title:  { TH: 'คู่มือเที่ยวเกาะหลีเป๊ะ: สวรรค์แห่งทะเลอันดามันใต้', EN: 'Koh Lipe Guide: Paradise of the South Andaman' },
        author: 'SouthVibes Editors',
        image:  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
        excerpt: { TH: 'สำรวจหาดทรายขาวละเอียดและจุดดำน้ำตื้นที่ดีที่สุด พร้อมวิธีเดินทางแบบละเอียด', EN: 'Explore white sand beaches and the best snorkeling spots, with detailed travel info.' }
    },
    {
        id: 2,
        tag:    { TH: 'อาหารท้องถิ่น', EN: 'LOCAL EATS' },
        title:  { TH: 'ตามรอยสตรีทฟู้ดและติ่มซำ ย่านเมืองเก่าภูเก็ต', EN: 'Street Food & Dim Sum in Phuket Old Town' },
        author: 'FoodieTraveller',
        image:  'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1000&auto=format&fit=crop',
        excerpt: { TH: 'ชิมอาหารพื้นเมืองที่ผสมผสานวัฒนธรรมเปอรานากัน ในบรรยากาศตึกชิโนโปรตุกีส', EN: 'Taste local Peranakan fusion food in the atmosphere of Sino-Portuguese architecture.' }
    }
];

const FORUM_THREADS = [
    { id: 101, topic: { TH: 'อัปเดตสภาพอากาศฝั่งอันดามันช่วงนี้ คลื่นแรงไหมครับ? จะไปกระบี่อาทิตย์หน้า', EN: 'Andaman weather update? Are the waves strong right now? Going to Krabi next week.' }, author: 'WanderBoy',      replies: 14, time: { TH: '2 ชั่วโมงที่แล้ว', EN: '2 hours ago'  }, category: { TH: 'คำแนะนำการเดินทาง', EN: 'Travel Advice' } },
    { id: 102, topic: { TH: 'แจกแพลน นั่งรถไฟเที่ยวเบตง 4 วัน 3 คืน ฉบับคนงบน้อย',                      EN: 'Sharing my 4D 3N budget train trip itinerary to Betong'                            }, author: 'TrainTracker',   replies: 89, time: { TH: '5 ชั่วโมงที่แล้ว', EN: '5 hours ago'  }, category: { TH: 'แผนการเดินทาง',     EN: 'Itineraries'  } },
    { id: 103, topic: { TH: 'รบกวนช่วยเลือกที่พักโซนเขาหลักหน่อยครับ ระหว่าง A กับ B',                   EN: 'Please help me choose accommodation in Khao Lak area between A and B'              }, author: 'FamilyTrip2024', replies:  5, time: { TH: '1 วันที่แล้ว',    EN: '1 day ago'   }, category: { TH: 'ที่พัก',            EN: 'Accommodation'} },
    { id: 104, topic: { TH: 'รีวิวคาเฟ่ลับเปิดใหม่ริมทะเลสาบสงขลา ถ่ายรูปสวยมากกก!',                    EN: 'Review of a new secret cafe by Songkhla lake. Beautiful photo spots!'              }, author: 'CafeHopperTH',  replies: 32, time: { TH: '2 วันที่แล้ว',   EN: '2 days ago'  }, category: { TH: 'รีวิว',             EN: 'Reviews'     } }
];

const TRANSLATIONS = {
    TH: {
        nav1: 'แนะนำสถานที่', nav2: 'จดหมาย', nav3: 'ชุมชน', nav4: 'บทความ',
        login: 'เข้าสู่ระบบ',
        hero1: 'มนต์เสน่ห์แดนใต้',
        hero2: 'ค้นพบเกาะสวยลับตา ร้านอาหารท้องถิ่น และร่วมแบ่งปันประสบการณ์กับนักเดินทาง',
        searchLabel: 'คุณอยากไปเที่ยวที่ไหนในภาคใต้?', searchBtn: 'ค้นหา',
        pop: 'จุดหมายยอดนิยม',
        board1: 'เว็บบอร์ดพูดคุย',
        board2: 'ร่วมพูดคุย สอบถามข้อมูล และแบ่งปันเทคนิคการเดินทาง',
        newTopic: 'ตั้งกระทู้ใหม่', viewAll: 'ดูกระทู้ทั้งหมด',
        guide1: 'บทความแนะนำ',
        news1: 'รับแรงบันดาลใจการเดินทาง',
        news2: 'สมัครรับข่าวสารเพื่อค้นพบสิ่งที่ดีที่สุดในภาคใต้',
        subscribe: 'ติดตามข่าวสาร', emailPlaceholder: 'กรอกอีเมลของคุณ',
        by: 'โดย', postedBy: 'โพสต์โดย',
        footerDesc: 'เพื่อนร่วมทางที่ดีที่สุดของคุณในการสำรวจสถานที่ลับ ชายหาดที่บริสุทธิ์ และวัฒนธรรมที่มีชีวิตชีวาของภาคใต้',
        explore: 'สำรวจ', fDest: 'จุดหมายปลายทาง', fGuides: 'คู่มือท่องเที่ยว', fForum: 'เว็บบอร์ดชุมชน',
        about: 'เกี่ยวกับเรา', ourStory: 'เรื่องราวของเรา', contact: 'ติดต่อเรา', terms: 'ข้อตกลงและเงื่อนไข'
    },
    EN: {
        nav1: 'Discover', nav2: 'Destinations', nav3: 'Community', nav4: 'Articles',
        login: 'Sign In',
        hero1: 'Explore the South.',
        hero2: 'Discover breathtaking islands, hidden local spots, and join the community of travelers.',
        searchLabel: 'Where do you want to go in Southern Thailand?', searchBtn: 'Search',
        pop: 'Popular Destinations',
        board1: 'Community Board',
        board2: 'Join the conversation. Ask questions, share tips, and connect with other travelers.',
        newTopic: 'New Topic', viewAll: 'View All Topics',
        guide1: 'Featured Guides',
        news1: 'Get Travel Inspiration',
        news2: 'Sign up for our newsletter and discover the best of the South.',
        subscribe: 'Subscribe', emailPlaceholder: 'Email address',
        by: 'By', postedBy: 'Posted by',
        footerDesc: 'Your ultimate companion for exploring the hidden gems, pristine beaches, and vibrant culture of Southern Thailand.',
        explore: 'Explore', fDest: 'Destinations', fGuides: 'Travel Guides', fForum: 'Community Forum',
        about: 'About', ourStory: 'Our Story', contact: 'Contact Us', terms: 'Terms of Service'
    }
};

// --- Application State ---
// จำภาษาข้ามหน้าเว็บด้วย localStorage (เหมือนกับหน้า Register/Login)
let currentLang = localStorage.getItem('southvibes_lang') || 'TH';

// --- Render Functions ---
function renderDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    container.innerHTML = DESTINATIONS.map(dest => `
        <button class="group flex flex-col items-center gap-2">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-600 transition-all p-0.5">
                <img src="${dest.image}" alt="${dest.name[currentLang]}" class="w-full h-full object-cover rounded-full" loading="lazy" />
            </div>
            <span class="text-sm font-semibold text-gray-700 group-hover:text-blue-600">${dest.name[currentLang]}</span>
        </button>
    `).join('');
}

function renderThreads() {
    const container = document.getElementById('threads-container');
    if (!container) return;

    const t = TRANSLATIONS[currentLang];

    container.innerHTML = FORUM_THREADS.map(thread => `
        <div class="py-6 group cursor-pointer border-b border-gray-100 last:border-b-0">
            <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2 flex-wrap">
                        <span class="px-2.5 py-0.5 rounded text-xs font-bold tracking-wider uppercase bg-gray-100 text-gray-600">
                            ${thread.category[currentLang]}
                        </span>
                        <span class="text-xs text-gray-400">•</span>
                        <span class="text-xs text-gray-500 font-medium">
                            ${t.postedBy} <span class="text-gray-900">${thread.author}</span> · ${thread.time[currentLang]}
                        </span>
                    </div>
                    <h3 class="text-xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        ${thread.topic[currentLang]}
                    </h3>
                </div>
                <div class="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shrink-0">
                    <i data-lucide="message-square" class="h-5 w-5 text-gray-400 group-hover:text-blue-600 mb-1"></i>
                    <span class="text-xs font-bold text-gray-700 group-hover:text-blue-700">${thread.replies}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderGuides() {
    const container = document.getElementById('guides-container');
    if (!container) return;

    const t = TRANSLATIONS[currentLang];

    container.innerHTML = EDITORIAL_GUIDES.map(guide => `
        <div class="group cursor-pointer">
            <div class="relative h-64 w-full rounded-xl overflow-hidden mb-4">
                <img src="${guide.image}" alt="${guide.title[currentLang]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div class="absolute top-4 left-4">
                    <span class="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm rounded">
                        ${guide.tag[currentLang]}
                    </span>
                </div>
            </div>
            <h3 class="text-xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                ${guide.title[currentLang]}
            </h3>
            <p class="text-sm text-gray-600 line-clamp-2 mb-3">
                ${guide.excerpt[currentLang]}
            </p>
            <p class="text-xs font-medium text-gray-400 uppercase tracking-wide">
                ${t.by} ${guide.author}
            </p>
        </div>
    `).join('');
}

// --- Main Update Logic ---
function updateApp() {
    const t = TRANSLATIONS[currentLang];

    // แปลข้อความ static ทั้งหมด
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!t[key]) return;

        // แยก input placeholder ออกจาก element ทั่วไป
        if (el.tagName === 'INPUT') {
            el.placeholder = t[key];
            return;
        }

        // ถ้ามี <i> icon อยู่ข้างใน ให้เก็บไว้ก่อน แล้วใส่คืน
        const icon = el.querySelector('i[data-lucide]');
        if (icon) {
            const clonedIcon = icon.cloneNode(true);
            el.textContent = t[key] + ' ';
            el.appendChild(clonedIcon);
        } else {
            el.textContent = t[key];
        }
    });

    // ปรับขนาดฟอนต์ nav ตามภาษา
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.toggle('text-sm',   currentLang === 'EN');
        el.classList.toggle('text-base', currentLang === 'TH');
    });

    // อัปเดตปุ่มเลือกภาษา
    const btnTH = document.getElementById('btn-th');
    const btnEN = document.getElementById('btn-en');
    if (btnTH && btnEN) {
        btnTH.classList.toggle('text-gray-900',   currentLang === 'TH');
        btnTH.classList.toggle('text-gray-400',   currentLang !== 'TH');
        btnEN.classList.toggle('text-gray-900',   currentLang === 'EN');
        btnEN.classList.toggle('text-gray-400',   currentLang !== 'EN');
    }

    // Re-render dynamic content
    renderDestinations();
    renderThreads();
    renderGuides();

    // Re-init Lucide icons (หลัง render เสร็จเท่านั้น)
    lucide.createIcons();
}

// --- Language Toggle ---
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('southvibes_lang', lang); // จำภาษาข้ามหน้า
    updateApp();
}

document.getElementById('btn-th')?.addEventListener('click', () => setLang('TH'));
document.getElementById('btn-en')?.addEventListener('click', () => setLang('EN'));

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    updateApp();
});