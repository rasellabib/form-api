const navbar = `<nav
        class="navbar navbar-expand-lg navbar-light fixed-top shadow-none p-1"
      >
        <div class="container-fluid">
          <div class="navbar-brand text-dark">
            <div>
              <a href="" class="navbar-brand text-white pointer-event">
                <img src="../assets/Job.png" class="navbar-brand-img" alt="" />
              </a>
            </div>
          </div>
          <div class="d-sm-block d-md-none">
            <button
              class="btn btn-red border-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span class="fs-2 menu-image text-white">
                <img src="../assets/menu-line.png" alt="" />
              </span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body mb-navbar">
                <div>
                  <a
                    href="../index.html"
                    class="navbar-brand nav-hover text-dark fw-bold pointer-event"
                    >হোম</a
                  >
                </div>
                <div>
                  <a
                    href="../pages/searchJob.html"
                    class="navbar-brand nav-hover text-dark fw-bold pointer-event"
                    >জব খুজুন</a
                  >
                </div>
                <div>
                  <a
                    href="../pages/cv.html"
                    class="navbar-brand nav-hover text-dark fw-bold pointer-event"
                    >সিভি আপলোড করুন</a
                  >
                </div>
                <div>
                  <a
                    href="../pages/course.html"
                    class="navbar-brand nav-hover text-dark fw-bold pointer-event"
                    >কোর্স সমূহ</a
                  >
                </div>
                <div>
                  <a href="../pages/login.html" type="button" class="btn btn-light rounded-1 p-1">
                    <img src="../assets/google-48.png" alt="" />
                    লগইন
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-md-flex d-sm-none d-none justify-content-between lg-navbar"
          >
            <a href="../index.html" class="navbar-brand nav-hover text-white pointer-event"
              >হোম</a
            >
            <a href="../pages/searchJob.html" class="navbar-brand nav-hover text-white pointer-event"
              >জব খুজুন</a
            >
            <a href="../pages/cv.html" class="navbar-brand nav-hover text-white pointer-event"
              >সিভি আপলোড করুন</a
            >
            <a href="../pages/course.html" class="navbar-brand nav-hover text-white pointer-event"
              >কোর্স সমূহ</a
            >
            <a class="google-btn p-1" href="../pages/login.html">
              <img
                class="google-login-btn"
                src=""
                alt=""
              />
              লগইন
            </a>
          </div>
        </div>
      </nav>`;

class header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = navbar;
  }
}

customElements.define("navbar-component", header);
