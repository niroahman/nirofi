import { c as create_ssr_component, a as add_attribute, v as validate_component, b as each, e as escape } from "../../chunks/index-13c0de55.js";
var GitHubCorner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-746yo.svelte-746yo{position:fixed;fill:var(--ghc-bg, black);color:var(--ghc-color, white);width:var(--ghc-size, min(50pt, 15vw));z-index:1}a.svelte-746yo:hover .octo-arm.svelte-746yo{animation:svelte-746yo-octocat-wave 0.5s ease-in-out}@keyframes svelte-746yo-octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",
  map: null
};
const GitHubCorner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { title = `View code on GitHub` } = $$props;
  let { ariaLabel = title } = $$props;
  let { target = `_self` } = $$props;
  let { corner = `topRight` } = $$props;
  let { style = `` } = $$props;
  const cornerCss = {
    topLeft: `top: 0; left: 0; transform: rotate(-90deg);`,
    topRight: `top: 0; right: 0; transform: rotate(0deg);`,
    bottomLeft: `bottom: 0; left: 0; transform: rotate(180deg);`,
    bottomRight: `bottom: 0; right: 0; transform: rotate(90deg);`
  }[corner];
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.corner === void 0 && $$bindings.corner && corner !== void 0)
    $$bindings.corner(corner);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  style += cornerCss;
  return `<a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("style", style, 0)} class="${"svelte-746yo"}"><svg viewBox="${"0 0 250 250"}" aria-hidden="${"true"}"><path d="${"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}"></path><path d="${"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}" fill="${"currentColor"}" style="${"transform-origin: 130px 106px;"}" class="${"octo-arm svelte-746yo"}"></path><path d="${"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"}" fill="${"currentColor"}" class="${"octo-body"}"></path></svg>
</a>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');h1.svelte-1in83ey{margin-top:100px;color:rgb(255, 0, 119);font-family:'Press Start 2P', cursive;font-size:72px}.wrapper.svelte-1in83ey{display:flex;flex-direction:column;align-items:center;height:100vh;background-color:black;color:white;font-family:'Press Start 2P', cursive;font-size:14px}.startButton.svelte-1in83ey{position:absolute;padding:20px;border:3px solid rgb(255, 0, 119);background-color:rgba(255, 0, 119, 0.5);font-size:2em;color:white;font-family:'Press Start 2P', cursive;border-bottom:6px inset rgba(0, 0, 0, 0.5);border-left:6px inset rgba(0, 0, 0, 0.5);border-right:6px inset rgba(255, 255, 255, 0.5);border-top:6px inset rgba(255, 255, 255, 0.5)}.startButton.svelte-1in83ey:hover{background-color:rgba(255, 0, 119, 0.6)}.menu.svelte-1in83ey{position:absolute;width:200px;height:150px;border-top:2px solid rgb(255, 0, 119);border-left:2px solid rgb(255, 0, 119);border-bottom:2px solid rgb(255, 0, 119);background-color:rgba(255, 0, 119, 0.5);padding:10px;display:flex;flex-direction:column;justify-content:space-evenly}.linkButtonRow.svelte-1in83ey{margin-top:200px;display:flex;flex-direction:row;justify-content:space-evenly;width:600px}.linkButton.svelte-1in83ey{background-color:rgba(0, 195, 255, 0.7);border-bottom:6px inset rgba(0, 0, 0, 0.5);border-left:6px inset rgba(0, 0, 0, 0.5);border-right:6px inset rgba(255, 255, 255, 0.5);border-top:6px inset rgba(255, 255, 255, 0.5);font-family:'Press Start 2P', cursive;color:white;padding:12px}.linkButton.svelte-1in83ey:hover{background-color:rgba(0, 195, 255, 0.9)}",
  map: null
};
let shipWidht = 60;
let shipHeight = 60;
let titleText = "NIRO \xC5HMAN";
let introText = "Front-end oriented full stack developer with head in the clouds.";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enemies = [];
  let projectiles = [];
  let explosions = [];
  let menu;
  let infoMenu;
  let linkedin;
  let cv;
  let github;
  let titleTextArray = titleText.split("");
  let titleTextElements = Array(titleTextArray.length);
  let introTextArray = introText.split("");
  let introTextElements = Array(introTextArray.length);
  function updateProjectiles() {
    let newProjectiles = [];
    for (let i = 0; i < projectiles.length; i++) {
      let projectile = projectiles[i];
      projectile.y -= 15;
      if (projectile.y > 0 && projectile.visible) {
        newProjectiles.push(projectile);
      }
    }
    projectiles = newProjectiles;
  }
  function checkIfElementDestroyed() {
    for (let i = 0; i < projectiles.length; i++) {
      projectileOverlaps(menu, projectiles[i]);
      projectileOverlaps(infoMenu, projectiles[i]);
      projectileOverlaps(github, projectiles[i]);
      projectileOverlaps(linkedin, projectiles[i]);
      projectileOverlaps(cv, projectiles[i]);
      for (let j = 0; j < titleTextElements.length; j++) {
        projectileOverlaps(titleTextElements[j], projectiles[i]);
      }
      for (let k = 0; k < introTextElements.length; k++) {
        projectileOverlaps(introTextElements[k], projectiles[i]);
      }
    }
  }
  function projectileOverlaps(el1, projectile) {
    const domRect1 = el1.getBoundingClientRect();
    if (domRect1.right >= projectile.x && domRect1.bottom >= projectile.y && domRect1.left <= projectile.x) {
      explosions = [
        ...explosions,
        {
          x: projectile.x,
          y: projectile.y,
          timeLeft: 4
        }
      ];
      el1.remove();
      projectile.visible = false;
    }
  }
  function checkIfExplosionEnded() {
    let newExplosions = [];
    for (let k = 0; k < explosions.length; k++) {
      if (explosions[k].timeLeft > 0) {
        let explosion = explosions[k];
        explosion.timeLeft -= 1;
        newExplosions.push(explosion);
      }
      explosions = newExplosions;
    }
  }
  let ms = 40;
  const gameClock = () => {
    updateProjectiles();
    checkIfElementDestroyed();
    checkIfExplosionEnded();
  };
  let clear;
  $$result.css.add(css);
  {
    {
      clearInterval(clear);
      clear = setInterval(gameClock, ms);
    }
  }
  return `

<div class="${"wrapper svelte-1in83ey"}"><div${add_attribute("this", github, 0)}><div style="display: contents; --ghc-bg:${"white"}; --ghc-color:${"black"};">${validate_component(GitHubCorner, "GitHubCorner").$$render($$result, {
    href: "https://github.com/vollehman/nirofi",
    title: "This page in github",
    ariaLabel: "Click here for riches",
    target: "_blank",
    corner: "topRight",
    style: "z-index: 42;"
  }, {}, {})}</div></div>

	<h1 class="${"svelte-1in83ey"}">${each(titleTextArray, (char, i) => {
    return `<span${add_attribute("this", titleTextElements[i], 0)}>${escape(char)}</span>`;
  })}</h1>

	<p>${each(introTextArray, (char, i) => {
    return `<span${add_attribute("this", introTextElements[i], 0)}>${escape(char)}</span>`;
  })}</p>
	<div class="${"linkButtonRow svelte-1in83ey"}"><button class="${"linkButton svelte-1in83ey"}" type="${"submit"}"${add_attribute("this", linkedin, 0)}>LinkedIn</button>
		<button class="${"linkButton svelte-1in83ey"}" type="${"submit"}"${add_attribute("this", cv, 0)}>Download CV</button></div>

	${`${``}`}
	${each(enemies, ({ x, y }, i) => {
    return `<div class="${"enemy"}" style="${"position: absolute; left: " + escape(x) + "px; top: " + escape(y) + "px"}"><img src="${"niro.jpeg"}" alt="${"enemy"}"${add_attribute("width", shipWidht, 0)}${add_attribute("height", shipHeight, 0)}>
		</div>`;
  })}
	${each(projectiles, ({ x, y, visible }, i) => {
    return `<div class="${"projectile"}" style="${"position: absolute; left: " + escape(x) + "px; top: " + escape(y) + "px; visible=" + escape(visible)}"><img src="${"projectile.png"}" alt="${"projectile"}"${add_attribute("width", 10, 0)}${add_attribute("height", 30, 0)}>
		</div>`;
  })}
	<div class="${""}"></div>
	${each(explosions, ({ x, y }, i) => {
    return `<div style="${"position: absolute; left: " + escape(x - 30) + "px; top: " + escape(y - 30) + "px;"}"><img src="${"explosion.png"}" alt="${""}"${add_attribute("width", 60, 0)}${add_attribute("height", 60, 0)}>
		</div>`;
  })}
</div>`;
});
export { Routes as default };
