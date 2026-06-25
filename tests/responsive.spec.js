import { expect, test } from "@playwright/test";

const MAIN_ROUTES = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "weddings-and-baptisms", path: "/weddingsandbaptisms" },
  { name: "corporate-events", path: "/corporateevents" },
  { name: "private-celebrations", path: "/privatecelebrations" },
  { name: "experiences", path: "/experiences" },
  { name: "about", path: "/about" },
  { name: "merch", path: "/merch" },
  { name: "contact", path: "/contact" },
];

const VIEWPORTS = [
  { name: "mobile-320", width: 320, height: 568 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const CONTROL_SELECTOR = [
  "a[href]",
  "button",
  "input:not([type='hidden'])",
  "select",
  "textarea",
  "[role='button']",
  "[role='tab']",
  "[role='menuitem']",
  "[role='option']",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const IMPORTANT_SELECTORS = [
  "header",
  "main",
  "footer",
  ".page-header",
  ".page-overlay__open",
  ".curists-home-hero",
  ".curists-internal-page",
  ".curists-page-hero",
  ".curists-page-flow",
  ".curists-page-section",
  ".curists-feature-card",
  ".curists-journey-section",
  ".curists-contact-form",
  ".curists-page-cta",
  ".curists-footer",
  ".page-footer",
  "[data-curists-page-block]",
].join(",");

const DIALOG_SELECTOR = [
  "[role='dialog']",
  "[aria-modal='true']",
  ".page-overlay[data-open='true']",
  "[data-curists-select-menu]:not([hidden])",
  ".t-dropdown.is-open",
  ".t-dropdown.is-closing",
].join(",");

const TOLERANCE = 2;

async function waitForStablePage(page) {
  await page.waitForLoadState("networkidle", { timeout: 5_000 }).catch(() => {});
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
  await page.waitForTimeout(300);
}

function auditScript({ includePageChecks }) {
  return ({ controlSelector, dialogSelector, importantSelectors, includePageChecks, tolerance }) => {
    const issues = [];
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const roundedRect = (rect) => ({
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      right: Math.round(rect.right),
      bottom: Math.round(rect.bottom),
    });

    const labelFor = (element) => {
      const preferred =
        element.getAttribute("aria-label") ||
        element.getAttribute("name") ||
        element.id ||
        element.textContent?.replace(/\s+/g, " ").trim();
      const className =
        typeof element.className === "string" && element.className.trim()
          ? `.${element.className.trim().split(/\s+/).slice(0, 3).join(".")}`
          : "";

      return `${element.tagName.toLowerCase()}${className}${preferred ? ` "${preferred.slice(0, 80)}"` : ""}`;
    };

    const hiddenByAncestor = (element) => {
      for (let node = element; node && node.nodeType === Node.ELEMENT_NODE; node = node.parentElement) {
        if (node.hidden || node.getAttribute("aria-hidden") === "true") return true;
        const style = window.getComputedStyle(node);
        if (style.display === "none" || style.visibility === "hidden") return true;
        if (Number.parseFloat(style.opacity || "1") <= 0.01) return true;
      }
      return false;
    };

    const isVisible = (element) => {
      if (!element?.isConnected || hiddenByAncestor(element)) return false;
      const rect = element.getBoundingClientRect();
      return rect.width > 0.5 && rect.height > 0.5;
    };

    const uniqueElements = (selector, root = document) => Array.from(new Set(Array.from(root.querySelectorAll(selector))));

    const isInactiveVisuallyHiddenControl = (element) =>
      element.matches(".visually-hidden:not(:focus):not(:focus-within), .focusable.visually-hidden:not(:focus):not(:focus-within)");

    const horizontalScrollContainerFor = (element) => {
      for (let node = element.parentElement; node && node !== document.body; node = node.parentElement) {
        const style = window.getComputedStyle(node);
        if ((style.overflowX === "auto" || style.overflowX === "scroll") && node.scrollWidth > node.clientWidth + tolerance) {
          return node;
        }
      }
      return null;
    };

    const controlMinimums = (element) => {
      const tag = element.tagName.toLowerCase();
      const isPlainTextLink =
        tag === "a" &&
        !element.classList.contains("curists-cta-button") &&
        !element.closest(".page-overlay, .curists-page-flow, .curists-cta-feeling-grid");

      return isPlainTextLink ? { width: 24, height: 16 } : { width: 32, height: 32 };
    };

    const checkElementHorizontallyFits = (element, scope) => {
      const rect = element.getBoundingClientRect();
      if (horizontalScrollContainerFor(element)) return;
      if (rect.left < -tolerance || rect.right > viewportWidth + tolerance) {
        issues.push(
          `${scope}: ${labelFor(element)} extends horizontally outside ${viewportWidth}px viewport: ${JSON.stringify(
            roundedRect(rect),
          )}`,
        );
      }
    };

    const checkControls = (root, scope) => {
      const controls = uniqueElements(controlSelector, root)
        .filter(isVisible)
        .filter((element) => !isInactiveVisuallyHiddenControl(element));

      controls.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const minimum = controlMinimums(element);
        checkElementHorizontallyFits(element, scope);

        if (rect.width < minimum.width || rect.height < minimum.height) {
          issues.push(
            `${scope}: ${labelFor(element)} control is too small (${Math.round(rect.width)}x${Math.round(
              rect.height,
            )}px, minimum ${minimum.width}x${minimum.height}px)`,
          );
        }
      });

      for (let index = 0; index < controls.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < controls.length; nextIndex += 1) {
          const first = controls[index];
          const second = controls[nextIndex];
          if (first.contains(second) || second.contains(first)) continue;

          const firstStyle = window.getComputedStyle(first);
          const secondStyle = window.getComputedStyle(second);
          if (firstStyle.pointerEvents === "none" || secondStyle.pointerEvents === "none") continue;

          const firstRect = first.getBoundingClientRect();
          const secondRect = second.getBoundingClientRect();
          const overlapWidth = Math.min(firstRect.right, secondRect.right) - Math.max(firstRect.left, secondRect.left);
          const overlapHeight = Math.min(firstRect.bottom, secondRect.bottom) - Math.max(firstRect.top, secondRect.top);

          if (overlapWidth >= 8 && overlapHeight >= 8 && overlapWidth * overlapHeight >= 64) {
            issues.push(
              `${scope}: ${labelFor(first)} overlaps ${labelFor(second)} by ${Math.round(overlapWidth)}x${Math.round(
                overlapHeight,
              )}px`,
            );
          }
        }
      }
    };

    const checkDialogs = () => {
      uniqueElements(dialogSelector)
        .filter(isVisible)
        .forEach((dialog) => {
          const rect = dialog.getBoundingClientRect();
          if (
            rect.left < -tolerance ||
            rect.top < -tolerance ||
            rect.right > viewportWidth + tolerance ||
            rect.bottom > viewportHeight + tolerance
          ) {
            issues.push(
              `dialog: ${labelFor(dialog)} extends outside visible screen ${viewportWidth}x${viewportHeight}: ${JSON.stringify(
                roundedRect(rect),
              )}`,
            );
          }
          checkControls(dialog, "dialog controls");
        });
    };

    if (includePageChecks) {
      const documentWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body?.scrollWidth || 0,
        document.documentElement.clientWidth,
      );

      if (documentWidth > viewportWidth + tolerance) {
        issues.push(`document: width ${documentWidth}px exceeds viewport width ${viewportWidth}px`);
      }

      uniqueElements(importantSelectors)
        .filter(isVisible)
        .forEach((element) => {
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const intersectsViewportVertically = rect.bottom > 0 && rect.top < viewportHeight;

          checkElementHorizontallyFits(element, "important element");

          if (
            (style.position === "fixed" || (style.position === "sticky" && intersectsViewportVertically)) &&
            (rect.top < -tolerance || rect.bottom > viewportHeight + tolerance)
          ) {
            issues.push(
              `important element: ${labelFor(element)} ${style.position} element extends vertically outside ${viewportHeight}px viewport: ${JSON.stringify(
                roundedRect(rect),
              )}`,
            );
          }
        });

      checkControls(document, "page controls");
    }

    checkDialogs();

    return issues;
  };
}

async function collectResponsiveIssues(page, includePageChecks = true) {
  return page.evaluate(auditScript({ includePageChecks }), {
    controlSelector: CONTROL_SELECTOR,
    dialogSelector: DIALOG_SELECTOR,
    importantSelectors: IMPORTANT_SELECTORS,
    includePageChecks,
    tolerance: TOLERANCE,
  });
}

async function collectNavigationAccessibilityIssues(page, context) {
  const issues = [];
  const menuButton = page.locator(".page-header .page-overlay__open").first();
  if ((await menuButton.count()) === 0) return [`${context}: menu button is missing`];

  if (!(await menuButton.isVisible().catch(() => false))) {
    issues.push(`${context}: menu button is not visible`);
  }

  if (!(await menuButton.isEnabled().catch(() => false))) {
    issues.push(`${context}: menu button is not enabled`);
  }

  const buttonBox = await menuButton.boundingBox();
  if (!buttonBox) {
    issues.push(`${context}: menu button does not have a measurable target`);
  } else {
    if (buttonBox.width < 32) issues.push(`${context}: menu button is too narrow (${Math.round(buttonBox.width)}px)`);
    if (buttonBox.height < 32) issues.push(`${context}: menu button is too short (${Math.round(buttonBox.height)}px)`);
  }

  if (issues.length) return issues;

  try {
    await menuButton.click({ timeout: 5_000 });
  } catch (error) {
    issues.push(`${context}: menu button could not be clicked (${error.message})`);
    return issues;
  }
  await page.waitForTimeout(250);

  const overlayState = await page.evaluate(() => {
    const overlay = document.querySelector(".page-overlay");
    const visibleLinks = Array.from(document.querySelectorAll(".page-overlay a[href]")).filter((link) => {
      const rect = link.getBoundingClientRect();
      const style = window.getComputedStyle(link);
      return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
    });

    return {
      htmlOpen: document.documentElement.classList.contains("overlay-open"),
      ariaHidden: overlay?.getAttribute("aria-hidden") ?? null,
      visibleLinkCount: visibleLinks.length,
    };
  });

  if (!overlayState.htmlOpen) issues.push(`${context}: menu did not mark the document as open`);
  if (overlayState.ariaHidden !== "false") issues.push(`${context}: overlay aria-hidden is ${overlayState.ariaHidden}`);
  if (overlayState.visibleLinkCount < 6) {
    issues.push(`${context}: overlay navigation exposes only ${overlayState.visibleLinkCount} visible links`);
  }

  const openNavigationIssues = await collectResponsiveIssues(page, false);
  issues.push(...openNavigationIssues.map((issue) => `${context}: open navigation: ${issue}`));

  try {
    await menuButton.click({ timeout: 5_000 });
  } catch (error) {
    issues.push(`${context}: menu button could not close the overlay (${error.message})`);
    return issues;
  }
  await page.waitForTimeout(150);

  const closedAriaHidden = await page.locator(".page-overlay").first().getAttribute("aria-hidden").catch(() => null);
  if (closedAriaHidden !== "true") issues.push(`${context}: overlay did not close cleanly`);

  return issues;
}

async function collectContactDropdownIssues(page, context) {
  const issues = [];
  const selectButton = page.locator("[data-curists-select-button]").first();
  if ((await selectButton.count()) === 0) return issues;

  if (!(await selectButton.isVisible().catch(() => false))) {
    return [`${context}: custom select trigger is not visible`];
  }

  try {
    await selectButton.click({ timeout: 5_000 });
  } catch (error) {
    return [`${context}: custom select trigger could not be clicked (${error.message})`];
  }
  await page.waitForTimeout(200);

  if (!(await page.locator("[data-curists-select-menu]").first().isVisible().catch(() => false))) {
    issues.push(`${context}: custom select menu did not open visibly`);
  }

  const openSelectIssues = await collectResponsiveIssues(page, false);
  issues.push(...openSelectIssues.map((issue) => `${context}: open select: ${issue}`));

  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);

  return issues;
}

for (const viewport of VIEWPORTS) {
  test.describe(`${viewport.name} ${viewport.width}x${viewport.height}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of MAIN_ROUTES) {
      test(`${route.name} stays responsive`, async ({ page }) => {
        const consoleErrors = [];
        page.on("console", (message) => {
          if (message.type() === "error") consoleErrors.push(message.text());
        });
        page.on("pageerror", (error) => {
          consoleErrors.push(error.message);
        });

        const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
        expect(response?.ok(), `${route.path} should return a successful document response`).toBe(true);
        await waitForStablePage(page);

        const context = `${route.path} at ${viewport.name} (${viewport.width}x${viewport.height})`;
        const issues = [];
        issues.push(...(await collectResponsiveIssues(page)));
        issues.push(...(await collectNavigationAccessibilityIssues(page, context)));
        issues.push(...(await collectContactDropdownIssues(page, context)));
        issues.push(...consoleErrors.map((error) => `${context}: console error: ${error}`));

        expect(issues, `${context}\n${issues.join("\n")}`).toEqual([]);
      });
    }
  });
}
