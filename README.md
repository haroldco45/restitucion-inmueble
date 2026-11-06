# Restitución de inmueble arrendado · Ley 820 de 2003

**Biblioteca Legal Colombiana** — Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados. Caucasia, Antioquia, Colombia.

App web instalable (PWA) que explica, en español e inglés, cuándo puede el propietario pedir la vivienda arrendada y cómo se hace legalmente: el desalojo no es automático ni por cuenta propia.

## Contenido

- **Causales**: las 11 causales del artículo 22 de la Ley 820 de 2003 (numerales 1 a 8, con los literales a–d del numeral 8), con filtro por tipo.
- **¿Qué aplica?**: verificador por preguntas para arrendador o arrendatario, con el artículo exacto en cada resultado.
- **El proceso**: línea de tiempo del proceso de restitución (art. 384 CGP), única instancia y medidas cautelares.
- **Derechos del inquilino**: debido proceso, amparo frente a vías de hecho (Ley 1801, art. 77), consignación del canon, prohibición de depósitos, tope de reajuste, indemnizaciones, caución y vulnerabilidad.
- **Calculadoras 2026**: indemnización y caución; reajuste máximo con IPC y techo del 1 % del valor comercial; cuantía, juez competente y si se necesita abogado.
- **Cartas**: preaviso por causal especial, preaviso sin justa causa, requerimiento de pago y carta del inquilino sobre el debido proceso. Copiar, WhatsApp e imprimir.
- Preguntas frecuentes, glosario y fuentes.

## Valores legales usados (verificados el 6 de noviembre de 2026)

| Valor | Cifra | Norma |
|---|---|---|
| SMMLV 2026 | $1.750.905 | Decreto 1469 de 2025 / Decreto 0159 de 2026 |
| IPC 2025 (tope de reajuste en 2026) | 5,10 % | DANE, 8 de enero de 2026 |
| Mínima cuantía 2026 (40 SMMLV) | $70.036.200 | CGP, art. 25 |
| Menor cuantía 2026 (150 SMMLV) | $262.635.750 | CGP, art. 25 |

**Actualización anual (enero):** cambie `SMMLV_2026` e `IPC_2025` al inicio del `<script>` en `index.html`, el valor por defecto del campo IPC, los textos `calcBandaS`, `c3` y la cinta, y suba la versión de `CACHE` en `sw.js`.

## Archivos

```
index.html      App completa (HTML, CSS y JS en un solo archivo)
manifest.json   Instalación como app
sw.js           Funcionamiento sin conexión (red primero)
icon-192.png    Ícono
icon-512.png    Ícono
og.jpg          Imagen de vista previa al compartir (1200 × 630)
README.md       Este archivo
```

## Publicación en GitHub Pages

1. Crear el repositorio **`restitucion-inmueble`** en la cuenta `haroldco45` (todo en minúscula, igual que las URL de las metaetiquetas).
2. Subir los 7 archivos a la raíz.
3. Settings → Pages → Deploy from a branch → `main` / `root`.
4. URL: `https://haroldco45.github.io/restitucion-inmueble/`

Si publica también en Netlify, cambie `og:url`, `og:image`, `twitter:image` y `canonical` a la URL de Netlify.

## Verificación antes de publicar

- [ ] Abrir en el celular y probar ES/EN.
- [ ] Probar el verificador en los dos roles.
- [ ] Revisar que las fotos carguen (vienen de Unsplash y Pexels).
- [ ] Compartir la URL por WhatsApp y confirmar la imagen de vista previa.
- [ ] Probar copiar y enviar por WhatsApp en la sección Cartas.

## Privacidad

Sin cookies, sin analítica, sin chat de IA y sin servidores: los datos de las cartas se quedan en el navegador (Ley 1581 de 2012). Solo se guarda el idioma elegido.

## Aviso

Contenido educativo. No reemplaza la asesoría de un abogado para un caso concreto.

## Fuentes

- Ley 820 de 2003 (arts. 2, 6, 9, 10, 16, 18, 20, 22, 23, 24)
- Ley 1564 de 2012, Código General del Proceso (arts. 25, 26, 384, 385, 391)
- Corte Constitucional: C-106 de 2021, C-426 de 2023, T-482 de 2020, T-515 de 2025
- Ley 1801 de 2016, art. 77
- Decreto 196 de 1971, art. 28 (litigar en causa propia en mínima cuantía)
- Fotos: Unsplash (Jakub Żerdzicki y otros) y Pexels, licencias libres
