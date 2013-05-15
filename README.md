playground-init
===============

playground-init

Include the script
------------------

```javascript
<!-- @TODO : ajouter data mouth into script balise -->
<!-- data-mouth="true"-->
<script type="text/javascript"
    data-pg-api-key="key_first"
        data-ears="true"
            src="[ URL DU PLAYGROUND JS ]/pg.min.js"></script>
```

URL
---
Fichier pg.min.js

Ligne 1 :

```javascript
var Adfab = Adfab || {}, _pg = _pg || {}, pl_config = {
  modules:{
    ears:!1,
    mouth:!1
  },
  scripts:{
    xpath:"//192.168.1.103/playground-init/js/lib/wgxpath.install.js",
    json:"//192.168.1.103/playground-init/js/lib/json2.js",
    ears:"//192.168.1.103/plaground-ears/js/ears.min.js",
    mouth:"//ic.adfab.fr/mouthnode/leaderboard/others/client-0/script/pg.connect.js"},
  debug:!0,
  mode:"dev",
  env:
    {dev:
      {
        url:"192.168.1.103/plaground-ears/",
        send:"send.php", connect:"connect.php"},
        prod:{url:"livedemo.fr/playground/",
        send:"send.php",
```

Configuration
-------------

Config (minified into pg.min.js)
```javascript
PG.Config.modules:{
  ears:!1,
  mouth
}
```

Settings (minified into pg.min.js)
```javascript
PG.Settings: {
  apiKey: "key_first"
}
```
