import { getAllMonitorConfigs, getLogs, log } from "./utilities";
import { monitor } from "./monitors";
import { notify } from "./notifications";
import express from 'express';

const app = express();
const port = 3000;

notify("Application Started");

try {
  getAllMonitorConfigs().forEach((x) => {
    monitor(x);
  });
} catch (e) {
  notify("Application Stopped");
}

app.get('/logs', (req, res) => {
    res.send(getLogs());
});

app.listen(port, () => {
  log("listening to port " + port);
});
