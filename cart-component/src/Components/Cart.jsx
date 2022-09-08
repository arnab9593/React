
import React from "react";
import { useState } from "react";

function Cart() {
    const [total, setTotal] = React.useState(0)
    const [noodles, setStatus] = React.useState(false);
    const biriyani = false;
    const chips = false;
    const [Nqty, setNoodleqty] = React.useState(0);
    const [Bqty, setBiriyaniqty] = React.useState(0);
    const [Cqty, setChipsqty] = React.useState(0);
    return (
        <>
            <div>
                <h3>Noodles</h3>
                <h3>30</h3>
                <button disabled={total < 30} onClick={() => { setTotal(total - 30); setNoodleqty(Nqty - 1) }} >-</button>
                <h3>{Nqty}</h3>
                <button onClick={() => { setTotal(total + 30); setNoodleqty(Nqty + 1) }}>+</button>
            </div>
            <div>
                <h3>Biriyani</h3>
                <h3>90</h3>
                <button disabled={total < 90} onClick={() => { setTotal(total - 90); setBiriyaniqty(Bqty - 1) }}>-</button>
                <h3>{Bqty}</h3>
                <button onClick={() => { setTotal(total + 90); setBiriyaniqty(Bqty + 1) }}>+</button>
            </div>
            <div>
                <h3>Chips</h3>
                <h3>10</h3>
                <button disabled={total < 10} onClick={() => { setTotal(total - 10); setChipsqty(Cqty - 1) }}>-</button>
                <h3>{Cqty}</h3>
                <button onClick={() => { setTotal(total + 10); setChipsqty(Cqty + 1) }}>+</button>
            </div>
            Total: {total}
        </>
    )

}

export default Cart