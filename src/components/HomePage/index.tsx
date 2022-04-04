import { FC } from "react"
import { Layout } from "../Layout"
import { BrandList } from "../Lists/Brands"
import { PriceRangeList } from "../Lists/PriceRange"

export const HomePage: FC = () => {
  return (
      <Layout>
          <BrandList/>
          <PriceRangeList/>
      </Layout>
  )
}
