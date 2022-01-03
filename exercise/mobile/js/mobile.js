function $(id) {
    return document.getElementById(id);
}

document.querySelector('#add_record').addEventListener('click', (e) => {
    e.preventDefault();
    let s_qt = $('samsung').value;
    let m_qt = $('mi').value;
    let o_qt = $('oppo').value;
    let samsung_price = 0;
    let mi_price = 0;
    let oppo_price = 0;

    let total_qt = 0;

    if (s_qt !== "") {
        samsung_price += 20000 * parseInt(s_qt)
        total_qt += parseInt(s_qt);
    }
    if (m_qt !== "") {
        mi_price += 30000 * parseInt(m_qt)
        total_qt += parseInt(m_qt);
    }
    if (o_qt !== "") {
        oppo_price += 50000 * parseInt(o_qt);
        total_qt += parseInt(o_qt);
    }

    let total_price = mi_price + samsung_price + oppo_price;
    let delivery = document.querySelector("input[type='radio']:checked").value;
    let del_price = 0;
    if (delivery === 'home') {
        del_price += 1000;
    }

    let pp = document.getElementsByName('packing');

    let b_price = 0;
    let p_price = 0;
    let g_price = 0;
    for (let x = 0; x < pp.length; x++) {
        if (pp[x].checked) {
            let opt = pp[x].value;
            if (opt === 'plastic') {
                p_price += 500
            }
            if (opt === 'bag') {
                b_price += 1000
            }
            if (opt === 'gift_box') {
                g_price += 5000
            }
        }
    }

    let tax_price = 0;
    let location = $('location').value;
    if (location === 'ktm') {
        tax_price += total_price * 0.13;
    }

    let gt = total_price + tax_price + b_price + p_price + g_price + del_price;

    let outPut = `
    <h1>Total Qy: ${total_qt}</h1>
    <h1>Total price: ${total_price}</h1>
    <h1>Tax price: ${tax_price}</h1>
    <h1>GT: ${gt}</h1>
    
    `;

    document.getElementById('result').innerHTML = outPut;

    document.getElementById('myMobile').reset();

});


