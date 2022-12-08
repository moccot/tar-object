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
