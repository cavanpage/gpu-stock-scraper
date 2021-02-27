import { By, WebDriver } from "selenium-webdriver";
import { InStockHandler } from "../interfaces";

export const bestBuyHandler: InStockHandler = async (
  driver: WebDriver
): Promise<boolean> => {
  const addToCartButton = await driver.findElements(
    By.css(".add-to-cart-button")
  );

  if(addToCartButton[0].isEnabled()){
    addToCartButton[0].click();
  }
  return await addToCartButton[0].isEnabled();
};
