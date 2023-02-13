const inputSearch = document.querySelector('#search');
const formLabel = document.querySelector('.form_label');
const formLine = document.querySelector('.form_line');

inputSearch.addEventListener('input', e => {

    let searchLetter = e.target.value;

    if(searchLetter != ''){
        formLabel.classList.add('animate');
        formLine.classList.add('display_line');
    } else {
        formLabel.classList.remove('animate');
        formLine.classList.remove('display_line');
    }

});