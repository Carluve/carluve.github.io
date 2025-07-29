# 🌈 Tema Retro 90s - Guía de Personalización

¡Bienvenido al futuro del pasado! Tu página personal ahora tiene un aspecto noventero retro-moderno que combina la nostalgia de los 90s con un diseño contemporáneo.

## 🎨 Características del Tema

### Tipografías Retro
- **Orbitron**: Para títulos y encabezados (futurista)
- **Space Mono**: Para texto general (monospace retro)
- **Press Start 2P**: Para elementos especiales (pixel art)

### Paleta de Colores 90s
- **Púrpura Retro**: `#6B46C1` - Color principal
- **Rosa Neón**: `#EC4899` - Acentos vibrantes
- **Cian Eléctrico**: `#06B6D4` - Enlaces y detalles
- **Lima Brillante**: `#84CC16` - Elementos secundarios
- **Naranja Retro**: `#F97316` - Navegación

### Efectos Visuales
- ✨ Efectos de neón y brillo
- 🌈 Gradientes vibrantes
- 📺 Líneas de escaneo sutiles
- ⚡ Animaciones de glitch
- 🖱️ Rastro del cursor (solo desktop)
- 🔤 Efecto de escritura en el título
- 🌧️ Lluvia de matriz de fondo (muy sutil)

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `_sass/theme/_retro90s.scss`:

```scss
:root {
  --retro-purple: #TU_COLOR_AQUI;
  --retro-pink: #TU_COLOR_AQUI;
  --retro-cyan: #TU_COLOR_AQUI;
  /* ... más colores */
}
```

### Ajustar Efectos
En `assets/js/retro-effects.js` puedes:

- **Desactivar el rastro del cursor**: Comenta la línea `createCursorTrail()`
- **Cambiar la velocidad del efecto de escritura**: Modifica el valor `150` en `typeInterval`
- **Activar efectos de sonido**: Descomenta la función `addSoundEffects()`
- **Ajustar la lluvia de matriz**: Modifica la opacidad en `addMatrixRain()`

### Personalizar Fuentes
Para cambiar las fuentes, edita estas variables en `_sass/theme/_retro90s.scss`:

```scss
$header-font-family: 'TU_FUENTE_AQUI', sans-serif;
$global-font-family: 'TU_FUENTE_AQUI', monospace;
$accent-font-family: 'TU_FUENTE_AQUI', monospace;
```

No olvides importar la fuente en la parte superior del archivo:
```scss
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE_AQUI:wght@400;700&display=swap');
```

## 🎮 Efectos Interactivos

### Efectos Disponibles
1. **Cursor Trail**: Rastro de partículas que sigue al mouse
2. **Typing Effect**: El título se escribe letra por letra
3. **Random Glitch**: Efecto glitch aleatorio en títulos
4. **Neon Glow**: Brillo neón en elementos interactivos
5. **Hover Animations**: Animaciones al pasar el mouse
6. **Loading Bars**: Barras de carga retro para imágenes

### Activar Sonidos (Opcional)
Para activar los efectos de sonido retro, descomenta la línea en `retro-effects.js`:
```javascript
// addSoundEffects(); // Descomenta esta línea
addSoundEffects(); // Así
```

## 📱 Responsividad

El tema está optimizado para diferentes dispositivos:
- **Desktop**: Todos los efectos activos
- **Tablet**: Efectos reducidos para mejor rendimiento
- **Mobile**: Efectos mínimos, enfoque en legibilidad

## 🎯 Elementos Específicos

### Navegación
- Gradiente vibrante de fondo
- Efectos hover con transformaciones
- Tipografía futurista

### Sidebar
- Gradiente de fondo personalizado
- Avatar con brillo neón
- Información del autor estilizada

### Contenido Principal
- Fondo semitransparente con blur
- Patrón de cuadrícula sutil
- Bordes con efectos de neón

### Publicaciones y Portfolio
- Tarjetas con efectos hover
- Animaciones de entrada
- Estilo terminal para código

## 🔧 Solución de Problemas

### Si los efectos no aparecen:
1. Verifica que el archivo CSS se esté cargando correctamente
2. Asegúrate de que JavaScript esté habilitado
3. Revisa la consola del navegador para errores

### Si el sitio se ve lento:
1. Desactiva la lluvia de matriz comentando `addMatrixRain()`
2. Reduce la longitud del rastro del cursor modificando `trailLength`
3. Aumenta el intervalo de los efectos aleatorios

### Para mejor rendimiento en móviles:
Los efectos más pesados se desactivan automáticamente en pantallas menores a 768px.

## 🎨 Ideas de Personalización Adicional

1. **Cambiar el patrón de fondo**: Modifica el `background-image` en `.page__content::before`
2. **Agregar más animaciones**: Crea nuevos `@keyframes` en el CSS
3. **Personalizar la lluvia de matriz**: Cambia los caracteres en `chars`
4. **Modificar los gradientes**: Experimenta con diferentes combinaciones de colores
5. **Agregar más efectos de sonido**: Expande la función `addSoundEffects()`

## 🚀 Comandos Útiles

Para desarrollar y probar localmente:
```bash
# Instalar dependencias
bundle install

# Servir el sitio localmente
bundle exec jekyll serve

# Servir con recarga automática
bundle exec jekyll serve --livereload
```

## 📝 Notas Importantes

- Los efectos de JavaScript se cargan después del DOM
- Las fuentes se cargan desde Google Fonts
- Los efectos de sonido requieren interacción del usuario para funcionar
- El tema es compatible con el modo oscuro existente

¡Disfruta tu nueva página web con estilo retro-futurista! 🌟

---

*Creado con ❤️ y mucha nostalgia por los 90s*