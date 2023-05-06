import Toolbox from './Toolbox.js';

class BlockAnimation {
    constructor(element, parentDiv) {
        this.toolbox = new Toolbox();
        this.element = element;
        this.parentDiv = parentDiv;
        this.speed = this.toolbox.rand(0.2, 1.5);
        this.positionLeft = this.toolbox.rand(0, parentDiv.offsetWidth);
        this.positionTop = this.toolbox.rand(0, parentDiv.offsetHeight);
        this.elementWidth = this.toolbox.rand(20, 100, true);
        this.elementHeight = this.toolbox.rand(20, 100, true);

        this.element.style.width = this.elementWidth + 'px';
        this.element.style.height = this.elementHeight + 'px';
        this.element.style.top = this.positionTop + 'px';
        this.element.style.background = this.toolbox.randColorRgb();
        this.parentDiv.style.background = this.toolbox.randColorRgb(170, 255);

        this.element.style.position = "absolute";
    }

    anim() {
        const maxHeight = this.parentDiv.offsetHeight;
        const maxWidth = this.parentDiv.offsetWidth;

        if (this.positionLeft >= maxWidth) {
            this.positionLeft = 0;
            this.positionTop = this.toolbox.rand(0, maxHeight);
            this.element.style.top = this.positionTop + 'px';
            this.element.style.background = this.toolbox.randColorRgb();

            this.speed = this.toolbox.rand(0.2, 1.5);
            this.parentDiv.style.background = this.toolbox.randColorRgb(170, 255);
        }

        this.positionLeft += this.speed;

        this.element.style.left = this.positionLeft + 'px';

        window.requestAnimationFrame(function() {
            this.anim();
        }.bind(this));
    }
}

export default BlockAnimation;
