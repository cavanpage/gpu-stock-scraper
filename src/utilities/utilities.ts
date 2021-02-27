import {
  config
} from "../config";
import { Builder, ThenableWebDriver } from "selenium-webdriver";
import { Carrier, IMonitorConfig } from "../interfaces";
import {
  bestBuyHandler
} from "../handlers";
require("chromedriver");

const handlerConfigs: Record<Carrier | string, IMonitorConfig> = {};

const setupHandlerConfigs = () => {
  config.bestbuyUrls.forEach(url => {
    handlerConfigs[url] = {
      name: 'Best Buy ' + url,
      inStockHandler: bestBuyHandler,
      url
    }
  });
}

setupHandlerConfigs();

const logs: string[] = [];

export const getLogs = () => {
  return logs;
}

export const log = (message: any) => {
  const logMessage: string = `${new Date()}: ${message}`;
  logs.push(logMessage);
  console.log(logMessage);
};

export const error = (message: any) => {
  const logMessage: string = `${new Date()}: ${message}`;
  logs.push(logMessage);
  console.error(logMessage);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const createWebDriver = async (): Promise<ThenableWebDriver> => {
  return await new Builder().forBrowser("chrome").build();
};

export const getAllMonitorConfigs = (): IMonitorConfig[] => {
  return Object.values(handlerConfigs);
};
