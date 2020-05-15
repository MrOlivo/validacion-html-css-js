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