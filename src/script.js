function validate() {
    const checkboxes = document.getElementsByName("unidades");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            document.getElementsByClassName('chk-group')[0].setAttribute('style', 'border-bottom: 2px solid #92FE9D');
            document.getElementsByClassName('btn-submit')[0].removeAttribute('disabled');
            break;
        } else {
            document.getElementsByClassName('chk-group')[0].removeAttribute('style');
            document.getElementsByClassName('btn-submit')[0].setAttribute('disabled', '');
        }
    }
}