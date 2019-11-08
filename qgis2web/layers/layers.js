var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HighlySuitableBadgerHabitat_1 = new ol.format.GeoJSON();
var features_HighlySuitableBadgerHabitat_1 = format_HighlySuitableBadgerHabitat_1.readFeatures(json_HighlySuitableBadgerHabitat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighlySuitableBadgerHabitat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighlySuitableBadgerHabitat_1.addFeatures(features_HighlySuitableBadgerHabitat_1);
var lyr_HighlySuitableBadgerHabitat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HighlySuitableBadgerHabitat_1, 
                style: style_HighlySuitableBadgerHabitat_1,
                interactive: true,
                title: '<img src="styles/legend/HighlySuitableBadgerHabitat_1.png" /> Highly Suitable Badger Habitat'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HighlySuitableBadgerHabitat_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HighlySuitableBadgerHabitat_1];
lyr_HighlySuitableBadgerHabitat_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Area_km_sq': 'Area_km_sq', });
lyr_HighlySuitableBadgerHabitat_1.set('fieldImages', {'Id': '', 'gridcode': '', 'Area_km_sq': '', });
lyr_HighlySuitableBadgerHabitat_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Area_km_sq': 'no label', });
lyr_HighlySuitableBadgerHabitat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});