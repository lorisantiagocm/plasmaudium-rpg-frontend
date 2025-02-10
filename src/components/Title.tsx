import { ReactNode } from "react"
import { tv, type VariantProps } from 'tailwind-variants';

const h1 = tv({
  base: "text-3xl text-green-50 font-semibold",
  variants: {
    size: {
      md: "text-2xl",
      lg: "text-3xl"
    }
  },
  defaultVariants: {
    size: "lg"
  }
})

type TitleVariants = VariantProps<typeof h1>;

interface TitleProps extends TitleVariants {
  children: ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <h1 className={h1(props)}>{props.children}</h1>
  )
}
