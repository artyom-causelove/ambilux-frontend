module.exports=[46612,a=>{"use strict";let b={all:{title:"Проекты",paragraphs:[],galleryLabel:null,paths:null},urban:{title:"Градостроительство",paragraphs:[`
        Одним из основных направлений деятельности AMBILUX architects является градостроительное проектирование.
      `,`
        Мы осознаем, что привычных подходов формирования городской среды на сегодняшний день уже недостаточно.
        Поэтому мы разработали новые принципы и приемы проектирования, которые позволяют нам раскрыть максимальный
        потенциал территорий.
      `,`
        \xabИнтеллектуальное моделирование\xbb — это разработанная и применяемая нами уникальная методология. Являет собой
        совокупность принципов проектирования и определённый метод анализа территории, социальных сценариев,
        человеческого потенциала и других аспектов. Это позволяет минимизировать вариативность и помочь найти
        оптимальное и наиболее рациональное решение при формировании пространств.
      `,`
        Один из основных принципов в практической работе является человекоцентричность - это конкурентное преимущество,
        которое позволяет вести диалог с властью, преимущественно при реализации механизмов КРТ. Компания формирует
        новые принципы систем расселения для эффективного землепользования и создания условий, в частности для
        улучшения демографических показателей.
      `],article:{label:"О создании градостроительных концепций — «Новостройки Новосибирска»",href:"https://nnsib.ru/page104133576.html"},galleryLabel:"Галерея градостроительных концепций",paths:["akademcity","science-quarter","asonov","malinovski","mikopark","sosbul","smartcity","riverside","new-city-hall","quattro","naukograd","big-academ","historical-center"]},architecture:{title:"Архитектура",paragraphs:[`
        Компания AMBILUX architects основана в 2014-м году для создания современной среды обитания людей.
        Мы приветствуем открытые деловые отношения для создания объектов инновационной архитектурной среды
        на всех этапах реализации проекта.
      `,`
        При проектировании мы используем передовые информационные технологии для увеличения качества выпускаемой
        проектной продукции, уменьшения сроков исполнения договорных обязательств и оптимизации затрат при
        перспективном строительстве и эксплуатации объектов.
      `,`
        С 2025 года развиваем направление типологического малоэтажного жилья нового формата – это интеграция
        приемов премиального сегмента в массовое строительство.
      `],galleryLabel:"Галерея архитектурных проектов",paths:["naukograd","cultural-entertaiment","new-city-hall","prizmatiq","roshtils","trid","valdom","mikopark","quattro","riverside","kampus","pelles"]},design:{title:"Дизайн",paragraphs:[],note:"Информация по данному разделу появится позже",galleryLabel:null,paths:[]},competitions:{title:"Конкурсы",paragraphs:[],galleryLabel:"Галерея конкурсных проектов",paths:["cultural-entertaiment","new-city-hall"]}};a.s(["fileUrl",0,a=>a.startsWith("/")?a:`https://ambilux.com/api/${a}`,"pickProjects",0,(a,b)=>b.map(b=>a.find(a=>a.path===b)).filter(a=>!!a),"projectCategories",0,b,"projectLinks",0,[{slug:"all",label:"Проекты"},{slug:"urban",label:"Градостроительство"},{slug:"architecture",label:"Архитектура"},{slug:"design",label:"Дизайн"},{slug:"competitions",label:"Конкурсы"}]])},94384,a=>{a.v({download:"page-module-scss-module__ZXbi-q__download",image:"page-module-scss-module__ZXbi-q__image",imageWrapper:"page-module-scss-module__ZXbi-q__imageWrapper",info:"page-module-scss-module__ZXbi-q__info",more:"page-module-scss-module__ZXbi-q__more",paragraph:"page-module-scss-module__ZXbi-q__paragraph",title:"page-module-scss-module__ZXbi-q__title",wrapper:"page-module-scss-module__ZXbi-q__wrapper"})},30085,a=>{"use strict";var b=a.i(87924),c=a.i(71987),d=a.i(94384),e=a.i(40464),f=a.i(72131),g=a.i(50944),h=a.i(46612);let i=a=>a.path.toLowerCase().endsWith(".pdf");function j(){let a=(0,g.useParams)(),j=(0,e.useMediaQuery)("(max-width: 925px)"),[k,l]=(0,f.useState)(null),[m,n]=(0,f.useState)([]),[o,p]=(0,f.useState)(!1),q=o?m:m.slice(0,5);(0,f.useEffect)(()=>{fetch(`https://ambilux.com/api/objects/${a.id}`).then(a=>a.json()).then(a=>l(a)),fetch(`/texts/${a.id}.txt`).then(a=>a.ok?a.text():"").then(a=>n(a.split(/\n\s*\n/).map(a=>a.trim()).filter(Boolean))).catch(()=>{})},[]);let r=[...k?.files??[]].sort((a,b)=>a.id-b.id),s=r.filter(i),t=r.filter(a=>!i(a));return(0,b.jsxs)("div",{className:d.default.wrapper,children:[k&&(m.length>0||s.length>0)&&(0,b.jsxs)("div",{className:d.default.info,children:[(0,b.jsx)("h1",{className:d.default.title,children:k.title}),s.map(a=>(0,b.jsx)("a",{className:d.default.download,href:(0,h.fileUrl)(a.path),target:"_blank",children:"Скачать PDF"},a.id)),q.map((a,c)=>(0,b.jsx)("p",{className:d.default.paragraph,children:a},c)),m.length>5&&(0,b.jsx)("button",{className:d.default.more,onClick:()=>p(!o),children:o?"Свернуть":"Читать полностью"})]}),t.map(a=>(0,b.jsx)("div",{className:d.default.imageWrapper,style:j?{width:"100%",aspectRatio:`${a.width} / ${a.height}`}:{width:a.width,height:a.height},children:(0,b.jsx)(c.default,{className:d.default.image,alt:"Object picture",src:(0,h.fileUrl)(a.path),sizes:j?"100vw":`${a.width}px`,fill:!0})},a.id))]})}a.s(["default",()=>j])}];

//# sourceMappingURL=src_91985d9f._.js.map