import {getApi, searchMovies, searchByWord} from './api.js';
import * as hampozoo from './inputValidation.js'




hampozoo.nameInput.addEventListener("blur", function(){hampozoo.inputsValidation( /^[A-Za-z]{3,8}([\s-]?[A-Za-z]{3,8})?$/, hampozoo.nameInput, hampozoo.nameInput.getAttribute("id"));});
hampozoo.emailInput.addEventListener("blur", function(){hampozoo.inputsValidation( /@[a-z]{5,10}(\.com)$/, hampozoo.emailInput, hampozoo.emailInput.getAttribute("id"));});
hampozoo.phoneInput.addEventListener("blur", function(){hampozoo.inputsValidation( /^(\+?002)?(\+?2)?01[01235][0-9]{8}$/, hampozoo.phoneInput, hampozoo.phoneInput.getAttribute("id"));});
hampozoo.passInput.addEventListener("blur", function(){hampozoo.inputsValidation( /^.{5,15}$/, hampozoo.passInput, hampozoo.passInput.getAttribute("id"));});
hampozoo.repassInput.addEventListener("blur", hampozoo.repassValidation);

let darkSidebarW = $(".dark-sidebar").innerWidth();
$(".sidebar").css("left", `-${darkSidebarW}px`);

$("#menuIcon").click(function(){

    $(".sidebar").animate({left:"0"}, 500);
    $("#menuIcon").addClass("d-none").removeClass("d-block");
    $("#closeIcon").addClass("d-block").removeClass("d-none");
    $("#ulLinks").children().css("transform", "translateY(0%)")
})
$("#closeIcon").click(function(){

    $(".sidebar").animate({left:`-${darkSidebarW}px`}, 500);
    $("#menuIcon").addClass("d-block").removeClass("d-none");
    $("#closeIcon").addClass("d-none").removeClass("d-block");
    $("#ulLinks").children().css("transform", "translateY(1000%)");
})

let clickedTerm = "now_playing";
$("a[href^='#']").click(function(){
    let clickedTerm = $(this).attr("class");
    getApi(clickedTerm);
})
getApi(clickedTerm);


let searchMoviesInput = document.getElementById("searchMoviesInput");
let searchByWrodInput = document.getElementById("searchByWrod");
searchMoviesInput.addEventListener("keyup", function()
{
    // searchMovies($("#searchByWrod").next().value);

    searchMovies(searchMoviesInput.value);
})
searchByWrodInput.addEventListener("keyup", function()
{
    // searchByWord($("#searchByWrod").value);
    searchByWord( searchByWrodInput.value);
})