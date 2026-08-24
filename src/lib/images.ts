import type { StaticImageData } from 'next/image';

import gallery01 from '../../public/images/gallery/ex-1.webp';
import gallery02 from '../../public/images/gallery/ex-2.webp';
import gallery03 from '../../public/images/gallery/ex-3.webp';
import gallery04 from '../../public/images/gallery/ex-4.webp';
import gallery05 from '../../public/images/gallery/ex-5.webp';
import gallery06 from '../../public/images/gallery/ex-6.webp';
import gallery07 from '../../public/images/gallery/ex-7.webp';
import gallery08 from '../../public/images/gallery/ex-8.webp';
import gallery09 from '../../public/images/gallery/ex-9.webp';
import gallery10 from '../../public/images/gallery/ex-10.webp';
import gallery11 from '../../public/images/gallery/ex-11.webp';
import gallery12 from '../../public/images/gallery/ex-12.webp';
import gallery13 from '../../public/images/gallery/ex-13.webp';

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  label: string;
  id?: number;
  orientation?: 'landscape' | 'portrait';
};

function image(src: StaticImageData, label: string, alt: string): SiteImage {
  return { src, alt, label };
}

const photos = {
  commercial: image(
    gallery07,
    'Commercial metal building',
    'Long commercial metal canopy along a white metal building',
  ),
  patioStringLights: image(
    gallery01,
    'Commercial patio cover',
    'Commercial patio and bar cover with a metal canopy and string lights',
  ),
  pavilionBuild: image(
    gallery02,
    'Pavilion installation',
    'Metal pavilion being installed beside a mature oak tree',
  ),
  pavilionInterior: image(
    gallery03,
    'Open-span structure',
    'Interior view of a large open-span metal structure',
  ),
  commercialInstall: image(
    gallery04,
    'Commercial canopy install',
    'Crew installing a commercial metal canopy from a scissor lift',
  ),
  restaurantPatio: image(
    gallery05,
    'Restaurant patio cover',
    'Finished restaurant patio cover with ceiling fans and dining tables',
  ),
  deckCover: image(
    gallery06,
    'Residential deck cover',
    'Residential wooden deck with a corrugated metal roof',
  ),
  commercialCanopy: image(
    gallery07,
    'Commercial loading canopy',
    'Long commercial metal canopy along a white metal building',
  ),
  residentialCarport: image(
    gallery08,
    'Residential carport',
    'Custom residential metal carport with a gabled roof',
  ),
  poolPatio: image(
    gallery09,
    'Poolside patio cover',
    'Poolside patio cover attached to a Houston-area home',
  ),
  outdoorDining: image(
    gallery10,
    'Outdoor dining patio',
    'Covered outdoor dining patio with stone columns and ceiling fans',
  ),
  architecturalAwning: image(
    gallery11,
    'Architectural awning',
    'Architectural metal awning on a brick commercial building',
  ),
  equipmentShelter: image(
    gallery12,
    'Equipment shelter',
    'Open metal shelter covering equipment in an industrial yard',
  ),
  customBuilding: image(
    gallery13,
    'Custom metal building',
    'Custom two-tone metal building under construction',
  ),
} as const;

export const siteImages = {
  ...photos,
  residentialService: photos.poolPatio,
  commercialService: photos.patioStringLights,
  hero: [photos.commercialCanopy, photos.commercial, photos.patioStringLights],
  mosaic: [
    photos.commercialCanopy,
    photos.poolPatio,
    photos.residentialCarport,
    photos.restaurantPatio,
    photos.customBuilding,
  ],
  cta: photos.patioStringLights,
  galleryHeader: photos.patioStringLights,
  aboutHeader: photos.pavilionInterior,
  aboutPrimary: photos.pavilionBuild,
  aboutSecondary: photos.customBuilding,
  aboutTertiary: photos.commercialInstall,
  servicesHeader: photos.commercialCanopy,
  contactHeader: photos.restaurantPatio,
};

export type SiteImageKey =
  | keyof typeof photos
  | 'residentialService'
  | 'commercialService';

const imageAliases = {
  residentialService: 'poolPatio',
  commercialService: 'patioStringLights',
} as const satisfies Record<string, keyof typeof photos>;

export function getSiteImage(key: SiteImageKey): SiteImage {
  if (key in imageAliases) {
    return photos[imageAliases[key as keyof typeof imageAliases]];
  }
  return photos[key as keyof typeof photos];
}

export const heroSlideshowKeys = [
  'commercialCanopy',
  'commercial',
  'patioStringLights',
] as const satisfies readonly SiteImageKey[];

export const featuredMosaicKeys = [
  'commercialCanopy',
  'poolPatio',
  'residentialCarport',
  'restaurantPatio',
  'customBuilding',
] as const satisfies readonly SiteImageKey[];

const galleryEntries: Array<{
  key: keyof typeof photos;
  id: number;
  orientation: 'landscape' | 'portrait';
}> = [
  { key: 'patioStringLights', id: 1, orientation: 'landscape' },
  { key: 'pavilionBuild', id: 2, orientation: 'landscape' },
  { key: 'pavilionInterior', id: 3, orientation: 'portrait' },
  { key: 'commercialInstall', id: 4, orientation: 'portrait' },
  { key: 'restaurantPatio', id: 5, orientation: 'landscape' },
  { key: 'deckCover', id: 6, orientation: 'landscape' },
  { key: 'commercialCanopy', id: 7, orientation: 'landscape' },
  { key: 'residentialCarport', id: 8, orientation: 'landscape' },
  { key: 'poolPatio', id: 9, orientation: 'portrait' },
  { key: 'outdoorDining', id: 10, orientation: 'landscape' },
  { key: 'architecturalAwning', id: 11, orientation: 'portrait' },
  { key: 'equipmentShelter', id: 12, orientation: 'portrait' },
  { key: 'customBuilding', id: 13, orientation: 'portrait' },
];

export const galleryImages: SiteImage[] = galleryEntries.map((entry) => ({
  ...photos[entry.key],
  id: entry.id,
  orientation: entry.orientation,
}));
