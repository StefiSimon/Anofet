const getForms = () => {
    return fetch(`http://demo2993257.mockable.io/app/forms`)
        .then((response) => response.json())
}

export default getForms;