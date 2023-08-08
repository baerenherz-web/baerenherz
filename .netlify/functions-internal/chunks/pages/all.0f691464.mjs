/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, e as defineScriptVars, f as renderComponent, F as Fragment, g as renderHead, $ as $$Image, h as createCollectionToGlobResultMap, i as createGetCollection } from '../astro.d874dab6.mjs';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:fs/promises';
/* empty css                               */
const Logo = {"src":"/_astro/logo_header.2ac5b6a7.png","width":1382,"height":608,"format":"png"};

const $$Astro$w = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([" mx-auto px-5 md:px-10", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/container.astro");

const $$Astro$v = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/ui/Link.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$u = createAstro();
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "\n\n<script>(function(){", '\ndocument.addEventListener("DOMContentLoaded", () => {\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          console.log("click");\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n});\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      ".astronav-dropdown button, .astronav-dropdown-submenu button, #astronav-menu"\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n  }\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/Astronav.astro");

const $$Astro$t = createAstro();
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="astronav-menu" aria-label="Toggle Menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Toggle Menu</title>
      <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/MenuIcon.astro");

const $$Astro$s = createAstro();
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/OpenIcon.astro");

const $$Astro$r = createAstro();
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/CloseIcon.astro");

const $$Astro$q = createAstro();
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/MenuItems.astro");

const $$Astro$p = createAstro();
const $$Dropdown$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/Dropdown.astro");

const $$Astro$o = createAstro();
const $$DropdownSubmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")} aria-expanded="false">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/DropdownSubmenu.astro");

const $$Astro$n = createAstro();
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")} aria-expanded="false">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/node_modules/.pnpm/astro-navbar@2.0.1/node_modules/astro-navbar/src/components/DropdownItems.astro");

const $$Astro$m = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="relative">
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
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/navbar/dropdown.astro");

const $$Astro$l = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
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
  ${maybeRenderHead($$result2)}<header class="my-5 flex flex-col items-center justify-between lg:flex-row">
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
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/navbar/Navbar.astro");

const $$Astro$k = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "w-full bg-[#2b2523] text-xs/6 text-white" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<footer class="flex w-full flex-col gap-3 py-10 md:flex-row md:justify-between md:gap-10">
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
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Footer.astro");

const $$Astro$j = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
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
  ${renderHead($$result)}</head>

  <body class="h-full">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/Layout.astro");

const $$Astro$i = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Cta;
  const { ctaImage, ctaAlt, ctaLink } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "my-6 gap-5 bg-[#033277] p-0 py-10 md:flex md:justify-items-stretch md:p-0 xl:justify-center" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="m-0 hidden flex-shrink-0 p-0 md:block">
    ${renderComponent($$result2, "Image", $$Image, { "src": ctaImage, "alt": ctaAlt, "loading": "eager", "format": "avif" })}
  </div>
  <div class="flex flex-1 justify-center align-middle">
    <div class="text-center md:flex md:flex-col md:justify-center">
      <p class="max-w-xl text-lg font-bold italic leading-relaxed text-white md:px-10">
        ${renderSlot($$result2, $$slots["content1"], renderTemplate`quote`)}
      </p>
      <p class="mt-4 max-w-xl text-base font-bold text-white">
        ${renderSlot($$result2, $$slots["content2"], renderTemplate`quote`)}
      </p>
      <p class="mt-4 max-w-xl text-sm text-white">
        ${renderSlot($$result2, $$slots["content3"], renderTemplate`quote`)}
      </p>
      <div class="mt-6 flex flex-col gap-3 md:flex-row md:justify-center">
        ${renderComponent($$result2, "Link", $$Link, { "href": "/spenden", "class": "lg flex items-center justify-center gap-1 text-2xl", "size": "xl", "rel": "noopener" }, { "default": ($$result3) => renderTemplate`${ctaLink}` })}
      </div>
    </div>
  </div>
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Cta.astro");

const $$Astro$h = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2 w-fit"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-[#dfecf7] text-[#2b2523] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:border-[#dfecf7] hover:border-2 border-transparent border-2",
    inverted: "bg-[#033277] text-white hover:bg-[#dfecf7] hover:text-[#2b2523] hover:border-[#033277] border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(rest)}${addAttribute([
    "text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/ui/Button.astro");

const $$Astro$g = createAstro();
const $$NewsletterForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$NewsletterForm;
  return renderTemplate`${maybeRenderHead($$result)}<form method="POST" class="mt-6 flex max-w-md gap-x-4">
  <input id="email-address" name="email" type="email" autocomplete="email" aria-placeholder="Email" required minlength="5" maxlength="50" class="min-w-0 flex-auto border-0 bg-white px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Email">
  ${renderComponent($$result, "Button", $$Button, { "type": "submit", "class": "flex-none" }, { "default": ($$result2) => renderTemplate`Absenden` })}
</form>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/forms/NewsletterForm.astro");

const $$Astro$f = createAstro();
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Newsletter;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "mt-6 bg-[#033277] py-10 text-white" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="flex flex-col gap-6 md:flex-row xl:justify-center">
    <!-- heading -->
    <div>
      <h2 class="text-4xl font-bold dark:text-white">
        Bleiben Sie Informiert!
      </h2>
    </div>
    <!-- newsletter section -->
    <div class="flex flex-col leading-7 md:w-4/5 xl:w-7/12">
      <div>
        <p>
          Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden
          vor Ort Gutes tun und senden ihnen Einladungen zu unseren
          Veranstaltungen.
        </p>
      </div>
      <!-- formulario -->
      ${renderComponent($$result2, "NewsletterForm", $$NewsletterForm, {})}
    </div>
  </div>
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Newsletter.astro");

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.48a589c4.mjs'),"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.4a0640a3.mjs'),"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.6eb45125.mjs'),"/src/content/blog/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.c0bf3204.mjs'),"/src/content/blog/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.0b96989d.mjs'),"/src/content/blog/golf-charity-hope.mdx": () => import('../golf-charity-hope.9bc6f271.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"aktivitaeten":{"type":"content","entries":{"charity-golfturnier-2022":"/src/content/aktivitaeten/charity-golfturnier-2022.mdx","charity-golfturnier-bericht2023":"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx","charity-skitag-bericht2023":"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx"}},"blog":{"type":"content","entries":{"bericht-charity-skitag-2023":"/src/content/blog/bericht-charity-skitag-2023.mdx","besuch-nordmazedonien":"/src/content/blog/besuch-nordmazedonien.mdx","golf-charity-hope":"/src/content/blog/golf-charity-hope.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/aktivitaeten/charity-golfturnier-2022.mdx": () => import('../charity-golfturnier-2022.6f122988.mjs'),"/src/content/aktivitaeten/charity-golfturnier-bericht2023.mdx": () => import('../charity-golfturnier-bericht2023.64b8a054.mjs'),"/src/content/aktivitaeten/charity-skitag-bericht2023.mdx": () => import('../charity-skitag-bericht2023.30cfb54b.mjs'),"/src/content/blog/bericht-charity-skitag-2023.mdx": () => import('../bericht-charity-skitag-2023.02fec067.mjs'),"/src/content/blog/besuch-nordmazedonien.mdx": () => import('../besuch-nordmazedonien.a18832e6.mjs'),"/src/content/blog/golf-charity-hope.mdx": () => import('../golf-charity-hope.8216787f.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$e = createAstro();
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>
  ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}
</time>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/FormattedDate.astro");

const $$Astro$d = createAstro();
const $$Aktuelles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Aktuelles;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead($$result)}<div class="my-2 py-6">
  <h1 class="text-center text-3xl font-extrabold tracking-tight">
    Aktuelles von Bärenherz
  </h1>

  <ul class="w-full gap-4 p-10 md:flex">
    ${posts.map((post) => renderTemplate`<li class="flex-1 border-2 border-[#dfecf7] hover:border-2 hover:border-[#033277]">
          <a${addAttribute(`/blog/${post.slug}/`, "href")}>
            ${renderComponent($$result, "Image", $$Image, { "width": 600, "height": 400, "src": post.data.cover, "alt": post.data.coverAlt })}
            <div class="p-5">
              <h4 class="h-14 font-bold">${post.data.title}</h4>
              <p class="pb-2 text-gray-500">
                ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-sm line-clamp-3 lg:prose-xl">
                ${post.data.description}
              </div>
            </div>
          </a>
        </li>`)}
  </ul>
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Aktuelles.astro");

const ctaImage = {"src":"/_astro/cta.edc4962e.jpg","width":300,"height":452,"format":"jpg","orientation":1};

const $$Astro$c = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$2;
  const ctaAlt = "test";
  const ctaLink = "Jetzt spenden";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Baerenherz - Verein f\xFCr humanit\xE4re Hilfe" }, { "default": ($$result2) => renderTemplate`
  
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<article class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <p>
        Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz mit
        dem Ziel gegründet, dort zu helfen, wo lebensnotwendige Unterstützung
        benötigt wird. Wir sind ein unabhängiger Verein, der durch das
        persönliche und ehrenamtliche Engagement der Mitglieder sowie den
        Einnahmen aus von uns organisierten Charity Events und Spendengeldern
        jeweils im Vor-feld definierte Projekte in Sinne der Philosophie des
        Vereins unterstützt.
      </p>
    </article>
  ` })}
  ${renderComponent($$result2, "Cta", $$Cta, { "ctaImage": ctaImage, "ctaAlt": ctaAlt, "ctaLink": ctaLink }, { "content1": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content1" }, { "default": ($$result4) => renderTemplate`
      „Mit meiner Mitgliedschaft kann ich die großartige Arbeit von Bärenherz
      unterstützen und habe das gute Gefühl eine Hilfe zu leisten, die auch zu
      100% dort ankommt, wo sie auch dringend gebraucht wird.“
    ` })}`, "content2": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content2" }, { "default": ($$result4) => renderTemplate`Natascha Heye` })}`, "content3": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content3" }, { "default": ($$result4) => renderTemplate`Unternehmerin, Zürich` })}` })}
  ${renderComponent($$result2, "Aktuelles", $$Aktuelles, {})}
  ${renderComponent($$result2, "Newsletter", $$Newsletter, {})}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/index.astro");

const $$file$9 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/index.astro";
const $$url$9 = "";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { altHead, imageHead } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="relative isolate flex overflow-hidden bg-gray-900 py-24 sm:py-32">
  ${renderComponent($$result, "Image", $$Image, { "src": imageHead, "alt": altHead, "class": "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" })}

  <div class="m-20 flex max-w-2xl flex-col bg-[#f2f8f9] px-4 py-6 md:w-2/6 md:px-6">
    <h4 class="text-2xl tracking-tight">
      ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
    </h4>
    <span class="my-4 w-full border-b-2 border-[#033277]"></span>
    <h2 class="text-3xl font-bold md:text-4xl md:leading-tight">
      ${renderSlot($$result, $$slots["content"], renderTemplate`Subtitle`)}
    </h2>
  </div>
</div>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/components/Sectionhead.astro");

const localImage$2 = {"src":"/_astro/Mitfliedschaft.14cd1f96.jpg","width":1772,"height":1181,"format":"jpg","orientation":1};

const $$Astro$a = createAstro();
const $$Mitgliedschaft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Mitgliedschaft;
  const localAlt = "Mitgliedschaft";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mitgliedschaft" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "class": "items-center text-center", "altHead": localAlt, "imageHead": localImage$2 }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
      Gemeinsam dort helfen, wo Hilfe gebraucht wird.
    ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "class": "uppercase" }, { "default": ($$result4) => renderTemplate`Mitgliedschaft` })}` })}

  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<section class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Mitgliedschaft</h2>
        <p class="text-lg leading-7">
          Eine Mitgliedschaft bei Bärenherz hilft uns, unsere administrativen
          Kosten und Aufgaben zu erfüllen. Ein wesentlicher Teil unserer
          Philosophie ist es, dass alle Einnahmen aus unseren Aktivitäten zu
          100% in die jeweils geförderten Projekte fliessen. Sämtliche
          administrativen Kosten wie z.B. Pflege der Homepage werden
          ehrenamtlich übernommen bzw.von Mitgliedsbeiträgen oder Zuwendungen
          der Mitglieder getragen. Auch freuen wir uns natürlich, uns mit
          unseren Mitgliedern auszutauschen, Ideen aufzunehmen und uns gemeinsam
          zu engagieren. Wir bieten sowohl eine persönliche Mitgliedschaft wie
          auch eine Unternehmensmitgliedschaft für alle an, die die Philosophie
          und Projekte unseres karitativen Vereins unterstützen wollen.
          Nachfolgend können Sie die Mitgliedschaft einfach online beantragen,
          der Vorstand entscheidet dann umgehend über die Aufnahme.
        </p>
      </article>

      <!-- boxes -->
      <article class="flex flex-col gap-4 md:my-4 md:flex-row md:justify-center md:gap-10">
        <div class="flex flex-col justify-center gap-5 bg-[#84b9e4] p-8 text-center align-middle">
          <h3 class="" font-bold>Persönliche Mitgliedschaft</h3>
          <p>Jahresbeitrag CHF 250.00</p>
          ${renderComponent($$result3, "Button", $$Button, { "style": "inverted", "size": "md", "class": "m-auto" }, { "default": ($$result4) => renderTemplate`
            Persönliches Mitglied werden
          ` })}
        </div>
        <div class="flex flex-col justify-center gap-5 bg-[#84b9e4] p-8 text-center align-middle">
          <h3 class="" font-bold>Unternehmensmitgliedschaft</h3>
          <p>Jahresbeitrag CHF 1'000.00</p>
          ${renderComponent($$result3, "Button", $$Button, { "style": "inverted", "size": "md", "class": "m-auto" }, { "default": ($$result4) => renderTemplate`
            Unternehmensmitglied werden
          ` })}
        </div>
      </article>
      <!-- end Boxes -->

      <p class="mt-10 text-lg leading-7">
        Der Jahresbeitrag ist jeweils für das Kalenderjahr geschuldet. Bitte
        füllen Sie das verknüpfte Antragsfor mular aus und reichen Sie dieses
        ein an info@baerenherz.org oder per Post an Bärenherz – Verein für
        humanitäre Hilfe, c/o Rainer Mück, Untersellenstrasse 37, 8873 Amden.
        Der Vorstand entscheidet über die Aufnahme neuer Vereinsmitglieder.
      </p>
      <div class="py-10">
        ${renderComponent($$result3, "Cta", $$Cta, {})}
      </div>
    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro");

const $$file$8 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/mitgliedschaft.astro";
const $$url$8 = "/mitgliedschaft";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mitgliedschaft,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("aktivitaeten")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aktivitaeten" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`${posts.map((post) => renderTemplate`${maybeRenderHead($$result3)}<li>
          <a${addAttribute(`/aktivitaeten/${post.slug}/`, "href")}>
            ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.cover, "alt": post.data.coverAlt })}
            <div class="mb-6 mt-2 pb-10 pt-4">
              <h4 class="text-3xl">${post.data.title}</h4>
              <p class="pb-4 pt-2 text-base text-gray-500">
                ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-base line-clamp-4 lg:prose-xl">
                ${post.data.description}
              </div>
            </div>
          </a>
        </li>`)}` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/index.astro");

const $$file$7 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/index.astro";
const $$url$7 = "/aktivitaeten";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const partners = {"src":"/_astro/sponsoren2023.be2b75f6.png","width":2398,"height":727,"format":"png"};

const $$Astro$8 = createAstro();
const $$AktivitaetenPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$AktivitaetenPost;
  const { title, cover, coverAlt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<div class="py-6">
      ${renderComponent($$result3, "Link", $$Link, { "href": "/aktivitaeten" }, { "default": ($$result4) => renderTemplate`« aktivitaeten` })}
    </div>
    <div class="">
      ${cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
    </div>

    <div class="my-8">
      <h1 class="py-4 text-3xl">${title}</h1>
      <div class="prose-xl lg:prose-xl">
        ${renderSlot($$result3, $$slots["default"])}
      </div>
    </div>

    <div class="flex gap-10">
      <div class="flex-1">
        <h3 class="text-3xl font-bold">Unsere Partner:</h3>
      </div>
      <div class="flex-2">
        ${renderComponent($$result3, "Image", $$Image, { "src": partners, "alt": "random" })}
      </div>
    </div>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/AktivitaetenPost.astro");

const $$Astro$7 = createAstro();
async function getStaticPaths$1() {
  const posts = await getCollection("aktivitaeten");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$$1;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "AktivitaetenPost", $$AktivitaetenPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/[...slug].astro");

const $$file$6 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/aktivitaeten/[...slug].astro";
const $$url$6 = "/aktivitaeten/[...slug]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$6,
  getStaticPaths: getStaticPaths$1,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const Hope = {"src":"/_astro/hope.141369d7.png","width":347,"height":160,"format":"png"};

const localImage$1 = {"src":"/_astro/baby-2.057ef66f.jpeg","width":2048,"height":1536,"format":"jpg"};

const galleryGrid1 = {"src":"/_astro/alles-gesund.b57a8997.jpg","width":1280,"height":854,"format":"jpg"};

const galleryGrid3 = {"src":"/_astro/baby-bed.db23acfc.jpg","width":1200,"height":800,"format":"jpg","orientation":1};

const galleryGrid2 = {"src":"/_astro/nicu.0066a982.jpg","width":3072,"height":2045,"format":"jpg","orientation":1};

const galleryGrid4 = {"src":"/_astro/mother-vera.d5ebfa4a.jpg","width":5472,"height":3648,"format":"jpg"};

const galleryFlex1 = {"src":"/_astro/FullSizeRender.d6020dce.jpg","width":2338,"height":1858,"format":"jpg","orientation":1};

const galleryFlex2 = {"src":"/_astro/IMG_1163.a3b73755.jpg","width":2000,"height":2667,"format":"jpg","orientation":1};

const galleryFlex3 = {"src":"/_astro/Unknown.db9417db.jpeg","width":4032,"height":3024,"format":"jpg","orientation":1};

const galleryFlex4 = {"src":"/_astro/Unknown-2.35011784.jpeg","width":2048,"height":1536,"format":"jpg"};

const $$Astro$6 = createAstro();
const $$Projekte = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Projekte;
  const localAlt = "Mitgliedschaft";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mitgliedschaft" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "class": "items-center text-center", "altHead": localAlt, "imageHead": localImage$1 }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
      Hilfe für die Schwächsten. Direkt und lebensrettend.
    ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "class": "uppercase" }, { "default": ($$result4) => renderTemplate`Projekte` })}` })}

  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<section class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">
      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Projekte 2023</h2>
        <div class="text-lg leading-7">
          <p>
            Für 2023 haben wir uns entschieden, weiterhin Project HOPE e.V. mit
            dem Engament in Nordmazedonien zu unterstützen. Bei unserem Besuch
            im Frühjahr 2023 mussten wir uns von den verheerenden Zuständen in
            Strumica überzeugen. Hier fehlt es an der nötigsten medizinischen
            Ausstattung insbesondere in der Geburtenstation.
          </p>
          <p>
            Daher gingen auch die Geburten dort in den letzten Jahren
            kontinuierlich zurück. Die Tatsache, dass ein neues Krankenhaus
            fertiggestellt ist, hilft leider nicht vollkommen, da inzwischen das
            Geld ausgegangen ist und man es trotz Fertigstellung noch nicht
            geschafft hat, in dieses Krankenhaus überzusiedeln. Für die
            medizinische Ausstattung fehlen sämtliche Mittel. Die Situation
            zeigt aber auch, wie wichtig es ist, wirklich vor Ort
            sicherzustellen, dass die Mittel zielgerichtet verwendet werden und
            das auch nachhaltig so bleibt. Dafür werden wir persönlich alles
            tun.
          </p>
        </div>
      </article>

      <div class="my-8 flex w-fit flex-col md:flex-row">
        ${renderComponent($$result3, "Image", $$Image, { "src": galleryFlex1, "alt": "hope logo", "class": "md:h-40" })}
        ${renderComponent($$result3, "Image", $$Image, { "src": galleryFlex2, "alt": "hope logo", "class": "md:h-40" })}
        ${renderComponent($$result3, "Image", $$Image, { "src": galleryFlex3, "alt": "hope logo", "class": "md:h-40" })}
        ${renderComponent($$result3, "Image", $$Image, { "src": galleryFlex4, "alt": "hope logo", "class": "md:h-40" })}
      </div>

      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Projekte 2022</h2>

        <div class="text-lg leading-7">
          <p>
            Für 2022 haben wir uns entschieden, dass Projekt PeriMAC zu
            unterstützen. Hier geht es um eine Verbesserung der
            Gesundheitsvorsorge „rund um die Geburt“ in Nordmazedonien. Aus
            unserer persönlichen Erfahrungmy-8 bestehende Strukturen zugreifen,
            die sich über die Zeit bewährt haben und einen wirklich
            unglaublichen Beitrag zur Verbesserung des Gesundheitswesens in den
            ärmsten Ländern Europas geleistet haben.
          </p>
          <p>
            Project HOPE e.V.setzt sich seit 25 Jahren erfolgreich dafür ein,
            dass in Osteuropa mehr Neugeborene überleben. Dies geschieht mit
            Bereitstellung moderner Medizintechnik und durch kompetente
            Fortbildung von Ärzten und Pflegepersonal. Im aktuellen Projekt
            PeriMAC stehen 2 wesentliche Themen an, die Bärenherz in 2022 mit
            Ihrer Hilfe begleiten und unterstützen möchte:
          </p>
        </div>
        <!-- boxes -->
        <article class="my-4 flex flex-col justify-center gap-4 md:flex-row md:gap-10">
          <div class="flex flex-col justify-start gap-5 bg-[#84b9e4] p-8 text-center align-middle md:w-1/2">
            <h3 class="" font-bold>Medizintechnik</h3>
            <p>
              Auch im Jahr 2022 wird Project HOPE e.V. sein Engagement für das
              Land Nordmazedonien fortsetzen. Mit dem klaren Ziel, dort
              weiterhin die Säuglingssterblichkeit zu reduzieren, werden in
              Absprache mit dem Gesundheitsministerium des Landes weitere
              regionale Kliniken mit lebensrettenden Gerätschaften ausgestattet.
              Mit einem Betrag von CHF 25.000 können folgende lebensrettende
              Geräte für die Geburtsabteilungen der Kliniken in Štip und Bitola
              angeschafft werden: Inkubatoren, Beatmungsgeräte, Wärmebettchen.
              Als Referenz: · Inkubator: € 10.000 · Wärmebettchen: € 2.500 ·
              Beatmungsgerät: € 10.000
            </p>
          </div>
          <div class="flex flex-col justify-center gap-5 bg-[#84b9e4] p-8 text-center align-top md:w-1/2">
            <h3 class="" font-bold>Fortbildung</h3>
            <p>
              Weil insbesondere die ersten kritischen 10 Minuten im Leben eines
              Neugeborenen gut bewältigt werden müssen, wird ein umfangreiches
              Ausbildungsprogramm mit dem Schwerpunkt auf diese neonatale
              Erstversorgung durchgeführt [NLS=Newborn Life Support].Project
              HOPE vertraut auf die ehrenamtliche Unterstützung der
              Universitätskliniken Amsterdam und Bonn. Für die Trainingsmodelle
              [z.B. „Premature Anne“ von Laerdal, s. Foto], für
              Schulungsmaterialien, Urkunden, Akkreditierung sowie
              Übersetzungen, benötigt Project HOPE einen Betrag in Höhe von CHF
              25.000. Mehr als 150 Ärzte und Pflegepersonal werden von dieser
              nachhaltigen Initiative profitieren. Sie schenken somit nicht nur
              vielen Neugeborenen einen sicheren Start ins Leben sondern leisten
              einen unermesslichen Beitrag zur Motivation / zum Engagement des
              medizinischen Personals.
            </p>
          </div>
        </article>
        <!-- end Boxes -->
        <article class="py-6">
          <div class="text-lg leading-7">
            <p>
              Wir werden uns im Verlauf des Jahres 2022 persönlich vor Ort von
              der aktuellen Situation überzeugen und hoffen, hier einen
              wertvollen Beitrag leisten zu können. Für weitere Informationen
              über das Projekt und die Arbeit von Project Hope e.V. stehen Ihnen
              die Informationen auf der Homepage zur Verfügung:
              <a href="https://www.projecthope.de/" target="_blank" rel="noreferrer" class="text-blue-500 underline">www.projecthope.de</a>
            </p>
          </div>
        </article>

        <!-- Imagenes -->
        <div class="my-8 grid grid-rows-2 justify-items-center md:grid-flow-col">
          ${renderComponent($$result3, "Image", $$Image, { "src": galleryGrid1, "alt": "hope logo" })}
          ${renderComponent($$result3, "Image", $$Image, { "src": galleryGrid2, "alt": "hope logo" })}
          ${renderComponent($$result3, "Image", $$Image, { "src": galleryGrid3, "alt": "hope logo" })}
          ${renderComponent($$result3, "Image", $$Image, { "src": galleryGrid4, "alt": "hope logo" })}
        </div>

        <article class="py-6">
          <div class="flex flex-col gap-10 text-lg leading-7 md:flex-row">
            <div class="w-full md:w-2/3">
              <p>
                Inspiriert wurden die Gründer von Bärenherz durch ihre
                langjährige aktive Unterstützung von Project Hope e.V. in
                Deutschland zur Verbesserung der Lebensbedin gungen von Mutter
                und Kind in den ärmsten Ländern Europas. Diesem Thema fühlen wir
                uns in besonderer Weise verbunden und werden auch zukünftig
                versuchen, als verlässlicher Partner die Arbeit von Project Hope
                e.V. aktiv zu unterstützen.
              </p>
            </div>
            <div class="w-full md:w-1/3">
              ${renderComponent($$result3, "Image", $$Image, { "src": Hope, "alt": "hope logo", "class": "mb-6" })}
              <a href="https://www.projecthope.de/" target="_blank" rel="noreferrer" class="text-blue-500 underline">www.projecthope.de</a>
            </div>
          </div>
        </article>
      </article>
      <article>
        <div class="flex flex-1 justify-center bg-[#84b9e4] align-middle">
          <div class="p-8 md:flex md:justify-center md:align-middle">
            <p class="max-w-xl text-lg font-extrabold italic leading-relaxed text-white md:flex-1 md:px-10 md:text-2xl">
              Mit Ihrer Spende helfen Sie uns, Leben zu retten.
            </p>
            <div>
              ${renderComponent($$result3, "Link", $$Link, { "href": "/spenden", "class": "mt-4 flex flex-1 items-center justify-center gap-1 text-lg md:mt-0", "rel": "noopener", "style": "inverted" }, { "default": ($$result4) => renderTemplate`
                Jetzt Spenden
              ` })}
            </div>
          </div>
        </div>
      </article>
    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/projekte.astro");

const $$file$5 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/projekte.astro";
const $$url$5 = "/projekte";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projekte,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Spenden = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Spenden;
  return renderTemplate`${maybeRenderHead($$result)}<h1>spende</h1>`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/spenden.astro");

const $$file$4 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/spenden.astro";
const $$url$4 = "/spenden";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Spenden,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const Vorstand = {"src":"/_astro/Ski-Gruppe.dccd0416.jpg","width":850,"height":608,"format":"jpg","orientation":1};

const localImage = {"src":"/_astro/philosohie.020f4193.jpg","width":2126,"height":1417,"format":"jpg","orientation":1};

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  const localAlt = "Philosophie";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xDCber uns" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Sectionhead", $$Sectionhead, { "class": "items-center text-center", "altHead": localAlt, "imageHead": localImage }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
      Direkte Hilfe, unbürokratisch und schnell.
    ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "class": "uppercase" }, { "default": ($$result4) => renderTemplate`Bärenherz` })}` })}
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<section class="py-10 md:px-14 xl:mx-auto xl:my-6 xl:w-3/4">

      <article class="py-6">
        <h2 class="py-4 text-2xl font-bold">Mission</h2>
        <p class="text-lg leading-7">
          Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz
          mit dem Ziel gegründet, dort zu helfen, wo lebensnotwendige
          Unterstützung benötigt wird. Wir sind ein unabhängiger Verein, der
          durch das persönliche und ehrenamtliche Engagement der Mitglieder
          sowie den Einnahmen aus von uns organisierten Charity Events und
          Spendengeldern jeweils im Vorfeld definierte Projekte in Sinne der
          Philosophie des Vereins unterstützt.
        </p>
      </article>

      <article>
        <h2 id="philosophie" class="py-4 text-3xl font-bold">Philosophie</h2>

        <p class="text-lg leading-7">
          Die Grundidee unseres Vereins ist es, da zu helfen, wo Hilfe wirklich
          gebraucht wird, um Leben zu retten, lebenswerte Bedingungen zu schafen
          oder in unverschuldeten Notsituationen einen schnellen uns
          unbürokratischen Beitrag zur Soforthilfe zu leisten.
        </p>

        <!-- TODO: this should be separate component -->
        <div class="mb-4 mt-6 bg-[#d0e4f5] py-4">
          <h3 class="py-4 text-center text-3xl font-bold">
            Die Philosophie unseres Vereins beruht auf drei Grundgedanken:
          </h3>
          <div class="flex flex-col md:flex-row justify-around gap-20 p-6 align-middle">
            
            <div class="w-full md:w-1/3 flex flex-col items-center">

              <div class="text-center h-48 w-48 mb-8 rounded-full bg-white px-4 flex items-center">
                <h3 class="text-center font-bold text-lg/6 tracking-tighter ">Hilfe zur Selbsthilfe</h3>
              </div>

              <p class="justify-stretch">
                So wie in der Vergangenheit bei Project Hope e.V. leisten auch wir
                in den von uns unterstützen Projekten Hilfe zur Selbsthilfe: Wir
                wollen nicht einfach materielle Zuwendun gen geben, sondern aktiv
                die jeweilige Notsituation so verbessern, dass mittel- bis
                langfristig eine nachhaltige Verbesserung erreicht werden kann.
              </p>

            </div>

            <div class="w-full md:w-1/3 flex flex-col items-center">

              <div class="text-center h-48 w-48 mb-8 rounded-full bg-white px-4 flex items-center">
                <h3 class="text-center font-bold text-lg/6 tracking-tighter">Ehrenamtlich aus Überzeugung</h3>
              </div>
              <p>
                Wir arbeiten ehrenamtlich und aus Überzeugung: Alles was wir
                bewegen, machen wir mit viel Freunde und Elan in unserer
                Freizeit, weil wir wissen, dass wir damit einen wertvollen
                Beitrag für Leben unter lebenswerten Bedingungen leisten können.
              </p>
            </div>

            <div class="w-full md:w-1/3 flex flex-col items-center">

              <div class="text-center h-48 w-48 mb-8 rounded-full bg-white px-4 flex items-center">
                <h3 class="tracking-tighter text-center font-bold text-lg/6">Unnötige Kosten vermeiden</h3>
              </div>
              <p>
                Wir wollen unnötige Kosten vermeiden: Unsere administrativen
                Aufwendungen halten wir auf einem Minimum und finanzieren diese
                intern durch unsere Mitgliedbeiträge und sonstigen finanziellen
                Zuwendungen der Mitglieder und Vorstände.
              </p>
            </div>

          </div>

          <p class="my-4 p-6 font-bold ">
            Diese Hilfe erreichen wir im Wesentlichen mit unseren Charity
            Aktionen. Hier möchten wir in einem spannenden Umfeld gemeinsam
            Spass haben aber gerade mit dem Wissen über unsere persönliche
            privilegierte Lebenssituation auch einen Teil an diejenigen
            weiterreichen, denen es nicht so gut geht. Das ist unser Antrieb und
            unsere Motivation.
          </p>

        </div>
      </article>

      <article>
        <h2 class="py-4 text-3xl font-bold" id="vorstand">Vorstand</h2>
        <p class="pb-2 text-lg/7 ">
          Aktuell setzt sich der Vorstand aus den folgenden Personen zusammen:
        </p>
        <ul class="text-lg/7 py-4">
          <li>
            Rainer Mück, Gründer und Vorstand, Mück Management Partners AG –
            Präsident
          </li>
          <li>
            Andreas Wenzel, Inhaber und Geschäftsführer, IZMI It’s me – Mehr
            Freude durch Bewussheit, sowie General Project Manager, Personal
            Sport Record – Vizepräsident
          </li>
          <li>
            Dr. Andrea Degen, Co-Founder und CEO, Institute for Mental Health,
            sowie Research & Innovation Manager EUrelations AG – Mitglied
          </li>
          <li>Markus T. Schweizer, Senior Partner, EY – Mitglied</li>
        </ul>

        ${renderComponent($$result3, "Image", $$Image, { "src": Vorstand, "alt": "Vorstand", "class": "w-full py-4" })}
        ${renderComponent($$result3, "Newsletter", $$Newsletter, { "class": "my-4 py-4" })}
      </article>

      <!-- Statuten -->
      <article>
        <h2 class="pt-10 pb-4 text-3xl font-bold" id="statuten">
          Statuten des Vereins „Bärenherz – Verein für humanitäre Hilfe“
        </h2>
        <div class=" text-base/7">
        <p>
          <span class="font-bold">1. Namen und Sitz</span> Unter dem Namen «Bärenherz – Verein für humanitäre
          Hilfe» besteht ein Verein für humanitäre Hilfe im Sinne von Art. 60
          ff. ZGB mit Sitz in Amden SG. Er ist politisch und konfessionell
          unabhängig.
        </p>

        <p>
          <span class="font-bold">2. Zweck</span> Der Verein bezweckt die Unterstützung von Menschen in Not
          sowie die Verbesserung der Lebensqualität von Bedürftigen.
        </p>
        <p class="text-lg leading-7">
          Es können einzelne Personen oder auch Institutionen vom Verein
          unterstützt werden.
        </p>
        <p>
          Dedizierte Projekte: Nebst dem allgemeinen Vereinszweck gibt es noch
          dedizierte Projekte, welche mit zweckgebundenen Mitteln finanziert
          werden. Dazu gehörten unter anderem Projekte des Vereins „Project Hope
          Germany e.V.“
        </p>
        <p>
          Der Verein verfolgt weder Erwerbs- noch Selbsthilfezwecke. Der Verein
          kann sich auch an Aktionen und Projekten beteiligen oder solche
          unterstützen, die durch andere Organisationen mit ähnlicher
          Zielsetzung durchgeführt werden.
        </p>
        <p>
          Der Verein verfolgt keine kommerziellen Zwecke und erstrebt keinen
          Gewinn. Die Organe sind ehrenamtlich tätig.
        </p>
        <p>
          <span class="font-bold">3. Mittel</span> Mittelzusicherung: Während der Aufbauphase bis Ende 2021
          sichert Rainer Mück dem Verein zu, dass die in 2021 dem Verein
          zufliessenden Mitteln mindestens CHF 1‘000.- betragen. Das
          Vereinsvermögen ist nach den Grundsätzen einer sicheren Anlage zu
          verwalten. Aus dem Vereinsvermögen und dessen Erträgnissen dürfen
          keine Leistungen erbracht werden, die nicht dem Vereinszweck
          entsprechen. Ein Rückfall des Vereinsvermögens an die Mitglieder oder
          an aussenstehende Spender ist ausgeschlossen.
        </p>
        <p>
          Weitere Mitteleinkünfte werden aus Spenden und Zuwendungen aller Art
          von Dritten oder Mitgliedern generiert.
        </p>
        <p>
          Das Geschäftsjahr entspricht dem Kalenderjahr.
        </p>
        <p>
          <span class="font-bold">4. Mitgliedschaft</span> Mitglieder können natürliche und juristische
          Personen werden, die den Vereinszweck unterstützen. Alle Mitglieder
          haben in der Mitgliederversammlung das gleiche Stimmrecht.\\
          Aufnahmegesuche sind an den Vorstand zu richten; über die Aufnahme
          entscheidet der Vorstand.
        </p>
        <p>
          <span class="font-bold">5. Erlöschen der Mitgliedschaft</span> Die Mitgliedschaft erlischt
        </p>
        <p>
          - bei natürlichen Personen durch Austritt, Ausschluss oder Tod
        </p>
        <p>
          - bei juristischen Personen durch Austritt, Ausschluss oder Auflösung
          der juristischen Person
        </p>
        <p>
          <span class="font-bold">6. Austritt und Ausschluss</span> Ein Vereinsaustritt ist jederzeit möglich.
          Das Austrittsschreiben muss mindestens vier Wochen vor der
          ordentlichen Mitgliederversammlung schriftlich an den Vorstand
          gerichtet werden.
        </p>
        <p>
          Ein Mitglied kann jederzeit ohne Angaben von Gründen vom Vorstand
          ausgeschlossen werden.
        </p>
        <p>
          Der Vorstand fällt den Ausschlussentscheid; das Mitglied kann den
          Ausschlussentscheid an die Mitgliederversammlung weiterziehen.
        </p>
        <p>
          <span class="font-bold">7. Organe des Vereins</span> Die Organe des Vereins sind:
        </p>
        <p>a) die Mitgliederversammlung</p>
        <p>b) der Vorstand</p>
        <p>
          <span class="font-bold">8. Die Mitgliederversammlung</span> Das oberste Organ des Vereins ist die
          Mitgliederversammlung. Eine ordentliche Mitgliederversammlung findet
          jährlich in der ersten Jahreshälfte statt.
        </p>
        <p>
          Zur Mitgliederversammlung werden die Mitglieder zehn Tage im Voraus
          schriftlich unter Angabe der Traktanden eingeladen. Einladungen per
          E-Mail sind gültig.
        </p>

        <p>
          Traktandierungsanträge zuhanden der Mitgliederversammlung sind bis
          spätestens vier Wochen schriftlich an den Vorstand zu richten.
        </p>

        <p>
          Der Vorstand oder 1/5 der Mitglieder können jederzeit die Einberufung
          einer ausserordentlichen Mitgliederversammlung unter Angaben des
          Zwecks verlangen. Die Versammlung hat spätestens acht Wochen nach
          Eingang des Begehrens zu erfolgen.
        </p>

        <p>
          Die Mitgliederversammlung hat folgende unentziehbare Aufgaben und
          Kompetenzen:
        </p>

        <p>
          a) Genehmigung des Protokolls der letzten Mitgliederversammlung
        </p>
        <p>
          b) Genehmigung des Jahresberichts des Vorstands
        </p>

        <p>c) Genehmigung der Jahresrechnung</p>

        <p>d) Entlastung des Vorstandes</p>
        <p>
          e) Wahl des Präsidenten/der Präsidentin und des übrigen Vorstandes
        </p>

        <p>f) Kenntnisnahme des Jahresbudgets</p>

        <p>
          g) Kenntnisnahme des Tätigkeitsprogrammes
        </p>

        <p>
          h) Beschlussfassung über weitere von den Mitgliedern oder dem Vorstand
          eingebrachte Geschäfte
        </p>

        <p>i) Änderung der Statuten</p>

        <p>
          j) Entscheid </p><p>
            über Ausschlüsse von Mitgliedern
          </p>

          <p>
            k) Beschlussfassung über die Auflösung des Vereins und die
            Verwendung des Liquidationserlöses
          </p>

          <p>
            Jede ordnungsgemäss einberufene Mitgliederversammlung ist unabhängig
            von der Anzahl Mitglieder beschlussfähig.
          </p>

          <p>
            Die Mitglieder fassen die Beschlüsse mit dem einfachen Mehr. Bei
            Stimmengleichheit fällt die/der Vorsitzende den Stichentscheid.
          </p>
          <p>
            Statutenänderungen benötigen die Zustimmung einer 2/3-Mehrheit der
            Stimmberechtigten.
          </p>

          <p>
            Über die gefassten Beschlüsse ist zumindest ein Beschlussprotokoll
            abzufassen.
          </p>

          <p>
            <span class="font-bold">9. Der Vorstand</span> Der Vorstand besteht aus mindestens zwei Personen,
            einem Präsidenten und einem weiteren Mitglied.
          </p>
          <p>
            Die Amtszeit beträgt fünf Jahre. Wiederwahl ist möglich.
          </p>
          <p>
            Der Vorstand führt die laufenden Geschäfte und vertritt den Verein
            nach aussen.
          </p>

          <p>Er erlässt Reglemente.</p>

          <p>
            Er kann Arbeitsgruppen (Fachgruppen) einsetzen.
          </p>

          <p>
            Er kann für die Erreichung der Vereinsziele Personen gegen eine
            angemessene Entschädigung anstellen oder beauftragen.
          </p>
          <p>
            Weitere Aufgaben und Kompetenzen des Vorstandes:
          </p>
          <p>
            Der Vorstand erstellt das Jahresbudget, stellt die Spendenzuflüsse
            sicher und entscheidet über die Vergabe der Mittel, welche den
            Betrag von CHF 1‘000.00 übersteigen. Er tagt mindestens einmal
            jährlich. Über die Beschlüsse wird ein Protokoll geführt. Der
            Vorstand leitet alljährlich die Vermögensrechnung mit einem
            Jahresbericht an die Interessenten weiter.
          </p>
          <p>
            Der Vorstand verfügt über alle Kompetenzen, die nicht von Gesetzes
            wegen oder gemäss Statuten einem anderen Organ übertragen sind.
          </p>
          <p>
            Im Vorstand sind folgende </p><p></p>Ressorts
            vertreten:
          

          <p>a) Präsidium</p>
          <p>b) Vizepräsidium</p>

          <p>
            c) Geschäftsführung Ämterkumulation ist möglich.
          </p>

          <p>
            Die Geschäftsführung prüft die Unterstützungsgesuche und kann bis zu
            einem Betrag von CHF 1‘000.00 pro Gesuch selbständig entscheiden.
            Jährlich erstattet sie dem Vorstand einen Bericht über die
            Vergabungen und die geplanten Mittelzuflüsse. Sie ist für die
            ordentliche Buchführung und die allgemeine Administration
            verantwortlich.
          </p>
          <p>
            Jedes Vorstandsmitglied kann unter Angabe der Gründe die Einberufung
            einer Sitzung verlangen.
          </p>
          <p>
            Sofern kein Vorstandsmitglied mündliche Beratung verlangt, ist die
            Beschlussfassung auf dem Zirkularweg (auch E-Mail) gültig.
          </p>
          <p>
            Der Vorstand ist grundsätzlich ehrenamtlich tätig, er hat Anrecht
            auf Vergütung der effektiven Spesen.
          </p>

          <p>
            <span class="font-bold">10. Zeichnungsberechtigung</span> Der Vorstand legt die
            Zeichnungsberechtigung der Vorstandsmitglieder fest.
          </p>

          <p>
            <span class="font-bold">11. Haftung</span> Für die Schulden des Vereins haftet nur das
            Vereinsvermögen. Eine persönliche Haftung der Mitglieder ist
            ausgeschlossen.
          </p>

          <p>
            <span class="font-bold">12. Auflösung des Vereins</span> Die Auflösung des Vereins kann durch
            Beschluss einer ordentlichen oder ausserordentlichen
            Mitgliederversammlung beschlossen und mit dem Stimmenmehr von 2/3
            Mehrheit der anwesenden Mitglieder aufgelöst werden.
          </p>

          <p>
            Der Verein geht ohne Beschlussfassung durch die Mitgliedersammlung
            unter mit dem Tod Rainer Mücks. Das Vereinsvermögen ist im Sinne des
            Vereinszwecks zu verwenden.
          </p>

          <p>
            Ein allfälliger Aktivenüberschuss fällt an eine steuerbefreite
            Organisation mit Sitz in der Schweiz, welche den gleichen oder einen
            ähnlichen Zweck verfolgt, oder an das Gemeinwesen. Die Verteilung
            des Vereinsvermögens unter den Mitgliedern, Gründern oder dessen
            Erben oder Drittspendern ist ausgeschlossen.
          </p>

          <p>
            <span class="font-bold">13. Inkraftreten</span> Diese Statuten wurden an der Gründungsversammlung
            vom 02.07.2021 angenommen und sind mit diesem Datum in Kraft
            getreten.
          </p>
        </div>

      </article>

    </section>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/about.astro");

const $$file$3 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/about.astro";
const $$url$3 = "/about";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const headerImg = {"src":"/_astro/postheader.cbe6b8c7.png","width":1483,"height":492,"format":"png"};

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<div class="my-2 py-2">
      ${renderComponent($$result3, "Image", $$Image, { "src": headerImg, "alt": "header post" })}
    </div>
    ${posts.map((post) => renderTemplate`<li>
          <a${addAttribute(`/blog/${post.slug}/`, "href")}>
            ${renderComponent($$result3, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.cover, "alt": post.data.coverAlt })}
            <div class="mb-6 mt-2 pb-10 pt-4">
              <h4 class="text-3xl">${post.data.title}</h4>
              <p class="pb-4 pt-2 text-base text-gray-500">
                ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}
              </p>
              <div class="prose-base line-clamp-4 lg:prose-xl">
                ${post.data.description}
              </div>
            </div>
          </a>
        </li>`)}` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/index.astro");

const $$file$2 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, cover, coverAlt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, { "class": "mx-14 my-10" }, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<div class="py-6">
      ${renderComponent($$result3, "Link", $$Link, { "href": "/blog" }, { "default": ($$result4) => renderTemplate`« Blog` })}
    </div>
    <div class="">
      ${cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "width": 1020, "src": cover, "alt": coverAlt })}`}
    </div>

    <div class="my-8">
      <h1 class="py-4 text-3xl">${title}</h1>
      <div class="prose-xl lg:prose-xl">
        ${renderSlot($$result3, $$slots["default"])}
      </div>
    </div>
  ` })}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/layouts/BlogPost.astro");

const $$Astro$1 = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/[...slug].astro");

const $$file$1 = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/blog/[...slug].astro";
const $$url$1 = "/blog/[...slug]";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$1,
  getStaticPaths,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<div class="flex max-h-screen items-center justify-center">
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
}, "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/404.astro");

const $$file = "/home/qwerty/Workspace/Projects/Baerenherz/newWeb/Baerenherz/src/pages/404.astro";
const $$url = "/404";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _, _page2 as a, _page3 as b, _page4 as c, _page5 as d, _page6 as e, _page7 as f, _page8 as g, _page9 as h, _page10 as i };
