"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, BarChart3, Banknote, Building2, Calculator,
  Check, ChevronDown, ChevronRight, CircleDollarSign, ClipboardList,
  CreditCard, FileBarChart, FileText, Gauge, HandCoins, Landmark, Layers3,
  LockKeyhole, Mail, Menu, Package, PieChart, Receipt, ShieldCheck,
  Sparkles, Users, Wallet, X, Zap, Boxes, CalendarDays, BriefcaseBusiness,
  ChartNoAxesCombined, BadgeCheck, Globe2, MessageSquareText
} from "lucide-react";

const DEMO_URL = process.env.NEXT_DEMO_FORM_URL || "";
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

const modules = [
  { name:"Company management", group:"Organization", desc:"Create and manage multiple company profiles, business types, fiscal years, statuses and reporting identities from one place.", image:"companies.png", icon:Building2 },
  { name:"Sales management", group:"Revenue", desc:"Maintain customer records, products and services, pricing, and a clear register of sales transactions.", image:"customers.png", icon:Wallet },
  { name:"Invoicing & payments", group:"Revenue", desc:"Create and manage customer invoices, record receipts, monitor payment status and review customer invoice statements.", image:"invoices.png", icon:Receipt },
  { name:"Accounts receivable", group:"Revenue", desc:"Monitor customer balances, outstanding invoices, aging, customer statements and receivable transaction history.", image:"receivables.png", icon:HandCoins },
  { name:"Purchases & suppliers", group:"Procurement", desc:"Manage supplier directories, supplier bills and posted purchase activity in a connected workflow.", image:"purchases.png", icon:Boxes },
  { name:"Accounts payable", group:"Procurement", desc:"Track supplier liabilities, outstanding bills, due dates, aging, supplier statements and payable transactions.", image:"payables.png", icon:CreditCard },
  { name:"Expense management", group:"Operations", desc:"Record and analyse operating expenses, categorize spending and review USD and LRD expense activity.", image:"expenses.png", icon:Banknote },
  { name:"Inventory control", group:"Operations", desc:"Monitor products, stock quantities, stock movement, inventory valuation and low-stock alerts.", image:"inventory.png", icon:Package },
  { name:"Banking & cash management", group:"Operations", desc:"Manage bank accounts, deposits, withdrawals, transfers, bank fees and transaction history across currencies.", image:"banking.png", icon:Landmark },
  { name:"Chart of accounts", group:"Accounting", desc:"Structure the organization's financial records using a configurable chart of accounts and double-entry accounting.", image:"chart-of-accounts.png", icon:Calculator },
  { name:"Journal entries", group:"Accounting", desc:"Record, review and post double-entry transactions with clear debit and credit tracking.", image:"journal-entries.png", icon:FileText },
  { name:"General ledger", group:"Accounting", desc:"Review posted accounting activity, account balances and transaction history with exportable reports.", image:"general-ledger.png", icon:FileBarChart },
  { name:"Trial balance", group:"Accounting", desc:"Review account balances and verify that total debits equal total credits for a selected reporting period.", image:"trial-balance.png", icon:ClipboardList },
  { name:"Balance sheet", group:"Accounting", desc:"Review assets, liabilities, equity and the organization's financial position at a selected date.", image:"balance-sheet.png", icon:PieChart },
  { name:"Income statement & cash flow", group:"Accounting", desc:"Review income, expenses, operating results and cash movement through core financial statements.", image:"general-ledger.png", icon:ChartNoAxesCombined },
  { name:"Payroll management", group:"People", desc:"Manage employee records, payroll periods, earnings, deductions and payroll processing.", image:"payroll.png", icon:Users },
  { name:"Gas operations", group:"Industry tools", desc:"Dedicated operational support for gas station businesses, alongside the core financial management tools.", image:"banking.png", icon:Gauge },
  { name:"Financial reports", group:"Reporting", desc:"Access financial, AR, AP, sales, purchase, expense, inventory, payroll and gas reports.", image:"general-ledger.png", icon:BarChart3 },
  { name:"Audit & activity", group:"Governance", desc:"Review system activity and maintain visibility into important actions across the workspace.", image:"journal-entries.png", icon:ShieldCheck },
  { name:"Workspace settings", group:"Governance", desc:"Maintain organization and workspace configuration, including company profiles and operating preferences.", image:"companies.png", icon:LockKeyhole },
];

const plans = [
  { name:"Essential", price:200, intro:"The financial foundation for growing teams.", featured:false, features:["Core accounting and chart of accounts","Sales, invoicing and customer records","Purchases, suppliers and expenses","Banking and transaction records","Standard financial reports","Email support"] },
  { name:"Plus", price:350, intro:"More control, visibility and operational depth.", featured:true, features:["Everything in Essential","Accounts receivable and payable tools","Inventory management","Payroll and employee management","USD and LRD transaction visibility","Expanded management reports","Priority support"] },
  { name:"Complete", price:500, intro:"A connected financial command centre.", featured:false, features:["Everything in Plus","AI-powered analytics and insights","Advanced reporting and business intelligence","LRA-based payroll tax-table automation*","Gas operations tools","Enhanced onboarding and support","Multi-department management capabilities"] },
];

const industries = [
  {icon:Building2,title:"Businesses & SMEs",desc:"Bring sales, purchasing, expenses, inventory and accounting into one connected workspace."},
  {icon:Users,title:"Schools & academies",desc:"Organize financial records, monitor income and expenses, and improve management visibility."},
  {icon:Globe2,title:"NGOs & development organizations",desc:"Strengthen financial oversight, reporting discipline and accountability across operations."},
  {icon:Landmark,title:"Churches & institutions",desc:"Manage contributions, operating costs, payroll and financial statements with greater clarity."},
];

function Logo({light=false}:{light?:boolean}) {
  return <a href="#home" className="inline-flex items-center gap-3" aria-label="Hindsfeet Accounting home">
    <span className="flex h-12 w-[58px] items-center justify-center">
      <Image src="/images/hindsfeet-logo.png" alt="Hindsfeet company logo" width={116} height={82} priority className="h-12 w-[58px] object-contain"/>
    </span>
    <span className="leading-none">
      <span className={`block text-[20px] font-extrabold tracking-[-.04em] ${light?"text-white":"text-[#0b2148]"}`}>Hindsfeet</span>
      <span className={`mt-1 block text-[9px] font-extrabold tracking-[.25em] ${light?"text-blue-200":"text-slate-400"}`}>ACCOUNTING</span>
    </span>
  </a>;
}
function DemoButton({className=""}:{className?:string}) {
  return <a href={DEMO_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdv3Z6-BhtKZs9-S_4tUoZ1Vd3MpHMXSS66VBRvUYC6rhMFKA/viewform?usp=header"} target="_blank" rel="noreferrer" className={`btn-primary ${className}`}>
    Book a demo <ArrowUpRight size={16}/>
  </a>;
}

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeModule,setActiveModule]=useState("All");
  const [faqOpen,setFaqOpen]=useState(0);
  const groups=["All","Revenue","Procurement","Operations","Accounting","People","Reporting","Governance","Industry tools"];
  const filtered=activeModule==="All"?modules:modules.filter(m=>m.group===activeModule);

  return <main id="home" className="overflow-hidden">
    <div className="bg-[#081d40] py-2 text-center text-[11px] font-semibold tracking-wide text-blue-100">
      A smarter way to manage your organization's finances <span className="mx-2 text-[#f4b400]">•</span> Built for businesses and institutions
    </div>
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="container-x flex h-[82px] items-center justify-between">
        <Logo/>
        <nav className="hidden items-center gap-8 lg:flex">
          <a className="nav-link" href="#platform">Platform</a><a className="nav-link" href="#industries">Who it's for</a><a className="nav-link" href="#intelligence">Why Hindsfeet</a><a className="nav-link" href="#pricing">Pricing</a><a className="nav-link" href="#book-demo">Book a demo</a>
        </nav>
        <div className="hidden lg:block"><DemoButton/></div>
        <button className="rounded-lg border border-slate-200 p-2 lg:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
      </div>
      {menuOpen&&<nav className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
        {["Platform","Industries","Intelligence","Pricing","Contact"].map((x)=><a key={x} onClick={()=>setMenuOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" href={x==="Contact"?"#book-demo":`#${x.toLowerCase()}`}>{x}</a>)}
        <div className="mt-4"><DemoButton/></div>
      </nav>}
    </header>

    <section className="hero-grid relative">
      <div className="container-x grid min-h-[670px] items-center gap-14 py-20 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10 max-w-[590px]">
          <div className="eyebrow">Financial management, reimagined</div>
          <h1 className="mt-6 text-[48px] font-extrabold leading-[1.04] tracking-[-.055em] text-[#071b3d] sm:text-[60px] lg:text-[66px]">Clarity for your numbers.<br/><span className="text-[#17447f]">Confidence for your</span> business.</h1>
          <p className="mt-7 max-w-[520px] text-[17px] leading-8 text-slate-600">One connected financial management system for businesses, schools and institutions. Manage your accounting, payroll, inventory, banking and reporting from one secure workspace.</p>
          <div className="mt-9 flex flex-wrap gap-3"><DemoButton/><a href="#platform" className="btn-secondary">Explore the platform <ArrowRight size={16}/></a></div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold text-slate-500">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#b98200]"/> Organization-focused workspaces</span>
            <span className="flex items-center gap-2"><ChartNoAxesCombined size={16} className="text-[#b98200]"/> Decision-ready reporting</span>
          </div>
        </div>
        <div className="hero-art mx-auto w-full max-w-[680px]">
          <div className="hero-glow"/>
          <div className="hero-shot">
            <div className="hero-windowbar"><span className="flex gap-1.5"><i/><i/><i/></span><span>HINDSFEET ACCOUNTING · COMPANY OVERVIEW</span><span className="hero-window-mark">HI</span></div>
            <Image src="/images/companies.png" alt="Hindsfeet Accounting company management dashboard" width={1551} height={772} priority className="block h-auto w-full"/>
          </div>
          <div className="hero-inset hero-inset-top"><Image src="/images/payroll.png" alt="Hindsfeet payroll management preview" width={1500} height={780}/><span>PAYROLL MANAGEMENT</span></div>
          <div className="hero-inset hero-inset-bottom"><Image src="/images/expenses.png" alt="Hindsfeet expense analytics preview" width={1500} height={780}/><span>EXPENSE INTELLIGENCE</span></div>
          <div className="float-note -left-5 bottom-[-26px] hidden sm:block"><div className="flex items-center gap-3"><span className="icon-tile !h-10 !w-10"><BarChart3 size={19}/></span><span><b className="block text-sm text-[#0b2148]">Financial visibility</b><small className="text-xs text-slate-500">Across your operations</small></span></div></div>
          <div className="float-note -right-2 -top-7 hidden sm:block"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600"><Sparkles size={16}/></span><span className="text-xs font-bold text-[#0b2148]">One connected system</span></div></div>
        </div>
      </div>
      <div className="container-x grid grid-cols-2 gap-3 pb-10 md:grid-cols-4">
        {[["20+","Platform capabilities"],["2 currencies","USD & LRD workflows"],["One workspace","Connected operations"],["3 plans","Flexible subscriptions"]].map(([n,l])=><div key={l} className="border-l-2 border-[#f4b400] pl-4"><div className="text-xl font-extrabold tracking-tight text-[#0b2148]">{n}</div><div className="mt-1 text-xs text-slate-500">{l}</div></div>)}
      </div>
    </section>

    <section className="border-y border-slate-100 bg-white py-7">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-bold uppercase tracking-[.14em] text-slate-400">
        <span>Accounting</span><span className="h-1 w-1 rounded-full bg-[#f4b400]"/><span>Payroll</span><span className="h-1 w-1 rounded-full bg-[#f4b400]"/><span>Inventory</span><span className="h-1 w-1 rounded-full bg-[#f4b400]"/><span>Banking</span><span className="h-1 w-1 rounded-full bg-[#f4b400]"/><span>Business intelligence</span>
      </div>
    </section>

    <section id="platform" className="section-pad bg-[#f7f9fc]">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center"><div className="eyebrow">Explore the platform</div><h2 className="section-title mt-5">Every essential function.<br/>Connected in one place.</h2><p className="section-copy mt-5">Hindsfeet Accounting brings the moving parts of financial management together, helping your team work with more consistency, control and confidence.</p></div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">{groups.map(g=><button key={g} onClick={()=>setActiveModule(g)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${activeModule===g?"border-[#0b2148] bg-[#0b2148] text-white":"border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}>{g}</button>)}</div>
        <div className="module-overview mt-10">
          <div className="module-overview-head">
            <div><span className="module-overline">A connected financial toolkit</span><h3>One platform. Every moving part.</h3></div>
            <div className="module-count"><span>{filtered.length.toString().padStart(2,"0")}</span><small>CAPABILITIES</small></div>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m,index)=>{
              const Icon=m.icon;
              return <article className="module-card group" key={m.name}>
                <div className="module-card-top"><span className="module-icon-wrap"><Icon size={21}/></span><span className="module-index">MODULE {String(index+1).padStart(2,"0")}</span></div>
                <div className="mt-5 flex items-center gap-2"><span className="module-category-dot"/><span className="module-category">{m.group}</span></div>
                <h3 className="mt-2 text-[17px] font-extrabold tracking-[-.025em] text-[#0b2148]">{m.name}</h3>
                <p className="mt-2 min-h-[72px] text-[13px] leading-[1.75] text-slate-500">{m.desc}</p>
                <div className="module-visual mt-5" aria-hidden="true">
                  <div className="module-visual-orb"/><div className="module-visual-line module-visual-line-one"/><div className="module-visual-line module-visual-line-two"/>
                  <div className="module-visual-symbol"><Icon size={27}/></div>
                  <div className="module-visual-caption"><span>HINDSFEET</span><b>{m.group.toUpperCase()}</b></div>
                  <div className="module-visual-nodes"><i/><i/><i/><i/></div>
                </div>
              </article>
            })}
          </div>
        </div>
        <p className="mt-7 text-center text-[11px] text-slate-400">Explore the connected tools available across the Hindsfeet Accounting platform. Feature availability may vary by subscription plan.</p>
      </div>
    </section>

    <section id="industries" className="section-pad">
      <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div className="max-w-[440px]"><div className="eyebrow">Built for your kind of organization</div><h2 className="section-title mt-5">Financial control that fits the way you work.</h2><p className="section-copy mt-5">Different organizations have different financial workflows. Hindsfeet is designed to support a broad range of institutions through a connected, configurable platform.</p><a href="#book-demo" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#17447f]">Talk to our team <ArrowRight size={16}/></a></div>
        <div className="grid gap-4 sm:grid-cols-2">{industries.map(({icon:Icon,title,desc})=><div key={title} className="feature-card"><span className="icon-tile"><Icon size={21}/></span><h3 className="mt-5 text-lg font-extrabold text-[#0b2148]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{desc}</p></div>)}</div>
      </div>
    </section>

    <section id="intelligence" className="relative overflow-hidden bg-[#091f43] py-24 text-white">
      <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"/><div className="absolute -right-12 -top-20 h-[330px] w-[330px] rounded-full border border-white/10"/>
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div><div className="eyebrow !text-[#f4c34e]">More than bookkeeping</div><h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-.04em] sm:text-5xl">See the story behind your numbers.</h2><p className="mt-6 max-w-[520px] text-[15px] leading-8 text-blue-100/75">Good financial management is not only about recording transactions. It is about understanding performance, identifying pressure points and making informed decisions.</p>
          <div className="mt-9 space-y-5">{[{i:Sparkles,t:"AI-powered analytics and insights",d:"A planned intelligence layer to help surface trends, patterns and management signals from financial data."},{i:Calculator,t:"LRA-oriented payroll tax automation",d:"Payroll tax-table generation designed around Liberian Revenue Authority calculations, subject to validation against current official rules."},{i:ShieldCheck,t:"Clear financial controls",d:"Double-entry accounting, ledgers, trial balance and financial statements support stronger oversight."}].map(({i:Icon,t,d})=><div key={t} className="flex gap-4"><span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 text-[#f4c34e]"><Icon size={19}/></span><span><b className="block text-sm">{t}</b><small className="mt-1 block text-xs leading-6 text-blue-100/65">{d}</small></span></div>)}</div>
        </div>
        <div className="relative">
          <div className="absolute inset-4 rounded-2xl bg-[#f4b400]/10 blur-2xl"/>
          <div className="relative space-y-4 rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><div><span className="text-[10px] font-bold uppercase tracking-[.16em] text-blue-100/60">Financial reporting</span><h3 className="mt-1 text-lg font-bold">A clearer picture of performance</h3></div><span className="rounded-lg bg-[#f4b400]/15 p-3 text-[#f4c34e]"><ChartNoAxesCombined size={22}/></span></div>
            <Image src="/images/general-ledger.png" alt="General ledger reporting interface" width={1500} height={780} className="w-full rounded-lg border border-white/10"/>
            <div className="grid grid-cols-3 gap-2">{[["01","Record"],["02","Understand"],["03","Decide"]].map(([n,t])=><div key={n} className="rounded-lg bg-white/[.07] p-3"><span className="text-[10px] font-bold text-[#f4c34e]">{n}</span><p className="mt-1 text-xs font-bold">{t}</p></div>)}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-[#f7f9fc]">
      <div className="container-x">
        <div className="mx-auto max-w-[680px] text-center"><div className="eyebrow">Designed for confidence</div><h2 className="section-title mt-5">The essentials of a more controlled finance function.</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[{i:Layers3,t:"Connected workflows",d:"Move from sales and purchasing to accounting and reporting without treating each activity as a separate island."},{i:LockKeyhole,t:"Organization workspaces",d:"A multi-tenant SaaS direction designed to give each subscribing organization its own workspace and access boundaries."},{i:FileBarChart,t:"Reports that inform action",d:"Review financial statements, receivables, payables, sales, purchases, expenses, inventory and payroll reporting."}].map(({i:Icon,t,d})=><div key={t} className="feature-card"><span className="icon-tile"><Icon size={21}/></span><h3 className="mt-5 text-lg font-extrabold">{t}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{d}</p></div>)}
        </div>
      </div>
    </section>

    <section id="pricing" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-[700px] text-center"><div className="eyebrow">Simple, transparent subscriptions</div><h2 className="section-title mt-5">Choose the level of support<br/>your organization needs.</h2><p className="section-copy mt-5">Straightforward monthly pricing, with room to grow as your financial operations become more sophisticated.</p></div>
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map(p=><div key={p.name} className={`price-card ${p.featured?"featured":""}`}>
            {p.featured&&<span className="absolute -top-3 left-7 rounded-full bg-[#f4b400] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#10284b]">Most popular</span>}
            <p className="text-sm font-extrabold text-[#17447f]">{p.name}</p><p className="mt-2 min-h-[42px] text-sm text-slate-500">{p.intro}</p>
            <div className="mt-6 flex items-end gap-1"><span className="text-5xl font-extrabold tracking-[-.06em] text-[#0b2148]">${p.price}</span><span className="pb-2 text-sm text-slate-400">/ month</span></div>
            <div className="my-7 h-px bg-slate-100"/>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.14em] text-slate-400">What's included</p>
            <ul className="space-y-3">{p.features.map(f=><li key={f} className="flex gap-2 text-[13px] leading-5 text-slate-600"><Check size={16} className="check"/>{f}</li>)}</ul>
            <a href={DEMO_URL || "https://forms.google.com/"} target="_blank" rel="noreferrer" className={`mt-8 w-full ${p.featured?"btn-primary":"btn-secondary"}`}>Discuss this plan <ArrowRight size={15}/></a>
          </div>)}
        </div>
        <p className="mt-6 text-center text-[11px] text-slate-400">*LRA tax-table automation and AI insights are subject to feature availability, implementation and verification. Contact us for a confirmed plan specification.</p>
      </div>
    </section>

    <section className="bg-[#f7f9fc] py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><div className="eyebrow">A closer look</div><h2 className="section-title mt-5">See how the system works in practice.</h2><p className="section-copy mt-4">Explore the real interface and discuss how Hindsfeet Accounting can fit your organization's workflows.</p><div className="mt-7"><DemoButton/></div></div>
        <div className="grid grid-cols-2 gap-3">
          {["payroll.png","expenses.png","trial-balance.png","balance-sheet.png"].map((img,i)=><div key={img} className={`overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-card ${i===1||i===2?"translate-y-5":""}`}><Image src={`/images/${img}`} alt="Hindsfeet system preview" width={760} height={390} className="aspect-[16/9] w-full rounded-lg object-cover object-top"/></div>)}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-x max-w-[850px]">
        <div className="text-center"><div className="eyebrow">Frequently asked questions</div><h2 className="section-title mt-5">A few things you may want to know.</h2></div>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {[
            ["Who can use Hindsfeet Accounting?","The platform is designed for businesses, schools, NGOs, churches and other institutions that need structured financial management."],
            ["Does the platform support both USD and LRD?","The supplied product screens show USD and LRD workflows in areas such as company workspaces, expenses and banking. Exact currency availability should be confirmed for each module and subscription."],
            ["Can we see the system before subscribing?","Yes. Use the Book a demo link to open the Google Form configured by your team and request a product demonstration."],
            ["Does the platform calculate Liberian payroll taxes?","The product roadmap includes automatic tax-table generation based on LRA calculations. Tax rules and calculations should be verified against current official guidance before use for payroll compliance."],
            ["Is this a cloud-based multi-tenant service?","Hindsfeet Accounting is being positioned as a multi-tenant SaaS platform, with a separate workspace for each subscribing organization. Ask our team about the current deployment and onboarding arrangements."],
            ["Can our organization receive onboarding and support?","Contact the Hindsfeet team to discuss setup, user training, data migration and the support arrangements available under each plan."]
          ].map(([q,a],i)=><div key={q} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left" onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span className="text-[15px] font-extrabold text-[#0b2148]">{q}</span><ChevronDown size={18} className={`flex-none text-slate-400 transition ${faqOpen===i?"rotate-180":""}`}/></button>{faqOpen===i&&<p className="max-w-[740px] pt-3 text-sm leading-7 text-slate-500">{a}</p>}</div>)}
        </div>
      </div>
    </section>

    <section id="book-demo" className="relative overflow-hidden bg-[#f5f7fb] py-24">
      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"/>
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"/>
      <div className="container-x relative">
        <div className="demo-panel grid items-center gap-10 overflow-hidden rounded-[26px] border border-white/80 bg-white p-8 shadow-soft md:p-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative z-10">
            <div className="eyebrow">Your next step starts here</div>
            <h2 className="section-title mt-5 max-w-[620px]">See what better financial management can look like.</h2>
            <p className="section-copy mt-5 max-w-[570px]">Book a personal walkthrough of Hindsfeet Accounting. Tell us about your organization, explore the modules that matter to your team and discuss the right subscription plan.</p>
            <div className="mt-8 flex flex-wrap gap-3"><DemoButton/><span className="inline-flex items-center gap-2 px-2 text-xs font-semibold text-slate-500"><ShieldCheck size={16} className="text-[#b98200]"/> No commitment required</span></div>
            <p className="mt-5 text-[11px] leading-5 text-slate-400">The button opens our Google Form in a new tab. Your demo request is collected through that form, not this website.</p>
          </div>
          <div className="demo-visual relative mx-auto w-full max-w-[470px]">
            <div className="demo-orbit absolute inset-0 rounded-full"/>
            <div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_65px_rgba(7,27,61,.16)]">
              <div className="flex items-center justify-between px-2 pb-3"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-300"/><i className="h-2 w-2 rounded-full bg-amber-300"/><i className="h-2 w-2 rounded-full bg-emerald-300"/></div><span className="text-[9px] font-bold tracking-[.15em] text-slate-400">HINDSFEET WORKSPACE</span></div>
              <Image src="/images/balance-sheet.png" alt="Hindsfeet Accounting balance sheet interface preview" width={1533} height={723} className="w-full rounded-lg border border-slate-100"/>
            </div>
            <div className="demo-float absolute -bottom-5 -left-5 z-20 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-card"><span className="block text-[9px] font-bold uppercase tracking-[.13em] text-slate-400">Financial visibility</span><span className="mt-1 block text-sm font-extrabold text-[#0b2148]">All in one place</span></div>
            <div className="demo-float absolute -right-3 -top-5 z-20 rounded-xl bg-[#0b2148] px-4 py-3 text-white shadow-card"><span className="flex items-center gap-2 text-xs font-bold"><Sparkles size={14} className="text-[#f4c34e]"/> One connected system</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f4b400] py-14">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#674700]">Make the next financial decision a better one</p><h2 className="mt-2 text-3xl font-extrabold tracking-[-.04em] text-[#081d40]">Let's put your finances in perspective.</h2></div><DemoButton className="!bg-[#081d40] hover:!bg-[#173e78]"/>
      </div>
    </section>

    <footer className="bg-[#071a38] py-14 text-white">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div><Logo light/><p className="mt-5 max-w-[360px] text-sm leading-7 text-blue-100/60">Connected financial management for businesses and institutions. Built to help organizations work with clarity, control and confidence.</p></div>
          <div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#f4c34e]">Explore</p><div className="mt-5 space-y-3 text-sm text-blue-100/70"><a className="block hover:text-white" href="#platform">Platform modules</a><a className="block hover:text-white" href="#industries">Who it's for</a><a className="block hover:text-white" href="#pricing">Subscription plans</a></div></div>
          <div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#f4c34e]">Company</p><div className="mt-5 space-y-3 text-sm text-blue-100/70"><p>Hindsfeet Accounting</p><p>Hindsfeet Investments Liberia Limited</p><p>Liberia</p><a className="block hover:text-white" href="#book-demo">Contact the team</a></div></div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-blue-100/40 sm:flex-row"><p>© {new Date().getFullYear()} Hindsfeet Investments Liberia Limited. All rights reserved.</p><p>Hindsfeet Accounting is a technology brand of Hindsfeet Investments Liberia Limited.</p></div>
      </div>
    </footer>
  </main>;
}
