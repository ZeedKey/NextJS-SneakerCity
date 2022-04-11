import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const CategoryPage: NextPage = () => {
    const router = useRouter();
    const path : string = router.asPath;

//   const routeMatch: any = {
//       '/Mens': <MensPage/>,
//       '/Womens': <WomensPage/>,
//   }
  return 1;
}

export default CategoryPage;
