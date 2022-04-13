import { useRouter } from "next/router";
import { CartPage, CategoryPage } from "../../components";

const Category: React.FC = () => {
  const router = useRouter();
  const currPath: string = router.asPath;
  return <CategoryPage path={currPath} />;
};

export default Category;
