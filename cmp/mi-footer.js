class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Gomez Noveron Pedro Daniel.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
