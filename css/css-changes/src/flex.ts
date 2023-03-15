import './flex.css';


const createDivElement = (classList: string[], text?: string) => {
    const divElement = document.createElement('div');
    classList.forEach(className =>  divElement.classList.add(className));
    if (text) divElement.innerHTML = text;
    return divElement;
}

export const createElementsAndAppendToBody = () => {
    const containerElement = createDivElement(['container']);
    for (let index = 1; index <= 4; index++) {
        containerElement.appendChild(createDivElement(['item', `item${index}`], `item ${index}`));
    }
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(containerElement);
}