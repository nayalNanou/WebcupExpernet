import Toolbox from './Toolbox.js';

class BlockAnimation {
    constructor(element, parentDiv) {
        this.toolbox = new Toolbox();
        this.element = element;
        this.parentDiv = parentDiv;
        this.minSpeed = 0.2;
        this.maxSpeed = 1.5;
        this.minOpacity = 0.1;
        this.maxOpacity = 1;
        this.minSize = 10;
        this.maxSize = 100;

        this.speed = this.toolbox.rand(this.minSpeed, this.maxSpeed);
        this.elementSize = this.toolbox.rand(this.minSize, this.maxSize, true);
        this.positionLeft = this.toolbox.rand(0, this.parentDiv.offsetWidth - this.elementSize);
        this.positionTop = this.toolbox.rand(0, this.parentDiv.offsetHeight - this.elementSize);

        this.element.style.width = this.elementSize + 'px';
        this.element.style.height = this.elementSize + 'px';

        this.element.style.top = this.positionTop + 'px';
        this.element.style.left = this.positionLeft + 'px';

        this.element.style.background = this.toolbox.randColorRgb();
        this.element.style.opacity = this.toolbox.rand(this.minOpacity, this.maxOpacity);

        this.element.style.position = "absolute";
    }

    anim() {
        if (this.positionLeft > (this.parentDiv.offsetWidth - this.elementSize)) {
            let elementOpacity = this.element.style.opacity;
            this.element.style.opacity = elementOpacity - 0.05;

            if (this.element.style.opacity > 0) {
                window.requestAnimationFrame(function() {
                    this.anim();
                }.bind(this));

                return;
            } else {
                this.element.style.opacity = 1;

                this.speed = this.toolbox.rand(this.minSpeed, this.maxSpeed);
                this.elementSize = this.toolbox.rand(this.minSize, this.maxSize, true);
                this.positionLeft = 0;
                this.positionTop = this.toolbox.rand(0, this.parentDiv.offsetHeight - this.elementSize);
                this.element.style.opacity = this.toolbox.rand(this.minOpacity, this.maxOpacity);

                this.element.style.left = this.positionLeft + 'px';
                this.element.style.top = this.positionTop + 'px';
            }
        }

        this.positionLeft += this.speed;
        this.element.style.left = this.positionLeft + 'px';

        window.requestAnimationFrame(function() {
            this.anim();
        }.bind(this));
    }
}

export default BlockAnimation;
