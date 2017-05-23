import Forms from '../../../src/store/forms';
import getForms from '../../../src/services/formService';


let instance = null;


class FormData {

   constructor(filter) {

       if(!instance){
           instance = this;
       }

       this.forms = [];

       if (filter === undefined) {
           getForms()
               .then((response) => {
                   response.forEach((element) => {
                       if (this.forms.indexOf(element) === -1) {
                           this.forms.push(new Forms(element.id, element.name, element.content, element.start_date, element.end_date));
                       }
                   });
               });
       } else {
           this.forms.splice(0,1);
           this.forms.push(new Forms(1,filter,'idk','idk','idk'));
           // get request for filtered items
       }

       return instance;

    }

    replaceContent(newArray) {
        this.forms.map((element, index) => {
            newArray[index] !== undefined ?
                document.getElementsByClassName('form-list-link')[index].innerHTML = newArray[index].name :
                document.getElementsByClassName('form-list-link')[index].innerHTML = null;
        });
        if (newArray.length < 9) {
            for (let i = newArray.length; i < 9; i++) {
                document.getElementsByClassName('form-list-link')[i].style.display = 'none';
            }
        }
    }

    getSelectedForm(form) {
       this.forms.map((element,index) => {
           if(element.name === form) {
               this.selectedForm = this.forms[index];
           }
       });
    }

    populateFields()  {
        this.forms.map((element, index) => {
            document.getElementsByClassName('form-list-link')[index].style.display = 'block';
            document.getElementsByClassName('form-list-link')[index].innerHTML = element.name;
        });
    }

    populateFormFields() {
       document.getElementById('form-title').innerHTML = this.selectedForm.name;
       this.selectedForm.content.map((element, index) => {
           document.getElementsByClassName('field-name')[index].style.display = 'block';
           document.getElementsByClassName('field-name')[index].innerHTML = element;
       });
       if (this.selectedForm.content.length < 6) {
           for (let i = this.selectedForm.content.length ; i < 6; i++) {
               document.getElementsByClassName('field')[i].style.display = 'none';
           }
       }

    }
}

export default FormData;