!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l);var n=l("eaxEB"),o=document.querySelector(".feedback-form"),i="feedback-form-state",u=o.elements,f=u.email,d=u.message;!function(){if(null===localStorage.getItem(i))return;var e=JSON.parse(window.localStorage.getItem(i));f.value=e.email,d.value=e.message}(),o.addEventListener("input",e(n)((function(e){e.preventDefault();var t={email:f.value,message:d.value};window.localStorage.setItem(i,JSON.stringify(t))}),500)),o.addEventListener("submit",(function(e){if(e.preventDefault(),""===f.value||""===d.value)return alert("Please complete all fields!");var t=JSON.parse(window.localStorage.getItem(i));console.log(t),e.currentTarget.reset(),localStorage.removeItem(i)}))}();
//# sourceMappingURL=03-feedback.d68610b5.js.map
