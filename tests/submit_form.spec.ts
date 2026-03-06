import { test, expect } from "@playwright/test";

test("Verify that a user can successfully submit the form with all valid data", async ({
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
});

test("Verify that the form cannot be submitted if First Name fields are blank", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // initiative
  const form = page.locator("#userForm");
  await expect(form).not.toHaveClass(/was-validated/);

  // Fill the form
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

  // check class 'was-validated' had appeared on form
  await expect(form).toHaveClass(/was-validated/);
  // await expect(form).not.toHaveClass(/was-validated/);
});

test("Verify that the form cannot be submitted if Last Name fields are blank", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // initiative
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

  // Verify that the form submission was failed.
  await expect(form).toHaveClass(/was-validated/);
});

test("Verify that the form cannot be submitted if  Gender fields are blank", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // initiative
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

  // Verify that the form submission was failed.
  await expect(form).toHaveClass(/was-validated/);
});

test("Verify that the form cannot be submitted if Mobile fields are blank", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // initiative
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

  // Verify that the form submission was failed.
  await expect(form).toHaveClass(/was-validated/);
});
