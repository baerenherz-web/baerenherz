/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, e as defineScriptVars, f as renderComponent, F as Fragment, g as renderHead } from '../../renderers.mjs';
/* empty css                               */
const Logo = {"src":"/_astro/logo_header.2ac5b6a7.png","width":1382,"height":608,"format":"png"};

const $$Astro$e = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([" mx-auto px-5 md:px-10", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/container.astro", void 0);

const $$Astro$d = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    xl: "px-[3em] py-3",
    lg: "px-10 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-[#dfecf7] text-[#2b2523] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:border-[#dfecf7] hover:border-2 border-transparent border-2",
    inverted: "bg-[#033277] text-white hover:bg-[#dfecf7] hover:text-[#2b2523] hover:border-[#033277] border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/ui/Link.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$c = createAstro();
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "\n\n<script>(function(){", '\ndocument.addEventListener("DOMContentLoaded", () => {\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          console.log("click");\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n});\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n  }\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$b = createAstro();
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Toggle Menu</title>
      <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$7 = createAstro();
const $$Dropdown$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$6 = createAstro();
const $$DropdownSubmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")} aria-expanded="false">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$5 = createAstro();
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")} aria-expanded="false">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

const $$Astro$4 = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative">
  ${renderComponent($$result, "Dropdown", $$Dropdown$1, { "class": "group" }, { "default": ($$result2) => renderTemplate`
    <button class="flex w-full items-center gap-1 py-2 text-gray-600 hover:text-gray-900 lg:w-auto lg:px-3">
      <span>${title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="mt-0.5 h-3 w-3 group-open:rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>
    ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate`
      <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}>
        <div class="flex flex-col px-3 lg:rounded-md lg:border lg:bg-white lg:py-2 lg:shadow">
          ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:bg-[#dfecf7] hover:text-[#2b2523]">
                ${item.title}
              </a>`)}
        </div>
      </div>
    ` })}
  ` })}
</li>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/navbar/dropdown.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuItems = [
    {
      title: "\xDCber uns",
      children: [
        {
          title: "Mission",
          path: "/about"
        },
        {
          title: "Philosophie",
          path: "/about#philosophie"
        },
        {
          title: "Vorstand",
          path: "/about#vorstand"
        },
        {
          title: "Statuten",
          path: "/about#statuten"
        }
      ]
    },
    { title: "Mitgliedschaft", path: "/mitgliedschaft" },
    { title: "Projekte", path: "/projekte" },
    {
      title: "Aktivit\xE4ten",
      children: [
        {
          title: "Charity Golfturinier 2023",
          path: ""
        },
        {
          title: "Charity Skitag 2023",
          path: ""
        },
        {
          title: "Charity Golfturinier 2022",
          path: ""
        }
      ]
    },
    { title: "News", path: "/blog" }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="my-5 flex flex-col items-center justify-between lg:flex-row">
    ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate`
      <div class="flex w-full items-center justify-between lg:w-auto">
        <a href="/">
          <img${addAttribute(Logo.src, "src")} class="aspect-auto h-16 object-cover" alt="Logo Bärenherz">
        </a>

        <!-- hamburger button -->
        <div class="block lg:hidden">
          ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "h-4 w-4 text-[#033277]" })}
        </div>
      </div>
      ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto" }, { "default": ($$result4) => renderTemplate`
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          ${menuItems.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${item.children && renderTemplate`${renderComponent($$result5, "Dropdown", $$Dropdown, { "title": item.title, "children": item.children, "lastItem": index === menuItems.length - 1 })}`}${!item.children && renderTemplate`<li>
                    <a${addAttribute(item.path, "href")} class="flex py-2 text-gray-600 hover:bg-[#dfecf7] hover:text-gray-900 lg:px-3">
                      ${item.title}
                    </a>
                  </li>`}` })}`)}
        </ul>
        <div class="mt-3 flex items-center gap-4 lg:hidden">
          ${renderComponent($$result4, "Link", $$Link, { "href": "/spenden", "style": "inverted" }, { "default": ($$result5) => renderTemplate`Jetzt spenden!` })}
        </div>
      ` })}
    ` })}
    <div>
      <div class="hidden items-center gap-4 lg:flex">
        ${renderComponent($$result2, "Link", $$Link, { "href": "/spenden", "style": "inverted" }, { "default": ($$result3) => renderTemplate`Jetzt spenden!` })}
      </div>
    </div>
  </header>
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/navbar/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "w-full bg-[#2b2523] text-xs/6 text-white" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<footer class="flex w-full flex-col gap-3 py-10 md:flex-row md:justify-between md:gap-10">
    <div>
      <p>Bärenherz</p>
      <p>Verein für humanitäre Hilfe</p>
      <p>c/o Rainer Mück</p>
      <p>Untersellenstrasse 27</p>
      <p>CH-8873 Amden</p>
      <p class="py-2">
        Email: <a href="mailto:info@baerenherz.org">info@baerenherz.org</a>
      </p>
    </div>

    <div class="md:text-center">
      <p>Spendenkonto:</p>
      <p>Bärenherz – Verein für humanitäre Hilfe</p>
      <p>Thurgauer Kantonalbank</p>
      <p>IBAN CH91 0078 4297 6098 0200 1</p>
      <p>BIC KBTGCH22</p>
    </div>

    <div><a href="/impressum"> Impressum</a></div>
  </footer>
` })}

<!-- 
  <div>
      <p class="mt-1 text-xs text-slate-500">
        Made by <a
          href="https://web3templates.com"
          target="_blank"
          rel="noopener"
          class="hover:underline">
          Web3Templates
        </a>
      </p>
      <div>
        <p class="text-sm text-slate-500">
          Copyright © {new Date().getFullYear()} Astroship. All rights reserved.
        </p>
      </div>
      <div>
        <p class="text-sm text-slate-500">
          Copyright © {new Date().getFullYear()} Astroship. All rights reserved.
        </p>
      </div>
    </div>

 -->`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.avif">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css">
    <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css">
    <title>${title}</title>
  ${renderHead()}</head>

  <body class="h-full">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="flex max-h-screen items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">404</h1>
        <p class="mt-4 text-lg text-slate-600">Page not found.</p>
      </div>
    </div>
  ` })}
` })}

<!-- 


  This example requires updating your template:

  \`\`\`
  <html class="h-full">
  <body class="h-full">
  \`\`\`
<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
      <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
 -->`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/404.astro", void 0);

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, _404 as _, $$Link as a, $$Layout as b };
