// @flow

const StyleLayer = require('../style_layer');
const properties = require('./hillshade_style_layer_properties');

const {
    Transitionable,
    Transitioning,
    PossiblyEvaluated
} = require('../properties');

import type {PaintProps} from './hillshade_style_layer_properties';

class HillshadeStyleLayer extends StyleLayer {
    _transitionablePaint: Transitionable<PaintProps>;
    _transitioningPaint: Transitioning<PaintProps>;
    paint: PossiblyEvaluated<PaintProps>;

    constructor(layer: LayerSpecification) {
        super(layer, properties);
        this.hasPass = {
            offscreen: true,
            translucent: true
        };
    }
}

module.exports = HillshadeStyleLayer;