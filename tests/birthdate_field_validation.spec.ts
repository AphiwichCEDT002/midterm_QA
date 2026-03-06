import { test, expect } from "@playwright/test";

// Boundary value analysis for birth date field validation
test("Submit should fail with invalid birth date(Today date)", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  var date = new Date();
  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "short" });
  var year = date.getFullYear();
  var today_date = `${day} ${month} ${year}`;

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.com");
  await page.getByTestId("gender-radio-1").check();
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill(today_date);
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

  // Verify that the form submission fails with the invalid birth date.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).not.toBeVisible();
});

test("Submit should succeed with valid birth date(Past Date)", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  var date = new Date();
  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "short" });
  var year = date.getFullYear() - 20;
  var today_date = `${day} ${month} ${year}`;

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.com");
  await page.getByTestId("gender-radio-1").check();
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill(today_date);
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

  // Verify that the form submission fails with the invalid birth date.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).toBeVisible();
});

test("Submit should fail with invalid birth date(Future Date)", async ({
  page,
}) => {
  // Navigate to the form page.
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(
    page.getByRole("heading", { name: "Practice Form" }),
  ).toBeVisible();

  var date = new Date();
  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "short" });
  var year = date.getFullYear() + 20;
  var today_date = `${day} ${month} ${year}`;

  // Fill the form
  await page.getByTestId("firstName").fill("John");
  await page.getByTestId("lastName").fill("Doe");
  await page.getByTestId("userEmail").fill("Aphiwich@email.com");
  await page.getByTestId("gender-radio-1").check();
  await page.getByTestId("userNumber").fill("1234567890");
  await page.getByTestId("dateOfBirthInput").click();
  await page.getByTestId("dateOfBirthInput").fill(today_date);
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
  // Verify that the form submission fails with the invalid birth date.
  await expect(
    page.getByText("Thanks for submitting the form", { exact: true }),
  ).not.toBeVisible();
});
