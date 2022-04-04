import { FC } from "react"
import { Range } from "../../Filter/Range"

export const PriceRangeList: FC = () => {
    return (
        <>
            <h4>Price range</h4>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.15)", marginBottom: "1rem", padding: "1.5rem 0" }}>
                <Range />
            </div>
        </>
    )
}