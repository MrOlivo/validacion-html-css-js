const checkboxes = document.getElementsByName("unidades");

for (const input of checkboxes) {
    input.addEventListener('click', () => {
        const chk_group = document.getElementsByClassName('chk-group')[0];
        const btn_submit = document.getElementById('btn-submit');

        if (input.checked) {
            chk_group.setAttribute('style', 'border-bottom: 2px solid #92FE9D');
            btn_submit.removeAttribute('disabled');
        } else {
            chk_group.removeAttribute('style');
            btn_submit.setAttribute('disabled', '');
        }
    });
}


//  Ladas telefónicas
const ladas = {
    311: ['Tepic', 'Xalisco'],
    319: ['Del Nayar', 'Rosamorada', 'Ruiz', 'Tuxpan'],
    322: ['Bahia de Banderas'],
    323: ['San Blas', 'Santiago Ixcuintla'],
    324: ['Ahuacatlan', 'Amatlan de Cañas', 'Jala'],
    325: ['Acaponeta', 'Huajicori'],
    327: ['Compostela', 'San Blas', 'San Pedro Lagunillas', 'Santa Maria del Oro'],
    329: ['Bahia de Banderas'],
    389: ['Tecuala'],
    347: ['La Yesca']
};

const cargar_ladas = () => {
    let option;
    for (const lada in ladas) {
        option = document.createElement('option');
        option.value = lada;
        option.textContent = `+${lada} ${ladas[lada]}`;
        document.querySelector('#lada').appendChild(option);
    }
};

cargar_ladas();

//  Selección de lada y cambio del Selector al Input de Télefono
let selector = document.getElementById('lada');
selector.addEventListener('click', () => {
    let input_telefono = document.getElementById('telefono');
    if (selector.value == "") {
        selector.setAttribute('style', 'border-bottom: 2px solid #D32F2F');
    } else {
        input_telefono.value = selector.value;
        selector.setAttribute('style', 'border-bottom: 2px solid #92FE9D');
    }
});

//  Validar todo UmU