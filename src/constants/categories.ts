import { ArtworkCategory } from '@types/index';

export const ARTWORK_CATEGORIES: Array<{
  id: ArtworkCategory;
  name: string;
  icon: string;
  description: string;
}> = [
  {
    id: 'pencil-sketch',
    name: 'Pencil Sketch',
    icon: 'pencil',
    description: 'Beautiful hand-drawn pencil sketches',
  },
  {
    id: 'color-portrait',
    name: 'Color Portrait',
    icon: 'palette',
    description: 'Vibrant colored portraits',
  },
  {
    id: 'canvas-painting',
    name: 'Canvas Painting',
    icon: 'image',
    description: 'Professional canvas artworks',
  },
  {
    id: 'couple-portrait',
    name: 'Couple Portrait',
    icon: 'heart',
    description: 'Romantic couple portraits',
  },
  {
    id: 'family-portrait',
    name: 'Family Portrait',
    icon: 'home',
    description: 'Family group portraits',
  },
  {
    id: 'pet-portrait',
    name: 'Pet Portrait',
    icon: 'paw',
    description: 'Adorable pet artworks',
  },
  {
    id: 'digital-art',
    name: 'Digital Art',
    icon: 'smartphone',
    description: 'Modern digital artworks',
  },
  {
    id: 'calligraphy',
    name: 'Calligraphy',
    icon: 'feather',
    description: 'Elegant calligraphy designs',
  },
  {
    id: 'resin-art',
    name: 'Resin Art',
    icon: 'sparkles',
    description: 'Stunning resin artworks',
  },
  {
    id: 'wall-art',
    name: 'Wall Art',
    icon: 'wall',
    description: 'Decorative wall art',
  },
  {
    id: 'customized-gifts',
    name: 'Customized Gifts',
    icon: 'gift',
    description: 'Personalized gift items',
  },
];

export const LIVE_SKETCH_EVENT_TYPES = [
  { id: 'home', name: 'Home', description: 'Personal portrait at home' },
  { id: 'birthday', name: 'Birthday', description: 'Birthday party sketches' },
  { id: 'wedding', name: 'Wedding', description: 'Wedding event artwork' },
  { id: 'corporate', name: 'Corporate Event', description: 'Corporate event sketch' },
  { id: 'cafe', name: 'Café', description: 'Café live sketching' },
];
