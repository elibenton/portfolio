import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colors = {
    production: "bg-yellow-300",
    reporting: "bg-red-400",
    photography: "bg-blue-500",
    code: "bg-green-500"
  };
  let jobs = [
    {
      name: "The New York Times",
      roles: ["production"],
      year: "2023",
      location: "New York City, NY"
    },
    {
      name: "The New Yorker",
      roles: ["production"],
      year: "2022 -> 2023",
      location: "New York City, NY"
    },
    {
      name: "Radiolab",
      roles: ["production", "reporting"],
      year: "2021 -> 2023",
      location: "Kazakhstan"
    },
    {
      name: "Mars College",
      roles: ["photography"],
      year: "2022",
      location: "Bombay Beach, CA"
    },
    // // {
    // // 	name: 'Betteridge Bot',
    // // 	roles: ['code'],
    // // 	year: '2024',
    // // 	location: 'Berkeley, CA.'
    // // },
    {
      name: "Watson Fellowship",
      roles: ["reporting", "photography"],
      year: "2019 -> 2020",
      location: ["India, Myanmar"]
    }
  ];
  let hoverStates = {};
  {
    console.log(hoverStates["The New York Times"]?.active);
  }
  return `<div class="flex"><div class="p-2 sm:p-4 flex flex-col justify-between h-[96vh] w-full bg-white lg:w-3/5 shrink-0"><div class="my-8 mx-2" data-svelte-h="svelte-1iphwhy"> <img src="/ELI.webp" alt="Eli written in squiggly ink" class="w-48 h-48 m-2"> </div> <ul class="translate-y-10">${each(jobs, ({ name, roles, year, location }) => {
    return `<li${add_attribute("class", `relative pb-6 pt-3 px-3 border-t border-black -mx-4 -mb-[3.65rem] hover:-translate-y-10 flex justify-between bg-white transition-transform duration-100 ease-in-out`, 0)}><div><h1 class="text-2xl md:text-4xl lg:text-5xl font-medium font-sohn relative">${escape(name.toUpperCase())}</h1> <span class="font-mono text-sm relative p-1">${escape(year)} • ${escape(location instanceof Array ? location.join(", ") : location)} </span></div> <div class="hidden lg:block space-x-2 transform -translate-y-6">${each(roles, (role) => {
      return `<span${add_attribute("class", `text-sm border border-black font-mono ${colors[role]} rounded-full h-full py-1 px-2`, 0)}>${escape(role)} </span>`;
    })}</div> </li>`;
  })}</ul></div> <div class="hidden md:block border-l border-black"><img class="home-image" src="/eli.jpg" alt="Eli Cohen in the desert holding a microphone"> <img${add_attribute(
    "class",
    `home-image ${hoverStates["The New York Times"]?.active ? "opacity-100" : "opacity-0"}`,
    0
  )} src="/audio.jpg" alt="The entrance ot the New York Times Building"> <img${add_attribute(
    "class",
    `home-image ${hoverStates["Radiolab"]?.active ? "opacity-100" : "opacity-0"}`,
    0
  )} src="/raven.jpg" alt="Cover art of Radiolab episode. Illustrated raven holding a red key."> <img${add_attribute(
    "class",
    `home-image ${hoverStates["The New Yorker"]?.active ? "opacity-100" : "opacity-0"}`,
    0
  )} src="/newyorker.jpg" alt="Cover art of New Yorker Political Podcast. Four hands holding a sign with title."> <img${add_attribute(
    "class",
    `home-image ${hoverStates["Mars College"]?.active ? "opacity-100" : "opacity-0"}`,
    0
  )} src="/salton.jpg" alt="Swing in the middle of the lake with two people silhouetted by the sunset."> <img${add_attribute(
    "class",
    `home-image ${hoverStates["Watson Fellowship"]?.active ? "opacity-100" : "opacity-0"}`,
    0
  )} src="/train.jpg" alt="Men hanging out of an open air train in Mumbai."></div></div>`;
});
export {
  Page as default
};
