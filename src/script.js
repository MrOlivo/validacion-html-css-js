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

for (const lada in ladas) {
    ladas[lada].forEach(element => {
        console.log(element);
    });
}