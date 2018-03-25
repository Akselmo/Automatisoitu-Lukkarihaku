// ==UserScript==
// @name         Hae lukkari automaattisesti
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automaattisesti lisää ryhmätunnuksen lukkarisivun ryhmäkenttään.
// @author       Akseli
// @match        https://lukkarit.oamk.fi/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

//laita ryhmätunnuksesi lainausmerkkien sisään
var ryhmatunnus = "RYHMÄTUNNUS TÄHÄN";

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer)
{
    if(document.querySelector('#sgrp'))
    {
        observer.disconnect();
        var lukkarifield = document.getElementById ("sgrp");
        if (lukkarifield)
        {
            lukkarifield.value  = ryhmatunnus;
            console.log("Onnistui!");
            doGroupSearch();
        }
        else
        {
            console.log("Lukkarifield ei ole olemassa!");
        }
    }
}






