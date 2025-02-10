import categories from "../mocks/categories";
import Title from "@/components/Title";
import DropdownBox from "@/components/DropdownBox";
import DropdownFullscreen from "@/components/DropdownFullscreen";

export default function Campaign({ name = 'Teste' }) {
  return (
    <div className="flex flex-col gap-2 items-center p-4">
      <Title>Página da campanha {name}</Title>
      <div id="scenes" className="flex flex-col items-center">
        <Title size="md">Categorias</Title>
        <DropdownFullscreen categories={categories} />
        <div id="categories-list" className="">
        </div>
      </div>
      <div id="categories">
        sss
      </div>
    </div>
  )
}