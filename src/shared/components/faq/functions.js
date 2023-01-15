export function SetFaqSecId(){
  const faq_sec = document.querySelectorAll('.faq-sect-sm');
  let counter = 0;

  for (const iterator of faq_sec) {
    iterator.setAttribute('id', 'faq_sec_' + counter);
    ++counter;
  }
}


export function SetFaqOpitions(element){
    
    let id = element.getAttribute('id');

    if(!id.includes("active")){
        let needed_element = document.querySelector('#' + id);
        needed_element.setAttribute('style', 'background: #EBE5F7; box-shadow: 2px 2px 2px 1px #3800B0;' +
        'border: 2px solid #3800B0');
        const child1 = needed_element.children;
        const child11 = child1[0].children;
        const child12 = child11[0].children;
        const child13 = child11[1].children;
        child12[0].setAttribute('style', 'color: #3800B0');
        child13[0].setAttribute('style', 'color: #3800B0');
        needed_element.setAttribute('id', id + '_active');
        console.log(needed_element.getAttribute("id"));

    }else{
        let needed_element = document.querySelector('#' + id);
        needed_element.setAttribute('style', 'background: #FFFFF;');
        const child1 = needed_element.children;
        const child11 = child1[0].children;
        const child12 = child11[0].children;
        const child13 = child11[1].children;
        child12[0].setAttribute('style', 'color: #110035');
        child13[0].setAttribute('style', 'color: #110035');
        needed_element.setAttribute('id',  needed_element.id.replace("_active"));
        console.log(needed_element.getAttribute("id"));
    }
}