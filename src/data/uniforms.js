// ---------------------------------------------------------------------------
// COLEGIOS DE LA COLECCIÓN
// ---------------------------------------------------------------------------
// Para editar un colegio cambia únicamente `name`, `description`, `colors`,
// `sizes` y `features`. Conserva el `slug`, pues también es el nombre de la
// carpeta donde van sus fotografías.
//
// Cada colegio admite entre 4 y 6 imágenes. Colócalas como 1.jpg, 2.jpg, etc.
// en: /public/images/uniforms/<slug>/
// Se muestran todas las instituciones configuradas en esta lista.
// Las fotos faltantes se omiten automáticamente al compilar el sitio.
// ---------------------------------------------------------------------------

import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const imageSlots = (slug) =>
  Array.from({ length: 6 }, (_, index) => `/images/uniforms/${slug}/${index + 1}.jpg`);

export const uniforms = [
  {
    slug: 'unidad-educativa-jose-maria-velaz',
    name: 'Unidad Educativa José María Vélaz',
    category: 'Uniformes escolares',
    description:
      'Uniformes confeccionados para la Unidad Educativa José María Vélaz, combinando comodidad, resistencia y una presentación impecable.',
    images: imageSlots('unidad-educativa-jose-maria-velaz'),
    colors: ['Azul marino', 'Blanco', 'Rojo'],
    sizes: ['26', '28', '30', '32', '34', '36', '38', '40'],
    features: ['Chaqueta con cierre', 'Pantalón deportivo', 'Bordado institucional'],
    featured: true,
  },
  {
    slug: 'colegio-fiscal-tarqui',
    name: 'Colegio Fiscal Tarqui',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-fiscal-tarqui'),
    colors: ['Azul marino', 'Blanco', 'Rojo'],
    sizes: ['34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: true,
  },
  {
    slug: 'colegio-03',
    name: 'Unidad Educativa Montúfar',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-03'),
    colors: ['Azul marino', 'Blanco', 'Rojo'],
    sizes: ['26', '28', '30', '32', '34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: true,
  },
  {
    slug: 'colegio-04',
    name: 'Unidad Educativa Otto Arosemena Gómez',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-04'),
    colors: ['Azul eléctrico', 'Blanco', 'Gris'],
    sizes: ['28', '30', '32', '34', '36'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-05',
    name: 'Unidad Educativa Velasco Ibarra',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-05'),
    colors: ['Azul marino', 'Blanco'],
    sizes: ['28', '30', '32', '34', '36'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-06',
    name: 'Institución Educativa Fiscal 13 de Abril',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-06'),
    colors: ['Azul eléctrico', 'Blanco', 'Negro'],
    sizes: ['34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-07',
    name: 'Unidad Educativa Forestal',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-07'),
    colors: ['Azul marino', 'Blanco', 'Rojo'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-08',
    name: 'Centro Municipal de Educación Inicial CEMEI',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-08'),
    colors: ['Azul marino', 'Verde'],
    sizes: ['26', '28', '30', '32'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-09',
    name: 'Colegio Humanístico Quito',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-09'),
    colors: ['Azul marino', 'Blanco', 'Rojo'],
    sizes: ['34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-10',
    name: 'Colegio Técnico Vicente Rocafuerte',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-10'),
    colors: ['Café', 'Blanco'],
    sizes: ['34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
  {
    slug: 'colegio-11',
    name: 'Colegio Nacional 11 de Marzo',
    category: 'Uniformes escolares',
    description: '',
    images: imageSlots('colegio-11'),
    colors: ['Vino', 'Blanco'],
    sizes: ['34', '36', '38', '40'],
    features: ['Confección personalizada', 'Bordado institucional'],
    featured: false,
  },
];

export function getPublishedUniforms() {
  return uniforms
    .map((uniform) => ({ ...uniform, images: uniform.images.filter((image) => existsSync(resolve('public', image.replace(/^\//, '')))) }));
}
