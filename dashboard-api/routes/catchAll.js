const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({ ok: true, foundPRs: [] });
});

module.exports = router;
