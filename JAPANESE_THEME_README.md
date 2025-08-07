# 🌸 Tema Japonés Minimalista - 和風ミニマル

¡Bienvenido a la serenidad del diseño japonés! Tu página personal ahora refleja la elegancia y simplicidad de la estética japonesa moderna, combinando tradición con funcionalidad contemporánea.

## 🎨 Características del Tema

### 🌸 **Paleta de Colores Pastel Japonesa**
- **Sakura Pink** (`#fef7f7`) - Color de flor de cerezo
- **Matcha Green** (`#f1f8e9`) - Verde té matcha suave
- **Sky Blue** (`#e3f2fd`) - Azul cielo japonés
- **Mist Gray** (`#f5f5f5`) - Gris niebla
- **Coral Accent** (`#ffab91`) - Coral para acentos
- **Sage Green** (`#a5d6a7`) - Verde salvia para bordes

### 📝 **Tipografía Japonesa**
- **Noto Sans JP** - Para texto general (sans-serif japonés)
- **Noto Serif JP** - Para títulos (serif japonés elegante)
- **M PLUS 1p** - Para elementos monospace

### 🎯 **Principios de Diseño**
- **Ma (間)** - Uso inteligente del espacio en blanco
- **Kanso (簡素)** - Simplicidad y eliminación de lo innecesario
- **Wabi-Sabi (侘寂)** - Belleza en la imperfección y simplicidad
- **Shizen (自然)** - Naturalidad sin artificialidad

## ✨ Elementos Visuales

### 🌿 **Efectos Sutiles**
- Animaciones suaves de fade-in
- Hover effects minimalistas
- Transiciones elegantes
- Efectos de paralaje sutil (solo desktop)
- Colores estacionales automáticos

### 🎴 **Componentes Japoneses**
- Bordes inspirados en encuadernación japonesa
- Tarjetas con estética de papel washi
- Botones con esquinas redondeadas suaves
- Divisores con gradientes sutiles
- Citas con comillas japonesas (「」)

### 🌸 **Elementos Estacionales**
- **Primavera**: Énfasis en colores sakura
- **Verano**: Tonos verdes frescos
- **Otoño**: Colores cálidos
- **Invierno**: Tonos azules fríos

## 🛠️ Personalización

### Cambiar Colores Estacionales
Edita las variables CSS en `_sass/theme/_japanese_minimal.scss`:

```scss
:root {
  --sakura-pink: #tu-color-aqui;
  --matcha-green: #tu-color-aqui;
  --accent-coral: #tu-color-aqui;
  /* ... más colores */
}
```

### Ajustar Tipografía
Para cambiar las fuentes japonesas:

```scss
$japanese-sans: 'Tu-Fuente-Aqui', 'Noto Sans JP', sans-serif;
$japanese-serif: 'Tu-Fuente-Aqui', 'Noto Serif JP', serif;
```

### Personalizar Efectos
En `assets/js/japanese-effects.js` puedes:

- **Desactivar efectos de paralaje**: Comenta `addSubtleParallax()`
- **Cambiar velocidad de typing**: Modifica el valor en `typeInterval`
- **Ajustar colores estacionales**: Modifica `addSeasonalColors()`
- **Personalizar animaciones**: Edita las funciones de fade-in

## 🎌 Elementos Culturales

### 📖 **Espaciado de Texto Japonés**
- Indentación tradicional de párrafos (1em)
- Altura de línea optimizada para texto japonés (1.8)
- Espaciado de letras sutil (0.02em)

### 🎨 **Decoraciones Tradicionales**
- Líneas decorativas bajo títulos
- Esquinas redondeadas inspiradas en arquitectura japonesa
- Sombras sutiles que imitan papel washi
- Bordes que recuerdan a marcos de shoji

### 🌊 **Filosofía de Diseño**
- **Menos es más**: Cada elemento tiene un propósito
- **Armonía**: Colores y espacios en equilibrio
- **Respeto por el contenido**: El diseño no compite con el texto
- **Elegancia silenciosa**: Belleza sin ostentación

## 📱 Responsividad

### Desktop (>768px)
- Efectos de paralaje sutiles
- Espaciado generoso
- Todos los efectos visuales activos

### Mobile (≤768px)
- Diseño optimizado para lectura
- Efectos reducidos para mejor rendimiento
- Navegación táctil mejorada

## 🎯 Componentes Específicos

### 🏮 **Navegación**
- Fondo limpio sin gradientes
- Enlaces con hover effects sutiles
- Indicador superior minimalista

### 📋 **Barra Lateral**
- Diseño de tarjeta japonesa
- Avatar con borde elegante
- Enlaces sociales con estilo washi

### 📄 **Contenido Principal**
- Borde izquierdo inspirado en encuadernación
- Espaciado tradicional japonés
- Tipografía optimizada para lectura

### 🏷️ **Elementos Interactivos**
- Botones con esquinas redondeadas
- Estados de focus accesibles
- Transiciones suaves y naturales

## 🌸 Modo Oscuro

El tema incluye un modo oscuro inspirado en la estética nocturna japonesa:
- Colores invertidos manteniendo la armonía
- Contraste optimizado para lectura nocturna
- Transiciones suaves entre modos

## 🔧 Comandos de Desarrollo

```bash
# Servir localmente
bundle exec jekyll serve --livereload

# Construir para producción
bundle exec jekyll build
```

## 🎨 Inspiración Cultural

Este tema está inspirado en:
- **Arquitectura japonesa tradicional** - Líneas limpias y espacios abiertos
- **Arte wabi-sabi** - Belleza en la simplicidad
- **Diseño de libros japoneses** - Tipografía y espaciado elegantes
- **Jardines zen** - Equilibrio y tranquilidad
- **Papel washi** - Texturas sutiles y colores naturales

## 🌿 Filosofía del Tema

> "La perfección se alcanza no cuando no hay nada más que agregar, sino cuando no hay nada más que quitar."

Este tema abraza la filosofía japonesa del minimalismo funcional, donde cada elemento sirve un propósito y contribuye a la experiencia general de serenidad y elegancia.

---

*Creado con 愛 (amor) y respeto por la tradición japonesa* 🌸