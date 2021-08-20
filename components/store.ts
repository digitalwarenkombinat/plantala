import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';

import { mediaData } from '../public/mediaData';

export interface IMedia {
  name: string;
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
  avatarCount: number;
  imageMultiplier: number;
  getSelectedElements: () => IMedia[];
  selectElement: (element: IMedia) => void;
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
      avatarCount: 5,
      imageMultiplier: 1,

      getSelectedElements: () => get().media.filter((media) => media.selected === true),

      selectElement: (element: IMedia): void =>
        set((state) => ({
          media: state.media.map((item) => {
            if (item.name !== element.name) {
              return item;
            }
            return {
              ...item,
              selected: !item.selected,
              order: state.media.filter((media) => media.selected === true).length,
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
