import "./collapse.css";

export class Collapse {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this._element = element;
    this._collapseBanner = "";

    this.createCollapse = this.createCollapse.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this._element.addEventListener("click", this.onCollapse);
  }

  createCollapse(message) {
    this._collapseBanner = document.createElement("div");
    this._collapseBanner.className = "collapse-banner";

    const bannerText = document.createElement("p");
    bannerText.className = "banner-text";
    bannerText.textContent = message;
    this._element.after(this._collapseBanner);
    this._collapseBanner.appendChild(bannerText);
  }

  onCollapse() {
    console.log();
    if (this._collapseBanner.classList.contains("open")) {
      this._collapseBanner.classList.remove("open");
      return;
    }
    this._collapseBanner.classList.add("open");
  }
}
