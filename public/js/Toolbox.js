
class Toolbox {
    rand(min, max, integer) {
        if (!integer) {
            return Math.random() * (max - min) + min;
        } else {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }

    randColorRgb(min = 0, max = 255) {
        const red = this.rand(min, max, true);
        const green = this.rand(min, max, true);
        const blue = this.rand(min, max, true);

        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }
}

export default Toolbox;
