import FormData from '../static/sections/form/formData';
import Forms from './store/forms';

let formData = new FormData();

const setHandlers = (buttonNumber) => {
    switch(buttonNumber) {
        case 2:
            document.getElementById('step2').onclick = () => {
                document.getElementById('indicator2').classList.add('active');
                document.getElementById('indicator1').classList.remove('active');
                document.getElementById('indicator3').classList.remove('active');

                fetch(`/static/sections/form/step2.html`)
                    .then(response => response.text())
                    .then(response => {
                        document.getElementById('form-container').innerHTML = response;
                        setHandlers(1);
                        setHandlers(3);
                    });
            }
            break;
        case 3:
            document.getElementById('step3').onclick = () => {
                document.getElementById('indicator3').classList.add('active');
                document.getElementById('indicator2').classList.remove('active');

                fetch(`/static/sections/form/step3.html`)
                    .then(response => response.text())
                    .then(response => {
                        document.getElementById('form-container').innerHTML = response;
                        setHandlers(2);
                        formData.populateFormFields();
                    });
            }
            break;
        case 1:
            document.getElementById('step1').onclick = () => {
                document.getElementById('indicator1').classList.add('active');
                document.getElementById('indicator2').classList.remove('active');

                fetch(`/static/sections/form/step1.html`)
                    .then(response => response.text())
                    .then(response => {
                        document.getElementById('form-container').innerHTML = response;
                        setHandlers(2);
                        formData = new FormData();
                        formData.populateFields();
                        getInput();
                        getSelection();
                    });
            }
            break;
  };
}


const getInput = () => {
    const input = document.getElementById('form-search');
    input.onchange = () => {
        if(input.value) {
            let form = new Forms(1,'idk','idk','idk','idk');
            let array = [];
            array.push(form);
            formData.replaceContent(array);
        } else {
            formData.populateFields();
        }

    }
}

const getSelection = () => {
    const container = document.getElementById('form-list');
    container.onclick = (event) => {
        formData.getSelectedForm(event.target.innerHTML);
    }
}


export { setHandlers, getInput, getSelection };