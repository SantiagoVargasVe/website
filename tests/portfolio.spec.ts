import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("current projects and hosted services replace Samba, without the excluded blog", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const [name, host] of [
    ["Cuadre", "cuadre"],
    ["Stillroom", "stillroom"],
    ["Wishlist", "wish"],
    ["Viajes", "trips"],
  ]) {
    await expect(
      page.getByRole("link", { name: `Open ${name}`, exact: true }),
    ).toHaveAttribute("href", `https://${host}.santiagovargas.co/`);
  }
  for (const host of ["cloud", "photos", "pdf", "status", "logs"]) {
    await expect(
      page.locator(`a[href="https://${host}.santiagovargas.co/"]`),
    ).toBeVisible();
  }
  await expect(
    page.locator('a[href*="samba"], a[href*="notasdefondo"]'),
  ).toHaveCount(0);
  await expect(page.getByText("Speaking Samba")).toHaveCount(0);
  await page.locator(".archive > summary").click();
  await expect(
    page.getByRole("heading", { name: "Truever", exact: true }),
  ).toBeVisible();
  await page.locator(".education-card summary").first().click();
  await expect(
    page.getByText("Design and Analysis of Algorithms", { exact: true }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("themes persist and both themes pass accessibility checks", async ({
  page,
}) => {
  await page.goto("/");
  for (const theme of ["light", "dark"]) {
    if (theme === "dark")
      await page.getByRole("button", { name: "Switch to dark theme" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  }
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toBeVisible();
});

test("navigation works without horizontal overflow", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(
      page.getByRole("button", { name: "Close menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    await page
      .locator("#mobile-navigation")
      .getByRole("link", { name: "About", exact: true })
      .click();
    await expect(page.locator("#mobile-navigation")).toBeHidden();
  } else {
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "About", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/#about$/);
  for (const width of isMobile ? [320, 390, 760] : [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test("keyboard controls and reduced motion remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  await expect(page.locator("#mobile-navigation")).toBeHidden();
});
