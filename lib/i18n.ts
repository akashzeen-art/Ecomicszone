export type Language = "ar" | "en"

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: "بيت",
      library: "مكتبة",
      logo: "موسوعة القصص المصورة",
    },
    // Common
    common: {
      readNow: "اقرأ الآن",
      details: "التفاصيل",
      download: "تحميل",
      viewAll: "عرض الكل",
      trending: "تتجه",
      popular: "شائع",
      new: "جديد",
      rating: "التقييم",
      views: "المشاهدات",
      episodes: "حلقات",
      series: "سلسلة",
    },
    // Home page
    home: {
      hero: {
        title: "موسوعة القصص المصورة",
        subtitle: "انغمس في عالم المجلات المذهل حيث يصبح الأبطال أحياءً ولا تنتهي القصص أبدًا",
        cta: "اكتشف المجلة",
        magazines: "مجلة",
        artists: "الفنانين",
        readers: "القراء",
      },
      spotlight: {
        title: "في دائرة الضوء",
        subtitle: "القصص المصورة المميزة لهذا الأسبوع",
        badge: "أفضل مجلة لهذا الأسبوع",
        spotlightLabel: "تسليط الضوء:",
        stats: {
          readers: "القراء",
          issues: "مشاكل",
          rating: "تصنيف",
        },
        summaries: {
          batman: "انطلق في مغامرة مع الفارس المظلم في مدينة جوثام. باتمان يواجه أعداءه في معارك ملحمية.",
          mickeyMouse: "انضم إلى ميكي ماوس في مغامراته الشيقة مع أصدقائه في عالم مليء بالمرح والإثارة.",
          donaldDuck: "بطوط في مغامرات مضحكة مع عائلته وأصدقائه في قصص مليئة بالمرح والكوميديا.",
        },
      },
      trendingComics: {
        badge: "تتجه الآن",
        title: "مجلة ساخنة هذا الأسبوع",
        subtitle: "اكتشف المجلة الأكثر شعبية التي يتحدث عنها الجميع",
      },
      latestReleases: {
        title: "أحدث",
        titleHighlight: "الإصدارات",
        subtitle: "قصص ومغامرات جديدة مباشرة من المطبعة الرقمية",
        viewAll: "عرض جميع الإصدارات",
        status: {
          new: "جديد",
          hot: "ساخن",
          trending: "تتجه",
          popular: "شائع",
        },
      },
      topRated: {
        badge: "الأعلى تقييماً",
        title: "أعلى",
        titleHighlight: "التقييمات",
        subtitle: "الأفضل من الأفضل - المجلات التي حصلت على أعلى إشادة من مجتمعنا",
        reviews: "مراجعة",
      },
      topArtists: {
        badge: "الفنانين المميزين",
        title: "أفضل",
        titleHighlight: "الفنانين",
        subtitle: "تعرف على المبدعين الموهوبين وراء مجلاتك المفضلة",
        followers: "متابع",
        works: "أعمال",
        follow: "متابعة",
        viewWorks: "عرض الأعمال",
      },
      newsletter: {
        title: "ابق في",
        titleHighlight: "الحلقة!",
        subtitle: "احصل على أحدث إصدارات المجلات والمحتوى الحصري والعروض الخاصة مباشرة إلى بريدك الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        subscribers: "مشترك",
        weekly: "أسبوعي",
        updates: "تحديثات",
        exclusive: "حصري",
        content: "محتوى",
        welcome: "مرحباً بك في",
        welcomeHighlight: "المجتمع!",
        thankYou: "شكراً للاشتراك! ستصلك رسالتك الإخبارية الأولى قريباً مع محتوى مجلة حصري وتحديثات.",
      },
      topSeries: {
        badge: "أعلى سلسلة",
        title: "الأكثر شعبية",
        titleHighlight: "مسلسل",
        subtitle: "السلسلة التي استحوذت على ملايين القراء حول العالم",
        issues: "حلقات",
        subscribers: "المشتركين",
        rating: "تصنيف",
        read: "يقرأ",
        follow: "يتبع",
        ongoing: "مستمر",
        completed: "مكتمل",
      },
      newArrivals: {
        title: "جديد الوصول",
        subtitle: "اكتشف أحدث المجلات التي وصلت للتو إلى رفوفنا الرقمية",
        badge: "الإصدارات الجديدة",
        new: "جديد",
      },
      trending: {
        title: "تتجه الآن",
        subtitle: "اكتشف المجلة الأكثر شعبية التي يتحدث عنها الجميع",
        badge: "مجلة ساخنة هذا الأسبوع",
      },
    },
    // Library page
    library: {
      title: "المكتبة",
      subtitle: "استكشف مجموعتنا الكاملة من القصص المصورة",
      search: {
        title: "مجلة",
        titleHighlight: "مكتبة",
        subtitle: "اكتشف مجلتك المفضلة القادمة من مجموعتنا الواسعة",
        placeholder: "ابحث عن المجلة والشخصيات والمؤلفين...",
        results: "نتائج البحث",
        recentSearches: "عمليات البحث الأخيرة",
        trending: "تتجه",
      },
      filters: "الفلاتر",
      sortBy: "ترتيب حسب",
      popular: "الأكثر شعبية",
      new: "الأحدث",
      trending: "الأكثر توجهاً",
      popularComics: {
        badge: "المفضلة لجميع الأوقات",
        title: "مجلة شعبية",
        titleHighlight: "كل الوقت",
        subtitle: "المجلات الأكثر شعبية والتي استحوذت على قلوب القراء في جميع أنحاء العالم",
        viewAll: "عرض جميع المجلات الشعبية",
      },
      series: {
        batman: {
          title: "قصص باتمان",
          subtitle: "أجواء جوثام المظلمة ومواجهات فارس الظلام مع أخطر الأشرار.",
          badge: "سلسلة باتمان",
        },
        donaldDuck: {
          title: "قصص بطوط",
          subtitle: "مغامرات بطوط الكوميدية المليئة بالمواقف المضحكة وسوء الحظ.",
          badge: "سلسلة بطوط",
        },
        mickeyMouse: {
          title: "قصص ميكي ماوس",
          subtitle: "استكشف مغامرات ميكي ماوس الكلاسيكية المليئة بالمرح والإثارة مع أصدقائه.",
          badge: "سلسلة ميكي ماوس",
        },
      },
      recentlyUpdated: {
        badge: "محتوى جديد",
        title: "حديثاً",
        titleHighlight: "تم التحديث",
        subtitle: "ابق على اطلاع بأحدث الفصول والتحديثات من سلسلتك المفضلة",
        updated: "تم التحديث",
        newChapter: "فصل جديد",
      },
      bookShelf: {
        badge: "رف الكتب الرقمية",
        title: "كتاب المجلة",
        titleHighlight: "الرف",
        subtitle: "تصفح مجموعتنا من الكتب مع تجربة رفوف كتب ثلاثية الأبعاد واقعية",
        volume: "المجلد",
        comics: {
          infinityEpic: {
            title: "ملحمة اللانهاية",
            volume: "المجلد 1-12",
          },
          cosmicLegends: {
            title: "الأساطير الكونية",
            volume: "المجلد 1-8",
          },
          shadowWorld: {
            title: "سجلات عالم الظل",
            volume: "المجلد 1-15",
          },
          neonWarriors: {
            title: "محاربي النيون",
            volume: "المجلد 1-6",
          },
          timeGuardians: {
            title: "حراس الوقت",
            volume: "المجلد 1-9",
          },
          mysticAcademy: {
            title: "أكاديمية ميستيك",
            volume: "المجلد 1-11",
          },
        },
      },
      reviews: {
        title: "قارئ",
        titleHighlight: "التعليقات",
        subtitle: "شاهد ما يعتقده مجتمعنا حول مجلاتهم المفضلة",
        helpful: "مراجعة مفيدة",
        reply: "رد",
        shareOpinion: "شارك رأيك",
        helpReaders: "ساعد القراء الآخرين على اكتشاف المجلات المذهلة من خلال مشاركة أفكارك",
        writeReview: "اكتب مراجعة",
      },
      magazines: {
        episode: "الحلقة",
        genres: {
          superhero: "خارقة",
          cyberpunk: "السايبربانك",
          fantasy: "خيالي",
          sciFi: "خيال علمي",
          mystery: "أُحجِيَّة",
          action: "فعل",
        },
        newArrivals: {
          quantumHeroes: {
            title: "أبطال الكم: حرب الأكوان المتعددة",
            description: "تبدأ المعركة النهائية عبر الحقائق اللانهائية",
          },
          cyberSamurai: {
            title: "سجلات الساموراي السيبراني",
            description: "الشرف القديم يلتقي بالتكنولوجيا المستقبلية",
          },
          mysteriousWorlds: {
            title: "عوالم غامضة: عودة التنين",
            description: "استيقظت التنانين القديمة لاستعادة عالمها",
          },
          spacePirates: {
            title: "قراصنة الفضاء: سرقة المجرة",
            description: "أعظم عملية سرقة في تاريخ المجرة",
          },
          shadowDetective: {
            title: "ملفات المباحث الظلية",
            description: "حل الجرائم في أظلم زوايا المدينة",
          },
          elementalWarriors: {
            title: "المحاربين العنصريين",
            description: "أسياد النار والماء والأرض والهواء يتحدون",
          },
        },
        reviewComics: {
          spiderMan: "سبايدر مان: في عالم العنكبوت",
          wonderWoman: "المرأة المعجزة: الولادة الجديدة",
          batman: "باتمان: فارس الظلام",
          xMen: "رجال إكس: أيام المستقبل الماضي",
          walkingDead: "الموتى السائرون",
          msMarvel: "السيدة مارفل",
        },
        batman: {
          name: "باتمان",
          title: (episode: number) => `باتمان - الحلقة ${episode}`,
          shortDescription: (episode: number) => `مغامرات الفارس المظلم - الحلقة ${episode}`,
          fullDescription: (episode: number) => `استمتع بمغامرات باتمان المثيرة في مدينة جوثام. الفارس المظلم يواجه أعداءه في معارك ملحمية. حلقة ${episode} مليئة بالإثارة والتشويق.`,
        },
        donaldDuck: {
          name: "بطوط",
          title: (episode: number) => `بطوط - الحلقة ${episode}`,
          shortDescription: (episode: number) => `مغامرات بطوط الكوميدية - الحلقة ${episode}`,
          fullDescription: (episode: number) => `انضم إلى بطوط في مغامراته الكوميدية المضحكة مع أبناء أخيه حظوظ وفظوظ ولظوظ. حلقة ${episode} مليئة بالمرح.`,
        },
        mickeyMouse: {
          name: "ميكي ماوس",
          title: (episode: number) => `ميكي ماوس - الحلقة ${episode}`,
          shortDescription: (episode: number) => `مغامرات ميكي ماوس - الحلقة ${episode}`,
          fullDescription: (episode: number) => `انطلق مع ميكي ماوس في مغامرة جديدة مليئة بالمرح والإثارة مع أصدقائه. حلقة ${episode} ممتعة للجميع.`,
        },
      },
    },
    // Featured Characters
    featuredCharacters: {
      title: "الشخصيات",
      titleHighlight: "المميزة",
      subtitle: "تعرف على الأبطال والأشرار الأسطوريين الذين يحددون عالم مجلاتنا",
      characters: {
        batman: {
          name: "باتمان",
          power: "الذكاء والقوة",
          description: "فارس الظلام حامي مدينة جوثام",
        },
        donaldDuck: {
          name: "بطوط",
          power: "المغامرة والمرح",
          description: "بطل المغامرات الكوميدية",
        },
        mickeyMouse: {
          name: "ميكي ماوس",
          power: "الصداقة والمرح",
          description: "بطل ديزني المحبوب",
        },
        batmanVengeance: {
          name: "باتمان الانتقام",
          power: "العدالة",
          description: "المنتقم في الظلام",
        },
      },
    },
    // Comic Categories
    categories: {
      title: "استكشف",
      titleHighlight: "الفئات",
      subtitle: "اكتشف المجلات في كل نوع واعثر على قصتك المثالية",
    },
    // Spotlight Comic
    spotlight: {
      badge: "Best Magazine This Week",
      spotlightLabel: "Spotlight:",
      stats: {
        readers: "Readers",
        issues: "Issues",
        rating: "Rating",
      },
    },
    // Fan Art Showcase
    fanArt: {
      title: "معرض الفن",
      titleHighlight: "الفن",
      subtitle: "أعمال فنية مذهلة من مجتمعنا الرائع من محبي المجلات",
      by: "بواسطة",
      categories: {
        digital: "فن رقمي",
        traditional: "تقليدي",
      },
      artworks: {
        spiderverse: {
          title: "عالم العنكبوت المعاد تصوره",
          description: "A dynamic reimagining of the Spider-Verse with stunning color details.",
        },
        darkKnight: {
          title: "عودة فارس الظلام",
          description: "A stunning artistic portrayal of the Dark Knight bringing the legend to life.",
        },
      },
    },
    // Interactive Quotes
    quotes: {
      title: "الأقوال",
      titleHighlight: "الأسطورية",
      subtitle: "كلمات خاصة من أبطال المجلات المفضلين لدينا",
      quotes: {
        spiderman: {
          text: "مع القوة العظيمة تأتي المسؤولية العظيمة.",
          character: "الرجل العنكبوت",
        },
        batman: {
          text: "أنا الانتقام، أنا الليل، أنا باتمان!",
          character: "باتمان",
        },
        superman: {
          text: "الحقيقة والعدالة والطريق الأمريكي.",
          character: "سوبرمان",
        },
        hulk: {
          text: "هالك يحطم!",
          character: "هالك",
        },
        captainAmerica: {
          text: "يمكنني فعل هذا طوال اليوم.",
          character: "كابتن أمريكا",
        },
      },
    },
    // Comic Timeline
    timeline: {
      title: "تاريخ",
      titleHighlight: "المجلات",
      subtitle: "رحلة عبر أهم اللحظات في تاريخ المجلات المصورة",
      events: {
        superman: {
          title: "أول ظهور لسوبرمان",
          description: "أكشن كوميكس #1 يقدم أول بطل خارق في العالم",
        },
        batman: {
          title: "ظهور باتمان",
          description: "فارس الظلام يظهر لأول مرة في ديتكتيف كوميكس #27",
        },
        marvel: {
          title: "بداية عصر مارفل",
          description: "يبدأ عصر مارفل",
        },
        xmen: {
          title: "اتحاد رجال إكس",
          description: "الأبطال المتحولون يظهرون لأول مرة في رجال إكس #1",
        },
        darkAge: {
          title: "بداية العصر المظلم",
          description: "الحراس وعودة فارس الظلام يعيدان تعريف المجلات",
        },
        digital: {
          title: "الثورة الرقمية",
          description: "موسوعة القصص المصورة تجلب المجلات إلى العصر الرقمي",
        },
      },
    },
    // Community Poll
    poll: {
      badge: "استطلاع المجتمع",
      title: "من هو المفضل لديك؟",
      titleHighlight: "بطل خارق؟",
      subtitle: "انضم إلى آلاف محبي المجلات وصوت لبطلك الخارق المفضل!",
      voteButton: "أدلِ بصوتك",
      thankYou: "Thanks for voting!",
      totalVotes: "Total Votes:",
      heroes: {
        spiderman: "الرجل العنكبوت",
        batman: "باتمان",
        wonderWoman: "المرأة المعجزة",
        ironMan: "الرجل الحديدي",
        captainAmerica: "كابتن أمريكا",
      },
    },
    // Upcoming Releases
    upcoming: {
      badge: "قريباً",
      title: "الإصدارات",
      titleHighlight: "القادمة",
      subtitle: "استعد لموجة المجلات المذهلة القادمة في طريقك",
      releaseDate: "تاريخ الإصدار:",
      preOrders: "طلبات مسبقة",
      notifyMe: "أخبرني",
    },
    // Soundtrack Player
    soundtrack: {
      badge: "Soundtrack",
      title: "Comic",
      titleHighlight: "Soundtrack",
      subtitle: "Immerse yourself in the epic music that brings comics to life",
      tracks: {
        heroJourney: {
          title: "Hero's Journey",
          artist: "Epic Soundtrack",
        },
        battleTheme: {
          title: "Battle Theme",
          artist: "Action Music Co.",
        },
        cosmicAdventure: {
          title: "Cosmic Adventure",
          artist: "Space Sounds",
        },
      },
    },
    // Footer
    footer: {
      description: "وجهتك النهائية للمجلات، تربط القراء بقصص مذهلة ومبدعين موهوبين.",
      stayUpdated: "ابق على اطلاع",
      newsletterDescription: "احصل على أحدث المجلات والتحديثات مباشرة إلى بريدك الإلكتروني.",
      emailPlaceholder: "بريدك الإلكتروني",
      subscribe: "اشترك",
      copyright: "© 2024 موسوعة القصص المصورة. جميع الحقوق محفوظة. مصمم بشغف لعشاق القصص المصورة.",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      email: "hello@e-magazine.com",
      phone: "+1 (555) 123-4567",
      location: "سان فرانسيسكو، كاليفورنيا",
    },
    // Category & Magazine Pages
    category: {
      magazines: "مجلات",
      magazinesInCategory: "مجلات في هذه الفئة",
      noMagazines: "لم يتم إضافة مجلات لهذه الفئة بعد.",
      backToLibrary: "العودة إلى المكتبة",
      chapters: "فصول",
      readers: "القرّاء",
      subscribers: "المشتركين",
    },
    magazine: {
      readNow: "اقرأ الآن",
      details: "التفاصيل",
      follow: "متابعة",
      watchTrailer: "شاهد المقطع الترويجي",
      trailer: "المقطع الترويجي",
      readers: "القرّاء",
      subscribers: "المشتركين",
      chapters: "الفصول",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      library: "Library",
      logo: "E-Magazine",
    },
    // Common
    common: {
      readNow: "Read Now",
      details: "Details",
      download: "Download",
      viewAll: "View All",
      trending: "Trending",
      popular: "Popular",
      new: "New",
      rating: "Rating",
      views: "Views",
      episodes: "Episodes",
      series: "Series",
    },
    // Home page
    home: {
      hero: {
        title: "E-Magazine",
        subtitle: "Immerse yourself in the amazing world of magazines where heroes come to life and stories never end",
        cta: "Discover Magazine",
        magazines: "Magazines",
        artists: "Artists",
        readers: "Readers",
      },
      spotlight: {
        title: "In the Spotlight",
        subtitle: "Featured comics of the week",
        badge: "Best Magazine This Week",
        spotlightLabel: "Spotlight:",
        stats: {
          readers: "Readers",
          issues: "Issues",
          rating: "Rating",
        },
        summaries: {
          batman: "Embark on an adventure with the Dark Knight in Gotham City. Batman faces his enemies in epic battles.",
          mickeyMouse: "Join Mickey Mouse in his exciting adventures with his friends in a world full of fun and excitement.",
          donaldDuck: "Donald Duck in funny adventures with his family and friends in stories full of fun and comedy.",
        },
      },
      trendingComics: {
        badge: "Trending Now",
        title: "Trending Comics",
        subtitle: "Discover the most popular comics everyone is talking about this week",
      },
      latestReleases: {
        title: "Latest",
        titleHighlight: "Releases",
        subtitle: "Fresh stories and adventures hot off the digital press",
        viewAll: "View All Releases",
        status: {
          new: "New",
          hot: "Hot",
          trending: "Trending",
          popular: "Popular",
        },
      },
      topRated: {
        badge: "Top Rated",
        title: "Highest Rated",
        titleHighlight: "Comics",
        subtitle: "The cream of the crop - comics that have earned the highest praise from our community",
        reviews: "reviews",
      },
      topArtists: {
        badge: "Featured Artists",
        title: "Top",
        titleHighlight: "Artists",
        subtitle: "Meet the talented creators behind your favorite comics",
        followers: "Followers",
        works: "Works",
        follow: "Follow",
        viewWorks: "View Works",
      },
      newsletter: {
        title: "Stay in the",
        titleHighlight: "Loop!",
        subtitle: "Get the latest comic releases, exclusive content, and special offers delivered straight to your inbox",
        emailPlaceholder: "Enter your email address",
        subscribers: "Subscribers",
        weekly: "Weekly",
        updates: "Updates",
        exclusive: "Exclusive",
        content: "Content",
        welcome: "Welcome to the",
        welcomeHighlight: "Community!",
        thankYou: "Thanks for subscribing! You'll receive your first newsletter soon with exclusive comic content and updates.",
      },
      topSeries: {
        badge: "Top Series",
        title: "Most Popular",
        titleHighlight: "Series",
        subtitle: "The series that captured millions of readers worldwide",
        issues: "Issues",
        subscribers: "Subscribers",
        rating: "Rating",
        read: "Read",
        follow: "Follow",
        ongoing: "Ongoing",
        completed: "Completed",
      },
      newArrivals: {
        title: "New Arrivals",
        subtitle: "Discover the latest magazines just arrived to our digital shelves",
        badge: "New Releases",
        new: "New",
      },
      trending: {
        title: "Trending Now",
        subtitle: "Discover the most popular magazine everyone is talking about",
        badge: "Hot Magazine This Week",
      },
    },
    // Library page
    library: {
      title: "Library",
      subtitle: "Explore our complete collection of comics",
      search: {
        title: "Magazine",
        titleHighlight: "Library",
        subtitle: "Discover your favorite magazine from our vast collection",
        placeholder: "Search for magazines, characters, and authors...",
        results: "Search Results",
        recentSearches: "Recent Searches",
        trending: "Trending",
      },
      filters: "Filters",
      sortBy: "Sort By",
      popular: "Most Popular",
      new: "Newest",
      trending: "Most Trending",
      popularComics: {
        badge: "All-Time Favorites",
        title: "Popular Magazine",
        titleHighlight: "All Time",
        subtitle: "The most popular magazines that have captured the hearts of readers around the world",
        viewAll: "View All Popular Magazines",
      },
      series: {
        batman: {
          title: "Batman Stories",
          subtitle: "The dark atmosphere of Gotham and the Dark Knight's confrontations with the most dangerous villains.",
          badge: "Batman Series",
        },
        donaldDuck: {
          title: "Donald Duck Stories",
          subtitle: "Donald Duck's comedic adventures full of funny situations and bad luck.",
          badge: "Donald Duck Series",
        },
        mickeyMouse: {
          title: "Mickey Mouse Stories",
          subtitle: "Explore Mickey Mouse's classic adventures full of fun and excitement with his friends.",
          badge: "Mickey Mouse Series",
        },
      },
      recentlyUpdated: {
        badge: "New Content",
        title: "Recently",
        titleHighlight: "Updated",
        subtitle: "Stay updated with the latest chapters and updates from your favorite series",
        updated: "Updated",
        newChapter: "New Chapter",
      },
      bookShelf: {
        badge: "Digital Book Shelf",
        title: "Comic Book",
        titleHighlight: "Shelf",
        subtitle: "Browse our collection of books with a realistic 3D bookshelf experience",
        volume: "Volume",
        comics: {
          infinityEpic: {
            title: "Epic of Infinity",
            volume: "Volume 1-12",
          },
          cosmicLegends: {
            title: "Cosmic Legends",
            volume: "Volume 1-8",
          },
          shadowWorld: {
            title: "Shadow World Chronicles",
            volume: "Volume 1-15",
          },
          neonWarriors: {
            title: "Neon Warriors",
            volume: "Volume 1-6",
          },
          timeGuardians: {
            title: "Time Guardians",
            volume: "Volume 1-9",
          },
          mysticAcademy: {
            title: "Mystic Academy",
            volume: "Volume 1-11",
          },
        },
      },
      reviews: {
        title: "Reader",
        titleHighlight: "Reviews",
        subtitle: "See what our community thinks about their favorite magazines",
        helpful: "Helpful Review",
        reply: "Reply",
        shareOpinion: "Share Your Opinion",
        helpReaders: "Help other readers discover amazing magazines by sharing your thoughts",
        writeReview: "Write a Review",
      },
      magazines: {
        episode: "Episode",
        genres: {
          superhero: "Superhero",
          cyberpunk: "Cyberpunk",
          fantasy: "Fantasy",
          sciFi: "Sci-Fi",
          mystery: "Mystery",
          action: "Action",
        },
        newArrivals: {
          quantumHeroes: {
            title: "Quantum Heroes: Multiverse War",
            description: "The final battle begins across infinite realities",
          },
          cyberSamurai: {
            title: "Cyber Samurai Chronicles",
            description: "Ancient honor meets future technology",
          },
          mysteriousWorlds: {
            title: "Mysterious Worlds: Dragon's Return",
            description: "Ancient dragons awaken to reclaim their world",
          },
          spacePirates: {
            title: "Space Pirates: Galaxy Heist",
            description: "The greatest heist in galactic history",
          },
          shadowDetective: {
            title: "Shadow Detective Files",
            description: "Solving crimes in the darkest corners of the city",
          },
          elementalWarriors: {
            title: "Elemental Warriors",
            description: "Masters of fire, water, earth, and air unite",
          },
        },
        reviewComics: {
          spiderMan: "Spider-Man: Into the Spider-Verse",
          wonderWoman: "Wonder Woman: Rebirth",
          batman: "Batman: Dark Knight",
          xMen: "X-Men: Days of Future Past",
          walkingDead: "The Walking Dead",
          msMarvel: "Ms. Marvel",
        },
        batman: {
          name: "Batman",
          title: (episode: number) => `Batman - Episode ${episode}`,
          shortDescription: (episode: number) => `The Dark Knight's adventures - Episode ${episode}`,
          fullDescription: (episode: number) => `Enjoy Batman's thrilling adventures in Gotham City. The Dark Knight faces his enemies in epic battles. Episode ${episode} is full of excitement and suspense.`,
        },
        donaldDuck: {
          name: "Donald Duck",
          title: (episode: number) => `Donald Duck - Episode ${episode}`,
          shortDescription: (episode: number) => `Donald Duck's comedic adventures - Episode ${episode}`,
          fullDescription: (episode: number) => `Join Donald Duck in his funny comedic adventures with his nephews Huey, Dewey, and Louie. Episode ${episode} is full of fun.`,
        },
        mickeyMouse: {
          name: "Mickey Mouse",
          title: (episode: number) => `Mickey Mouse - Episode ${episode}`,
          shortDescription: (episode: number) => `Mickey Mouse's adventures - Episode ${episode}`,
          fullDescription: (episode: number) => `Join Mickey Mouse on a new adventure full of fun and excitement with his friends. Episode ${episode} is enjoyable for everyone.`,
        },
      },
    },
    // Featured Characters
    featuredCharacters: {
      title: "Featured",
      titleHighlight: "Characters",
      subtitle: "Meet the legendary heroes and villains that define our magazine world",
      characters: {
        batman: {
          name: "Batman",
          power: "Intelligence & Strength",
          description: "The Dark Knight protector of Gotham City",
        },
        donaldDuck: {
          name: "Donald Duck",
          power: "Adventure & Fun",
          description: "Hero of comedic adventures",
        },
        mickeyMouse: {
          name: "Mickey Mouse",
          power: "Friendship & Fun",
          description: "Beloved Disney hero",
        },
        batmanVengeance: {
          name: "Batman Vengeance",
          power: "Justice",
          description: "The avenger in the dark",
        },
      },
    },
    // Comic Categories
    categories: {
      title: "Explore",
      titleHighlight: "Categories",
      subtitle: "Discover magazines in every genre and find your perfect story",
    },
    // Spotlight Comic
    spotlight: {
      badge: "Best Magazine This Week",
      spotlightLabel: "Spotlight:",
      stats: {
        readers: "Readers",
        issues: "Issues",
        rating: "Rating",
      },
    },
    // Fan Art Showcase
    fanArt: {
      title: "Fan Art",
      titleHighlight: "Showcase",
      subtitle: "Amazing artwork from our wonderful community of comic lovers",
      by: "By",
      categories: {
        digital: "Digital Art",
        traditional: "Traditional",
      },
      artworks: {
        spiderverse: {
          title: "Spider-Verse Reimagined",
          description: "A dynamic reimagining of the Spider-Verse with stunning color details.",
        },
        darkKnight: {
          title: "Dark Knight Returns",
          description: "A stunning artistic portrayal of the Dark Knight bringing the legend to life.",
        },
      },
    },
    // Interactive Quotes
    quotes: {
      title: "Legendary",
      titleHighlight: "Quotes",
      subtitle: "Special words from our favorite comic heroes",
      quotes: {
        spiderman: {
          text: "With great power comes great responsibility.",
          character: "Spider-Man",
        },
        batman: {
          text: "I am vengeance, I am the night, I am Batman!",
          character: "Batman",
        },
        superman: {
          text: "Truth, justice, and the American way.",
          character: "Superman",
        },
        hulk: {
          text: "Hulk smash!",
          character: "Hulk",
        },
        captainAmerica: {
          text: "I can do this all day.",
          character: "Captain America",
        },
      },
    },
    // Comic Timeline
    timeline: {
      title: "Comic",
      titleHighlight: "History",
      subtitle: "A journey through the most important moments in comic book history",
      events: {
        superman: {
          title: "Superman's First Appearance",
          description: "Action Comics #1 introduces the world's first superhero",
        },
        batman: {
          title: "Batman Appears",
          description: "The Dark Knight first appears in Detective Comics #27",
        },
        marvel: {
          title: "Marvel Age Begins",
          description: "The Marvel Age begins",
        },
        xmen: {
          title: "X-Men Unite",
          description: "Mutant heroes first appear in X-Men #1",
        },
        darkAge: {
          title: "Dark Age Begins",
          description: "Watchmen and The Dark Knight Returns redefine comics",
        },
        digital: {
          title: "Digital Revolution",
          description: "E-Magazine brings comics into the digital age",
        },
      },
    },
    // Community Poll
    poll: {
      badge: "Community Poll",
      title: "Who is your favorite?",
      titleHighlight: "Superhero?",
      subtitle: "Join thousands of comic lovers and vote for your favorite superhero!",
      voteButton: "Cast Your Vote",
      thankYou: "Thanks for voting!",
      totalVotes: "Total Votes:",
      heroes: {
        spiderman: "Spider-Man",
        batman: "Batman",
        wonderWoman: "Wonder Woman",
        ironMan: "Iron Man",
        captainAmerica: "Captain America",
      },
    },
    // Upcoming Releases
    upcoming: {
      badge: "Coming Soon",
      title: "Upcoming",
      titleHighlight: "Releases",
      subtitle: "Get ready for the next wave of amazing magazines coming your way",
      releaseDate: "Release Date:",
      preOrders: "Pre-orders",
      notifyMe: "Notify Me",
    },
    // Soundtrack Player
    soundtrack: {
      badge: "Soundtrack",
      title: "Comic",
      titleHighlight: "Soundtrack",
      subtitle: "Immerse yourself in the epic music that brings comics to life",
      tracks: {
        heroJourney: {
          title: "Hero's Journey",
          artist: "Epic Soundtrack",
        },
        battleTheme: {
          title: "Battle Theme",
          artist: "Action Music Co.",
        },
        cosmicAdventure: {
          title: "Cosmic Adventure",
          artist: "Space Sounds",
        },
      },
    },
    // Footer
    footer: {
      description: "Your ultimate destination for magazines, connecting readers with amazing stories and talented creators.",
      stayUpdated: "Stay Updated",
      newsletterDescription: "Get the latest magazines and updates delivered to your inbox.",
      emailPlaceholder: "Your Email",
      subscribe: "Subscribe",
      copyright: "© 2024 E-Magazine. All rights reserved. Designed with passion for comic lovers.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      email: "hello@e-magazine.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, California",
    },
    // Category & Magazine Pages
    category: {
      magazines: "magazines",
      magazinesInCategory: "Magazines in this category",
      noMagazines: "No magazines have been added to this category yet.",
      backToLibrary: "Back to Library",
      chapters: "chapters",
      readers: "readers",
      subscribers: "subscribers",
    },
    magazine: {
      readNow: "Read Now",
      details: "Details",
      follow: "Follow",
      watchTrailer: "Watch Trailer",
      trailer: "Trailer",
      readers: "readers",
      subscribers: "subscribers",
      chapters: "chapters",
    },
  },
} as const

export function getTranslations(lang: Language) {
  return translations[lang]
}

export function t(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k as keyof typeof value]
    } else {
      return key // Return key if translation not found
    }
  }

  return typeof value === "string" ? value : key
}

// Helper function to get translated magazine title
export function getMagazineTitle(lang: Language, series: "batman" | "donald_duck" | "mickey_mouse", episode: number): string {
  const seriesKey = series === "batman" ? "batman" : series === "donald_duck" ? "donaldDuck" : "mickeyMouse"
  const magazineData = translations[lang].library.magazines[seriesKey as "batman" | "donaldDuck" | "mickeyMouse"]
  if (magazineData && typeof magazineData === "object" && "title" in magazineData) {
    const titleFn = magazineData.title
    return typeof titleFn === "function" ? titleFn(episode) : `Episode ${episode}`
  }
  return `Episode ${episode}`
}

// Helper function to get translated magazine short description
export function getMagazineShortDescription(lang: Language, series: "batman" | "donald_duck" | "mickey_mouse", episode: number): string {
  const seriesKey = series === "batman" ? "batman" : series === "donald_duck" ? "donaldDuck" : "mickeyMouse"
  const magazineData = translations[lang].library.magazines[seriesKey as "batman" | "donaldDuck" | "mickeyMouse"]
  if (magazineData && typeof magazineData === "object" && "shortDescription" in magazineData) {
    const descFn = magazineData.shortDescription
    return typeof descFn === "function" ? descFn(episode) : ""
  }
  return ""
}

// Helper function to get translated magazine full description
export function getMagazineFullDescription(lang: Language, series: "batman" | "donald_duck" | "mickey_mouse", episode: number): string {
  const seriesKey = series === "batman" ? "batman" : series === "donald_duck" ? "donaldDuck" : "mickeyMouse"
  const magazineData = translations[lang].library.magazines[seriesKey as "batman" | "donaldDuck" | "mickeyMouse"]
  if (magazineData && typeof magazineData === "object" && "fullDescription" in magazineData) {
    const descFn = magazineData.fullDescription
    return typeof descFn === "function" ? descFn(episode) : ""
  }
  return ""
}

// Helper function to get translated series name
export function getSeriesName(lang: Language, series: "batman" | "donald_duck" | "mickey_mouse"): string {
  const seriesKey = series === "batman" ? "batman" : series === "donald_duck" ? "donaldDuck" : "mickeyMouse"
  const magazineData = translations[lang].library.magazines[seriesKey as "batman" | "donaldDuck" | "mickeyMouse"]
  if (magazineData && typeof magazineData === "object" && "name" in magazineData) {
    return magazineData.name
  }
  return series === "batman" ? "Batman" : series === "donald_duck" ? "Donald Duck" : "Mickey Mouse"
}

