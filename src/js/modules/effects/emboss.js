import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';
import Base_layers_class from './../../core/base-layers.js';
import ImageFilters from './../../libs/imagefilters.js';
import alertify from './../../../../node_modules/alertifyjs/build/alertify.min.js';

class Effects_emboss_class {

    constructor() {
        this.POP = new Dialog_class();
        this.Base_layers = new Base_layers_class();
    }

    emboss() {
        var _this = this;

        if (config.layer.type != 'image') {
            alertify.error('图层必须是图像，将其转换为栅格来应用此工具。');
            return;
        }

        var settings = {
            title: 'Emboss',
            preview: true,
            effects: true,
            params: [],
            on_change: function(params, canvas_preview, w, h) {
                var img = canvas_preview.getImageData(0, 0, w, h);
                var data = _this.change(img, params);
                canvas_preview.putImageData(data, 0, 0);
            },
            on_finish: function(params) {
                window.State.save();
                _this.save(params);
            },
        };
        this.POP.show(settings);
    }

    save(params) {
        //get canvas from layer
        var canvas = this.Base_layers.convert_layer_to_canvas(null, true);
        var ctx = canvas.getContext("2d");

        //change data
        var img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = this.change(img, params);
        ctx.putImageData(data, 0, 0);

        //save
        this.Base_layers.update_layer_image(canvas);
    }

    change(data, params) {
        var filtered = ImageFilters.Emboss(data);

        return filtered;
    }

}

export default Effects_emboss_class;