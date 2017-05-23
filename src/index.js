import './styles/index.scss';
import populateDivs from './util';
import { setHandlers, getInput, getSelection } from './form';
import FormData from '../static/sections/form/formData';
import fetch from 'isomorphic-fetch';

const sections = {
    header: 'header',
    home: 'home',
};

let formData = new FormData();

const headerFunctionality = () => {

    fetch(`/static/sections/about/about.html`)
        .then(response => response.text())
        .then(response => {
            document.getElementById('content').innerHTML = response;
        });

    document.getElementById('home-button').onclick = () => {
        fetch(`/static/sections/about/about.html`)
            .then(response => response.text())
            .then(response => {
                document.getElementById('content').innerHTML = response;
            });
    }

    document.getElementById('form-button').onclick = () => {
        fetch(`/static/sections/form/form.html`)
            .then(response => response.text())
            .then(response => {
                document.getElementById('content').innerHTML = response;
                fetch(`/static/sections/form/step1.html`)
                    .then(response => response.text())
                    .then(response => {
                        document.getElementById('form-container').innerHTML = response;
                        formData.populateFields();
                        setHandlers(2);
                        getInput();
                        getSelection();
                    });

                });
    }


    document.getElementById('create-button').onclick = () => {
        fetch(`/static/sections/create/create.html`)
            .then(response => response.text())
            .then(response => {
                document.getElementById('content').innerHTML = response;
                document.getElementById('create-field-button').onclick = () => {
                    fetch(`/static/sections/form-field/form-field.html`)
                        .then(response => response.text())
                        .then(response => {
                            const child = document.createElement('div');
                            child.innerHTML = response;
                            document.getElementById('add-field').appendChild(child);
                        });
                }
                document.getElementById('remove-field-button').onclick = () => {
                    document.getElementById('add-field').innerHTML = 'You currently have no fields';
                }
            });
    }

    document.getElementById('stats-button').onclick = () => {
        fetch(`/static/sections/stats/stats.html`)
            .then(response => response.text())
            .then(response => {
                document.getElementById('content').innerHTML = response;
            });
    }
}

document.onLoad = populateDivs(sections, headerFunctionality);


