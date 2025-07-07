import { s as style, a as style$1, b as style$2, c as style$3, d as style$4, e as style$5, f as style$6 } from '../chunks/index.95d291e9_DjKxAkUT.mjs';
import { c as createComponent, b as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderScript, h as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_D95aZWyz.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="pt-BR"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Portifólio | Lucas &#x1F60E</title>${renderHead()}</head> <body> <main class="base_layout"> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/layout/BaseLayout.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  const linkedinIcon = "./linkedin.svg";
  const githubIcon = "./github.svg";
  const mailIcon = "./mail.svg";
  const whatsappIcon = "./whatsapp.svg";
  return renderTemplate`${maybeRenderHead()}<div id="container-home"${addAttribute(`${style.container_home}`, "class")}> <div id="container-description-home"${addAttribute(`${style.container_text}`, "class")}> <h1 data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
Hello! My name is Lucas Montenegro
</h1> <h2 data-aos="flip-right" data-aos-delay="1000" data-aos-duration="2500">
Web developer <span>Front-End/Back-end</span> </h2> <div id="container-social-list-home"${addAttribute(`${style.container_social_list}`, "class")}> <ul id="social-list-icons" data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1800"${addAttribute(`${style.social_list_icons}`, "class")}> <li> <a href="https://www.linkedin.com/in/lucas-gabriel-montenegro-813068373" target="_blank"><img${addAttribute(`${style.icon}`, "class")}${addAttribute(linkedinIcon, "src")} alt="icone de rede social linkedin"></a> </li> <li> <a href="https://github.com/Tpo-Prog" target="_blank"><img${addAttribute(`${style.icon}`, "class")}${addAttribute(githubIcon, "src")} alt="icone de rede social github"></a> </li> <li> <a href="montenegrolucas767@gmail.com"><img${addAttribute(`${style.icon}`, "class")}${addAttribute(mailIcon, "src")} alt="icone de email"></a> </li> <li> <a href="wa.link/583id6" target="_blank"><img${addAttribute(`${style.icon}`, "class")}${addAttribute(whatsappIcon, "src")} alt="icone do whatsapp"></a> </li> </ul> </div> <div${addAttribute(`${style.container_arrow}`, "class")}> <img data-aos="fade-up" data-aos-delay="1700" src="arrowdown.svg" class="w-3" alt="seta indicadora para baixo"> </div> </div> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/main/main.astro", void 0);

const $$AboutImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-down-right" data-aos-duration="2000"${addAttribute(`${style$1.image_about_border_orange}`, "class")}></div> <div data-aos="fade-down-left" data-aos-duration="2000"${addAttribute(`${style$1.image_about_border_blue}`, "class")}></div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/about-image/about-image.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button data-aos="fade-up" data-aos-duration="2000"${addAttribute(`${style$1.btn}`, "class")} type="button" data-btn-info>More info</button> ${renderScript($$result, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/button/button.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/button/button.astro", void 0);

const $$AboutMeText = createComponent(($$result, $$props, $$slots) => {
  const text = "I consider myself a naturally curious and self-taught person, always exploring and studying everything that sparks my interest. As a technology and video game enthusiast, I ended up diving into the world of programming after the COVID-19 pandemic. In 2024, some lifelong friends encouraged me to return to studying technology and to explore all the possibilities that a career in this field could offer. So, in the middle of that year, I took my first steps with Python and JavaScript. I spent a few months deciding which path to follow, and eventually discovered that I felt truly connected to front-end development and the web world. The way I could see my code running in real time in the browser completely fascinated me! Since then, I\u2019ve been fully dedicating myself to learning and exploring modern web development technologies, with the goal of becoming a full-stack web developer in the near future.";
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`${style$2.title_popup}`, "class")}>More about me...</h2> <p${addAttribute(`${style$2.text_popup}`, "class")}>${text}</p>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/about-me-text/about-me-text.astro", void 0);

const $$Popup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<dialog id="modal-about"${addAttribute(`${style$2.container_about_popup}`, "class")}> ${renderComponent($$result, "AboutMeText", $$AboutMeText, {})} <div id="container-modal-button"${addAttribute(`${style$2.container_modal_button}`, "class")}> <button data-close-btn>Close</button> </div> </dialog> ${renderScript($$result, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/popup/popup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/popup/popup.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const linkCurriculo = "https://drive.google.com/file/d/1yb7b4pHA69SyxFM9YavDLrQMoSL2z9Y7/view?usp=sharing";
  return renderTemplate`${maybeRenderHead()}<div id="container-about"${addAttribute(`${style$1.container_about}`, "class")}> <div id="container-descript-about"${addAttribute(`${style$1.container_descript_about}`, "class")}> <h2 data-aos="fade-right" class="title">About Me</h2> <p data-aos="fade-right"${addAttribute(`${style$1.descript}`, "class")}>
Hello! my name is Lucas Montenegro, and I'm an <span${addAttribute(`${style$1.bold_blue_s}`, "class")}>aspiring Back-end developer</span> and <span${addAttribute(`${style$1.bold_blue_h}`, "class")}>web development</span> front-end since
      2022. I'm dedicated to the <span${addAttribute(`${style$1.bold_blue_h}`, "class")}>world of programming</span> focusing on back-end web development using the
<span${addAttribute(`${style$1.bold_blue_s}`, "class")}>market's leading technologies.</span> Currently, I'm considering software developer, constantly seeking <span${addAttribute(`${style$1.bold_blue_h}`, "class")}>new challenges</span> and with the aim of deepening my knowledge to be able to work 
      as a <span${addAttribute(`${style$1.bold_blue_s}`, "class")}>Junior or Senior developer in the future</span> </p> <div id="container-btn-about"${addAttribute(`${style$1.container_btn_about}`, "class")}> <a data-aos="fade-up" data-aos-duration="2000"${addAttribute(`${style$1.btn_cv}`, "class")}${addAttribute(`${linkCurriculo}`, "href")} target="_blank">View CV</a> ${renderComponent($$result, "Button", $$Button, {})} </div> </div> <div id="container-img-about"${addAttribute(`${style$1.container_image_about}`, "class")}> ${renderComponent($$result, "AboutImage", $$AboutImage, {})} </div> ${renderComponent($$result, "Popup", $$Popup, {})} </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/main/about.astro", void 0);

const $$CertificatesImages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img data-aos="zoom-out-right" data-aos-duration="2000" data-aos-delay="0"${addAttribute(`${style$3.img_first}`, "class")} src="./certification-1.png" alt="imagem de certificado"> <img data-aos="zoom-out-right" data-aos-duration="2000" data-aos-delay="400"${addAttribute(`${style$3.img_second}`, "class")} src="./certification-2.png" alt="imagem de certificado"> <img data-aos="zoom-out-right" data-aos-duration="2000" data-aos-delay="800"${addAttribute(`${style$3.img_third}`, "class")} src="./certification-3.png" alt="imagem de certificado"> <img data-aos="zoom-out-right" data-aos-duration="2000" data-aos-delay="1200"${addAttribute(`${style$3.img_fourth}`, "class")} src="./certification-4.png" alt="imagem de certificado">`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/certificates-images/certificates-images.astro", void 0);

const $$Astro = createAstro();
const $$CertificatesDescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CertificatesDescript;
  const { title, name, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-right" class="my-8"> <h3${addAttribute(`${style$3.title_certificates_descript}`, "class")}>${title}</h3> <p${addAttribute(`${style$3.name_certificates_descript}`, "class")}>${name}</p> <p${addAttribute(`${style$3.date_certificates_descript}`, "class")}>${date}</p> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/certificates-descript/certificates-descript.astro", void 0);

const $$Certificates = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container-certificates"${addAttribute(`${style$3.container_certificates}`, "class")}> <div id="container-description-certificates"${addAttribute(`${style$3.container_description_certificates}`, "class")}> <div id="container-text-certificates"> <h2 data-aos="fade-up"${addAttribute(`${style$3.title}`, "class")}>Certificates</h2> <p data-aos="fade-up"${addAttribute(`${style$3.subtitle}`, "class")}>
“It all starts with the desire to do something”
</p> </div> <div id="container-img-certificates"${addAttribute(`${style$3.container_img_certificates}`, "class")}> <a href="https://drive.google.com/drive/folders/1S4ZtZErGERbei-N70jd3FpQ_D7HDMNRv?usp=sharing" target="_blank"> ${renderComponent($$result, "CertificatesImages", $$CertificatesImages, {})} </a> </div> </div> <div id="container-descript-certificates"${addAttribute(`${style$3.container_descript_certificates}`, "class")}> ${renderComponent($$result, "CertificatesDescript", $$CertificatesDescript, { "title": "Web Development", "name": "INFORMATORIO", "date": "completed since july/2024" })} ${renderComponent($$result, "CertificatesDescript", $$CertificatesDescript, { "title": "First stepts Front-end Development", "name": "Argentina Programa 4.0", "date": "completed since april/2023" })} ${renderComponent($$result, "CertificatesDescript", $$CertificatesDescript, { "title": "Introduction of Programming", "name": "INFORMATORIO", "date": "completed since May/2024" })} <div class="mt-10"> <p data-aos="fade-right" data-aos-delay="350" class="italic">
And others, which you can check out on my LinkedIn profile.....
</p> </div> </div> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/main/certificates.astro", void 0);

function InsertIcons(icons) {
  const imageElements = icons.map((icon, id) => /* @__PURE__ */ jsx("img", { src: icon, alt: "tech icon" }, id));
  return imageElements;
}
function TecnologiesCard(props) {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    setImageList(InsertIcons(props.icons));
  }, [props.icons]);
  return /* @__PURE__ */ jsxs("div", { "data-aos": "fade-up", className: style$4.card, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { children: props.title }) }),
    /* @__PURE__ */ jsx("div", { children: imageList })
  ] });
}

const $$Tecnologies = createComponent(($$result, $$props, $$slots) => {
  const iconsTech = [
    {
      id: 1,
      title: "O.S",
      icon: ["./icons/windows.svg", "./icons/ubuntu.ico"]
    },
    {
      id: 2,
      title: "Essentials",
      icon: [
        "./icons/html.svg",
        "./icons/css.svg",
        "./icons/js.svg",
        "./icons/ts.svg",
        "./icons/node.svg",
        "./icons/git.svg"
      ]
    },
    {
      id: 3,
      title: "Front Tools",
      icon: [
        "./icons/bootstrap.svg",
        "./icons/figma.svg",
        "./icons/framer.svg",
        "./icons/tailwind.svg"
      ]
    },
    {
      id: 4,
      title: "Libs & Frameworks",
      icon: [
        "./icons/angular.svg",
        "./icons/react.svg",
        "./icons/astro.svg",
        "./icons/nextjs.svg"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="container-tecnologies"${addAttribute(`${style$4.container_tecnologies}`, "class")}> <div id="container-description-tecnologies"${addAttribute(`${style$4.description_tecnologies}`, "class")}> <h2 data-aos="fade-up"${addAttribute(`${style$4.title} title`, "class")}>Technologies</h2> <p data-aos="fade-up"${addAttribute(`${style$4.subtitle}`, "class")}>
Some of the <span>technologies</span> with <span>I use and study</span> in my daily routine as a web 
      developer include:
</p> </div> <div id="container-tecnologies-card"${addAttribute(`${style$4.container_tecnologies_card}`, "class")}> ${iconsTech.map((tech) => {
    return renderTemplate`${renderComponent($$result, "TecnologiesCard", TecnologiesCard, { "key": tech.id, "title": tech.title, "icons": tech.icon, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/tecnologies-card/tecnologies-card.jsx", "client:component-export": "default" })}`;
  })} </div> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/main/tecnologies.astro", void 0);

function ProjectsCard(props) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: style$5.card,
      "data-aos": "flip-left",
      "data-aos-easing": "ease-out-cubic",
      "data-aos-duration": "1000",
      children: [
        /* @__PURE__ */ jsx("div", { className: style$5.container_card_image, children: /* @__PURE__ */ jsx("img", { src: props.image, alt: "imagem do projeto" }) }),
        /* @__PURE__ */ jsxs("div", { className: style$5.container_card_descript, children: [
          /* @__PURE__ */ jsx("h3", { children: props.title.replaceAll("-", " ").toUpperCase() }),
          /* @__PURE__ */ jsx("p", { children: props.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: style$5.container_btn, children: /* @__PURE__ */ jsx("a", { className: style$5.btn_url, href: props.url, target: "_blank", children: "Learn More" }) })
      ]
    }
  );
}

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const user = await fetch("https://api.github.com/users/ldantsc/repos", {
    headers: { authorization: undefined                          }
  });
  const userData = await user.json();
  const newArr = userData.filter((data) => {
    if (!data.topics.includes("study-notes")) {
      return data;
    }
  });
  return renderTemplate`${maybeRenderHead()}<div id="container-projects" class=""> <div id="container-projects-title"${addAttribute(`${style$5.container_projects_title}`, "class")}> <h2 data-aos="fade-up" class="title">Projects</h2> <p data-aos="fade-up"${addAttribute(`${style$5.subtitle}`, "class")}>
This section contains some of my <span>personal</span> or <span>professional projects. </span>
These projects were developed throughout my <span>learning journey and career</span> as a web developer.
      Use the "Learn more" button to check them out on <span>my GitHub repository.</span> (The deployed version is available in the repository.)
</p> <p data-aos="fade-up"${addAttribute(`${style$5.attention}`, "class")}>
Note: Some projects may still be in progress.
</p> </div> <div id="container-projects-card"${addAttribute(`${style$5.container_projects_card}`, "class")}> ${newArr.map((data) => {
    const img = `https://raw.githubusercontent.com/ldantsc/${data.name}/${data.default_branch}/demo.png`;
    return renderTemplate`${renderComponent($$result, "ProjectsCard", ProjectsCard, { "title": data.name, "description": data.description, "url": data.html_url, "image": img, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/projects-card/projects-card.jsx", "client:component-export": "default" })}`;
  })} </div> <div data-aos="fade-up"${addAttribute(`${style$5.container_text_foot}`, "class")}> <p>Stay tuned for more projects coming soon......</p> </div> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/main/projects.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-in" id="container-footer"${addAttribute(`${style$6.container_footer} container`, "class")}> <h2${addAttribute(`${style$6.title}`, "class")}> <span${addAttribute(`${style$6.span_custom}`, "class")}>Thanks for watch !</span> </h2> <div> <a href="#"${addAttribute(`${style$6.container_scroll}`, "class")}> <img src="./arrowup.svg" alt="seta informativa para voltar ao topo da pagina"> <p>Click here to return to the home page</p> </a> </div> </div>`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/components/footer/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="home" class="container"> ${renderComponent($$result2, "Main", $$Main, {})} </section> <section id="about"> ${renderComponent($$result2, "About", $$About, {})} </section> <section id="certificates"> ${renderComponent($$result2, "Certifications", $$Certificates, {})} </section> <section id="tecnologies"> ${renderComponent($$result2, "Tecnologies", $$Tecnologies, {})} </section> <section id="projects"> ${renderComponent($$result2, "Projects", $$Projects, {})} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/pages/index.astro", void 0);

const $$file = "C:/Users/LUCAS/Portfolio-Project/proyect/portfolio-Lucas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
