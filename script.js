//  Validar que la selección de unidades de aprendizaje
const checkboxes = document.getElementsByName('unidades');

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
    0: ['325', 'Acaponeta'],
    1: ['324', 'Ahuacatlan'],
    2: ['324', 'Amatlan de Cañas'],
    3: ['329', 'Bahía de Banderas'],
    4: ['327', 'Compostela'],
    5: ['319', 'Del Nayar'],
    6: ['325', 'Huajicori'],
    7: ['324', 'Ixtlán del Río'],
    8: ['324', 'Jala'],
    9: ['347', 'La Yesca'],
    10: ['319', 'Rosamorada'],
    11: ['319', 'Ruíz'],
    12: ['323', 'San Blas'],
    13: ['327', 'San Pedro Lagunillas'],
    14: ['327', 'Santa María del Oro'],
    15: ['323', 'Santiago Ixcuintla'],
    16: ['389', 'Tecuala'],
    17: ['311', 'Tepic'],
    18: ['319', 'Tuxpan'],
    19: ['311', 'Xalisco']
};

const cargar_ladas = () => {
    let option;
    const municipio = document.querySelector('#municipio')

    for (const lada in ladas) {
        option = document.createElement('option');
        option.value = ladas[lada][0];
        option.textContent = `${ladas[lada][1]}`;
        municipio.appendChild(option);
    }
};

cargar_ladas();

//

//  Validar número telefónico
let input_telefono = document.getElementById('telefono');

input_telefono.addEventListener('keyup', () => {
    let selector = document.getElementById('municipio');
    let valor = input_telefono.value;

    if (selector.value == valor.substring(0, 3) && valor.length === 10 && selector.value !== '') {
        input_telefono.setAttribute('style', 'border-bottom: 2px solid #92FE9D');   //  Verde
    } else {
        input_telefono.setAttribute('style', 'border-bottom: 2px solid #D32F2F');   //  Rojo
    }
});