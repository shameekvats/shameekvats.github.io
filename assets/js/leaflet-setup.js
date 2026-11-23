/* Create leaflet map as another node and hide the code block, appending the leaflet node after it */
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    document.querySelectorAll("pre>code.language-geojson").forEach((elem) => {
      const jsonData = elem.textContent;
      const backup = elem.parentElement;
      backup.classList.add("unloaded");
      /* create leaflet node */
      let mapElement = document.createElement("div");
      mapElement.classList.add("map");
      backup.after(mapElement);

      /* scrollWheelZoom off: scrolling the page over the map should scroll the page, not zoom the map */
      var map = L.map(mapElement, { scrollWheelZoom: false });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      /* Points with properties (e.g. the home page career map) become themed circle markers with a popup.
         Filled markers = properties.highlight. Text is set via textContent, so no HTML is injected. */
      const themeColor = getComputedStyle(document.documentElement).getPropertyValue("--global-theme-color").trim() || "#b509ac";
      let geoJSON = L.geoJSON(JSON.parse(jsonData), {
        pointToLayer: (feature, latlng) => {
          if (!feature.properties || !feature.properties.name) return L.marker(latlng);
          const highlight = Boolean(feature.properties.highlight);
          return L.circleMarker(latlng, {
            radius: highlight ? 9 : 7,
            color: themeColor,
            weight: 2,
            fillColor: themeColor,
            fillOpacity: highlight ? 0.85 : 0.15,
          });
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties;
          if (!p || !p.name) return;
          const popup = document.createElement("div");
          [
            ["strong", p.name],
            ["div", p.role],
            ["small", p.years],
          ].forEach(([tag, text]) => {
            if (!text) return;
            const el = document.createElement(tag);
            el.textContent = text;
            el.style.display = "block";
            popup.appendChild(el);
          });
          layer.bindPopup(popup);
        },
      }).addTo(map);
      map.fitBounds(geoJSON.getBounds(), { padding: [20, 20] });
    });
  }
});
