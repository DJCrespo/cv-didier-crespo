import { reactive } from "vue";

export const navFunction = reactive({
  active: "about",
  projectData: null,
  sidebar: false,
  width: false,
  activeSection(value, data) {
    this.active = value;
    this.projectData = data;
  },
  activeNav(value) {
    return this.active === value ? "active" : "";
  },
  // Sidebar
  sidebarToggle(value) {
    this.sidebar = value;
  },
  mounted() {
    let width = window.innerWidth;
    this.width = width > 1200 ? true : false;

    window.addEventListener("scroll", () => {
      width = window.innerWidth;
      this.width = width > 1200 ? true : false;
    });
  },
});
