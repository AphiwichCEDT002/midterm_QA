import { test, expect } from "@playwright/test";

test("City dropdown options should change based on the selected State", async ({
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

  // Verify that the city dropdown options are correct based on the selected state.
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await expect(page.getByRole("option", { name: "Delhi" })).toBeVisible();
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "Haryana" }).click();
  await page.getByTestId("city").click();
  await expect(page.getByRole("option", { name: "Karnal" })).toBeVisible();
});

test("City dropdown field should be empty if no State is selected", async ({
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

  // Verify that the city dropdown options are correct based on the selected state.
  await expect(page.getByTestId("react-select-4-placeholder")).toHaveText(
    "Select City",
  );
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await expect(page.getByTestId("react-select-4-placeholder")).toHaveText(
    "Select City",
  );
});

test("City dropdown options should not change if the selected State is not changed", async ({
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

  // Verify that the city dropdown options are correct based on the selected state.
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await expect(page.getByRole("option", { name: "Delhi" })).toBeVisible();
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await expect(page.getByRole("option", { name: "Delhi" })).toBeVisible();
});

// Equivalence partitioning for city dropdown options based on state selection
test("City dropdown options should not allow invalid values if user fill city from other state", async ({
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

  // Verify that the city dropdown options are correct based on the selected state.
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "Haryana" }).click();
  await page.getByTestId("city").click();
  await page.getByTestId("react-select-4-input").fill("Delhi");
  await expect(page.getByRole("option", { name: "Delhi" })).not.toBeVisible();
  await expect(page.getByText("No options", { exact: true })).toBeVisible();
});

test("City dropdown options should allow valid values if user fill city from correct state", async ({
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

  // Verify that the city dropdown options are correct based on the selected state.
  await page.getByTestId("state").click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page.getByTestId("city").click();
  await page.getByTestId("react-select-4-input").fill("Delhi");
  await expect(page.getByRole("option", { name: "Delhi" })).toBeVisible();
});
