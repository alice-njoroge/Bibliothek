export function inputRender(label, input, elementName = 'input', elementType) {
    const divBlock = document.createElement('div')
    divBlock.classList.add('input-wrapper');

    const labelElement = document.createElement('label');
    labelElement.textContent = label + ": ";
    labelElement.htmlFor = label;
    labelElement.classList.add('label-wrapper')

    const inputElement = document.createElement(elementName);
    if (elementName === 'input') {
        inputElement.type = elementType
    }
    inputElement.value = input;
    inputElement.id = label //maybe in future you can kebab-case the ids with space separation


    divBlock.append(labelElement, inputElement);
    return {divBlock, inputElement};
}

//helper.js base.js