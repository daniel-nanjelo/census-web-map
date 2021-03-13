var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_2009KenyaPopulationCensus_0 = new ol.format.GeoJSON();
var features_2009KenyaPopulationCensus_0 = format_2009KenyaPopulationCensus_0.readFeatures(json_2009KenyaPopulationCensus_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2009KenyaPopulationCensus_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2009KenyaPopulationCensus_0.addFeatures(features_2009KenyaPopulationCensus_0);var lyr_2009KenyaPopulationCensus_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2009KenyaPopulationCensus_0, 
                style: style_2009KenyaPopulationCensus_0,
    title: '2009 Kenya Population Census<br />\
    <img src="styles/legend/2009KenyaPopulationCensus_0_0.png" />  101539 - 708905 <br />\
    <img src="styles/legend/2009KenyaPopulationCensus_0_1.png" />  708905 - 1316271<br />\
    <img src="styles/legend/2009KenyaPopulationCensus_0_2.png" />  1316271 - 1923637 <br />\
    <img src="styles/legend/2009KenyaPopulationCensus_0_3.png" />  1923637 - 2531003<br />\
    <img src="styles/legend/2009KenyaPopulationCensus_0_4.png" />  2531003 - 3138369 <br />'
        });var format_Majorroads_1 = new ol.format.GeoJSON();
var features_Majorroads_1 = format_Majorroads_1.readFeatures(json_Majorroads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorroads_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Majorroads_1.addFeatures(features_Majorroads_1);var lyr_Majorroads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Majorroads_1, 
                style: style_Majorroads_1,
                title: '<img src="styles/legend/Majorroads_1.png" /> Major roads'
            });

lyr_2009KenyaPopulationCensus_0.setVisible(true);lyr_Majorroads_1.setVisible(true);
var layersList = [baseLayer,lyr_2009KenyaPopulationCensus_0,lyr_Majorroads_1];
lyr_2009KenyaPopulationCensus_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_1': 'County', 'Male': 'Male', 'Female': 'Female', 'Total': 'Total', 'no_hh': 'no_hh', 'Density': 'Density', '2009': '2009 Population', '2019': '2019', });
lyr_Majorroads_1.set('fieldAliases', {'KENROAD_ID': 'KENROAD_ID', });
lyr_2009KenyaPopulationCensus_0.set('fieldImages', {'GID_0': 'Hidden', 'NAME_1': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Total': 'Hidden', 'no_hh': 'TextEdit', 'Density': 'Hidden', '2009': 'TextEdit', '2019': 'Hidden', });
lyr_Majorroads_1.set('fieldImages', {'KENROAD_ID': 'TextEdit', });
lyr_2009KenyaPopulationCensus_0.set('fieldLabels', {'NAME_1': 'inline label', 'Male': 'inline label', 'Female': 'inline label', 'no_hh': 'inline label', '2009': 'inline label', });
lyr_Majorroads_1.set('fieldLabels', {'KENROAD_ID': 'no label', });
lyr_Majorroads_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});