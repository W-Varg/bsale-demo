// token for get requests of api
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
// base link api
const baseUrl = window.location.href + 'api/'

// generic funcion for get data
async function get_data(data, formData = null) {
     let url = `${baseUrl}${data}`;
     url = formData ? `${url}?${new URLSearchParams(formData)}` : url;
     // console.log('url', url);
     try {
          let response = await fetch(url, { method: 'GET', headers: { 'X-CSRFToken': csrftoken } });
          return await response.json();
     } catch (error) { console.log(error); }
}
// generic funcion for get data
async function get_data_for_post(data, formData = null) {
     let url = `${baseUrl}${data}`;
     let options = { method: 'GET', headers: { 'X-CSRFToken': csrftoken } };
     url = formData ? `${url}?${new URLSearchParams(formData)}` : url;
     // let options = formData ? { method: 'GET', headers: { 'X-CSRFToken': csrftoken } } : null;
     // { method: 'POST', body: formData, headers: { 'X-CSRFToken': csrftoken } } :
     console.log('url', url);
     try {
          let res = await fetch(url, options);
          return await res.json();
     } catch (error) { console.log(error); }
}


// render category data in a id select
async function render_categories() {
     let categories = await get_data('categories/');
     let html = '';
     categories.results.map(cat => {
          let htmlSegment = `<li><button class="dropdown-item" onclick="filter_for_category(${cat.id});">${cat.name}</button></li>`;
          html += htmlSegment;
     });

     let container = document.getElementById('category_list');
     container.innerHTML = html;
}
// render products
async function render_products(data = null) {
     let products = await get_data('products/', data);

     let html = '';
     products.results.map(product => {
          product.withDiscount = product.price - (product.price * (product.discount / 100));
          let htmlSegment = `
          <div class="col">
               <div class="card mb-4 rounded-3 shadow-sm border-orange">
                    <div class="card-header py-3 text-white bg-orange border-orange">
                         <h4 class="my-0 fw-normal">${product.name}</h4>
                    </div>
                    <img class="card-img-top" width="100%" height="225" src="${product.url_image}">
                    <div class="card-body">
                         <div class="d-flex justify-content-between align-items-center">
                              <h3 class="card-title pricing-card-title">$ ${product.withDiscount}</h3>
                              ${!!product.discount ? `<small class="text-muted fw-light">${product.price}</small>` : ``}
                         </div>
                         <button type="button" class="w-100 btn btn-lg btn-orange">Detalle</button>
                    </div>
               </div>
          </div>          
          `;
          html += htmlSegment;
     });
     let container = document.getElementById('products_list');
     container.innerHTML = html;
}
function filter_for_category(id = null) {
     if (id) {
          render_products({ category: id });
     }
}

function filter_products_for_name(name = null) {
     if (name) {
          let formData = new FormData();
          formData.append('name', name)
          render_products(formData);
     }
}

// functions and events using jquery
$("#search").keyup(function (e) {
     let value = $(this).val().trim();
     e.keyCode == 13 ? filter_products_for_name(value) :
          value.length >= 3 ? filter_products_for_name(value) : render_products();
});

$("#btnSubmit").click(function () {
     let value = $("#search").val().trim();
     filter_products_for_name(value);
});

render_products();
render_categories();