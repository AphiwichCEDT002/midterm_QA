import { test, expect } from "@playwright/test";

test("User should be able to successfully submit the form with all valid data", async ({
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

test("User should not be able to submit the form if First Name fields are blank", async ({
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

test("User should not be able to submit the form if Last Name fields are blank", async ({
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

test("User should not be able to submit the form if  Gender fields are blank", async ({
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

test("User should not be able to submit the form if Mobile fields are blank", async ({
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

// boundary value analysis for mobile number field
test("Mobile field should not allow less than 10 digits. ", async ({
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

  // Fill the mobile number field with less than 10 digits
  await page.getByTestId("userNumber").fill("123456789");
  await page.getByTestId("submit").click();

  // Verify that the form submission was failed.
  await expect(form).toHaveClass(/was-validated/);
});

test("Mobile field should allow exactly 10 digits. ", async ({ page }) => {
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

  // Fill the mobile number field with exactly 10 digits
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("submit").click();

  // Verify that the form submission was successful.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();
});

test("Mobile field should not allow more than 10 digits. ", async ({
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

  // Fill the mobile number field with more than 10 digits
  await page.getByTestId("userNumber").fill("123456789011");
  await page.getByTestId("submit").click();

  // Verify that the form submission was successful.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("1234567890", { exact: true })).toBeVisible();
});

// Alphabetic characters or special symbols are not permitted
test("Mobile field Must not contain alphabetic characters or special symbols. ", async ({
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
  await page.getByTestId("userNumber").fill("123-456-7890");
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

// Email: Must contain "@" and a valid domain extension.
test("Email field Must contain '@'", async ({ page }) => {
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
  await page.getByTestId("userEmail").fill("Aphiwichemail.com");
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

// a valid domain extension
test("Email field Must contain a valid domain extension", async ({ page }) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.net");
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
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();
});

// Date of Birth: The field should default to the current system date but allow manual selection via a calendar widget.
test("Date of Birth field should default to the current system date", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Verify that the Date of Birth field defaults to the current system date.
  const currentDate = new Date();
  const currentDay = currentDate.getDate().toString().padStart(2, "0");
  const currentMonth = currentDate.toLocaleString("default", {
    month: "short",
  });
  const currentYear = currentDate.getFullYear();
  const expectedDate = `${currentDay} ${currentMonth} ${currentYear}`;
  await expect(page.getByTestId("dateOfBirthInput")).toHaveValue(expectedDate);
});

test("Date of Birth field should allow manual selection via a calendar widget", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  // Fill the form
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill("15 Mar 2026");
  await page.keyboard.press("Enter");

  // Verify that the Date of Birth field allows manual selection via a calendar widget.
  await expect(page.getByTestId("dateOfBirthInput")).toHaveValue("15 Mar 2026");
});

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
