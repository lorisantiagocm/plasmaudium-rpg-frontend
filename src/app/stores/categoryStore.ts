import { Category } from "../types/campaign";
import { create } from "zustand";

export type CategoryFormData = {
  name: string,
  color: string
}

export type CategoriesState = {
  categories: Category[];
  openModal: boolean;
  initialModalData: CategoryFormData
};

export type CategoriesActions = {
  createCategory: (category: Category) => void;
  deleteCategory: (categoryId: number) => void;
  // addVideo: (categoryId: number, videoId: number) => void;
  // removeVideo: (categoryId: number, videoId: number) => void;
  setOpenModal: (open: boolean) => void;
  setInitialFormData: (data: CategoryFormData) => void;
};

export type CategoriesStore = CategoriesState & CategoriesActions;

export const defaultInitState: CategoriesState = {
  categories: [],
  openModal: false,
  initialModalData: {
    name: '',
    color: '#fff'
  }
};

export const useCategoryStore = create<CategoriesStore>((set) => ({
  ...defaultInitState,

  setOpenModal: (open) => set((state) => ({ ...state, openModal: open })),
  setInitialFormData: (data) => set((state) => ({ ...state, initialModalData: data })),

  createCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),

  deleteCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.filter((cat) => cat.id !== categoryId),
    })),

}));
