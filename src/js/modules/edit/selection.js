import config from './../../config.js';
import Base_layers_class from './../../core/base-layers.js';
import Selection_class from './../../tools/selection.js';
import alertify from './../../../../node_modules/alertifyjs/build/alertify.min.js';

class Edit_selection_class {

    constructor() {
        this.Base_layers = new Base_layers_class();
        this.Selection = new Selection_class(this.Base_layers.ctx);
    }

    select_all() {
        if (config.layer.type != 'image') {
            alertify.error('图层必须是图像，将其转换为栅格来应用此工具。');
            return;
        }

        this.Selection.select_all();
    }

    delete() {
        window.State.save();
        this.Selection.delete_selection();
    }
}

export default Edit_selection_class;