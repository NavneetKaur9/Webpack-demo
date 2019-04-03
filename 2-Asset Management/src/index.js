import _ from 'lodash';
import './style.css';
import CupImage from './cup.png';
import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = CupImage;
    element.appendChild(myIcon);

    // This can be especially helpful when implementing some sort of data visualization using a
    // tool like d3. Instead of making an ajax request and parsing the data at runtime you can
    // load it into your module during the build process so that the parsed data is ready to go
    // as soon as the module hits the browser.
    console.log(Data);

    return element;
}

document.body.appendChild(component());
