import { FC } from "react"
import { Checkbox } from "../../Filter/Checkbox"

export const BrandList: FC = () => {
    const brandsArr = ['Nike', 'Jordan', 'Adidas', 'Fila', 'Gucci', 'Balenciaga']
    return (
        <>
            <h4>Brand</h4>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.15)" }}>
                {brandsArr.map(e => <Checkbox brand={e} key={e}/>)}
            </div>
        </>
    );
}