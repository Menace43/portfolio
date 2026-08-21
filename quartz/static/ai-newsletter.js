(() => {
  "use strict"

  function initAINewsletter() {
    const newsletters = document.querySelectorAll(".ai-newsletter")

    newsletters.forEach((newsletter) => {
      if (newsletter.dataset.initialized === "true") return

      newsletter.dataset.initialized = "true"

      const filters = newsletter.querySelectorAll(
        ".ai-newsletter__filter"
      )

      const stories = newsletter.querySelectorAll(
        ".ai-newsletter__story"
      )

      const searchInput = newsletter.querySelector(
        "#ai-newsletter-search"
      )

      const expandButton = newsletter.querySelector(
        '[data-action="expand"]'
      )

      const collapseButton = newsletter.querySelector(
        '[data-action="collapse"]'
      )


      /* -------------------------------------------------------
         FILTERING
         ------------------------------------------------------- */

      function filterStories(category) {
        const searchTerm =
          searchInput?.value
            .trim()
            .toLowerCase() || ""

        stories.forEach((story) => {
          const storyCategory =
            story.dataset.category || ""

          const searchableText =
            story.dataset.search ||
            story.textContent ||
            ""

          const matchesCategory =
            category === "all" ||
            storyCategory === category

          const matchesSearch =
            searchTerm === "" ||
            searchableText
              .toLowerCase()
              .includes(searchTerm)

          const visible =
            matchesCategory &&
            matchesSearch

          story.hidden = !visible
        })
      }


      let activeCategory = "all"


      filters.forEach((button) => {
        button.addEventListener("click", () => {

          activeCategory =
            button.dataset.filter || "all"

          filters.forEach((filter) => {
            const active =
              filter === button

            filter.classList.toggle(
              "is-active",
              active
            )

            filter.setAttribute(
              "aria-pressed",
              String(active)
            )
          })

          filterStories(activeCategory)
        })
      })


      /* -------------------------------------------------------
         SEARCH
         ------------------------------------------------------- */

      searchInput?.addEventListener(
        "input",
        () => {
          filterStories(activeCategory)
        }
      )


      /* -------------------------------------------------------
         ACCORDIONS
         ------------------------------------------------------- */

      function setAccordion(
        trigger,
        open
      ) {
        const accordion =
          trigger.closest(
            ".ai-newsletter__accordion"
          )

        if (!accordion) return

        const content =
          accordion.querySelector(
            ".ai-newsletter__accordion-content"
          )

        const icon =
          trigger.querySelector(
            ".ai-newsletter__chevron"
          )

        trigger.setAttribute(
          "aria-expanded",
          String(open)
        )

        accordion.classList.toggle(
          "is-open",
          open
        )

        if (icon) {
          icon.textContent =
            open ? "−" : "+"
        }

        if (content) {
          content.style.maxHeight =
            open
              ? `${content.scrollHeight}px`
              : "0px"
        }
      }


      newsletter
        .querySelectorAll(
          ".ai-newsletter__accordion-trigger"
        )
        .forEach((trigger) => {

          trigger.addEventListener(
            "click",
            () => {

              const currentlyOpen =
                trigger.getAttribute(
                  "aria-expanded"
                ) === "true"

              setAccordion(
                trigger,
                !currentlyOpen
              )
            }
          )
        })


      /* -------------------------------------------------------
         EXPAND ALL
         ------------------------------------------------------- */

      expandButton?.addEventListener(
        "click",
        () => {

          newsletter
            .querySelectorAll(
              ".ai-newsletter__accordion-trigger"
            )
            .forEach((trigger) => {

              setAccordion(
                trigger,
                true
              )
            })

          const sources =
            newsletter.querySelector(
              ".ai-newsletter__sources-toggle"
            )

          if (sources) {
            setAccordion(
              sources,
              true
            )
          }
        }
      )


      /* -------------------------------------------------------
         COLLAPSE ALL
         ------------------------------------------------------- */

      collapseButton?.addEventListener(
        "click",
        () => {

          newsletter
            .querySelectorAll(
              ".ai-newsletter__accordion-trigger"
            )
            .forEach((trigger) => {

              setAccordion(
                trigger,
                false
              )
            })

          const sources =
            newsletter.querySelector(
              ".ai-newsletter__sources-toggle"
            )

          if (sources) {
            setAccordion(
              sources,
              false
            )
          }
        }
      )


      /* -------------------------------------------------------
         SOURCES
         ------------------------------------------------------- */

      const sourcesToggle =
        newsletter.querySelector(
          ".ai-newsletter__sources-toggle"
        )

      if (sourcesToggle) {

        sourcesToggle.addEventListener(
          "click",
          () => {

            const isOpen =
              sourcesToggle.getAttribute(
                "aria-expanded"
              ) === "true"

            const content =
              newsletter.querySelector(
                ".ai-newsletter__sources-content"
              )

            sourcesToggle.setAttribute(
              "aria-expanded",
              String(!isOpen)
            )

            sourcesToggle.classList.toggle(
              "is-open",
              !isOpen
            )

            const icon =
              sourcesToggle.querySelector(
                "span:last-child"
              )

            if (icon) {
              icon.textContent =
                !isOpen ? "−" : "+"
            }

            if (content) {
              content.style.maxHeight =
                !isOpen
                  ? `${content.scrollHeight}px`
                  : "0px"
            }
          }
        )
      }


      /* -------------------------------------------------------
         KEYBOARD ACCESSIBILITY
         ------------------------------------------------------- */

      newsletter.addEventListener(
        "keydown",
        (event) => {

          if (
            event.key === "Escape" &&
            document.activeElement?.tagName === "INPUT"
          ) {
            document.activeElement.value = ""
            filterStories(activeCategory)
          }

        }
      )
    })
  }


  /*
   * Quartz v5 dispatches "nav" after navigation.
   * This makes the newsletter work when you enter the
   * page through Quartz's SPA navigation as well as
   * through a direct page load.
   */

  document.addEventListener(
    "nav",
    initAINewsletter
  )

  document.addEventListener(
    "DOMContentLoaded",
    initAINewsletter
  )

})()