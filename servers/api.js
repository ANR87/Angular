const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const pusher = new Pusher({
    appId: "1175897",
    key: "0df83ff3932acf0fe2d8",
    secret: "1b57669db289c189e258",
    cluster: "ap2",
    useTLS: true
  });
  
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });

router.get('/', (req, res) => {
  res.send('Express web server running correctly');
});
router.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
  });
module.exports = router;