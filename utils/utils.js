export const createSkillsDot = () => {
  var skills_dotted = document.querySelectorAll(
    ".skills-list.dotted .progress"
  );
  skills_dotted.forEach((skill) => {
    skill.insertAdjacentHTML(
      "beforeend",
      '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
    );
    let percentage = skill.getElementsByClassName("percentage")[0];
    percentage.insertAdjacentHTML(
      "beforeend",
      '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
    );
    let width = skill.clientWidth,
      da = percentage.getElementsByClassName("da")[0];
    da.style.width = `${width}px`;
  });
};
export const dotResize = () => {
  window.addEventListener("resize", () => {
    var skills_dotted = document.querySelectorAll(
      ".skills-list.dotted .progress"
    );
    skills_dotted.forEach((skill) => {
      let width = skill.clientWidth,
        da = skill.getElementsByClassName("da")[0];
      da.style.width = `${width + 1}px`;
    });
  });
};

export const titleActive = () => {
  const arr = document.querySelectorAll(".content .title");
  arr.forEach((element) => {
    let title = element.innerHTML.split(" ");
    if (title.length > 1) {
      let firstWord = title[0];
      let replaceWord = '<span class="first-word">' + firstWord + "</span>";
      let newString = element.innerHTML.replace(firstWord, replaceWord);
      element.innerHTML = newString;
    }
  });
};

export const activeSectionWithScroll = () => {
  const sections = document.querySelectorAll(".card-inner");
  const navLi = document.querySelectorAll(".top-menu li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    let aHref = li.getElementsByTagName("a")[0];

    if (aHref.getAttribute("href") == `#${current}`) {
      li.classList.add("active");
    } else if (li.classList.contains("active")) {
      li.classList.remove("active");
    }
  });
};

export const aTag = () => {
  const a = document.querySelectorAll("a");
  a.forEach((a) => {
    if (a.getAttribute("href") == "#") {
      a.addEventListener("click", (e) => e.preventDefault());
    }
  });
};
