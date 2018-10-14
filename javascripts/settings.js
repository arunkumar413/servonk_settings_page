window.onload = initialize;

function initialize() {
    document.querySelector('.fa-bars').addEventListener("click", list_view);
    document.querySelector('.fa-grip-horizontal').addEventListener("click", icon_view);
}


function list_view(event) {
    document.querySelector('.settings_container').style['grid-template-columns'] = 'auto';
    document.querySelectorAll('.settings_container a').forEach(x => x.style.display = 'grid');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['grid-template-columns'] = '30% auto');
}

function icon_view() {
    document.querySelector('.settings_container').style.display = 'grid';
    document.querySelector('.settings_container').style['grid-template-columns'] = 'auto auto auto auto';
    document.querySelectorAll('.settings_container a').forEach(x => x.style.display = 'grid');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['grid-template-columns'] = 'auto');

}