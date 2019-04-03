import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    let heading = document.createElement('h1');
    var btn = document.createElement('button');

    heading.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(heading);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
