$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup").show();
    history.pushState(null,'form','./form');
    $("#name").val(localStorage.getItem('name'));
    $("#email").val(localStorage.getItem('email'));
    $("#message").val(localStorage.getItem('message'));

}
function PopUpHide(){
    $("#popup").hide();
    history.replaceState({id: null}, 'Default state', './');
}
window.addEventListener('popstate', function() {
	PopUpHide();
});
