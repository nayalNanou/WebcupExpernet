
class Animation
{
    displayTextGradually(element, text, millisecond = 100, textLen = null, textToDisplay = null, i = 0) {
        if (!textLen) {
            textLen = text.length;
        }

        if (!textToDisplay) {
            textToDisplay = "";
        }

        if (textLen > 0) {
            textToDisplay += text[i];

            element.innerHTML = textToDisplay;

            i++;
        }

        console.log(i);

        if (i < textLen) {
            setTimeout(function() {
                this.displayTextGradually(element, text, millisecond, textLen, textToDisplay, i);
            }.bind(this), millisecond);
        }
    }
}

export default Animation;
