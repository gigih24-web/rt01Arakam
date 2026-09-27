document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");

    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Tutup menu ketika link diklik */

        const navigationLinks =
            mainNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       TAHUN OTOMATIS
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       HEADER SHADOW SAAT SCROLL
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();

});











// PROFILE PAGE


document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");


    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    mainNavigation.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        const navigationLinks =
            mainNavigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNavigation.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }


    /* =====================================================
       TAHUN FOOTER OTOMATIS
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       HEADER SHADOW
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }


        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();

});










// INFORMASI PAGE

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");

    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        // Tutup menu ketika link diklik
        const navigationLinks =
            mainNavigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================
       HEADER SHADOW
    ========================= */

    const header =
        document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    /* =========================
       FILTER & SEARCH
    ========================= */

    const searchInput =
        document.getElementById("searchInformation");

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const informationCards =
        document.querySelectorAll(".information-page-card");

    const informationEmpty =
        document.getElementById("informationEmpty");

    const informationCount =
        document.getElementById("informationCount");


    let activeCategory = "all";


    function filterInformation() {

        const searchKeyword =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";

        let visibleCount = 0;


        informationCards.forEach(function (card) {

            const category =
                card.dataset.category || "";

            const title =
                card.dataset.title || "";

            const cardText =
                card.textContent.toLowerCase();


            const categoryMatch =
                activeCategory === "all" ||
                category === activeCategory;


            const searchMatch =
                searchKeyword === "" ||
                title.includes(searchKeyword) ||
                cardText.includes(searchKeyword);


            if (categoryMatch && searchMatch) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        /* EMPTY STATE */

        if (informationEmpty) {

            informationEmpty.hidden =
                visibleCount !== 0;

        }


        /* INFORMATION COUNT */

        if (informationCount) {

            informationCount.textContent =
                `Menampilkan ${visibleCount} informasi`;

        }

    }


    /* =========================
       FILTER BUTTON
    ========================= */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            activeCategory =
                button.dataset.filter;

            filterInformation();

        });

    });


    /* =========================
       SEARCH
    ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterInformation
        );

    }


    /* =========================
       INITIAL FILTER
    ========================= */

    filterInformation();

});












// Kegiatan Page

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");


    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const navigationLinks =
            mainNavigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================
       HEADER SHADOW
    ========================= */

    const header =
        document.querySelector(".site-header");


    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =========================
       SEARCH & FILTER
    ========================= */

    const searchInput =
        document.getElementById("searchActivity");

    const filterButtons =
        document.querySelectorAll(
            ".activity-filter-button"
        );

    const activityCards =
        document.querySelectorAll(
            ".activity-page-card"
        );

    const activityEmpty =
        document.getElementById("activityEmpty");

    const activityCount =
        document.getElementById("activityCount");


    let activeCategory = "all";


    function filterActivities() {

        const searchKeyword =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let visibleCount = 0;


        activityCards.forEach(function (card) {

            const category =
                card.dataset.category || "";

            const title =
                card.dataset.title || "";

            const cardText =
                card.textContent.toLowerCase();


            const categoryMatch =
                activeCategory === "all" ||
                category === activeCategory;


            const searchMatch =
                searchKeyword === "" ||
                title.includes(searchKeyword) ||
                cardText.includes(searchKeyword);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        /* EMPTY STATE */

        if (activityEmpty) {

            activityEmpty.hidden =
                visibleCount !== 0;

        }


        /* COUNT */

        if (activityCount) {

            activityCount.textContent =
                `Menampilkan ${visibleCount} kegiatan`;

        }

    }


    /* =========================
       FILTER BUTTON
    ========================= */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            button.classList.add("active");


            activeCategory =
                button.dataset.filter;


            filterActivities();

        });

    });


    /* =========================
       SEARCH
    ========================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterActivities
        );

    }


    /* =========================
       INITIAL FILTER
    ========================= */

    filterActivities();

});
















// layanan Page

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");


    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const navigationLinks =
            mainNavigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================
       HEADER SHADOW
    ========================= */

    const header =
        document.querySelector(".site-header");


    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

});















// kontak Page

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");


    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const navigationLinks =
            mainNavigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================
       HEADER SHADOW
    ========================= */

    const header =
        document.querySelector(".site-header");


    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const phone =
                    document.getElementById("phone").value.trim();

                const subject =
                    document.getElementById("subject").value;

                const message =
                    document.getElementById("message").value.trim();


                if (
                    name === "" ||
                    phone === "" ||
                    subject === "" ||
                    message === ""
                ) {

                    formMessage.textContent =
                        "Mohon lengkapi semua data terlebih dahulu.";

                    formMessage.classList.add("error");

                    return;

                }


                formMessage.textContent =
                    "Pesan berhasil dicatat. Terima kasih telah menghubungi RT 01A Rakam.";

                formMessage.classList.remove("error");

                formMessage.classList.add("success");


                contactForm.reset();

            }
        );

    }

});