import { test, expect } from '@playwright/test';
import { color } from '../helpers/common.helper';

test('expect each tour list item to have "View Tour" button', async ({ page }) => {

  await page.goto('https://www.biketours.com/');

  // type "France" into the search box
  await page.fill('[id="home-search-input"]', 'France');

  // press the "Enter" key
  await page.press('[id="home-search-input"]', 'Enter');

  // wait for tour list to load
  await page.waitForSelector('.tour-list');

  // find all elements with the "tour-list-item" class
  const tourListItems = await page.$$('.tour-list-item');
  console.log(JSON.stringify(tourListItems));

  // get length of tour list items
  const tourListItemsLength = tourListItems.length;
  console.log(`Total amount of tours found: ${tourListItemsLength}`);

  // expect each tour list item to have "View Tour" button
  for (let i = 0; i < tourListItemsLength; i++) {
    const tourListItem = tourListItems[i];
    const viewTourButton = await tourListItem.$('text="View Tour"');
    expect(viewTourButton).toBeTruthy();
    console.log(color.success(`\nButton `) + color.info(`[View Tour] `) + color.success(`is visible inside tour block `) + color.info(i));
  };
  
});
