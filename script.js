//  Validar que la selección de unidades de aprendizaje
const checkboxes = document.getElementsByName("unidades");

for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', () => {
        let activos = false;

        checkboxes.forEach(el => {
            if (el.checked) {
                activos = true;
            }
        });

        if (activos) {
            document.querySelector('.chk-group').setAttribute('style', 'border-bottom: 2px solid #92FE9D');
            document.getElementById('btn-submit').removeAttribute('disabled');
        } else {
            document.querySelector('.chk-group').removeAttribute('style');
            document.getElementById('btn-submit').setAttribute('disabled', '');
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

//  Validar número telefónico UmU
let input_telefono = document.getElementById('telefono');

input_telefono.addEventListener('keyup', () => {
    let selector = document.getElementById('lada');
    let valor = input_telefono.value;

    if (selector.value == valor.substring(0, 3) && valor.length === 10 && selector.value !== '') {
        input_telefono.setAttribute('style', 'border-bottom: 2px solid #92FE9D');
    } else {
        input_telefono.setAttribute('style', 'border-bottom: 2px solid #D32F2F');
    }
});