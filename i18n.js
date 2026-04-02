/* ==========================================================
   The 661 Estate — i18n.js
   Mandarin / English language toggle
   Persist choice in localStorage under key '661-lang'
   ========================================================== */

(function () {
  'use strict';

  /* ── TRANSLATIONS ─────────────────────────────────────── */
  var T = {
    en: {
      /* ── Landing page ── */
      'tagline':           'A house shaped by ambition.',
      'enter-estate':      'Enter the Estate',
      'estate-id':         'Singapore\u00a0\u00b7\u00a0Est.\u00a02025',
      'tilt-hint':         'Tilt to explore',
      'location-badge':    '661\u00a0\u00b7\u00a0Singapore',

      /* ── Shared nav ── */
      'nav-overview':             'Overview',
      'nav-experience':           'Experience',
      'nav-levels':               'Levels',
      'nav-highlights':           'Highlights',
      'nav-gallery':              'Gallery',
      'nav-invitations':          'Invitations',
      'nav-arrange-viewing':      'Arrange Viewing',
      'nav-arrange-viewing-long': 'Arrange a Private Viewing',
      'nav-propertyguru':         'PropertyGuru Listing',
      'nav-home':                 'Home',

      /* ── Specs: Hero ── */
      'hero-kicker':   'The 661 Estate\u00a0\u00b7\u00a0Newly Built\u00a0\u00b7\u00a0Completed ~June 2025',
      'hero-title':    'An elevated estate<br>at the peak of prestige.',
      'stat-land':     'Land sqft',
      'stat-sgfa':     'SGFA',
      'stat-levels':   'Five levels',
      'hero-explore':  'Explore the Estate',
      'scroll':        'Scroll',

      /* ── Specs: Overview ── */
      'eyebrow-overview': 'The Property',
      'h2-overview':      'Overview',
      'lead-overview':    'A masterwork of modern architecture delivered ~June 2025. The 661 Estate sets a new benchmark for ultra-luxury living with meticulously curated spaces across five distinct levels.',
      'card-land-size':   'Land Size',
      'card-sgfa':        'SGFA',
      'card-bedrooms':    'Bedrooms',
      'card-bathrooms':   'Bathrooms',
      'card-levels':      'Levels',
      'card-completion':  'Completion',

      /* ── Specs: Experience ── */
      'eyebrow-experience': 'Location\u00a0&\u00a0Prestige',
      'h2-experience':      'An Elevated Estate at the Peak of Prestige',
      'lead-experience':    'Positioned at the very crest of the hill, this residence occupies one of the most privileged plots in the enclave. Properties on both sides of the surrounding streets descend away from it, placing this home at the absolute high point \u2014 granting it superior elevation, openness, and commanding presence.',
      'experience-p1':      'Convenience is effortlessly integrated into its exclusivity. A petrol kiosk and convenience store sit less than 30 metres away, while the residence is uniquely positioned between two main roads offering access to more than 12 bus routes across the island, many with direct connectivity to the city centre.',
      'experience-p2':      'The East West Line MRT is a mere seven-minute walk, and a wide selection of dining options \u2014 including numerous 24-hour establishments \u2014 are readily available within the vicinity. The residence also enjoys swift access to two major expressways \u2014 the PIE and ECP \u2014 placing the CBD and Changi Airport within easy reach.',

      /* ── Specs: Levels ── */
      'eyebrow-levels': 'Floor by Floor',
      'h2-levels':      'The Levels',

      'l1-title': 'Arrival, Serenity, and Private Retreat',
      'l1-p1':    'Arrival begins with an expansive garden that sets a stately tone before one reaches the residence. A discreet side gate provides pedestrian access, while a full sliding gate opens to a generous front porch capable of accommodating three cars comfortably with direct ingress and egress. For larger gatherings, the space extends to host up to six vehicles across the porch and frontage, with additional parking available just 20 metres away.',
      'l1-p2':    'Stepping inside, one is welcomed into a grand lobby anchored by a piano, seamlessly flowing into an expansive lounge area designed for both reception and repose. Running alongside the home is a tranquil lap pool, creating a continuous dialogue between water, architecture, and light.',
      'l1-p3':    'At the rear, a private helper\u2019s courtyard provides functional independence, complete with a dedicated helper\u2019s room and its own ensuite bath. Supporting spaces include a guest powder room, a storage room, and a bomb shelter. Upon entry, an extensive shoe cabinetry system \u2014 designed to accommodate hundreds of pairs \u2014 underscores both scale and practicality.',
      'l1-img-note': 'Sofa area was virtually staged. Lift, grand piano, ceiling and lights are original.',

      'l2-title': 'Formal Entertaining in a Column-Free Gallery',
      'l2-p1':    'The entire level unfolds as a rare, column-less floor plate spanning over 30 metres from front to back, offering uninterrupted sightlines across the formal living and dining spaces.',
      'l2-p2':    'At the rear, a refined dry kitchen forms the backbone of the level, complemented by a functional wet kitchen discreetly positioned to the side \u2014 efficient, practical, and designed for heavy cooking without compromising the main entertaining areas. Moving forward, a formal round dining table comfortably seats ten, followed by a more intimate four-seater setting near the lift landing \u2014 ideal for casual dining or conversation. A second powder room serves this level.',
      'l2-p3':    'Further ahead, a 12-seater long-table dining area doubles elegantly as an afternoon tea setting, transitioning seamlessly into the main living area. At the front, full-height glass panels open towards a wraparound water feature that can also function as a fish pond. Floor-to-ceiling sliding glass doors line the entire level, opening to railing fronts that blur the line between interior and exterior \u2014 transforming the space into a balcony-like experience when opened.',

      'l3-title': 'The Owner\u2019s Private Domain',
      'l3-p1':    'This level is entirely dedicated to the owner, conceived as a private sanctuary of scale and comfort. The owner\u2019s suite spans over 800 square feet, thoughtfully composed with a sleeping area, a private living corner, a full walk-in wardrobe, and a generously proportioned bathroom designed with an emphasis on space and indulgence.',
      'l3-p2':    'Beyond the suite, an additional 800 square feet unfolds into a full-fledged living and working area \u2014 a rare luxury that allows for complete separation between rest and productivity within the same private level. A junior ensuite room, configured with the sensibility of a refined hotel suite, completes this floor.',

      'level-schedule': 'Schedule for a Private Viewing',

      'l4-title': 'A Self-Contained Guest Residence',
      'l4-p1':    'Designed as a fully independent guest level, this floor allows visiting family or guests to occupy an entire private domain. It features a suite that mirrors the scale and intent of the owner\u2019s suite, complemented by two junior ensuite bedrooms at the rear.',
      'l4-p2':    'A comfortable living area ties the space together, offering guests both privacy and autonomy within the home.',

      'l5-title': 'Elevated Leisure and Entertaining Deck',
      'l5-p1':    'The top level is conceived as a comprehensive entertainment and lifestyle deck. At the rear, a dedicated washing area is set within an outdoor garden environment. Moving inward, the space opens into a recreational zone featuring a gym corner, mahjong table, foosball setup, and an eight-seater poker table \u2014 supported by a fridge and countertop for effortless hosting.',
      'l5-p2':    'Further forward lies a mini pickleball court, followed by a 10-seater lounge that can seamlessly transform into a private theatre or karaoke space. At the front terrace, a barbecue area comfortably accommodates 10 to 15 guests. From this elevated vantage point, one enjoys views of Marina Bay Sands, as well as direct sightlines to National Day and New Year\u2019s Eve fireworks \u2014 an experience reserved for only a select few vantage points in the city.',

      /* ── Specs: Highlights ── */
      'eyebrow-highlights': 'Key Features',
      'h2-highlights':      'Highlights',
      'hl-1':  'Absolute Crest of the Hill \u2014 Peak Elevation',
      'hl-2':  'Lap Pool Alongside the Home',
      'hl-3':  'Private Lift (L1\u2013L5)',
      'hl-4':  '6-Car Porch + Parking 20\u202fm Away',
      'hl-5':  'Column-Free 30\u202fm Gallery (L2)',
      'hl-6':  '12-Seater Long-Table Dining',
      'hl-7':  'Wraparound Water Feature / Fish Pond (L2)',
      'hl-8':  'Owner\u2019s Suite 800+ sqft + Private Study (L3)',
      'hl-9':  'Self-Contained Guest Level (L4)',
      'hl-10': 'Gym, Mahjong, Foosball\u00a0&\u00a0Poker (L5)',
      'hl-11': 'Mini Pickleball Court\u00a0&\u00a0Theatre Lounge (L5)',
      'hl-12': 'MBS Views\u00a0&\u00a0National Day Fireworks Sightlines',
      'hl-13': 'East West Line MRT \u2014 7 Min Walk',
      'hl-14': 'Direct Access to PIE\u00a0&\u00a0ECP Expressways',
      'hl-15': '12+ Bus Routes, 24-Hour Dining Nearby',
      'view-propertyguru': 'View on PropertyGuru',
      'arrange-viewing-cta': 'Arrange a Private Viewing',

      /* ── Specs: Gallery ── */
      'eyebrow-gallery': 'The Estate in Images',
      'h2-gallery':      'Gallery',

      /* ── Specs: Invitations ── */
      'eyebrow-invitations': 'Private Events',
      'h2-invitations':      'Invitations',
      'lead-invitations':    'The 661 Estate is built for hosting. From rooftop barbecues and poker nights to intimate dinners with the Singapore skyline as backdrop \u2014 generate a private invite link and share it with your guests in seconds.',
      'inv-card-1-title': 'Create an Invitation',
      'inv-card-1-p':     'Set the event title, a 60-character description, and date\u00a0&\u00a0time. Your personalised invite link is generated instantly \u2014 no account needed.',
      'inv-card-2-title': 'Private Sharing',
      'inv-card-2-p':     'Each invite link is uniquely encoded. Share it directly with guests \u2014 only those with the link can view the event details.',
      'inv-card-3-title': 'Guest Experience',
      'inv-card-3-p':     'Guests receive a luxury digital card with a one-tap WhatsApp RSVP, Google Maps directions, and an Add to Calendar button for both Apple and Google Calendar.',
      'wa-reach-out':     'Reach Out on WhatsApp',

      /* ── Host page ── */
      'eyebrow-host':      'Owner Portal',
      'title-host':        'Create an Invitation',
      'sub-host':          'Fill in the event details below to generate a shareable invite link for your guests at The 661 Estate.',
      'label-event-title': 'Event Title',
      'label-desc':        'Description',
      'label-date':        'Date\u00a0&\u00a0Time',
      'label-phone':       'Your WhatsApp Number',
      'hint-desc':         'Keep it punchy \u2014 your guests will see this on the invite.',
      'note-phone':        'Guests will send their RSVP directly to you on WhatsApp.',
      'btn-generate':      'Generate Invite Link',
      'result-label':      'Your Invite Link',
      'btn-copy':          'Copy',
      'btn-copied':        'Copied!',
      'result-note':       'Share this link with your guests. They will see the event details along with a map, calendar button, and RSVP via WhatsApp.',
      'preview-label':     'Preview',
      'footer-host':       '\u00a9 2025 The 661 Estate',
      'ph-event-title':    'e.g. Rooftop Dinner, Poker Night, Garden BBQ',
      'ph-event-desc':     'A short description of the event (60 characters max)',

      /* ── Invite page ── */
      'kicker-invited':   'You are invited',
      'meta-label-date':  'Date\u00a0&\u00a0Time',
      'meta-label-venue': 'Venue',
      'meta-value-venue': 'The 661 Estate, Singapore',
      'btn-rsvp':         'RSVP via WhatsApp',
      'btn-maps':         'View on Google Maps',
      'btn-gcal':         'Add to Google Calendar',
      'btn-acal':         'Add to Apple Calendar',
      'footer-hosted-at': 'Hosted at',
      'error-title':      'Invalid Invitation',
      'error-msg':        'This invite link is missing or has expired.<br>Please request a new link from the host.'
    },

    zh: {
      /* ── Landing page ── */
      'tagline':           '由野心铸就的家园。',
      'enter-estate':      '进入庄园',
      'estate-id':         '新加坡\u00a0\u00b7\u00a0建于\u00a02025',
      'tilt-hint':         '倾斜以探索',
      'location-badge':    '661\u00a0\u00b7\u00a0新加坡',

      /* ── Shared nav ── */
      'nav-overview':             '概览',
      'nav-experience':           '体验',
      'nav-levels':               '楼层',
      'nav-highlights':           '亮点',
      'nav-gallery':              '画廊',
      'nav-invitations':          '邀请函',
      'nav-arrange-viewing':      '预约看房',
      'nav-arrange-viewing-long': '预约私人看房',
      'nav-propertyguru':         'PropertyGuru\u00a0房源',
      'nav-home':                 '首页',

      /* ── Specs: Hero ── */
      'hero-kicker':  '661庄园\u00a0\u00b7\u00a0全新落成\u00a0\u00b7\u00a0约2025年6月竣工',
      'hero-title':   '峰顶之上，<br>尊贵庄园。',
      'stat-land':    '土地面积',
      'stat-sgfa':    '建筑面积',
      'stat-levels':  '五层楼',
      'hero-explore': '探索庄园',
      'scroll':       '向下',

      /* ── Specs: Overview ── */
      'eyebrow-overview': '物业简介',
      'h2-overview':      '概览',
      'lead-overview':    '约2025年6月竣工的现代建筑杰作。661庄园以五个独特楼层的精心打造空间，树立超豪华住宅的全新标杆。',
      'card-land-size':   '土地面积',
      'card-sgfa':        '建筑面积',
      'card-bedrooms':    '卧室',
      'card-bathrooms':   '浴室',
      'card-levels':      '楼层',
      'card-completion':  '竣工日期',

      /* ── Specs: Experience ── */
      'eyebrow-experience': '地段与气势',
      'h2-experience':      '峰顶之上的尊贵庄园',
      'lead-experience':    '本宅坐落于山顶最高处，占据飞地内最尊贵的地块之一。周围街道两侧的物业皆向下倾斜，而这座住宅则雄踞绝对制高点，享有无与伦比的高度、开阔视野与磅礴气势。',
      'experience-p1':      '便利设施与尊贵生活浑然一体。距宅不足30米即有加油站和便利店，而住宅恰处两条主干道之间，可享逾12条覆盖全岛的公交路线，其中多条直达市中心。',
      'experience-p2':      '地铁东西线步行仅需七分钟，周边更汇聚多样餐饮选择，众多24小时营业场所触手可及。住宅亦可便捷接入两条主要快速公路——PIE与ECP，前往中央商务区和樟宜机场皆轻松畅达。',

      /* ── Specs: Levels ── */
      'eyebrow-levels': '逐层导览',
      'h2-levels':      '楼层详情',

      'l1-title': '抵达、静谧与私人退隐',
      'l1-p1':    '抵达之旅始于一片宽阔花园，在步入居所之前便已奠定庄重基调。隐秘侧门提供步行入口，全幅滑动大门则开向宽敞前廊，可舒适停放三辆车辆，进出畅通无阻。若举办大型聚会，前廊与门前空间可容纳多达六辆车，且20米外另有额外停车位。',
      'l1-p2':    '步入室内，宏伟大堂以一架三角钢琴为核心，无缝延伸至宽阔的休息区，兼顾迎宾与休憩之用。宅侧贯通一道宁静泳道，水景、建筑与光影在此交融对话。',
      'l1-p3':    '宅后设有独立的工人庭院，配备专属工人房及独立浴室，功能自成一体。辅助空间包括访客洗手间、储藏室及防空掩体。入门处设有大型鞋柜系统，可容纳数百双鞋履，兼顾规模与实用。',
      'l1-img-note': '沙发区为虚拟布置，升降梯、三角钢琴、天花板及灯具均为原装。',

      'l2-title': '无柱展廊中的正式娱乐空间',
      'l2-p1':    '整个楼层呈现出罕见的无柱楼板格局，前后延伸逾30米，正式起居与餐饮空间一览无余。',
      'l2-p2':    '后部设有精致干厨，构成本层核心，旁侧辅以隐蔽的湿厨——高效实用，可承担重度烹饪而不影响主娱乐区。移步前方，圆形正式餐桌可容纳十位宾客，毗邻电梯厅的四人餐位则更具私密感，适合日常用餐或闲谈。本层另设第二洗手间。',
      'l2-p3':    '再往前，12人长桌餐厅可雅致转换为下午茶场景，无缝衔接主起居区。前方全高玻璃幕墙朝向环绕式水景（亦可作为鱼池）。整层落地滑动玻璃门贯穿始终，打开后与护栏相接，室内外界限消弭，营造出阳台般的开放体验。',

      'l3-title': '业主的私人领地',
      'l3-p1':    '本层完全为业主所用，是一座兼具规模与舒适的私密圣地。主卧套房面积逾800平方英尺，精心布局包含睡眠区、私人起居角、全套步入式衣帽间，以及注重空间感与享受感的宽敞浴室。',
      'l3-p2':    '套房之外，另有逾800平方英尺的完整起居与工作区域——这一罕见的奢华配置，令业主可在同一私密楼层内彻底分离休息与工作状态。一间小型独立套房，以精品酒店套间的品质打造，为本层画上完美句点。',

      'level-schedule': '预约私人看房',

      'l4-title': '独立完整的宾客居所',
      'l4-p1':    '本层作为完全独立的宾客区域而设计，访客家人或宾客可独占整个私人领地。其中设有一间规模与格调媲美业主套房的套间，后方另有两间小型独立套房。',
      'l4-p2':    '舒适的起居区将整个空间融为一体，令宾客在家中兼享私密与自由。',

      'l5-title': '高空休闲娱乐甲板',
      'l5-p1':    '顶层被打造为全面的娱乐与生活方式甲板。后方在户外花园环境中设有专属洗涤区。向前延伸，空间开阔为休闲娱乐区，内设健身角、麻将桌、桌式足球台及八人扑克桌，并配备冰箱与台面，轻松款待宾客。',
      'l5-p2':    '再往前有迷你匹克球场，随后是可灵活转换为私人影院或卡拉OK空间的10人休息区。前方露台烧烤区可舒适容纳10至15位宾客。从这一制高点放眼望去，可欣赏滨海湾金沙的璀璨景致，并直击国庆日与跨年烟花——这样的视野，全城仅有寥寥数处。',

      /* ── Specs: Highlights ── */
      'eyebrow-highlights': '核心亮点',
      'h2-highlights':      '亮点',
      'hl-1':  '山顶绝对制高点——极致高度',
      'hl-2':  '宅侧泳道',
      'hl-3':  '私人电梯（L1–L5）',
      'hl-4':  '六车门廊\u00a0+\u00a020米外停车位',
      'hl-5':  'L2\u00a0无柱30米长廊',
      'hl-6':  '12人长桌餐厅',
      'hl-7':  'L2\u00a0环绕式水景/鱼池',
      'hl-8':  'L3\u00a0业主套房800+平方英尺\u00a0+\u00a0私人书房',
      'hl-9':  'L4\u00a0独立宾客楼层',
      'hl-10': 'L5\u00a0健身房、麻将、桌式足球\u00a0&\u00a0扑克桌',
      'hl-11': 'L5\u00a0迷你匹克球场\u00a0&\u00a0影院休闲区',
      'hl-12': '滨海湾金沙景观\u00a0&\u00a0国庆烟花直视',
      'hl-13': '地铁东西线——步行7分钟',
      'hl-14': '直通PIE\u00a0&\u00a0ECP快速公路',
      'hl-15': '逾12条公交路线，附近24小时餐饮',
      'view-propertyguru':   '在PropertyGuru上查看',
      'arrange-viewing-cta': '预约私人看房',

      /* ── Specs: Gallery ── */
      'eyebrow-gallery': '庄园影像',
      'h2-gallery':      '画廊',

      /* ── Specs: Invitations ── */
      'eyebrow-invitations': '私人活动',
      'h2-invitations':      '邀请函',
      'lead-invitations':    '661庄园专为款待而生。无论是屋顶烧烤、扑克之夜，还是以新加坡天际线为幕的亲密晚宴——即刻生成私密邀请链接，数秒内分享给宾客。',
      'inv-card-1-title': '创建邀请函',
      'inv-card-1-p':     '设定活动标题、60字符描述及日期时间，个性化邀请链接即时生成——无需注册账号。',
      'inv-card-2-title': '私密分享',
      'inv-card-2-p':     '每条邀请链接均经过唯一编码，可直接分享给宾客——仅持有链接者方可查看活动详情。',
      'inv-card-3-title': '宾客体验',
      'inv-card-3-p':     '宾客将收到精美数字邀请卡，内含一键WhatsApp回复、Google地图导航，以及适用于Apple和Google日历的添加按钮。',
      'wa-reach-out':     '通过WhatsApp联系',

      /* ── Host page ── */
      'eyebrow-host':      '业主入口',
      'title-host':        '创建邀请函',
      'sub-host':          '请填写以下活动详情，为您在661庄园的宾客生成可分享的邀请链接。',
      'label-event-title': '活动标题',
      'label-desc':        '描述',
      'label-date':        '日期和时间',
      'label-phone':       '您的WhatsApp号码',
      'hint-desc':         '简洁有力——宾客将在邀请函上看到这段描述。',
      'note-phone':        '宾客将通过WhatsApp直接向您发送回复。',
      'btn-generate':      '生成邀请链接',
      'result-label':      '您的邀请链接',
      'btn-copy':          '复制',
      'btn-copied':        '已复制！',
      'result-note':       '将此链接分享给宾客。他们将看到活动详情、地图、日历按钮及WhatsApp回复功能。',
      'preview-label':     '预览',
      'footer-host':       '\u00a9\u00a02025\u00a0661庄园',
      'ph-event-title':    '例如：屋顶晚宴、扑克之夜、花园烧烤',
      'ph-event-desc':     '活动简短描述（最多60个字符）',

      /* ── Invite page ── */
      'kicker-invited':   '诚邀您',
      'meta-label-date':  '日期和时间',
      'meta-label-venue': '地点',
      'meta-value-venue': '661庄园，新加坡',
      'btn-rsvp':         '通过WhatsApp确认出席',
      'btn-maps':         '在Google地图上查看',
      'btn-gcal':         '添加到Google日历',
      'btn-acal':         '添加到Apple日历',
      'footer-hosted-at': '举办于',
      'error-title':      '无效邀请',
      'error-msg':        '此邀请链接丢失或已过期。<br>请向主办方索取新的链接。'
    }
  };

  /* ── STATE ─────────────────────────────────────────────── */
  var currentLang = 'en';
  try { currentLang = localStorage.getItem('661-lang') || 'en'; } catch (e) {}

  /* ── APPLY ─────────────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    try { localStorage.setItem('661-lang', lang); } catch (e) {}

    document.documentElement.lang = (lang === 'zh') ? 'zh-Hans' : 'en';

    /* plain-text nodes */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el  = els[i];
      var key = el.getAttribute('data-i18n');
      var val = T[lang] && T[lang][key];
      if (val != null) el.textContent = val;
    }

    /* HTML nodes (elements containing inline tags like <br> or <em>) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hEl  = htmlEls[j];
      var hKey = hEl.getAttribute('data-i18n-html');
      var hVal = T[lang] && T[lang][hKey];
      if (hVal != null) hEl.innerHTML = hVal;
    }

    /* placeholder attributes on inputs/textareas */
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var k = 0; k < phEls.length; k++) {
      var pEl  = phEls[k];
      var pKey = pEl.getAttribute('data-i18n-placeholder');
      var pVal = T[lang] && T[lang][pKey];
      if (pVal != null) pEl.placeholder = pVal;
    }

    /* update toggle button labels */
    var btns = document.querySelectorAll('.lang-toggle');
    for (var m = 0; m < btns.length; m++) {
      btns[m].textContent = (lang === 'zh') ? 'EN' : '中文';
      btns[m].setAttribute('aria-label', (lang === 'zh') ? 'Switch to English' : '切换中文');
      btns[m].setAttribute('lang', (lang === 'zh') ? 'en' : 'zh-Hans');
    }
  }

  /* ── INIT ──────────────────────────────────────────────── */
  function initLang() {
    var btns = document.querySelectorAll('.lang-toggle');
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          applyLang(currentLang === 'zh' ? 'en' : 'zh');
        });
      }(btns[i]));
    }
    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  /* ── PUBLIC API ────────────────────────────────────────── */
  window.i18nLang = function () { return currentLang; };
  window.i18nT    = function (key) { return (T[currentLang] && T[currentLang][key]) || key; };

}());
