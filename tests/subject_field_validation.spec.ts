import { test, expect } from "@playwright/test";

test("Subject input field should accepts multiple subjects and displays them correctly", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("subjectsInput").fill("Computer Science");
  await page.keyboard.press("Enter");
  await page.getByTestId("subjectsInput").fill("Maths");
  await page.keyboard.press("Enter");
  //verify that the subjects input field accepts multiple subjects and displays them correctly.
  await expect(page.getByText("Maths", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Computer Science", { exact: true }),
  ).toBeVisible();
});

test("Subject input field should not accept invalid subjects", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("subjectsInput").fill("spooky_coconuts");
  await page.keyboard.press("Enter");
  // Verify that the subjects input field does not accept invalid subjects
  await expect(
    page.getByText("spooky_coconuts", { exact: true }),
  ).not.toBeVisible();
});

test("Subject input field should allow users to remove selected subjects", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("subjectsInput").fill("Computer Science");
  await page.keyboard.press("Enter");
  await page.getByTestId("subjectsInput").fill("Maths");
  await page.keyboard.press("Enter");
  // Remove the selected subject
  await page.getByRole("button", { name: "Remove Computer Science" }).click();
  // Verify that the subjects input field can remove selected subjects
  await expect(
    page.getByText("Computer Science", { exact: true }),
  ).not.toBeVisible();
});
