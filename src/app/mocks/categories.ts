export interface Video {
  name: string;
  id: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  videos?: Video[]
}

const categories: Category[] = [
  {
    id: 1,
    name: "Categoria 1",
    color: "#e6179d",
    videos: [
      {
        name: "Video teste",
        id: "YVI-q3idGiM"
      },
      {
        name: "Video teste 2",
        id: "YVI-q3idGiM"
      },
      {
        name: "Video teste",
        id: "YVI-q3idGiM"
      },
      {
        name: "Video teste 2",
        id: "YVI-q3idGiM"
      },{
        name: "Video teste",
        id: "YVI-q3idGiM"
      },
      {
        name: "Video teste 2",
        id: "YVI-q3idGiM"
      },{
        name: "Video teste",
        id: "YVI-q3idGiM"
      },
      {
        name: "Video teste 2",
        id: "YVI-q3idGiM"
      },
    ]
  },
  {
    id: 2,
    name: "Categoria 2",
    color: "#e6179d"
  },
  {
    id: 3,
    name: "Categoria 2",
    color: "#e6179d"
  },
  {
    id: 4,
    name: "Categoria 2",
    color: "#e6179d"
  }
]

export default categories;
