import { JSDOM } from "jsdom";
import { setTimeout } from "timers/promises";
import { test } from "uvu";
import * as assert from "uvu/assert";
let filePath = "./src/index.html";

// Helpers

const hasAllClasses = (dom, id, classes) =>
  classes.every((val) => dom.window.document.getElementById(id).getAttribute("class").split(" ").includes(val));

// Tests

test("Nav Buttons Don't Work (Desktop & Mobile)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10);
  assert.is(dom.window.document.getElementById("nav-logo").getAttribute("href"), "#header");
  assert.is(dom.window.document.getElementById("nav-challenges").getAttribute("href"), "#challenges");
  assert.is(dom.window.document.getElementById("nav-signup").getAttribute("href"), "#signup");
  assert.is(dom.window.document.getElementById("mobile-nav-challenges").getAttribute("href"), "#challenges");
  assert.is(dom.window.document.getElementById("mobile-nav-signup").getAttribute("href"), "#signup");
});

test("Desktop Nav Is Visible on Mobile", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10);
  assert.ok(hasAllClasses(dom, "nav-challenges", ["hide-small"]));
  assert.ok(hasAllClasses(dom, "nav-signup", ["hide-small"]));
});

test("Invert Banner Image Colors", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(150);
  let banner = dom.window.document.getElementById("jumbo-image");
  assert.ok(["invert(1)", "invert(100%)"].includes(dom.window.getComputedStyle(banner)._values["filter"]));
});

test("Tiles Need to be 2x2 Grid", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10);
  let grid = dom.window.document.getElementById("challenge-grid");
  assert.ok(
    ["repeat(2,1fr)", "1fr1fr", "50%50%"].includes(
      dom.window.getComputedStyle(grid)._values["grid-template-columns"].replace(/\s/g, "")
    )
  );
});

test("Improve Errors on Signup Form Validation (Empty Email)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(150); // Need to wait for script to load

  // simulate empty email signup
  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));

  assert.is(dom.window.document.getElementById("success-message").hidden, true);
  assert.is(dom.window.document.getElementById("empty-error-message").hidden, false);
  assert.is(dom.window.document.getElementById("taken-error-message").hidden, true);
});

test("Improve Errors on Signup Form Validation (Taken Email)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(150); // Need to wait for script to load

  dom.window.document.getElementById("email").value = "hello@world.com";
  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));

  assert.is(dom.window.document.getElementById("success-message").hidden, true);
  assert.is(dom.window.document.getElementById("empty-error-message").hidden, true);
  assert.is(dom.window.document.getElementById("taken-error-message").hidden, false);
});

test("Improve Errors on Signup Form Validation (Repeat Email)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(150); // Need to wait for script to load

  dom.window.document.getElementById("email").value = "test@new.com";
  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));

  assert.is(dom.window.document.getElementById("success-message").hidden, false);
  assert.is(dom.window.document.getElementById("empty-error-message").hidden, true);
  assert.is(dom.window.document.getElementById("taken-error-message").hidden, true);

  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));
  assert.is(dom.window.document.getElementById("success-message").hidden, true);
  assert.is(dom.window.document.getElementById("empty-error-message").hidden, true);
  assert.is(dom.window.document.getElementById("taken-error-message").hidden, false);
});

test.run();
