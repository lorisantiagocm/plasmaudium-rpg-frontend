"use client"

import { useMemo, useState } from "react";
import Header from "./Header";
import { Category } from "@/app/mocks/categories";
import VideoCard from "../common/VideoCard";

export default function DropdownFullscreen({ categories }: { categories: Category[] }) {
  const [openCategory, setOpenCategory] = useState<Category>({
    id: 0,
    name: 'Categoria',
    color: "#fff"
  })
  const [searchedTerm, setSearchedTerm] = useState('')

  const listedVideos = useMemo(() => {
     if (openCategory) {
      if (searchedTerm == '') {
        return openCategory.videos
      } else {
        return openCategory.videos?.filter((video) => video.name.includes(searchedTerm) )
      }
     } else {
      return []
     }
  }, [searchedTerm, openCategory])

  return (
    <div>
      <div id="headers" className="grid md:grid-cols-5 grid-cols-1 gap-4 mt-4 items-start">
        {categories.map((category, index) => {
          return <Header key={index} category={category} open={openCategory?.id == category.id} setOpenCategory={setOpenCategory} />
        })}
      </div>
      <div>
        Procure por vídeos:
        <input type="text" className="text-black" onChange={(e) => setSearchedTerm(e.target.value)}/>
      </div>
      <div id="videos">
        {listedVideos && (
          <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4 p-4 text-center bg-emerald-950 mt-4">
            {listedVideos.map((video, index) => {
              return <VideoCard key={index} name={video.name} id={video.id} />
            })}
          </div>
        )}
      </div>
    </div>
  );
}
