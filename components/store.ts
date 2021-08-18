import create, { SetState, GetState } from 'zustand'
import { persist } from "zustand/middleware"

import { mediaData } from '../public/mediaData' ;

export interface IMedia {
  name: string
  source: string
  description?: string
  link?: string
  wiki?: string
  selected?: boolean
  order?: number
  amount?: number
  distance?: number
  rotation?: number
  scale?: number
  size?: number
}

type Store = {
  media: IMedia[]
  mediaPath: string
  avatarCount: number
  getSelectedMedia: () => IMedia[]
  updateElement: (element: IMedia) => void
  removeElement: (element: IMedia) => void
  removeAllElements: () => void
}

const useStore = create<Store>(persist(
  (set: SetState<Store>, get: GetState<Store>) => ({
    mediaPath: mediaData.isMaaS ? '' : 'plants/',
    media: mediaData.images,
    avatarCount: 5,

    getSelectedMedia: () => get().media.filter(media => media.selected === true),

    updateElement: (element:IMedia): void =>
      set(state => ({
        media: state.media.map(item => {
          if (item.name === element.name) {
            return {
              ...item,
              selected: !item.selected,
              order: state.media.filter((media) => media.selected === true).length
            };
          } else {
            return item;
          }
        })
      })),
    
    removeElement: (element:IMedia): void =>
      set(state => ({
        media: state.media.filter((media) => media.name !== element.name)
      })),
    
    removeAllElements: (): void => 
      set((state) => ({ 
        media: state.media.map(media => ({...media, selected: false}))
      }))
  }),
  {
    name: "media-storage"
  }
))

export default useStore;
