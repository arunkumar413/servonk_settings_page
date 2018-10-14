window.onload = initialize;

function initialize() {
    check_wifi_status();
    populate_wifi_networks();
    document.querySelector('.wifi_button').addEventListener("click", toggle_wifi_device);
}


function populate_wifi_networks() {
    // code to populate the wifi networks
    console.log('networks loaded')
}


function check_wifi_status() {
    // code to check wifi_status;
}


function toggle_wifi_device() {
    wifi_status = check_wifi_status(); //check whether wifi device is on or off
    if (wifi_status == 1) {
        document.querySelector(".wifi_button").classList.replace('fa-toggle-on', 'fa-toggle-off')
    } else if (wifi_status == 0) {
        document.querySelector(".wifi_button").classList.replace('fa-toggle-off', 'fa-toggle-on')
        document.querySelector(".wifi_button").style.color = 'teal';
    }


}