import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';

import { mediaData } from '../public/mediaData';

export const AVATAR_COUNT = 5;
export const ELEMENT_SUFFIX = '.webp';
export const BOARD_SUFFIX = '_Lehrtafel.webp';
export const VEKTOR_SUFFIX = '_vektor.svg';

function reorderSelectedElement(element: IMedia): IMedia {
  return element.selected ? { ...element, order: element.order === 1 ? 1 : element.order - 1 } : element;
}

export interface IMedia {
  name: string;
  shortName: string;
  source: string;
  description?: string;
  link?: string;
  wiki?: string;
  selected?: boolean;
  active?: boolean;
  order?: number;
  rotation?: number;
  amount?: number;
  scale?: number;
  distance?: number;
  size?: number;
}

type Store = {
  media: IMedia[];
  mediaPath: string;
  imageMultiplier: number;
  colorMode: boolean;
  getSelectedElements: () => IMedia[];
  selectElement: (element: IMedia) => void;
  deselectElement: (element: IMedia) => void;
  getActiveElement: () => IMedia;
  activateElement: (element: IMedia) => void;
  transformElement: (transformName: string, value: number | number[]) => void;
  resetElements: () => void;
};

const useStore = create<Store>(
  persist(
    (set: SetState<Store>, get: GetState<Store>) => ({
      mediaPath: mediaData.isMaaS ? '' : 'plants/',
      media: mediaData.images,
      imageMultiplier: 1,
      colorMode: true,

      getSelectedElements: () =>
        get()
          .media.filter((media) => media.selected === true)
          .sort((e1, e2) => e1.order - e2.order),

      selectElement: (element: IMedia): void =>
        set((state) => ({
          media: state.media.map((item) => {
            if (item.name !== element.name) {
              return item;
            }
            return {
              ...item,
              selected: true,
              order: get().getSelectedElements().length + 1,
            };
          }),
        })),

      deselectElement: (element: IMedia): void =>
        set((state) => ({
          media: state.media.map((item) => {
            if (item.name !== element.name) {
              return reorderSelectedElement(item);
            }
            return {
              ...item,
              selected: false,
              order: 0,
            };
          }),
        })),

      getActiveElement: () => get().media.find((media) => media.active === true),

      activateElement: (element: IMedia): void =>
        set((state) => ({
          media: state.media.map((item) => {
            if (item.name !== element.name) {
              return {
                ...item,
                active: false,
              };
            }
            return {
              ...item,
              active: true,
            };
          }),
        })),

      transformElement: (transformName: string, value: number): void =>
        set((state) => ({
          media: state.media.map((item) => {
            if (item.name !== get().getActiveElement().name) {
              return item;
            }
            return {
              ...item,
              [transformName]: value,
            };
          }),
        })),

      resetElements: (): void =>
        set((state) => ({
          media: state.media.map((media) => ({ ...media, selected: false })),
        })),
    }),
    {
      name: 'media-storage',
    },
  ),
);

export default useStore;
