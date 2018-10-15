window.onload = initialize;

function initialize() {
    document.querySelector('.fa-bars').addEventListener("click", list_view);
    document.querySelector('.fa-grip-horizontal').addEventListener("click", icon_view);
}


function list_view(event) {
    document.querySelector('.settings_container').style['grid-template-columns'] = 'auto';
    document.querySelectorAll('.settings_container a').forEach(x => x.style.display = 'grid');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['grid-template-columns'] = '25% auto');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['text-align'] = 'left');

}

function icon_view() {
    document.querySelector('.settings_container').style.display = 'grid';
    document.querySelector('.settings_container').style['grid-template-columns'] = '25% 25% 25% 25%';
    document.querySelectorAll('.settings_container a').forEach(x => x.style.display = 'grid');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['grid-template-columns'] = 'auto');
    document.querySelectorAll('.settings_container a').forEach(x => x.style['text-align'] = 'center');

}