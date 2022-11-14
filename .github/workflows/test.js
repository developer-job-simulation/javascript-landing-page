import { JSDOM } from "jsdom";
import { setTimeout } from "timers/promises";
import { test } from "uvu";
import * as assert from "uvu/assert";
let filePath = "./src/index.html";

test("simple test", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  await setTimeout(10); // let css load
  assert.is(dom.window.document.querySelector("h1").innerHTML, "Hello World");
});

test.run();
