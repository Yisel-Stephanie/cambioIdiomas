let checkIndex = document.querySelector('.checkIndex');
let checkAgencia = document.querySelector('.checkAgencia');
let checkServicios = document.querySelector('.checkServicios');
let checkClientes = document.querySelector('.checkClientes');
let checkBlog = document.querySelector('.checkBlog');
let checkContacto = document.querySelector('.checkContacto');



const index = () => checkIndex.checked ? location.href = "../ingles/home.html" : location.href = "../index.html";
const agencia = () => checkAgencia.checked ? location.href = "../ingles/agency.html" : location.href = "../agencia.html";
const servicios = () => checkServicios.checked ? location.href = "../ingles/services.html" : location.href = "../servicios.html";
const clientes = () => checkClientes.checked ? location.href = "../ingles/customers.html" : location.href = "../clientes.html";
const blog = () => checkBlog.checked ? location.href = "../ingles/blog.html" : location.href = "../blog.html";
const contacto = () => checkContacto.checked ? location.href = "../ingles/contact.html" : location.href = "../contacto.html";


addEventListener('click', function () { index() }, checkIndex)
addEventListener('click', function () { agencia() }, checkAgencia)
addEventListener('click', function () { servicios() }, checkServicios)
addEventListener('click', function () { clientes() }, checkClientes)
addEventListener('click', function () { blog() }, checkBlog)
addEventListener('click', function () { contacto() }, checkContacto)




