export type Locale = 'ar' | 'en'

export const defaultLocale: Locale = 'ar'

export type Messages = {
  meta: { title: string; description: string }
  nav: {
    brand: string
    home: string
    solutions: string
    modules: string
    why: string
    faq: string
    contact: string
    cta: string
  }
  hero: {
    headline: string
    sub: string
    primaryCta: string
    secondaryCta: string
    chips: string[]
  }
  valueStrip: { label: string; points: string[] }
  pain: {
    heading: string
    paragraph: string
    cards: { title: string; body: string }[]
  }
  modules: {
    heading: string
    intro: string
    items: { title: string; body: string }[]
  }
  why: {
    heading: string
    items: { title: string; body: string }[]
  }
  process: {
    label: string
    heading: string
    steps: { title: string; body: string }[]
  }
  showcase: { label: string; heading: string; paragraph: string }
  industries: { heading: string; items: string[] }
  faq: { heading: string; items: { q: string; a: string }[] }
  cta: {
    heading: string
    paragraph: string
    primary: string
    secondary: string
  }
  footer: {
    tagline: string
    email: string
    phone: string
    location: string
  }
  a11y: {
    toggleTheme: string
    themeToLight: string
    themeToDark: string
    language: string
    openMenu: string
    closeMenu: string
  }
}

export const messages: Record<Locale, Messages> = {
  ar: {
    meta: {
      title: 'HAX-CODE — أنظمة ERP بسيطة واحترافية',
      description:
        'حلول ERP بسيطة ومخصصة مبنية على Microsoft Access لإدارة المبيعات والمخزون والمشتريات والتقارير.',
    },
    nav: {
      brand: 'HAX-CODE',
      home: 'الرئيسية',
      solutions: 'الحلول',
      modules: 'الموديولات',
      why: 'لماذا HAX-CODE',
      faq: 'الأسئلة',
      contact: 'تواصل معنا',
      cta: 'اطلب عرض توضيحي',
    },
    hero: {
      headline: 'أنظمة ERP بسيطة. شكل احترافي. تشغيل أسرع.',
      sub: 'HAX-CODE يقدم حلول ERP بسيطة ومخصصة، مبنية على Microsoft Access، لمساعدتك على إدارة المبيعات والمخزون والمشتريات والعملاء والتقارير من مكان واحد بشكل واضح وعملي.',
      primaryCta: 'اطلب عرض توضيحي',
      secondaryCta: 'استكشف الموديولات',
      chips: [
        'مناسب للشركات الصغيرة والمتوسطة',
        'سهل التخصيص',
        'واجهة عملية وواضحة',
        'تقارير أسرع وتنظيم أفضل',
      ],
    },
    valueStrip: {
      label: 'ERP WORKFLOW',
      points: [
        'تنظيم العمليات اليومية',
        'متابعة أدق للمبيعات والمخزون',
        'تقارير واضحة وسريعة',
        'نظام مخصص حسب طبيعة شغلك',
      ],
    },
    pain: {
      heading: 'لو شغلك موزع بين ملفات ورسائل وملاحظات، فأنت تحتاج نظام أوضح.',
      paragraph:
        'الكثير من الشركات الصغيرة تدير العمليات بطريقة مجزأة بين Excel، دفاتر، واتصالات متفرقة. HAX-CODE يساعدك على جمع البيانات والعمليات داخل نظام ERP بسيط يسهّل المتابعة اليومية ويقلل العشوائية.',
      cards: [
        {
          title: 'قبل',
          body: 'ملفات متفرقة، تأخير في الوصول للمعلومة، ومتابعة مرهقة.',
        },
        {
          title: 'بعد',
          body: 'شاشات واضحة، بيانات منظمة، وتقارير أسرع تساعدك على اتخاذ القرار.',
        },
        {
          title: 'النتيجة',
          body: 'تحكم أفضل، وقت أقل ضائع، وصورة أوضح لحركة العمل.',
        },
      ],
    },
    modules: {
      heading: 'موديولات ERP تغطي الأساسيات التي تحتاجها الشركات يومياً',
      intro:
        'يمكن تصميم النظام حسب احتياج النشاط، مع اختيار الموديولات المناسبة وطريقة العمل المناسبة لفريقك.',
      items: [
        {
          title: 'المبيعات',
          body: 'إدارة الفواتير، متابعة الطلبات، وسجل حركة البيع بشكل منظم.',
        },
        {
          title: 'المخزون',
          body: 'مراقبة الأصناف والكميات والحركات اليومية بدقة أكبر.',
        },
        {
          title: 'المشتريات',
          body: 'متابعة أوامر الشراء، الموردين، وتدفق الطلبات بسهولة.',
        },
        {
          title: 'العملاء',
          body: 'تنظيم بيانات العملاء وسجل التعاملات والملاحظات المهمة.',
        },
        {
          title: 'الموردون',
          body: 'إدارة بيانات الموردين والحسابات والحركات المرتبطة بهم.',
        },
        {
          title: 'الخزينة والمدفوعات',
          body: 'رؤية أوضح لحركة النقدية والمقبوضات والمدفوعات.',
        },
        {
          title: 'التقارير',
          body: 'تقارير عملية تساعدك على متابعة الأداء واتخاذ القرار.',
        },
        {
          title: 'تخصيص حسب النشاط',
          body: 'نطوّر الشاشات والحقول والتدفقات بما يناسب طبيعة عملك.',
        },
      ],
    },
    why: {
      heading: 'لماذا HAX-CODE؟',
      items: [
        {
          title: 'بساطة في الاستخدام',
          body: 'التركيز على واجهات عملية وسهلة الفهم للفريق اليومي.',
        },
        {
          title: 'تخصيص حقيقي',
          body: 'النظام يُبنى حول سير العمل الفعلي، وليس العكس.',
        },
        {
          title: 'تنفيذ أسرع',
          body: 'حلول عملية للشركات التي تريد البدء بشكل واضح وبدون تعقيد زائد.',
        },
        {
          title: 'تكلفة أكثر منطقية',
          body: 'مناسب للشركات التي تحتاج نظام مفيد بدون تكلفة ERP ضخمة.',
        },
      ],
    },
    process: {
      label: 'مسار التنفيذ',
      heading: 'كيف نبدأ العمل؟',
      steps: [
        {
          title: 'فهم النشاط',
          body: 'نراجع طريقة العمل الحالية والمشاكل الأساسية التي تحتاج تنظيم.',
        },
        {
          title: 'تحديد الموديولات',
          body: 'نحدد الشاشات والتقارير والعمليات المطلوبة حسب الاحتياج.',
        },
        {
          title: 'تصميم النظام',
          body: 'نبني تجربة عملية واضحة تناسب الاستخدام اليومي.',
        },
        {
          title: 'التسليم والتجربة',
          body: 'نراجع التدفقات ونتأكد أن النظام يخدم العمل فعلاً.',
        },
        {
          title: 'التطوير المستمر',
          body: 'يمكن إضافة تحسينات وموديولات جديدة حسب التوسع.',
        },
      ],
    },
    showcase: {
      label: 'عرض الشاشات',
      heading: 'تصميمات شاشات ERP توضح الخدمة بشكل مباشر',
      paragraph:
        'الموقع يجب أن يعرض واجهات تشبه أنظمة ERP الحقيقية: جداول، نماذج، تقارير، بطاقات بيانات، ولوحات متابعة واضحة. الهدف هو أن يفهم العميل نوع الحلول من أول نظرة.',
    },
    industries: {
      heading: 'مناسب لأنشطة تحتاج تنظيم أسرع ووضوح أكبر',
      items: [
        'التجارة والتوزيع',
        'المخازن والمستودعات',
        'المبيعات وإدارة العملاء',
        'المشتريات والتوريد',
        'الإدارة المالية التشغيلية',
        'الأنشطة الخدمية الصغيرة والمتوسطة',
      ],
    },
    faq: {
      heading: 'الأسئلة الشائعة',
      items: [
        {
          q: 'هل النظام مناسب للشركات الصغيرة؟',
          a: 'نعم، الفكرة الأساسية هي تقديم نظام عملي وواضح يناسب الشركات التي تحتاج تنظيم أفضل بدون تعقيد أنظمة المؤسسات الكبيرة.',
        },
        {
          q: 'هل يمكن تخصيص النظام حسب طبيعة النشاط؟',
          a: 'نعم، يمكن تصميم الموديولات والشاشات والتقارير حسب احتياجات النشاط وطريقة التشغيل الفعلية.',
        },
        {
          q: 'ما الذي يمكن للنظام إدارته؟',
          a: 'بحسب الاحتياج، يمكن أن يشمل المبيعات، المخزون، المشتريات، العملاء، الموردين، الخزينة، والتقارير.',
        },
        {
          q: 'هل الواجهة سهلة للفريق؟',
          a: 'الهدف من الحلول المقدمة هو أن تكون مباشرة وعملية وسهلة الفهم للاستخدام اليومي.',
        },
        {
          q: 'هل يمكن البدء بموديولات محددة ثم التوسع؟',
          a: 'نعم، يمكن البدء بالأساسيات ثم إضافة موديولات أو تحسينات لاحقاً حسب نمو النشاط.',
        },
      ],
    },
    cta: {
      heading: 'ابدأ بتنظيم شغلك بنظام أوضح وأسهل',
      paragraph:
        'إذا كنت تبحث عن ERP بسيط وعملي يناسب طريقة تشغيلك، يمكننا مساعدتك في بناء نظام واضح يخدم فريقك اليومي بشكل أفضل.',
      primary: 'احجز مكالمة',
      secondary: 'اطلب عرض توضيحي',
    },
    footer: {
      tagline: 'حلول ERP بسيطة ومخصصة لتنظيم العمليات اليومية',
      email: 'Email Placeholder',
      phone: 'Phone / WhatsApp Placeholder',
      location: 'Location Placeholder',
    },
    a11y: {
      toggleTheme: 'تبديل السمة',
      themeToLight: 'التبديل إلى الوضع الفاتح',
      themeToDark: 'التبديل إلى الوضع الداكن',
      language: 'اللغة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
  },
  en: {
    meta: {
      title: 'HAX-CODE — Simple, premium ERP',
      description:
        'Simple, customized ERP solutions built with Microsoft Access for sales, inventory, purchasing, and reporting.',
    },
    nav: {
      brand: 'HAX-CODE',
      home: 'Home',
      solutions: 'Solutions',
      modules: 'Modules',
      why: 'Why HAX-CODE',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request a Demo',
    },
    hero: {
      headline: 'Simple ERP. Premium Experience. Faster Operations.',
      sub: 'HAX-CODE delivers simple, customized ERP solutions built with Microsoft Access to help businesses manage sales, inventory, purchasing, customers, and reporting in one practical and organized system.',
      primaryCta: 'Request a Demo',
      secondaryCta: 'Explore Modules',
      chips: [
        'Built for small and medium businesses',
        'Easy to customize',
        'Clear and practical interface',
        'Faster reporting and better organization',
      ],
    },
    valueStrip: {
      label: 'ERP WORKFLOW',
      points: [
        'Organized daily operations',
        'Better tracking for sales and inventory',
        'Clear and fast reports',
        'A system tailored to your workflow',
      ],
    },
    pain: {
      heading:
        'If your work is scattered across files, messages, and notes, you need a clearer system.',
      paragraph:
        'Many small businesses run daily operations through a fragmented mix of Excel sheets, paper records, and disconnected communication. HAX-CODE helps bring those workflows into one simple ERP system that improves visibility and reduces operational chaos.',
      cards: [
        {
          title: 'Before',
          body: 'Scattered files, slower access to information, and tiring follow-up work.',
        },
        {
          title: 'After',
          body: 'Clear screens, organized data, and faster reporting that supports better decisions.',
        },
        {
          title: 'Result',
          body: 'Better control, less wasted time, and a clearer view of daily operations.',
        },
      ],
    },
    modules: {
      heading:
        'ERP modules built around the business essentials teams use every day',
      intro:
        'The system can be shaped around your business needs, with the right modules and workflow structure for your team.',
      items: [
        {
          title: 'Sales',
          body: 'Manage invoices, orders, and sales activity in a more organized way.',
        },
        {
          title: 'Inventory',
          body: 'Track items, quantities, and stock movement with better visibility.',
        },
        {
          title: 'Purchasing',
          body: 'Follow purchase orders, suppliers, and request flow with ease.',
        },
        {
          title: 'Customers',
          body: 'Organize customer data, activity history, and important notes.',
        },
        {
          title: 'Suppliers',
          body: 'Manage supplier records, account details, and related transactions.',
        },
        {
          title: 'Cash and Payments',
          body: 'Get a clearer view of incoming and outgoing cash movement.',
        },
        {
          title: 'Reports',
          body: 'Use practical reports to monitor performance and support decisions.',
        },
        {
          title: 'Custom Fit',
          body: 'We adapt screens, fields, and process flow to your actual business.',
        },
      ],
    },
    why: {
      heading: 'Why HAX-CODE?',
      items: [
        {
          title: 'Easy to use',
          body: 'The focus is on clear and practical interfaces for everyday team usage.',
        },
        {
          title: 'Real customization',
          body: 'The system is built around the actual workflow, not the other way around.',
        },
        {
          title: 'Faster execution',
          body: 'A practical path for businesses that want to start clearly without heavy complexity.',
        },
        {
          title: 'More reasonable cost',
          body: 'A strong fit for companies that need useful ERP functionality without enterprise-scale cost.',
        },
      ],
    },
    process: {
      label: 'PROCESS',
      heading: 'How do we start?',
      steps: [
        {
          title: 'Understand the business',
          body: 'We review the current workflow and the main pain points that need structure.',
        },
        {
          title: 'Define the modules',
          body: 'We identify the required screens, reports, and operational flows.',
        },
        {
          title: 'Design the system',
          body: 'We build a clear and practical experience shaped around daily usage.',
        },
        {
          title: 'Deliver and review',
          body: 'We review the flow and confirm that the system supports real work.',
        },
        {
          title: 'Grow over time',
          body: 'Additional modules and improvements can be added as the business expands.',
        },
      ],
    },
    showcase: {
      label: 'SHOWCASE',
      heading: 'ERP screen concepts that communicate the service immediately',
      paragraph:
        'The site should showcase interfaces that feel like real ERP systems: tables, forms, reports, data cards, and tracking dashboards. The goal is for the visitor to understand the type of solution at first glance.',
    },
    industries: {
      heading: 'A strong fit for businesses that need clearer operations',
      items: [
        'Trade and distribution',
        'Warehouses and inventory operations',
        'Sales and customer management',
        'Purchasing and supplier flow',
        'Operational finance tracking',
        'Small and medium service businesses',
      ],
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Is the system suitable for small businesses?',
          a: 'Yes. The main idea is to provide a practical and clear system for businesses that need better organization without the complexity of large enterprise ERP platforms.',
        },
        {
          q: 'Can the system be customized for different business types?',
          a: 'Yes. Modules, screens, and reports can be designed around the needs of the business and the real operating workflow.',
        },
        {
          q: 'What can the system manage?',
          a: 'Depending on the need, it can include sales, inventory, purchasing, customers, suppliers, cash flow, and reporting.',
        },
        {
          q: 'Is the interface easy for the team to use?',
          a: 'The goal is to keep the solutions direct, practical, and easy to understand for daily use.',
        },
        {
          q: 'Can we start with a few modules and expand later?',
          a: 'Yes. You can begin with the essentials and add more modules or enhancements as the business grows.',
        },
      ],
    },
    cta: {
      heading: 'Start organizing your business with a clearer, simpler system',
      paragraph:
        'If you are looking for a practical ERP solution that fits the way your business operates, HAX-CODE can help you build a clearer system for everyday work.',
      primary: 'Book a Call',
      secondary: 'Request a Demo',
    },
    footer: {
      tagline: 'Simple and customized ERP solutions for organizing daily operations',
      email: 'Email Placeholder',
      phone: 'Phone / WhatsApp Placeholder',
      location: 'Location Placeholder',
    },
    a11y: {
      toggleTheme: 'Toggle color theme',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      language: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },
}
