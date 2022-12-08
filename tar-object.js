/*
    Copyright 2022 Tarcísio J. S. Rodrigues <justother94@gmail.com>

    This file is part of tar-object, and it is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International License.
    To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/4.0/ or send a letter
    to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
*/

const TObject = {};

TObject.alignElements = (jqueryCollection, options) => {
    const { startTop, startLeft, orientation } = options;
    let lastElementRight = 0;
    let lastElementBottom = 0;

    jqueryCollection.each((index, element) => {
        const elementJqueryObject = $(element);
        const elementWidth = parseFloat(elementJqueryObject.css('width'));
        const elementHeight = parseFloat(elementJqueryObject.css('height'));


        elementJqueryObject.css({
            'top': startTop + 'px',
            'left': startLeft + 'px'
        });

        if (index === 0) {
            lastElementRight = startLeft;
            lastElementBottom = startTop;
        }

        if (orientation === 'horizontal') {
            elementJqueryObject.css('left', lastElementRight + 'px');

            lastElementRight += elementWidth;
        }

        else if (orientation === 'vertical') {
            elementJqueryObject.css('top', lastElementBottom + 'px');

            lastElementBottom += elementHeight;
        }
    });
};
