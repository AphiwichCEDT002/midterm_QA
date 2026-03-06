import { test, expect } from "@playwright/test";

test("Submission modal should correctly display the exact data entered in the form", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.com");
  await page.getByTestId("gender-radio-1").check();
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill("15 Mar 2026");
  await page.keyboard.press("Enter");
  await page.getByTestId("subjectsInput").fill("Computer Science");
  await page.keyboard.press("Enter");
  await page.getByTestId("hobbies-checkbox-2").check();
  await page.getByTestId("currentAddress").fill("123 Main St, Anytown, USA");
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await page.getByRole("option", { name: "Delhi" }).click();
  await page.getByTestId("submit").click();

  // Verify that the form submission was successful.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();

  // Verify that the submission modal correctly displays the exact data entered in the form.
  await expect(page.getByText("John Doe", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Aphiwich@email.com", { exact: true }),
  ).toBeVisible();
  await expect(
    page
      .locator(".table-responsive")
      .getByRole("cell", { name: "Male", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("1234567890", { exact: true })).toBeVisible();
  await expect(page.getByText("15 March,2026", { exact: true })).toBeVisible();
  await expect(
    page
      .locator(".table-responsive")
      .getByRole("cell", { name: "Computer Science", exact: true }),
  ).toBeVisible();
  await expect(
    page
      .locator(".table-responsive")
      .getByRole("cell", { name: "Reading", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("123 Main St, Anytown, USA", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("NCR Delhi", { exact: true })).toBeVisible();
});

// close the submission modal after verifying the data
test("Submission modal should close correctly after verifying the data", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // initialize form data
  const form = page.locator("#userForm");
  await expect(form).not.toHaveClass(/was-validated/);

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.com");
  await page.getByTestId("gender-radio-1").check();
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill("15 Mar 2026");
  await page.keyboard.press("Enter");
  await page.getByTestId("subjectsInput").fill("Computer Science");
  await page.keyboard.press("Enter");
  await page.getByTestId("hobbies-checkbox-2").check();
  await page.getByTestId("currentAddress").fill("123 Main St, Anytown, USA");
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await page.getByRole("option", { name: "Delhi" }).click();
  await page.getByTestId("submit").click();

  // Verify that the form submission was successful.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("button", { name: "Close" })).not.toBeVisible();
  // Verify that the submission modal is closed after clicking the close button.
  await page.getByTestId("submit").click();
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).not.toBeVisible();
});
