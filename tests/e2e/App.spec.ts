import { test, expect } from '@playwright/test';

test('should scroll down to the Projects section on PROJECT click', async ({
  page,
}) => {
  // Start from the index page (the baseURL is in the playwright.config.ts)
  await page.goto('');
  const initialSrollPosition = await page.evaluate(() => window.scrollY);

  await page.click('text=PROJECTS');

  // The new URL should be "/#projects" (baseURL is used there)
  await expect(page).toHaveURL('/#projects');
  const newScrollPosition = await page.evaluate(() => window.scrollY);

  // The new scroll position should be greater than the initial one
  expect(newScrollPosition).toBeGreaterThan(initialSrollPosition);
});

test('should load the Blog page ', async ({ page }) => {
  await page.goto('');
  await page.click('text=BLOG');
  await expect(page).toHaveURL('/blog');
});

test('should load a Post page ', async ({ page }) => {
  await page.goto('/blog');

  // TODO: fix the lint error
  await expect(page).toMatchElement('h1', { text: 'Blog' });
  await expect(page).toMatchElement('div', {
    text: 'My thoughts and learning into writings, colors, and diagrams.',
  });

  // Check if there are PostListItem components.
  const postListItems = await page.$$('div.cursor-pointer');
  expect(postListItems.length).toBeGreaterThan(0);

  // Click on the first PostListItem link.
  await postListItems[0].click();

  // Check if the new page is loaded, or you can validate the content of the individual post page.
  await page.waitForNavigation();
});
