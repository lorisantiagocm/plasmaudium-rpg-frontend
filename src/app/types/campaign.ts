export interface Video {
  name: string;
  id: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  videos: Video[]
}

export interface Scene {
  id: number;
  name: string;
  videos: Video[]
}
