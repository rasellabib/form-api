const footer = `    <div class="container-2">
        <footer class="d-flex bg-white flex-wrap justify-content-between align-items-center  border-top">
            <div class="px-5 p-2">
                <p class="text-div text-muted align-items-center">© Jobkhuzi.com</p>
            </div>
            <div class="d-flex gap-3 px-5 p-2 align-items-center">
                <a class="fs-3 fw-bold text-white text-decoration-none"
                   href="https://www.facebook.com/fractalslab">
                    <button class="ms-3 button text-white fw-bold">f</button>
                </a>
                <a class="fs-3 fw-bold text-white text-decoration-none"
                   href="https://www.linkedin.com/company/fractalslab/">
                    <button class="ms-2 button-2 text-white fw-bolder">in</button>
                </a>
            </div>
        </footer>
    </div>`;
class phone extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = footer;
  }
}

customElements.define("footer-component", phone);
