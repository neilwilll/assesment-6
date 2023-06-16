const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  describe('game', () => {
    it('should start with a score of 0', () => {
      const game = new Game();
      expect(game.getScore()).toBe(0);
    });
  
    it('should increase the score by 10 when a correct answer is provided', () => {
      const game = new Game();
      game.submitAnswer('apple');
      expect(game.getScore()).toBe(10);
    });
  });
  
});