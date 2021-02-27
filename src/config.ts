import SMTPTransport from "nodemailer/lib/smtp-transport";
import dontenv from 'dotenv';
import path from 'path';

dontenv.config({path: path.resolve(__dirname, '../dotenv')});

interface IGpuStockScraperConfig {
  appName: string;
  email: {
    transport: SMTPTransport.Options;
    toAddress: string;
    fromAddress: string;
  };
  bestbuyUrls: string[];
  discordHookUrl: string;
}

export const {
  BESTBUY_URLS = "https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440,https://www.bestbuy.com/site/nvidia-geforce-rtx-3070-8gb-gddr6-pci-express-4-0-graphics-card-dark-platinum-and-black/6429442.p?skuId=6429442,https://www.bestbuy.com/site/nvidia-geforce-rtx-3060-ti-8gb-gddr6-pci-express-4-0-graphics-card-steel-and-black/6439402.p?skuId=6439402",
  DISCORD_WEBHOOK_URL = "",
  SMTP_HOST,
  SMTP_PORT,
  SMTP_AUTH_USER,
  SMTP_AUTH_PASSWORD,
  EMAIL_TO = "",
  EMAIL_FROM = ""
} = process.env;

export const config: IGpuStockScraperConfig = {
  appName: "GPU Stock Scraper",
  bestbuyUrls: BESTBUY_URLS.split(','),
  discordHookUrl: DISCORD_WEBHOOK_URL,
  email: {
    transport: {
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      auth: {
        user: SMTP_AUTH_USER,
        pass: SMTP_AUTH_PASSWORD
      }
    },
    toAddress: EMAIL_TO,
    fromAddress: EMAIL_FROM
  }
};
