export type ModCategory = "educational" | "fun";

export type Mod = {
  id: string;
  name: string;
  emoji: string;
  category: ModCategory;
  shortDescription: string;
  fullDescription: string;
  hotkeys?: { key: string; description: string }[];
  officialUrl: string;
  officialLabel: string;
  version?: string;
};

export const mods: Mod[] = [
  // ===== НАВЧАЛЬНІ =====
  {
    id: "cc-tweaked",
    name: "CC:Tweaked",
    emoji: "💻",
    category: "educational",
    version: "1.116.2 (NeoForge 1.21.1)",
    shortDescription:
      "Пишеш Lua-код — черепашки-роботи копають, будують і навіть воюють замість тебе.",
    fullDescription:
      "Це справжня мова програмування прямо в Minecraft! Ставиш комп'ютер, відкриваєш термінал — і починаєш писати код на Lua. А потім даєш черепашці-роботу програму, і вона йде копати шахту, поки ти п'єш чай. Ми не пишемо код в ігровому терміналі (це незручно) — на сервері Kodomandry є власний веб-редактор CCTweak з підсвіткою і симулятором.",
    hotkeys: [
      { key: "ПКМ по комп'ютеру", description: "відкрити термінал" },
      { key: "Ctrl+T", description: "завершити програму" },
      { key: "Ctrl+S", description: "вимкнути комп'ютер" },
      { key: "Ctrl+R", description: "перезавантажити" },
    ],
    officialUrl: "https://tweaked.cc/",
    officialLabel: "tweaked.cc",
  },
  {
    id: "create",
    name: "Create",
    emoji: "⚙️",
    category: "educational",
    version: "6.0.9 (NeoForge 1.21.1)",
    shortDescription:
      "Шестерні, вали, конвеєри — будуй справжні фабрики, як інженер на заводі.",
    fullDescription:
      "Найкрутіший інженерний мод! Замість магії тут — механіка: водяні колеса крутять вали, вали крутять шестерні, шестерні запускають цілі виробничі лінії. Треба думати про RPM (швидкість обертання), stress units (навантаження) — прямо як у справжньому заводі. Увімкни режим Ponder (іконка з окулярами або утримуй W з предметом) — він покаже 3D-анімацію як усе працює.",
    hotkeys: [
      { key: "W (утримуй на предметі)", description: "показати Ponder-анімацію" },
      { key: "ПКМ по гайковому ключу", description: "розібрати блок" },
      { key: "ПКМ у повітря з ключем", description: "повернути блок" },
    ],
    officialUrl: "https://wiki.createmod.net/",
    officialLabel: "wiki.createmod.net",
  },
  {
    id: "worldedit",
    name: "WorldEdit",
    emoji: "🪄",
    category: "educational",
    version: "7.3.8 (NeoForge 1.21.1)",
    shortDescription:
      "Магія команд: одним рядком створюєш гору, сферу чи замок на 10 000 блоків.",
    fullDescription:
      "Командний рядок прямо в Minecraft! Виділяєш область дерев'яною сокирою, пишеш //set stone — і маєш кам'яну коробку розміром як твій будинок. //sphere, //cyl, //pyramid — геометрія стає живою. Це чудовий міст між грою і справжнім терміналом програміста.",
    hotkeys: [
      { key: "ЛКМ дерев'яною сокирою", description: "позначка #1" },
      { key: "ПКМ дерев'яною сокирою", description: "позначка #2" },
      { key: "//set <блок>", description: "заповнити виділення" },
      { key: "//undo", description: "скасувати останню дію" },
    ],
    officialUrl: "https://worldedit.enginehub.org/en/latest/",
    officialLabel: "worldedit.enginehub.org",
  },
  {
    id: "visualmodder",
    name: "VisualModder",
    emoji: "🧩",
    category: "educational",
    shortDescription:
      "Перший крок у програмування: складаєш програму з кольорових блоків, як з LEGO.",
    fullDescription:
      "Якщо ще рано друкувати код — починай тут! Відкриваєш https://visualmodder.org у браузері, з'єднуєш із грою, і перетягуєш блоки 'якщо... то...', 'повторити 10 разів', 'поставити блок'. Тиснеш Run — і у грі щось відбувається! Ідеально для перших кроків у програмуванні.",
    hotkeys: [
      { key: "браузер", description: "відкрий visualmodder.org" },
      { key: "Run (у редакторі)", description: "запустити програму" },
    ],
    officialUrl: "https://visualmodder.org/",
    officialLabel: "visualmodder.org",
  },
  {
    id: "raspberryjuice",
    name: "RaspberryJuice (Python)",
    emoji: "🐍",
    category: "educational",
    shortDescription:
      "Пишеш скрипти на Python — і твій код рухає гори та будує спіральні вежі.",
    fullDescription:
      "Це для тих, хто хоче справжнього програмування. На сервері увімкнений плагін RaspberryJuice (порт 4711). Відкриваєш свій улюблений редактор (VS Code, PyCharm), ставиш бібліотеку mcpi — і твій Python-скрипт керує грою! Будуй сфери по формулі, генеруй фрактали, пиши лабіринти. Python — це #1 мова у світі, справжній інструмент справжніх айтішників.",
    hotkeys: [
      { key: "pip install mcpi", description: "встановити бібліотеку" },
      { key: "mc.setBlock(x,y,z,id)", description: "поставити блок з коду" },
    ],
    officialUrl: "https://www.stuffaboutcode.com/p/minecraft-api-reference.html",
    officialLabel: "API Reference",
  },
  {
    id: "redstone",
    name: "Redstone (ванільний)",
    emoji: "🔴",
    category: "educational",
    shortDescription:
      "Червоний пил — але насправді це процесор: AND, OR, NOT, пам'ять і лічильники.",
    fullDescription:
      "Редстоун — це не магія, це цифрова електроніка! З факелів, повторювачів і компараторів збираєш логічні гейти (AND, OR, NOT, XOR) — ті самі, з яких зроблений процесор твого комп'ютера. Люди вже зібрали у Minecraft цілі калькулятори і навіть гру Pokemon усередині Minecraft. Хочеш зрозуміти як працює комп'ютер? Починай тут.",
    hotkeys: [
      { key: "ПКМ по повторювачу", description: "змінити затримку" },
      { key: "ПКМ по компаратору", description: "змінити режим" },
    ],
    officialUrl: "https://minecraft.wiki/w/Tutorial:Redstone",
    officialLabel: "minecraft.wiki (Redstone)",
  },
  {
    id: "car",
    name: "Ultimate Car Mod",
    emoji: "🚗",
    category: "educational",
    version: "1.0.46 (NeoForge 1.21.1)",
    shortDescription:
      "Будуєш автомобілі, заправки, дороги — цілу транспортну мережу.",
    fullDescription:
      "Тут ти переробляєш нафту на бензин, ставиш заправні станції, кладеш асфальтові дороги і їздиш на справжніх авто! Гарний привід поговорити про транспортну інфраструктуру, логістику та хімію (переробка нафти — це реально крута штука).",
    officialUrl: "https://modrinth.com/mod/ultimate-car-mod",
    officialLabel: "Modrinth",
  },

  {
    id: "additional-redstone",
    name: "Additional Redstone",
    emoji: "🟥",
    category: "educational",
    version: "1.2.3 (NeoForge 1.21.1)",
    shortDescription:
      "Готові блоки AND, OR, XOR — логічні схеми без кілометрів редстоунового пилу.",
    fullDescription:
      "Замість будування гейтів із факелів і повторювачів — одразу готові блоки: AND, OR, NOT, XOR, лічильники, таймери. Складні схеми вміщуються у кілька блоків, тож можна фокусуватися на логіці, а не на будівельних муках.",
    officialUrl: "https://modrinth.com/mod/additional-redstone",
    officialLabel: "Modrinth",
  },
  {
    id: "create-crafts-additions",
    name: "Create Crafts & Additions",
    emoji: "⚡",
    category: "educational",
    version: "1.5.10 (NeoForge 1.21.1)",
    shortDescription:
      "Міст між обертанням Create і електрикою — тепер шестерні заряджають батарейки.",
    fullDescription:
      "Електричний мотор перетворює струм на обертання, альтернатор — навпаки. Використовуй водяне колесо як генератор, заряджай акумулятори, передавай енергію по дротах. Класна ілюстрація закону збереження енергії — перетворюй її з однієї форми на іншу.",
    officialUrl: "https://modrinth.com/mod/createaddition",
    officialLabel: "Modrinth",
  },
  {
    id: "integrated-dynamics",
    name: "Integrated Dynamics",
    emoji: "🔗",
    category: "educational",
    version: "1.32.4 (NeoForge 1.21.1)",
    shortDescription:
      "Логічні мережі зі змінними і операторами — майже справжнє програмування, але з дротами.",
    fullDescription:
      "Будуєш мережі, де дроти переносять не тільки сигнал, а цілі типи даних: числа, булеві значення, рядки, списки. Пишеш умови: 'якщо в скрині менше 64 залізних — видобути ще'. Це функціональне програмування в ігровій формі — найближче до реального коду після CC:Tweaked.",
    officialUrl: "https://modrinth.com/mod/integrated-dynamics",
    officialLabel: "Modrinth",
  },
  {
    id: "integrated-tunnels",
    name: "Integrated Tunnels",
    emoji: "🚇",
    category: "educational",
    version: "1.9.4-606 (NeoForge 1.21.1)",
    shortDescription:
      "Телепортує предмети та рідини через логічні мережі — кур'єрська служба без запізнень.",
    fullDescription:
      "Доповнення до Integrated Dynamics: імпортуй і експортуй предмети, рідини та енергію прямо через логічні мережі. Фільтруй за умовами, встановлюй пріоритети, автоматизуй склади. Без труб — усе через мережу.",
    officialUrl: "https://modrinth.com/mod/integrated-tunnels",
    officialLabel: "Modrinth",
  },
  {
    id: "integrated-crafting",
    name: "Integrated Crafting",
    emoji: "🧪",
    category: "educational",
    version: "1.4.5-539 (NeoForge 1.21.1)",
    shortDescription:
      "Автокрафт через мережу: 'хочу 64 блоки заліза' — і ланцюг сам усе зробить.",
    fullDescription:
      "Описуєш рецепт як задачу для мережі: 'мені потрібно N цих предметів'. Мережа знаходить інгредієнти, запускає крафти у правильному порядку і видає результат. Це як замовити піцу — лише без кур'єра. Чудовий спосіб пояснити, що таке черга задач і залежності.",
    officialUrl: "https://modrinth.com/mod/integrated-crafting",
    officialLabel: "Modrinth",
  },
  {
    id: "create-connected",
    name: "Create: Connected",
    emoji: "🔌",
    category: "educational",
    version: "1.1.13 (NeoForge 1.21.1)",
    shortDescription:
      "Розширює Create: Kinetic Bridge, Kinetic Battery, Cross Connector — складніша механіка.",
    fullDescription:
      "Addon до Create, що додає нові способи передавати обертання і зберігати енергію. Kinetic Battery накопичує оберти і віддає їх потім, Kinetic Bridge передає обертання через стіни, Cross Connector з'єднує вали під прямим кутом без шестерень. Відкриває нові інженерні задачі — як спроектувати систему, що продовжує працювати, коли водяне колесо зупиняється.",
    officialUrl: "https://modrinth.com/mod/create-connected",
    officialLabel: "Modrinth",
  },
  {
    id: "tfmg",
    name: "TFMG (The Factory Must Grow)",
    emoji: "🏭",
    category: "educational",
    version: "1.2.0 (NeoForge 1.21.1)",
    shortDescription:
      "Дизельні двигуни, електрика, заводи — індустріальна революція в Create.",
    fullDescription:
      "Переходиш від водяних коліс до справжньої промисловості: видобуваєш нафту, переробляєш її на дизель, заливаєш у двигуни. З'являється електричний струм — мотори, лампи, машини. Автоматизуй ще більше! Вибирай паливо, ефективність, масштаб. Чудове продовження Create, коли механіка вже освоєна.",
    officialUrl: "https://modrinth.com/mod/tfmg",
    officialLabel: "Modrinth",
  },

  // ===== РОЗВАЖАЛЬНІ =====
  {
    id: "cobblemon",
    name: "Cobblemon",
    emoji: "🔴",
    category: "fun",
    version: "1.7.3 (NeoForge 1.21.1)",
    shortDescription:
      "Покемони в Minecraft! Лови, тренуй, б'ються — майже як у справжній грі.",
    fullDescription:
      "Так, це покемони! Причому не криво-пришиті, а зроблені з любов'ю: 1000+ істот, офіційний покебол, рівні, еволюції, битви за правилами. Ловиш Пікачу, тренуєш Чармандера, воюєш з друзями на арені. Стане в нагоді, коли набридло копати шахти.",
    hotkeys: [
      { key: "R", description: "надіслати/відкликати покемона" },
      { key: "ПКМ по покебольному столу", description: "крафт покеболів" },
    ],
    officialUrl: "https://cobblemon.com/",
    officialLabel: "cobblemon.com",
  },
  {
    id: "alexsmobs",
    name: "Alex's Mobs",
    emoji: "🦎",
    category: "fun",
    shortDescription:
      "100+ нових істот: від крабів-п'яниць до велетенських кайдзю-черепах.",
    fullDescription:
      "Хтось подумав: 'У Minecraft мало тварин!' — і зробив понад сотню нових: страусів, орков, гієн, кайманів, гігантських кальмарів. Кожна зі своєю поведінкою. Приручиш оленятко? Осідлаєш слона? Виживеш від дракона-кайдзю? Перевіряй!",
    officialUrl: "https://modrinth.com/mod/alexs-mobs",
    officialLabel: "Modrinth",
  },
  {
    id: "mutant-monsters",
    name: "Mutant Monsters",
    emoji: "👹",
    category: "fun",
    version: "21.1.1 (NeoForge 1.21.1)",
    shortDescription:
      "Звичайний зомбі? Ні, мутант з трьома головами, який рве твій будинок.",
    fullDescription:
      "Додає босів-мутантів: Mutant Zombie, Mutant Skeleton, Mutant Creeper, Mutant Enderman. Це не просто 'сильніші' — у них унікальні атаки і своя механіка бою. Справжній виклик для досвідчених гравців.",
    officialUrl: "https://modrinth.com/mod/mutant-monsters",
    officialLabel: "Modrinth",
  },
  {
    id: "walkers",
    name: "Walkers",
    emoji: "🧟",
    category: "fun",
    shortDescription:
      "Ходячі мерці прийшли до Minecraft. Вночі краще не виходити.",
    fullDescription:
      "Мод додає ходячих мерців в стилі The Walking Dead. Вони повільні, але в натовпі нестримні. Будуй паркани, запасайся стрілами, збирайся в команди. Атмосфера апокаліпсису гарантована.",
    officialUrl: "https://modrinth.com/mod/walkers",
    officialLabel: "Modrinth",
  },
  {
    id: "farmers-delight",
    name: "Farmer's Delight",
    emoji: "🍳",
    category: "fun",
    version: "1.2.11 (NeoForge 1.21.1)",
    shortDescription:
      "Кулінарна школа: ріжеш, смажиш, варюш — і нарешті їси не тільки хліб.",
    fullDescription:
      "Додає кухонні інструменти: ніж, сковороду, плиту, обробну дошку. Вирощуєш помідори, ріжеш їх на дошці, варюш суп у котлі, подаєш на стіл. Їжа реально смачна — дає бафи. Ідеально, щоб відкрити в Minecraft власний ресторан.",
    officialUrl: "https://farmersdelight.fandom.com/wiki/Farmer%27s_Delight_Wiki",
    officialLabel: "Wiki",
  },
  {
    id: "journeymap",
    name: "JourneyMap",
    emoji: "🗺️",
    category: "fun",
    version: "6.0.0-beta.63",
    shortDescription:
      "Міні-карта + повноекранна карта світу. Більше ніколи не заблукаєш.",
    fullDescription:
      "Картограф-автомат: поки ти ходиш по світу, карта сама малюється. У кутку — міні-карта, натиснеш J — бачиш усе. Став вейпоінти на важливі місця (шахта, друг, алмазна печера), і телепортуйся очима.",
    hotkeys: [
      { key: "J", description: "відкрити повну карту" },
      { key: "B", description: "створити вейпоінт" },
      { key: "M", description: "налаштування міні-карти" },
    ],
    officialUrl: "https://journeymap.readthedocs.io/en/latest/",
    officialLabel: "Documentation",
  },
  {
    id: "ava",
    name: "AVA (Modern Warfare)",
    emoji: "🔫",
    category: "fun",
    version: "2.9.1 (NeoForge 1.21.1)",
    shortDescription:
      "Сучасна зброя: автомати, пістолети, приціли. PUBG у вигляді кубиків.",
    fullDescription:
      "Додає реалістичну вогнепальну зброю: штурмові гвинтівки, пістолети, глушники, оптичні приціли, магазини. Використовується для PvP-ігор у визначених зонах. Завжди за згодою учасників!",
    officialUrl: "https://modrinth.com/mod/ava",
    officialLabel: "Modrinth",
  },
  {
    id: "inventory-pets",
    name: "Inventory Pets",
    emoji: "🐾",
    category: "fun",
    version: "2.2.8 (NeoForge 1.21.1)",
    shortDescription:
      "Крихітні вихованці у твоєму інвентарі дають бафи і милі звуки.",
    fullDescription:
      "Маленькі тваринки, які сидять у інвентарі і дають особливі здібності: хтось дає нічний зір, хтось рятує від падіння, хтось годує. Просто годуй їх їхніми улюбленими ласощами — і вони працюють на тебе.",
    officialUrl: "https://modrinth.com/mod/inventory-pets",
    officialLabel: "Modrinth",
  },
  {
    id: "custom-skins",
    name: "Custom Skin Loader",
    emoji: "👕",
    category: "fun",
    version: "14.28",
    shortDescription:
      "Твій власний скін на сервері — без преміум-акаунта Minecraft.",
    fullDescription:
      "Дозволяє мати власний скін навіть без офіційного акаунта. Підтримує кілька джерел скінів, кейпи, HD-текстури. Тепер ти можеш виглядати як твій улюблений персонаж.",
    officialUrl: "https://modrinth.com/mod/customskinloader",
    officialLabel: "Modrinth",
  },
  {
    id: "create-aeronautics",
    name: "Create: Aeronautics",
    emoji: "✈️",
    category: "fun",
    version: "1.0.3 bundled (NeoForge 1.21.1)",
    shortDescription:
      "Літаки, дирижаблі, автомобілі з реальною фізикою — збирай свій транспорт з Create.",
    fullDescription:
      "Найкрутіше доповнення до Create: тепер твої контрапшени літають! Будуєш крилатий літак, дирижабль, гоночне авто — і воно реально літає чи їздить з фізикою (повітряний опір, гравітація, керування). Використовує фізичний движок Sable під капотом. Обережно: важкий мод, потребує потужного ПК. Якщо лагає — попроси вчителя видалити.",
    officialUrl: "https://modrinth.com/mod/create-aeronautics",
    officialLabel: "Modrinth",
  },
  {
    id: "create-interiors",
    name: "Create: Interiors",
    emoji: "🛋️",
    category: "fun",
    version: "0.6.1 (NeoForge 1.21.1)",
    shortDescription:
      "Меблі та декор у стилі Create — стільці, стіл, дивани, кухонна техніка.",
    fullDescription:
      "Тепер твій дім може виглядати як справжній дім: м'які крісла, обідній стіл, диван, ліжко з подушками, кухонна плита та шафки — все у фірмовому стилі Create з мідними і латунними акцентами. Чистий декор без механіки — просто щоб зробити базу затишною.",
    officialUrl: "https://modrinth.com/mod/create-interiors",
    officialLabel: "Modrinth",
  },
];

export const educationalMods = mods.filter((m) => m.category === "educational");
export const funMods = mods.filter((m) => m.category === "fun");
